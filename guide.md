# Codex work order — build the Guides section

Build a new `/guides` section for heritagejoiners.co.uk, laid out **exactly like `/services`**, starting with one guide: standard door sizes.

---

## Before you start — read this

**Read `AGENTS.md` (or `CLAUDE.md`, they are identical) in full first.** It is the build spec for this site. Then read `PRIVATE/content-guide.md` before writing a single word of copy — it is the voice guide and CLAUDE.md requires it.

### Hard rules you must not break

- **Never run git commands.** No add, commit, push or status. Rob commits himself.
- **No new dependencies.** No MDX, no JS libraries, no third-party CDNs. Plain Astro + Markdown only. If a task seems to need a package, stop and ask.
- **Never invent a new visual pattern.** Copy the exemplar and swap the content. Every class you use must already exist somewhere on the site.
- **Never edit** `src/styles/tokens.css`, `src/styles/typography.css`, `src/styles/components.css`, or the structure of `src/layouts/BaseLayout.astro`. No new colour, font, heading size or spacing value.
- **Contact details** always come from `src/config/site.ts`. Never hardcode a phone number, address or email.
- **The business email must never appear in plaintext.** It lives base64-encoded in `EmailLink.astro` only.
- **Never write the word "pine".** Say "original timber", "softwood", "original Victorian door".
- **No prices. No £ figures anywhere.** `grep -rE "£[0-9]" dist` must return zero. Use the approved framing instead — an off-the-shelf door "can save a considerable amount" against a bespoke one, with no numbers.
- **No invented reviews, testimonials, claims or statistics.**
- **Never name a competitor.**
- Do not touch `PRIVATE/` or reference it in site code.

### Verify after every task

```bash
npm run build                              # must complete with no errors
grep -rE "£[0-9]" dist --include=*.html    # must be 0
grep -ril "pine" dist --include=*.html     # must be 0
grep -ril "rob@\|@heritagejoiners" dist    # must be 0
```

---

## Critical corrections to the original proposal

The brief this came from contained four things that would break site conventions. They are corrected below — **do not revert to the original suggestions.**

| Original suggestion | Why it is wrong | Do this instead |
|---|---|---|
| URLs with trailing slashes, e.g. `/guides/standard-door-sizes/` | `astro.config.mjs` sets `trailingSlash: 'never'` and `build.format: 'file'`. Every URL on the site is slash-free. Trailing slashes would break canonical consistency against the sitemap. | `/guides/standard-door-sizes` — **no trailing slash** |
| Use MDX for guides | `@astrojs/mdx` is not installed and adding it breaks the no-new-dependencies rule. Markdown with raw HTML handles tables fine — see the blog posts. | Plain Markdown collection, same as `src/content/blog/` |
| Build `GuideCard`, `GuideTable`, `GuideContents`, `RelatedGuides` components | Four new components is inventing a visual pattern. | Reuse `.service-card`, `.service-card-image`, `.service-card-content` from `src/styles/components.css`, and plain `<table>` inside the prose wrapper |
| `author: "Rob"` in frontmatter | Redundant. `src/components/schema/BlogPosting.astro` already hardcodes Rob, his job title and `worksFor`. | Omit it; the schema component supplies it |

---

## 1. Content collection

**File:** `src/content.config.ts`

Add a `guides` collection alongside the existing `blog` one. Follow the existing file's style exactly.

```ts
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    ogImage: z.string().optional(),
    /** Card image on the /guides hub. Falls back to ogImage when unset. */
    cardImage: z.string().optional(),
    cardAlt: z.string().optional(),
    /** Service page this guide feeds, e.g. '/services/doors' */
    relatedService: z.string().optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  }),
});

export const collections = { blog, guides };
```

`category` must be one of the six category names in section 3. Keep the strings exact — the hub groups on them.

---

## 2. The `/guides` hub — copy `/services` exactly

