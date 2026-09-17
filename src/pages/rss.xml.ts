/**
 * RSS 2.0 feed for the blog.
 *
 * Hand-rolled rather than using @astrojs/rss — it is ~30 lines and avoids adding
 * a dependency to a site that deliberately ships none. Build-time only; no client JS.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

const { url } = siteConfig;

/** Escape the five XML entities. Feed readers are unforgiving about raw & and <. */
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const items = posts
    .map((post) => {
      const link = `${url}/blog/${post.id}`;
      return `    <item>
      <title>${esc(post.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(post.data.description)}</description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Heritage Joiners — Carpentry &amp; Joinery Advice</title>
    <link>${url}/blog</link>
    <description>Real joinery and carpentry jobs from Pontefract and across West Yorkshire, written up by Rob — what the problem was, how it was put right, and why.</description>
    <language>en-gb</language>
    <atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
