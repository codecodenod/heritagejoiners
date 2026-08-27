# Heritage Joiners — build conventions

Astro static site, deployed via GitHub → Cloudflare Pages. No React, no client frameworks — plain Astro components and small inline scripts only. The owner (Rob) commits and pushes himself.

**Golden rule: never invent a new visual pattern. Every new page is built by copying the exemplar file for its type (listed below) and swapping the content.**

The whole site is one theme. Same layouts, same heading scale, same fonts, same section rhythm, same colour tokens — on every page, every time. If a change would make one page look different from the rest, stop and ask first.

**Never edit these:** `src/styles/tokens.css`, `src/styles/typography.css`, `src/styles/components.css`, or the structure of `src/layouts/BaseLayout.astro`. Never add a new colour, font, heading size or spacing value — use the tokens and the scale below. Full detail in `PRIVATE/implementation.md` §0 (some file references in it are out of date, but the rules stand).

## Hard rules

- **Git:** never run git commands (no add/commit/push/status). When asked for a commit message, output message text only.
- **Email:** the business email must never appear in plaintext anywhere (HTML, JS, schema, config). It lives base64-encoded in `src/components/ui/EmailLink.astro` only. Never add `email` back to `siteConfig`.
- **Contact details:** always read from `src/config/site.ts` (phone, address, WhatsApp, socials). Never hardcode.
- **robots/noindex:** the site is fully indexable. `noindex` exists only on the 404 page (via the `noindex` prop). Never add site-wide noindex or edit `public/robots.txt` without being asked.
- **PRIVATE/ folder:** gitignored, owner's private notes. Never copy anything from it into `src/` or `public/`, never reference it in site code.
- **Fonts:** self-hosted via @fontsource (Fraunces, Source Serif 4, Inter, Libre Baskerville). Never add Google Fonts CDN links or any third-party CDN.
- **No new JS libraries.** The site ships zero JS bundles apart from small inline scripts.

## Content guardrails (non-negotiable)

- **Before writing or editing ANY copy on the site, read `PRIVATE/content-guide.md` in full and follow it.** It is the voice guide — tone, canonical phrases to use, clichés to avoid, per-page notes. It beats `PRIVATE/about.md` where they disagree. This applies to every wording change, however small: page copy, headings, card descriptions, alt text, meta titles and descriptions. Read the file, don't work from memory of it.
- **"Pine" is a keyword-only word.** In ordinary prose never write it — say "original timber", "original exterior frame", "original Victorian door", "softwood" or "redwood". The single exception is where it is genuinely the search term people use for a product (e.g. "pine skirting" on the mouldings guide). Even then, use it sparingly and in a materials context, never as general description. If in doubt, write softwood.
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
3. **NEVER resize, convert or re-encode an image Rob gives you. Copy it across as-is and rename it.**
   Rob processes his own photos before handing them over — they arrive as `.webp` at roughly 100 KB,
   already sized. Re-encoding an already-compressed webp only throws away quality for nothing.
   `cp "$SRC/original.webp" "public/images/<area>/<seo-name>.webp"` — that is the whole job.
   - Check the file size. If it is around 100 KB, do nothing but rename it.
   - If it is **not** around 100 KB (e.g. a raw phone photo at 4032px / several MB), **stop and flag it
     to Rob**. Do not silently fix it. He will re-export it himself.
   - Read the real dimensions with `identify` and put those exact numbers in `width`/`height`.
   - Never run `convert ... -resize ...` on his images. Never lower `-quality` to hit a size target.
4. Every `<img>` gets meaningful `alt`. Below-the-fold images get `loading="lazy"`; a page's hero image gets `fetchpriority="high"` and explicit `width`/`height`.
5. Pass a real photo as `ogImage` on the layout when the page has one; otherwise the default social card is used automatically.

## Page types — exemplar files (copy these, swap content)

### Blog post — exemplar: `src/content/blog/flat-roof-repair-wakefield.md`
**Every blog post must match this structure exactly. Copy the exemplar and swap the content — never restyle a post, never add per-post CSS, never wrap a post in custom markup.** The layout, fonts, heading scale and prose styling all come from `src/pages/blog/[...slug].astro` and are the same for every post; nothing in a post's markdown may override them.

Markdown file in `src/content/blog/`. Frontmatter:
- `title`, `description` (130–165 chars), `pubDate: YYYY-MM-DD`, `draft: false` — all required
- `ogImage` — the post's best photo, required whenever the post has images
- `faqs` — optional `question`/`answer` pairs; adds FAQPage schema and a "Common questions" section automatically