**File:** `src/pages/guides/index.astro`
**Exemplar to copy:** `src/pages/services/index.astro`

This is the page Rob has approved the look of. Match it, do not improvise.

### 2a. Hero

Identical block to the services hero (which is itself identical to contact, areas and doors). Copy it and swap the image, eyebrow, H1 and intro:

```astro
<section class="relative overflow-hidden bg-bone min-h-[380px] lg:min-h-[480px] flex items-center">
  <img
    src="/images/guides/<hero-name>.webp"
    alt="…"
    width="1600"
    height="850"
    fetchpriority="high"
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-r from-bone/95 via-bone/75 to-transparent pointer-events-none"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
    <div class="max-w-2xl">
      <p class="text-oak uppercase tracking-wide mb-4">Guides</p>
      <h1 class="font-display text-4xl lg:text-5xl text-ink mb-4">Carpentry &amp; Joinery Guides</h1>
      <p class="text-lg text-ink/80">…</p>
    </div>
  </div>
</section>
```

**Rob is supplying the hero image.** Until he does, leave the `<img>` out and keep the section as a plain `py-16 lg:py-24 bg-paper` intro — do not substitute a random photo. Ask him for it.

Notes that are easy to get wrong: intro text is `text-ink/80` (not `/70`) so it reads over the photo; text column is `max-w-2xl`; the hero image is **never** `loading="lazy"` — it is the LCP element.

### 2b. Card grid

Below the hero, one `bg-white` section containing the category groups. `bg-white` matters — `.service-card` is `bg-paper` and would vanish on a paper background.

For each category, an H2 then a grid, exactly as services does it:

```astro
<h2 class="font-display text-2xl text-ink mb-4 mt-8 pb-2 border-b border-ink/10">Doors &amp; Windows</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
  {guidesInCategory.map((g) => (
    <a href={`/guides/${g.id}`} class="service-card group relative">
      {img && (
        <img src={img} alt={alt} loading="lazy" width="600" height="192" class="service-card-image w-full object-cover" />
      )}
      <div class="service-card-content">
        <h3 class="font-display text-xl text-ink mb-3 group-hover:text-oak transition-colors">{g.data.title}</h3>
        <p class="text-ink/70 text-sm mb-4 leading-relaxed">{g.data.description}</p>
        <span class="mt-auto text-oak font-display text-xs">Read the guide &rarr;</span>
      </div>
    </a>
  ))}
</div>
```

Cards come from `getCollection('guides', ({ data }) => !data.draft)`, grouped by `category`, so adding a Markdown file makes a card appear with no further work. Use `cardImage ?? ogImage` for the image and `cardAlt` for the alt.

**A card with no image must still render** — wrap the `<img>` in a conditional exactly as `src/pages/services/index.astro` does. Guides will be added before their photos exist.

**Keep all four category grids at `lg:grid-cols-4 gap-8`** so card widths match across the page. Do not use a 3-column grid for a category with fewer entries.

### 2c. Schema

Add `ItemList` JSON-LD listing the guides, copying the pattern already in `src/pages/services/index.astro`.

---

## 3. Categories

Six, in this order. The `category` frontmatter string must match exactly.

1. **Doors & Windows**
2. **Skirting, Architrave & Mouldings**
3. **Timber & Sheet Materials**
4. **Wood Finishing**
5. **Timber Problems & Repairs**
6. **Carpentry Explained**

Only render a category heading if it has at least one non-draft guide.

---

## 4. Individual guide template

**File:** `src/pages/guides/[...slug].astro`
**Exemplar to copy:** `src/pages/blog/[...slug].astro`

Same shape as a blog post — `getStaticPaths` from the collection, `BaseLayout`, prose wrapper — with these differences:

