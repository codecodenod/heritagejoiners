/**
 * Contact form handler — Cloudflare Pages Function.
 *
 * Flow: POST from /contact → honeypot check → Turnstile verify (server-side)
 * → send email via Resend → redirect back with ?sent=1 / ?error=1.
 *
 * Required environment variables (set in Cloudflare Pages → Settings →
 * Environment variables, Production):
 *   TURNSTILE_SECRET_KEY  — from the Turnstile widget (secret key)
 *   RESEND_API_KEY        — from resend.com
 *   CONTACT_TO_EMAIL      — where enquiries are delivered
 *   CONTACT_FROM_EMAIL    — verified sender, e.g. website@heritagejoiners.co.uk
 *
 * The business email never appears in client-side code — it lives only in
 * the environment variables above.
 */

interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}

const back = (query: string) =>
  new Response(null, {
    status: 303,
    headers: { Location: `/contact${query}#contact-form` },
  });

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return back('?error=1');
  }

  const name = String(form.get('name') || '').trim().slice(0, 200);
  const email = String(form.get('email') || '').trim().slice(0, 200);
  const message = String(form.get('message') || '').trim().slice(0, 5000);
  const honeypot = String(form.get('company') || '');
  const token = String(form.get('cf-turnstile-response') || '');

  // Honeypot filled = bot. Pretend success so it learns nothing.
  if (honeypot) return back('?sent=1');

  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return back('?error=1');
  }

  // Verify Turnstile token with Cloudflare
  if (!token) return back('?error=1');
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get('CF-Connecting-IP') || undefined,
    }),
  });
  const outcome = (await verify.json()) as { success: boolean };
  if (!outcome.success) return back('?error=1');

  // Send the enquiry via Resend
  const send = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Heritage Joiners Website <${env.CONTACT_FROM_EMAIL}>`,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!send.ok) return back('?error=1');
  return back('?sent=1');
};