Body rules:
- Headings in the body start at `##` (h2). The post title is the h1 and is rendered by the layout — never write an `#` h1 in the markdown.
- **Images always use `<figure>` with a `<figcaption>`**, never a bare `<img>`:
  ```html
  <figure>
    <img src="/images/blog/<topic>/<seo-name>.webp" alt="Meaningful description" width="1500" height="844" />
    <figcaption>Short plain caption.</figcaption>
  </figure>
  ```
  Always include `alt`, `width` and `height`. Images live in `public/images/blog/<topic>/` and follow the image pipeline above.
- Everything else is automatic (page, BlogPosting schema, sitemap, blog index, /sitemap page). No registration needed.

Note: `bespoke-ledged-and-braced-garden-gate.md` and `can-timber-windows-be-repaired.md` still use bare `<img>` from before this rule. Don't copy them — follow the exemplar.

### Case study — exemplars: parent `src/pages/case-studies/counting-house/index.astro`, sub-page `src/pages/case-studies/counting-house/beam-repair-and-restoration.astro`
Pattern: `CaseStudyLayout` + hero (big landscape image below the title, OR text-left/portrait-image-right grid) + **features array** rendered as alternating text/image rows (single image = `aspect-[4/5]` feature; multiple = `aspect-square` 2-col tile grid) + related-links row + CTA section.
Register: add a card to `src/pages/case-studies/index.astro`, and images in `public/images/case-studies/<name>/`.

### Service page — exemplar: `src/pages/services/doors.astro`
**Doors is the template for all 18 service pages. Copy its structure exactly and swap the content.** The other 17 are being brought up to it as photos become available — until then some are still text-only, so copy doors, not whichever page you happen to open.

Pattern: `ServiceLayout` (auto-provides breadcrumbs, Service schema, AreaLinks band) + `FAQPageSchema slot="schema"` + **hero section with a background image** + 2–3 content sections whose H2s carry secondary keywords + FAQ section + coverage + CTA.

**Hero** — identical to the contact and areas pages, no variation:
```astro
<section class="relative overflow-hidden bg-bone min-h-[380px] lg:min-h-[480px] flex items-center">
  <img src="/images/..." alt="..." width="1500" height="844" fetchpriority="high"
       class="absolute inset-0 w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-r from-bone/95 via-bone/75 to-transparent pointer-events-none"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
    <div class="max-w-2xl">
      <p class="text-oak uppercase tracking-wide mb-4">Eyebrow</p>
      <h1 class="font-display text-4xl lg:text-5xl text-ink mb-4">…</h1>
      <p class="text-lg text-ink/80 mb-8">…</p>
      <div class="flex flex-wrap gap-4"><WhatsAppCTA … /><PhoneLink … variant="secondary" /></div>
    </div>
  </div>
</section>
```
Hero image ~1500×850 landscape. `fetchpriority="high"`, never `loading="lazy"` — it is the LCP element. Intro text is `text-ink/80` (not `/70`) so it reads over the photo, and the text column is `max-w-2xl`. Set the page's `ogImage` to the same hero image.

**Body images** — one to five per page, placed beside the copy they illustrate, not dropped in at random. Put them in the right-hand column of an existing `lg:grid-cols-2` content section. Portrait images use the case-study container:
```astro
<div class="w-full aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
  <img src="…" alt="…" width="563" height="1000" loading="lazy" class="w-full h-full object-cover" />
</div>
```
Landscape body images use `class="w-full h-auto rounded-xl shadow-lg"` instead. All body images are `loading="lazy"` with explicit `width`/`height`.

Images live in `public/images/services/<service-slug>/`. Resize per the pipeline before use — portraits cap at `800x1000>`, heroes ~1500px wide. Never drop a raw phone photo (e.g. 2268×4032) straight in.
Title/H1 lead with the page's primary keyword: `"<Primary Keyword> in Pontefract, Wakefield & West Yorkshire | Heritage Joiners"` (keyword data lives in the owner's local `PRIVATE/SEO/keyword-strategy.md` — ask Rob for targets if unavailable).
Register: add entries to `src/pages/services/index.astro` and the footer `serviceLinks` in `src/components/layout/Footer.astro`.

### Guide page — exemplar: `src/pages/guides/standard-door-sizes.astro`
**Every guide follows this file exactly — same format, same style. Copy it and swap the content.** Guides are `.astro` pages, not Markdown. They are reference material (sizes, profiles, timber types, finishes, timber problems), and they are laid out like a service page, not like a blog post.