- **Breadcrumbs:** Home → Guides → *guide title*. Use `src/components/schema/Breadcrumb.astro`, same as `ServiceLayout` does.
- **Article schema:** reuse `src/components/schema/BlogPosting.astro`. Pass `image={guide.data.ogImage}` — it already takes an optional image and absolute-ises it.
- **FAQ schema:** `FAQPageSchema slot="schema"` when `faqs` is set, exactly as the blog template does, which also renders the "Common questions" section automatically.
- **Updated date:** if `updatedDate` is set, show "Last updated <date>" under the title using the same `text-xs text-ink/40` treatment the blog uses for its date.
- **Related service:** if `relatedService` is set, render a link to it near the end using the site's existing accent link style (`text-oak font-display`).
- **CTA:** every page ends with the standard block. Copy it verbatim from any service page:
  ```astro
  <div class="flex flex-wrap justify-center gap-4">
    <WhatsAppCTA />
    <PhoneLink phone={phone.tel} display={phone.display} variant="secondary" />
  </div>
  ```

### Body rules — same as blog posts

- Headings in the Markdown start at `##`. **Never an `#` h1** — the layout renders the title.
- **Images always `<figure>` + `<figcaption>`**, with `alt`, `width` and `height`:
  ```html
  <figure>
    <img src="/images/guides/<topic>/<seo-name>.webp" alt="…" width="1500" height="844" loading="lazy" />
    <figcaption>Short plain caption.</figcaption>
  </figure>
  ```
- Tables are plain `<table>` in the Markdown body. **Wrap every table in `<div class="overflow-x-auto">`** so it scrolls on mobile instead of breaking the layout. Check on a 375px viewport.
- Images live in `public/images/guides/<topic>/` and follow the image pipeline in AGENTS.md — kebab-case SEO filenames, resize before use, target ≤ ~120 KB.

---

## 5. Registration

Three places, all small:

1. **Nav** — `src/components/layout/Nav.astro`, add `{ href: '/guides', label: 'Guides' }`. Put it after Blog.
   **Note:** this takes the nav to 8 items, which was tight at tablet width before "Home" was removed. Build it, look at it around 1024px, and tell Rob if it needs a different treatment. Do not silently drop another nav item.
2. **Footer** — `src/components/layout/Footer.astro`, add Guides to `primaryLinks`.
3. **Sitemap page** — `src/pages/sitemap.astro`. It auto-globs `./**/*.astro` so the hub appears by itself, but individual guides come from the collection and need adding the same way `blogLinks` is built. Add a `Guides` group and a `guideLinks` array mirroring the existing blog code.

The XML sitemap and `/sitemap-index.xml` are automatic — nothing to do.

---

## 6. First guide — standard door sizes

**File:** `src/content/guides/standard-door-sizes.md`
**URL:** `/guides/standard-door-sizes`

### Frontmatter

```yaml
title: "Standard Door Sizes UK"
description: "<130–165 chars>"
category: "Doors & Windows"
pubDate: 2026-08-07
relatedService: "/services/doors"
faqs: …
```

**Title constraint:** the guide template uses `title` for **both** the `<h1>` and the `<title>` tag, so it must work as both. `"Standard Door Sizes UK"` renders as `Standard Door Sizes UK | Heritage Joiners` — 41 characters. Good. Do not use the longer "Internal and External Door Size Guide" variant; with the brand suffix it runs past 70 and the brand truncates.

### Content

Make it the best UK door-size reference on the internet, not a thin page with one table. Cover:

- Quick-answer table near the top
- Common internal door sizes — **millimetres, inches and feet/inches**
- Common door thicknesses
- Metric versus imperial doors
- Standard fire-door sizes and thicknesses
- External door sizes
- Door pairs and French doors
- Accessible door-opening widths
- How to measure the structural opening
- Door slab size versus lining size versus overall opening
- When an off-the-shelf door can be altered, and how much can safely be trimmed
- When a bespoke door is genuinely necessary
- FAQs

### Accuracy rules — important

This page is a reference. People will act on it.

