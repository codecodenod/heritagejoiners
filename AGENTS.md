# Heritage Joiners — build conventions

Astro static site, deployed via GitHub → Cloudflare Pages. No React, no client frameworks — plain Astro components and small inline scripts only. The owner (Rob) commits and pushes himself.

**Golden rule: never invent a new visual pattern. Every new page is built by copying the exemplar file for its type (listed below) and swapping the content.**

## Hard rules

- **Git:** never run git commands (no add/commit/push/status). When asked for a commit message, output message text only.
- **Email:** the business email must never appear in plaintext anywhere (HTML, JS, schema, config). It lives base64-encoded in `src/components/ui/EmailLink.astro` only. Never add `email` back to `siteConfig`.
- **Contact details:** always read from `src/config/site.ts` (phone, address, WhatsApp, socials). Never hardcode.
- **robots/noindex:** the site is fully indexable. `noindex` exists only on the 404 page (via the `noindex` prop). Never add site-wide noindex or edit `public/robots.txt` without being asked.
- **PRIVATE/ folder:** gitignored, owner's private notes. Never copy anything from it into `src/` or `public/`, never reference it in site code.
- **Fonts:** self-hosted via @fontsource (Fraunces, Source Serif 4, Inter, Libre Baskerville). Never add Google Fonts CDN links or any third-party CDN.
- **No new JS libraries.** The site ships zero JS bundles apart from small inline scripts.

## Content guardrails (non-negotiable)

- Never write the word **"pine"** — say "original timber", "original exterior frame", "original Victorian door".
- Award wording, exactly: **"Heritage Award at Pontefract Civic Society's 2025 Design Awards"** — never "restoration award". The **project** won the award, not Rob — never "award-winning joiner".
- **No testimonials, reviews, star ratings or review schema** until real ones exist and are approved. Never invent quotes, prices, or claims.
- Never name competitors.
- Voice: plain, proud, traditional Yorkshire trade voice. Concrete and physical (timber, oak, setting out, fitting). No marketing hype, no "best in", no "master craftsman".

## Design system

- **Backgrounds:** sections alternate `bg-paper` / `bg-bone` / `bg-white`. Dark CTA bands use `bg-ink text-bone`.
- **Text:** body `text-ink/70`; headings `text-ink`; accent links `text-oak`.
- **Headings:** one `<h1>` per page, `font-display text-4xl lg:text-5xl`. Section `<h2>`: `font-display text-2xl lg:text-3xl text-ink mb-4`. CTA heading: `text-3xl`. Don't invent new sizes.
- **Section rhythm:** `py-16` (hero section `py-16 lg:py-24`), container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (narrow text pages use `max-w-3xl`/`max-w-5xl`).
- **CTA block** (ends nearly every page):
  ```astro
  <div class="flex flex-wrap justify-center gap-4">
    <WhatsAppCTA />
    <PhoneLink phone={phone.tel} display={phone.display} variant="secondary" />
  </div>
  ```
- **Scroll-reveal** is automatic site-wide via BaseLayout (first section of each page is skipped). Never add animation libraries or extra reveal code.

## Images — mandatory pipeline

1. Source images live outside the repo; converted copies go in `public/images/<area>/` (`homepage/`, `about/`, `gallery/`, `case-studies/<case-study-name>/`).
2. Filename: kebab-case, descriptive, SEO-bearing (e.g. `the-counting-house-oak-staircase.webp`). Respect content guardrails in filenames too.
3. Convert with ImageMagick — strip metadata, resize to display size, target ≤ ~120 KB:
   `convert in.jpg -auto-orient -strip -resize "1100x1100>" -quality 80 out.webp`
   (heroes ~1500px wide; portraits cap `800x1000>`; tiles ~800px)
4. Every `<img>` gets meaningful `alt`. Below-the-fold images get `loading="lazy"`; a page's hero image gets `fetchpriority="high"` and explicit `width`/`height`.
5. Pass a real photo as `ogImage` on the layout when the page has one; otherwise the default social card is used automatically.

## Page types — exemplar files (copy these, swap content)

### Blog post — exemplar: `src/content/blog/what-is-second-fix-carpentry.md`
Markdown file in `src/content/blog/`. Frontmatter: `title`, `description` (130–165 chars), `pubDate: YYYY-MM-DD`, `draft: false`. Everything else is automatic (page, BlogPosting schema, sitemap, blog index, /sitemap page). No registration needed.

### Case study — exemplars: parent `src/pages/case-studies/counting-house/index.astro`, sub-page `src/pages/case-studies/counting-house/beam-repair-and-restoration.astro`
Pattern: `CaseStudyLayout` + hero (big landscape image below the title, OR text-left/portrait-image-right grid) + **features array** rendered as alternating text/image rows (single image = `aspect-[4/5]` feature; multiple = `aspect-square` 2-col tile grid) + related-links row + CTA section.
Register: add a card to `src/pages/case-studies/index.astro`, and images in `public/images/case-studies/<name>/`.

### Service page — exemplar: `src/pages/services/staircases.astro`
Pattern: `ServiceLayout` (auto-provides breadcrumbs, Service schema, AreaLinks band) + `FAQPageSchema slot="schema"` + intro section + 2–3 content sections whose H2s carry secondary keywords + FAQ section + coverage + CTA.
Title/H1 lead with the page's primary keyword: `"<Primary Keyword> in Pontefract, Wakefield & West Yorkshire | Heritage Joiners"` (keyword data lives in the owner's local `PRIVATE/SEO/keyword-strategy.md` — ask Rob for targets if unavailable).
Register: add entries to `src/pages/services/index.astro` and the footer `serviceLinks` in `src/components/layout/Footer.astro`.

### Area page — exemplar: `src/pages/areas/pontefract.astro`
Pattern: `BaseLayout`, H1 `"Carpenter & Joiner in <Town>"`, local intro, links to all service pages, CTA.
Register: add to `src/pages/areas/index.astro`, footer `areaLinks`, and (if a main coverage town) `siteConfig.serviceArea` + the LocalBusiness `areaServed` follows from it.

### Gallery entry — file: `src/pages/gallery.astro`
Append to the `galleryItems` array: `{ title, category, image: '/images/gallery/<seo-name>.webp', alt }`. Convert the image per the pipeline. Nothing else to register.

### One-off pages
Use `BaseLayout` with the standard hero section pattern. Check `/sitemap` page picks it up automatically (it does, from the pages folder).

## SEO conventions

- Unique `title` ≤ ~60 chars, primary keyword first, suffix `| Heritage Joiners` (layouts append it — check the exemplar).
- Unique meta `description` 130–165 chars.
- One H1 matching the title's keyword. H2s carry secondary keywords naturally — written like a joiner talks, not keyword strings.
- Internal links: every new page links to related service pages; case studies link back to their parent.

## Verify before finishing (all must pass)

```bash
npm run build                        # must complete with no errors
grep -ri "pine" dist/<new-page>.html # 0 matches
# every image path referenced by the new page resolves in dist/
```
Also confirm: no plaintext `rob@` email anywhere, exactly one `<h1>`, heading classes match the scale above.