Pattern: `BaseLayout` + `ArticleSchema` + `BreadcrumbSchema` + `FAQPageSchema` + hero with background image + content sections in alternating `bg-bone` / `bg-white` / `bg-paper` bands, each with a real `<h2>` + FAQ section + CTA section.

**Do not use `ServiceLayout`** — it injects Service schema and the AreaLinks band, neither of which belongs on a guide. Build the breadcrumbs yourself: Home → Guides → guide title.

Frontmatter-equivalent consts at the top of the file: `title`, `description` (130–165 chars), `canonicalUrl`, `heroImage`, `breadcrumbs`, `faqItems`.

**Hero** — identical to the doors page, no variation. `min-h-[380px] lg:min-h-[480px]`, cream `from-bone/95 via-bone/75 to-transparent` fade, `fetchpriority="high"` and never `loading="lazy"` (it is the LCP element), text column `max-w-2xl`, intro at `text-ink/80`, WhatsApp + phone CTA buttons.

**Images** — portrait images go in the right-hand column of a `lg:grid-cols-2` section, in the case-study container:
```astro
<div class="w-full aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
  <img src="…" alt="…" width="800" height="1000" loading="lazy" class="w-full h-full object-cover" />
</div>
```
Landscape body images use `class="w-full h-auto rounded-xl shadow-lg"`. All body images lazy with explicit `width`/`height`. Images live in `public/images/guides/<guide-slug>/`.

**Tables** — every table wrapped in `<div class="overflow-x-auto">` so it scrolls on a phone instead of breaking the layout. Check at 375px.

**Title** — `title` is used for both the `<h1>` and the `<title>` tag, so it must work as both and stay near 60 characters once `| Heritage Joiners` is appended. Do not write a separate SEO title; there is nowhere to put it.

**URLs** — `/guides/<slug>`, never a trailing slash (`astro.config.mjs` sets `trailingSlash: 'never'`).

**Accuracy** — guides are reference pages people act on. Only publish figures you can verify; leave one out rather than approximate it. Do not state regulations as fact beyond common convention, and say that the specification for a given job should be confirmed. Link the sources you actually used.

Register: add an entry to the `guideCards` array in `src/pages/guides/index.astro` — `href`, `title`, `description`, `category`, and optional `image` / `alt`. The card then appears automatically. `category` must match one of these strings exactly:
`Doors & Windows` · `Skirting, Architrave & Mouldings` · `Timber & Sheet Materials` · `Wood Finishing` · `Timber Problems & Repairs` · `Carpentry Explained`

Do not create two guides answering the same question — one definitive page per topic, or they cannibalise each other.

### Area page — exemplar: `src/pages/areas/pontefract.astro`
Pattern: `BaseLayout`, H1 `"Carpenter & Joiner in <Town>"`, local intro, links to all service pages, CTA.
Register: add to `src/pages/areas/index.astro`, footer `areaLinks`, and (if a main coverage town) `siteConfig.serviceArea` + the LocalBusiness `areaServed` follows from it.

### Gallery entry — file: `src/pages/gallery.astro`
Append to the `galleryItems` array: `{ title, category, image: '/images/gallery/<seo-name>.webp', alt }`. Convert the image per the pipeline. Nothing else to register.

### One-off pages
Use `BaseLayout` with the standard hero section pattern. Check `/sitemap` page picks it up automatically (it does, from the pages folder).

## SEO conventions

- **Before writing or editing any page copy, read `PRIVATE/SEO/keyword-strategy.md` and use that page's primary keyword.** It lists the primary keyword, secondary keywords and search volume for all 18 service pages plus the site-wide hire-intent terms. The primary keyword goes in the `title`, the `<h1>` and the opening words of the copy. Secondary keywords go in H2s and body text, written like a joiner talks — never keyword-stuffed. Two notes from the strategy: the heritage/restoration cluster belongs on `/services/windows` and `/services/timber-repair` only, not spread across every page; and `fitted wardrobes` and `wall panelling` are the highest-volume terms on the site by roughly ten to one.
- **Never drop a town from a page title to shorten it.** Pontefract, Wakefield and West Yorkshire are primary local keywords. Google indexes the full title even when it truncates the display, so trimming a town costs ranking and gains nothing. Shorten the keyword phrasing instead. Measure title length with HTML entities decoded — `&amp;` is one character, not five.
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