- **Only publish figures you can verify.** Standard UK door sizes are well documented; do not round, guess or invent. If you cannot confirm a figure, leave it out rather than approximate it.
- **Do not state fire-door regulations as fact** beyond common size and thickness conventions. Building Regulations vary and change. Say what the common sizes are, and that the specification for a given opening should be confirmed for the building.
- **Trimming allowances differ by door.** Do not state a universal figure. Say that manufacturers specify a maximum, that it varies by door construction, and that fire doors in particular must not be trimmed beyond the maker's limit.
- **No prices.** The commercial angle is that choosing an available size can save a considerable amount against a bespoke door — with no numbers, and with the caveat that the opening, lining, clearance, fire rating and permitted trim all have to be checked first.

### Voice

Read `PRIVATE/content-guide.md` first. Plain, confident, practical — a tradesman talking straight. **Prove skill through detail, not adjectives.** Banned: master craftsman, high quality workmanship, best in the area, no job too big or small, built to last.

Write it as someone who hangs doors, not someone summarising a merchant's catalogue. The value is in the judgement — which sizes are actually stocked, what the lining does to the opening, why a nominally standard opening often is not.

### Internal links

Use these anchors, all of which must resolve:

| Target | Anchor |
|---|---|
| `/services/doors` | door hanging |
| `/services/second-fix-carpentry` | second fix carpentry |
| `/services/skirting-architrave` | skirting and architrave |
| `/services/timber-hardwoods` | oak joinery |
| `/services/bespoke-joinery` | fitted wardrobes *(only if it fits naturally — do not force it)* |
| `/contact` | send photos of the opening |

### Reciprocal link

Add one line to `src/pages/services/doors.astro`, in the existing copy, not as a new section:

> Unsure which size you need? See our [standard door sizes guide](/guides/standard-door-sizes).

---

## 7. SEO

`PRIVATE/SEO/keyword-strategy.md` covers the 18 service pages and site-wide hire-intent terms. **It has no data for guides.** Standard door sizes is a national informational term, which is a different game from the local commercial keywords.

Do not invent search volumes. Write the page to genuinely answer the question, put the primary phrase in the title, H1, opening sentence, one H2 and the meta description, and let Rob run Keyword Planner separately if he wants numbers.

**Do not create competing pages.** One definitive standard-door-sizes guide covering internal, external, metric and imperial. Do not also create `/guides/internal-door-sizes`, `/guides/uk-door-size-chart` or similar — they would cannibalise each other. Split a topic out only when the search intent is genuinely different.

---

## 8. Definition of done

```bash
npm run build
```

Then confirm:

- [ ] `/guides` renders with the hero, category headings and cards, visually identical to `/services`
- [ ] `/guides/standard-door-sizes` renders with breadcrumbs, prose, FAQs and CTA
- [ ] Exactly one `<h1>` on every new page
- [ ] Every image has meaningful `alt` plus `width` and `height`; hero is `fetchpriority="high"` and not lazy; all others lazy
- [ ] Every table scrolls rather than overflows at 375px
- [ ] Title ≤ ~60 chars with the brand suffix; description 130–165 chars
- [ ] Article, FAQPage, BreadcrumbList and ItemList JSON-LD all parse
- [ ] Guides appear in the nav, the footer and `/sitemap`
- [ ] Every internal link resolves in `dist/`
- [ ] `grep -rE "£[0-9]" dist` → 0
- [ ] `grep -ril "pine" dist` → 0
- [ ] `grep -ril "rob@\|@heritagejoiners" dist` → 0
- [ ] No new dependency in `package.json`
- [ ] No change to `tokens.css`, `typography.css`, `components.css` or `BaseLayout.astro`

---

## 9. Stop and ask

Do not decide these yourself:

- **The hero image** — Rob is supplying it. Do not substitute one.
- **Nav crowding at 8 items** — report it, do not fix it by removing something.
- **Any figure you cannot verify** — leave it out and flag it rather than approximating.
- **Anything that would make `/guides` look different from `/services`** — that is the whole point of the job.
