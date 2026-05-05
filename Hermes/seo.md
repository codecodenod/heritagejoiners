Heritage Joiners — Full SEO Audit
🔴 Critical bugs (fix first — these are killing rankings)
1. Canonical URL bug — every non-homepage canonicalises to homepage
src/layouts/BaseLayout.astro:34: const fullCanonical = canonical || url; — falls back to the homepage URL when no canonical is passed.

Only src/pages/repair-or-replace.astro passes a canonical. Every other page (32 URLs in your sitemap) tells Google their canonical is https://heritagejoiners.co.uk — Google will ignore them as duplicates of the homepage. This alone explains poor visibility for anything except the homepage.

Fix: ServiceLayout/CaseStudyLayout must build a canonical from the URL prop and pass it through; standalone pages (about, contact, areas/*, etc.) must pass canonical={${url}/about} etc.

2. robots.txt points to wrong domain
public/robots.txt:5 — Sitemap: https://heritagejoiners.com/sitemap-index.xml. Domain is .co.uk. Crawlers can't discover the sitemap.

3. Brand-name suffix duplicated in titles
BaseLayout appends  | Heritage Joiners (src/layouts/BaseLayout.astro:32). But many page titles already contain | Heritage Joiners, producing titles like:

Heritage Timber Repair Services Across Yorkshire | Heritage Joiners | Heritage Joiners
About Heritage Joiners | Time-Served Bench Hand Joiner & Site Carpenter, Pontefract | Heritage Joiners
Counting House Sash Window Restoration | Heritage Joiners | Heritage Joiners
Heritage Timber Repair in Leeds | Heritage Joiners | Heritage Joiners
Timber Repair in Knottingley (WF11) | Heritage Joiners | Heritage Joiners
Timber Repair in Normanton (WF6) | Heritage Joiners | Heritage Joiners
Areas We Cover | Heritage Joiners Pontefract | Heritage Joiners
When Timber Should Be Replaced, Not Repaired | Heritage Joiners | Heritage Joiners
All three Counting House sub-pages
Fix: strip  | Heritage Joiners from page-level titles — let BaseLayout add it.

4. WhatsApp links are double-prefixed (broken)
src/components/ui/WhatsAppCTA.tsx:15 — builds https://wa.me/${whatsapp.link} but whatsapp.link is already https://wa.me/447561196977 (src/config/site.ts:19). Result: https://wa.me/https://wa.me/447561196977?text=… — broken link on every page. Hurts conversion (the main signal Google cares about for local intent).

5. Pontefract breadcrumb self-references
src/pages/areas/pontefract.astro:11 — "Areas" item points to /areas/pontefract instead of /areas. Confuses BreadcrumbList schema.

🟡 Title & description issues (page-by-page)
Page	Issue
/ (index)	Title only "Home" — wastes the most valuable title slot. Should target "Listed & Period Timber Repair, Pontefract & Yorkshire"
/about	90+ chars before suffix — will truncate. Strip "About Heritage Joiners |" prefix; "Pontefract" already implied
/contact	Title just "Contact Us" — should include "Heritage Joiners, Pontefract" or service area
/services	Doubled brand. Drop | Heritage Joiners
/services/listed-and-period-property-repairs	Title 58 chars + suffix = 78. Tighten.
/services/timber-colour-matching-and-finishing	"Timber Colour Matching, Distressing & Heritage Finishing in Yorkshire" + suffix = 87 chars
/services/structural-timber-repair	75 chars + suffix = 95 chars. Trim
/services/when-repair-is-not-viable	Uses BaseLayout, missing BreadcrumbSchema and ServiceSchema. Inconsistent with siblings
/areas/yorkshire	Doubled brand suffix
/areas/leeds	Doubled brand suffix
/areas/knottingley	Doubled brand suffix
/areas/normanton	Doubled brand suffix
/areas/index	Title "Areas We Cover | Heritage Joiners Pontefract" + suffix
/case-studies (and 4 sub-pages)	All have doubled brand suffix
Description lengths look mostly fine (140–180 chars). Couple are 200+ — Google truncates ~155–160.

🟡 Schema / structured data gaps (huge for "near me")
Your LocalBusiness schema in src/components/schema/LocalBusiness.astro is missing the signals Google uses to triangulate "near me" results:

No geo (latitude/longitude) — single biggest near-me signal after Google Business Profile.
address.postcode is empty (src/config/site.ts:27) — postcode is the strongest geographic anchor for UK local search.
addressRegion: 'England' — should be 'West Yorkshire'.
address.streetAddress: 'Ackworth' — Ackworth is a town/locality, not a street. Either get a real street address or move Ackworth to addressLocality and treat Pontefract as the postal town.
areaServed: ['Yorkshire'] — too narrow. Should be an array of {@type: 'City', name: 'Pontefract'}, etc., for Pontefract, Wakefield, Castleford, Featherstone, Knottingley, Normanton, Leeds, Yorkshire.
No aggregateRating / reviews — even one or two Google reviews mirrored as Review schema lift CTR significantly.
No @graph linking — Organization, LocalBusiness, WebSite, WebPage should be linked via @id references. Right now Service schema's provider is a fresh Organization, not the LocalBusiness on the page.
Service schema areaServed (src/components/schema/Service.astro:37) — pulled from siteConfig.serviceArea = ['Yorkshire']. Service-level area should match the area page.
No Service.serviceType / category — useful for service-vertical SERPs.
Organization schema is bare — no logo, sameAs (LinkedIn/Instagram are blank), no contactPoint.
No WebSite schema with SearchAction — minor, but helps brand SERP features.
LocalBusiness emitted on every page by default — fine, but you should reference it by @id from area pages instead of re-emitting (avoids duplicate entity hints).
🟡 Sitemap weaknesses
All URLs have only <loc> — no <lastmod>, no <priority>. Configure @astrojs/sitemap with a serialize function or lastmod flag so freshness is signalled.
/case-studies/counting-house/sash-windows, /timber-doors, /timber-matching are top-level case study children — fine, but they should also appear linked from the parent case study page (worth verifying).
🟡 Open Graph / social
Missing og:site_name ("Heritage Joiners")
Missing og:image:width / og:image:height
Same hero image on every page — service pages should override with a service-specific image (you already have /images/homepage/service-windows.webp etc.)
🟡 Internal linking & local SEO content
For "near me" + "[town]" queries, Google rewards strong topical/geographic interlinking:

Area pages don't crosslink to neighbouring area pages. Add a "Nearby areas we cover" block on every /areas/* page.
Service pages don't link to area pages. Each service page (sash window repair, doors, etc.) should have a "Where we work" block linking to all /areas/* pages.
Pontefract page doesn't link to the Counting House case study by service — only the parent. Link sash-window-repair on the area page directly to the sash windows sub-case-study.
Add [Service] in [Town] H2/H3s on area pages to deepen local intent matches.
No NAP block in the footer — yours has business name but verify phone+address are present and match the schema exactly. Consistency is key for local SEO.
Postcode coverage in copy is good (WF7/WF8/WF9, WF10, WF11, WF6) — keep this. Add specific neighbourhoods (you already do for Pontefract — extend to other area pages).
🟡 Other findings
src/pages/services/when-repair-is-not-viable.astro uses BaseLayout while siblings use ServiceLayout — missing BreadcrumbSchema, ServiceSchema. Inconsistent and breaks topical clustering.
<html lang="en-GB"> ✓ good
No hreflang — fine since single-locale
No /sitemap.xml rewrite — sitemap is at /sitemap-index.xml. Add a redirect or a copy at /sitemap.xml for the small fraction of crawlers that look there
404 page: noindex ✓ good — but you should also make sure Cloudflare returns HTTP 404 for unknown paths (Astro static + Cloudflare Pages serves 404.html with HTTP 404 by default — verify after the current 500 is resolved)
No Google Search Console verification meta or DNS TXT (out of band — but get this set up)
siteConfig.plausible.domain is empty — analytics not running
Specifically for "[service] near me" rankings
Google's "near me" stack ranks on (roughly):

Google Business Profile (most important — set this up if not done; verify NAP matches the site exactly: Heritage Joiners / 07561 196977 / Ackworth, Pontefract / heritagejoiners.co.uk)
Geographic proximity to searcher → driven by GBP location + on-page postcodes + LocalBusiness geo coordinates
Reviews (count, recency, keyword content) → schema aggregateRating mirrors GBP reviews
On-page topical relevance — page must combine the service term with the locality term in title/H1/content (you have this on most area pages but service pages are Yorkshire-wide)
Site authority + citations (NAP consistency across the web — Yell, Checkatrade, Houzz, etc.)
Action priority for "near me":

Fix the canonical bug (item #1 above) — without this, none of the rest matters
Add geo lat/lng + real postcode to LocalBusiness schema
Set up / claim Google Business Profile, link from site
Add aggregateRating + a few Review snippets once you have Google reviews
Build "service × town" landing pages — e.g. /services/sash-window-repair/pontefract, /wakefield, etc. This is the biggest organic lever for "sash window repair near me" type queries because it lets one page directly match each (service, town) intent
Strengthen interlinking (services ↔ areas, areas ↔ areas)
Get listed in 5–10 high-authority UK trade directories with identical NAP
Suggested next steps
If you want me to fix the critical bugs in one pass, I can do:

Fix BaseLayout canonical default (require canonical or build from Astro.url)
Pass canonical through ServiceLayout + CaseStudyLayout
Add canonical to every page that uses BaseLayout directly
Fix robots.txt domain
Strip duplicate | Heritage Joiners from titles
Fix WhatsApp double-prefix bug
Fix Pontefract breadcrumb
Add postcode + geo + better areaServed to LocalBusiness schema (need actual postcode + lat/lng from you — I'll use placeholders you can fill in)
That'd take the site from "actively broken for SEO" to "competitive baseline". The "service × town" landing pages and GBP work are a separate, larger initiative — say the word and I'll scaffold those too.

Want me to proceed with the critical fixes?