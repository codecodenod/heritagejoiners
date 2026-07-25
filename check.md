# Site review — heritagejoiners.co.uk

Full review of build, HTML output, SEO, schema, accessibility, performance, security and Cloudflare config.
Date: 2026-07-24. No code changes were made.

---

## What's solid

Build clean (48 pages, 1.5s). **Zero** broken internal links, zero missing image files, zero `alt`-less images, all `<img>` have width/height. Every page has exactly one `<h1>`, unique title, unique description, correct canonical, no skipped heading levels. All 182 JSON-LD blocks parse; Service/Breadcrumb/FAQ/LocalBusiness are well-formed and correctly `@id`-linked. Guardrails all pass: no "pine", no plaintext email, no prices, award wording exact, `noindex` only on 404. Contact function is genuinely well built — server-side Turnstile verify, honeypot, length caps, secrets in env only. CSS is 8.8 KB gzipped, all images ≤ 144 KB, fonts self-hosted with `font-display: swap`.

---

## Findings, worst first

### 1. `_headers` is not valid Cloudflare syntax — all caching rules are dead

File: [public/_headers](public/_headers)

Every path line has a trailing colon (`/images/*:`). Cloudflare Pages treats an unindented line as the URL pattern, so the pattern is literally `/images/*:` and matches nothing. Your `immutable` caching on images, fonts and `_astro` is not being applied — repeat visitors re-validate every asset.

Two secondary bugs in the same file:

- `/fonts/*` matches nothing (fonts build into `/_astro/`).
- `/*.html` can't match anything either, since `format: 'file'` serves pages at `/about`, not `/about.html`.

Fix: drop the colons, and change the HTML rule to `/*`.

### 2. Layout shift from wrong declared image dimensions — 2 real cases

- [src/content/blog/can-timber-windows-be-repaired.md:68](src/content/blog/can-timber-windows-be-repaired.md#L68) declares `800x1422`; the file is `1080x1434`. With `h-auto` the browser reserves a box ~345 px taller than final at mobile width — a large CLS hit on that post.
- [src/pages/about.astro:68](src/pages/about.astro#L68) declares `1600x900`; file is `1315x681` (~46 px shift).

The 8 homepage service cards also mismatch but are harmless — `.service-card-image` pins `height: 12rem`, so CSS wins. They are still 800×600 files cropped to a 600×192 box, i.e. ~60% of the downloaded pixels are thrown away.

### 3. GA4 runs with no consent gate, and there's no privacy policy page

[src/layouts/BaseLayout.astro:63-70](src/layouts/BaseLayout.astro#L63-L70) fires `gtag` on load, setting cookies before any consent. No `privacy`, `cookies` or `terms` page exists. For a UK business this is a PECR / UK-GDPR exposure, not just a nicety.

Minimum viable fix: a privacy page plus GA4 Consent Mode v2 defaulting to `denied`.

### 4. No skip link

WCAG 2.4.1 (A). Sticky header + 8 nav items must be tabbed through on all 48 pages.

### 5. Mobile menu accessibility

File: [src/components/layout/Header.astro:41-60](src/components/layout/Header.astro#L41-L60)

- No `aria-expanded` / `aria-controls` on the toggle.
- No Escape-to-close.
- No focus move into the panel, no focus return on close.
- Real bug: `document.body.style.overflow = 'hidden'` is never cleared on resize. Open the menu on mobile, rotate to landscape/desktop, and `lg:hidden` hides the panel while the page stays scroll-locked.

### 6. Hero carousel: no keyboard pause

File: [src/pages/index.astro:150-266](src/pages/index.astro#L150-L266)

Auto-advances every 6s. It pauses on `mouseenter` and tab-hidden, and respects reduced motion — but keyboard-only users have no way to stop it. WCAG 2.2.2 (A). Add `focusin` / `focusout` handlers plus a visible pause control.

Separately, the dots use `role="tab"` inside `role="tablist"` ([src/pages/index.astro:140](src/pages/index.astro#L140)) with no `aria-controls`, no `role="tabpanel"` on the slides, and no arrow-key handling — screen readers announce a tab widget that doesn't behave like one. Plain buttons with `aria-pressed` would be more honest.

### 7. Form banners aren't announced

File: [src/pages/contact.astro:66-69](src/pages/contact.astro#L66-L69)

The success / error / Turnstile-hint elements toggle `hidden` with no `role="status"` or `role="alert"`, so screen reader users get no feedback after submitting.

Also, every input uses `focus:outline-none` with only a border-colour change as the focus indicator — weak against WCAG 2.4.11.

### 8. BreadcrumbList schema on 34 pages with no visible breadcrumbs anywhere

`CLAUDE.md` says ServiceLayout "auto-provides breadcrumbs" — it provides the *schema* only. Google's guidance is that structured data should reflect on-page content, and deep service / case-study pages lose the navigation affordance.

### 9. Dangling schema reference

LocalBusiness emits `parentOrganization: {"@id": ".../#organization"}` on all 48 pages, but `Organization` schema is never rendered on any page (BaseLayout only emits it when `schema="organization"`, which nothing passes). Harmless to crawlers, but it's a reference to nothing.

Also `logo` isn't a valid LocalBusiness property — `image` (already present) is the one Google uses.

### 10. Smaller items

- ~23 titles exceed 60 chars (worst: `skirting-architrave` at 74) — "| Heritage Joiners" gets truncated in SERPs.
- 3 descriptions slightly over 165 (`roofing-carpentry` 168, `contact` 167, `blog` 166).
- 404 page `<h1>` is literally "404" — should be descriptive.
- No `preconnect` to googletagmanager, and no preload for the Fraunces woff2 that renders every `<h1>`; GA4 sits above the stylesheet in `<head>`.
- Footer logo lacks `loading="lazy"` on all 48 pages.
- `siteConfig.plausible` is dead config — GA4 is hardcoded in the layout instead.
- Homepage canonical is `https://heritagejoiners.co.uk/` but the sitemap lists it without the trailing slash.

---

## Suggested order

Start with **1**, **2** and **5** — all quick, and **1** is a pure win with no visual risk.
