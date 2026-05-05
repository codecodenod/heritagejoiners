# Heritage Joiners — Hermes Content Implementation Plan

Status: 5 May 2026
Owner: Rob / Claude
Source content: `Hermes/pages-content/*.md`

---

## CORE RULE (read first)

**The existing `.astro` pages are the source of truth for STRUCTURE.**
**Hermes markdown is SUPPLEMENTARY PROSE only.**

Do **not** delete existing layout, components, schema, breadcrumbs, CTAs, or service link grids. The Astro pages already contain richer markup than the Hermes drafts:

- Eyebrow line (oak-coloured postcode strip)
- H1 + hero paragraph + dual CTA buttons (`WhatsAppCTA` + `PhoneLink`)
- Two-column "local stock / nearby villages" section
- 12-tile service link grid
- Case-study link section
- Final CTA section with WhatsApp + Phone buttons
- `BreadcrumbSchema` + `BaseLayout` SEO wrapper

The Hermes drafts have **no** layout, no CTAs, no service grid, no schema. They are prose blocks designed to slot into existing sections. **Insert and replace by section — never wholesale-replace a page body.**

When in doubt: open the live Astro file first, identify the section that maps to the Hermes block, and replace only the inner text/list of that section.

---

## Status of Hermes v2 output

| File | Quality | Action |
|---|---|---|
| `contact.md` | ✅ Paste-ready (insert) | **Phase 1** |
| `case-studies.md` | ✅ Single sentence usable | **Phase 1** |
| `areas.md` | ✅ Paste-ready (insert) | **Phase 1** |
| `pontefract.md` | ⚠️ Needs v3 | Phase 2 → 3 |
| `wakefield.md` | ⚠️ Needs v3 | Phase 2 → 3 |
| `castleford.md` | ⚠️ Needs v3 | Phase 2 → 3 |
| `featherstone.md` | ⚠️ Needs v3 | Phase 2 → 3 |
| `knottingley.md` | ⚠️ Needs v3 | Phase 2 → 3 |
| `normanton.md` | ⚠️ Needs v3 | Phase 2 → 3 |
| `leeds.md` | ⚠️ Needs v3 | Phase 2 → 3 |
| `yorkshire.md` | ⚠️ Needs v3 | Phase 2 → 3 |

### Why area pages need a v3 pass

1. All 7 area pages share an **identical opening sentence** (town swapped) — duplicate-content risk.
2. All 7 share an **identical "Proof Point" + "Send Photos First"** paragraph verbatim.
3. Every page ends with a **"Related Search Terms"** keyword footer — keyword stuffing, hurts SEO.
4. Yorkshire page has a similar keyword-list section ("Common Repair Requests").
5. Local detail is shallow — placeholders like "Conservation area streets" instead of real specifics.

---

## Things to preserve verbatim on every area page

When editing `src/pages/areas/<town>.astro`, leave these untouched:

- `BaseLayout` wrapper + `title` + `description` props
- `BreadcrumbSchema` import + `<BreadcrumbSchema items={breadcrumbs} />`
- `WhatsAppCTA client:load` + `PhoneLink` components everywhere they appear
- The 12-tile service-link grid (`<a href="/services/...">` blocks)
- Section-level Tailwind container classes (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, `py-16`, `bg-bone`, `bg-paper`, etc.)
- The Counting House case-study link
- Any `siteConfig` references

If a Hermes draft suggests removing or restructuring any of the above, ignore that part. Only replace prose inside existing `<p>`, `<h2>`, and `<ul>` tags, or add the one new section described in §3.2.

---

## Phase 1 — Paste ready pages now

### 1.1 Contact page

**Target file:** [src/pages/contact.astro](src/pages/contact.astro)

Existing layout (Phone tile + WhatsApp tile + Hours + Address) is fine and stays in place. **Insert** new sections, do not delete tiles.

After the H1 + hero `<p>` (around line 22), before the `<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">`:

- **What to send** — `<h2 class="font-display text-2xl text-ink mb-4 mt-12">` + `<ul class="space-y-2 text-ink/70 mb-8">` with the 6 bullets from `contact.md` (postcode/town, property type & age, listed status, wide photo, close-up photo, leak/damp/movement notes).
- **What happens next** — `<h2 class="font-display text-2xl text-ink mb-4">` + `<ol class="space-y-3 text-ink/70 list-decimal list-inside">` for Review → Survey → Quote.

Do not add the "Enquiry Channels" section from the markdown — the Phone + WhatsApp tiles below already serve that purpose.

### 1.2 Case Studies index

**Target file:** [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro)

Existing hero paragraph is solid. Replace the `<p>` text on line 35–37 only:

> "These case studies show real repair decisions, not just finished photos. Each page explains what was found, what was repaired, and what had to be replaced."

Skip everything else in `case-studies.md` — the existing card grid + global CTA already cover it.

### 1.3 Areas index

**Target file:** [src/pages/areas/index.astro](src/pages/areas/index.astro)

Read the existing file first.

If the page is currently thin (audit showed 147 chars), insert the `areas.md` body sections **above the existing area-link grid**:

- `## Core Coverage` → `<h2>` + `<p>` paragraph
- `## What People Ask For Most` → `<h2>` + `<ul>` of 4 bullets
- `## How Enquiries Work` → `<h2>` + `<p>` paragraph

The grid of 8 town tiles (Pontefract / Wakefield / etc.) must stay. If it doesn't exist yet, add it as the next section after the prose.

---

## Phase 2 — Issue Hermes v3 revision prompt

Send this prompt to Hermes. Pass the v2 prompt + this addendum:

````markdown
## V3 REVISIONS REQUIRED

The v2 output passed voice checks but failed differentiation. Fix the issues below and re-issue area pages only.

1. **No two area pages may share an opening sentence.** Currently all 7 area pages open with "[Town] jobs come in weekly for sash window repair…". Rewrite each opening to be locally distinctive — reference the genuine character of THAT town's building stock, exposure, age range, or common defect pattern. The opener must read as if written by someone who has actually worked there.

2. **No two area pages may share an identical proof-point or CTA paragraph.** Vary the wording. If the same Counting House case study is referenced on each page, the framing sentence around it must change.

3. **Delete every "Related Search Terms" section.** Putting comma-separated keywords at the end of a page is a deprecated SEO pattern that Google penalises. Search intent is satisfied by natural use of the terms in body copy and headings, not keyword footers.

4. **Yorkshire page**: rewrite the "Common Repair Requests" section as prose (1 short paragraph). Currently it's a keyword bullet list — same problem as #3.

5. **Each area page must contain at least 3 genuinely local facts** the average copywriter wouldn't know without research. Examples of what counts:
   - Specific named conservation areas
   - Named streets/roads where work has been done
   - Building stock distinctive to that town (mining-era stone terraces in Featherstone; back-to-backs in Leeds; Georgian core around Pontefract market square; cathedral-area townhouses in Wakefield)
   - Local exposure patterns (e.g., west-facing fronts on a specific high-elevation street)
   Generic placeholders like "Conservation area streets" do not count.

6. **Keyword source list cleanup**: the keyword input file `05_strict_curated_keywords.txt` contains US-locality terms (Indianapolis, Kansas City, Louisville, Atlanta, Folsom, Melbourne). Strip every non-UK term before reuse. Heritage Joiners is a Yorkshire-only business.

7. **Keep the v2 section structure but vary the content within each section.** Same H2 headings (Local Building Stock / Nearby Villages / Common Timber Issues / Proof Point / Send Photos First), different prose under each.

Re-issue: pontefract.md, wakefield.md, castleford.md, featherstone.md, knottingley.md, normanton.md, leeds.md, yorkshire.md
Leave unchanged: contact.md, case-studies.md, areas.md
````

---

## Phase 3 — Paste area pages (after v3 lands)

### 3.1 Section mapping (Hermes markdown → Astro destination)

| Hermes block | Astro destination | Edit type |
|---|---|---|
| Eyebrow postcode line | Existing `<p class="text-oak uppercase tracking-wide mb-4">` | Replace text |
| `# H1` | Existing `<h1 class="font-display text-4xl lg:text-5xl text-ink mb-6">` | Replace text |
| Hero paragraph | Existing `<p class="text-lg text-ink/70 mb-8">` | Replace text |
| `## Local Building Stock` | Left column of existing 2-col section ("Local period timber work" → rename `<h2>` to "Local building stock") | Replace `<h2>` text + `<p>` text |
| `## Nearby Villages / Streets We Work In` | Right column of same 2-col section | Replace `<h2>` text; convert `<p>` to `<ul class="space-y-1 text-ink/70 list-disc list-inside">` |
| `## Common Timber Issues We See in [town]` | **NEW SECTION — INSERT** before the "Services in [town]" link grid | Add new `<section>` (template below) |
| `## Proof Point` | Existing "[Town] proof" `<p>` | Replace `<p>` text only — keep `<a>` to /case-studies/counting-house |
| `## Send Photos First` | Existing final CTA `<p>` (above buttons) | Replace `<p>` text only — keep WhatsApp + Phone buttons |

### 3.2 New section template — "Common timber issues"

Insert this as a new `<section>` between the "Local stock / Nearby villages" 2-col section and the "Services in [town]" link grid section. Token classes match the rest of the page.

```astro
<section class="py-16 bg-paper">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl">
      <h2 class="font-display text-2xl lg:text-3xl text-ink mb-6">Common timber issues we see in {TOWN}</h2>
      <ul class="space-y-3 text-ink/70 list-disc list-inside">
        <li>{Bullet 1 from Hermes}</li>
        <li>{Bullet 2 from Hermes}</li>
        <li>{Bullet 3 from Hermes}</li>
        <li>{Bullet 4 from Hermes}</li>
        <li>{Bullet 5 from Hermes}</li>
      </ul>
    </div>
  </div>
</section>
```

Alternate the `bg-bone` / `bg-paper` / `bg-white` background of this new section so it doesn't clash with the section above or below it. Open the existing file and pick the next colour in the existing rhythm.

### 3.3 What MUST NOT be pasted from Hermes drafts

- ❌ The "Related Search Terms" section at the end of each draft — strip before paste, every page.
- ❌ The Yorkshire page's "Common Repair Requests" keyword list — wait for v3 prose version, or rewrite by hand.
- ❌ Any verbatim opening sentence shared with another page — rewrite if v3 hasn't.
- ❌ Any verbatim "Proof Point" paragraph shared with another page — rewrite if v3 hasn't.
- ❌ Any verbatim "Send Photos First" paragraph shared with another page — rewrite if v3 hasn't.

### 3.4 Per-page checklist

For each of the 8 area pages:

- [ ] Read the v3 markdown file
- [ ] Confirm no "Related Search Terms" / "Common Repair Requests" sections (strip if present)
- [ ] Read the corresponding `src/pages/areas/<town>.astro`
- [ ] Identify each existing section that maps to a Hermes block (per §3.1)
- [ ] Apply edits **inside existing tags only** — do not replace whole sections wholesale
- [ ] Insert the new "Common timber issues" section using template §3.2
- [ ] Verify all preserved items from the "Things to preserve verbatim" list above are still present
- [ ] Verify the page renders in dev (`npm run dev`)
- [ ] Visual check on Pixel 7 + Galaxy S8+ + iPad Pro viewports
- [ ] Diff against `main`: only prose changes + 1 new section. No removed `WhatsAppCTA`, `PhoneLink`, `BreadcrumbSchema`, or service link grid.

### 3.5 Pages to update

1. [src/pages/areas/pontefract.astro](src/pages/areas/pontefract.astro)
2. [src/pages/areas/wakefield.astro](src/pages/areas/wakefield.astro)
3. [src/pages/areas/castleford.astro](src/pages/areas/castleford.astro)
4. [src/pages/areas/featherstone.astro](src/pages/areas/featherstone.astro)
5. [src/pages/areas/knottingley.astro](src/pages/areas/knottingley.astro)
6. [src/pages/areas/normanton.astro](src/pages/areas/normanton.astro)
7. [src/pages/areas/leeds.astro](src/pages/areas/leeds.astro)
8. [src/pages/areas/yorkshire.astro](src/pages/areas/yorkshire.astro)

---

## Phase 4 — Post-paste QA

Run before committing:

1. **Build**: `npm run build` — must pass with no errors.
2. **Sitemap**: confirm all 8 area pages + contact + case-studies appear in generated `dist/sitemap-index.xml`.
3. **Component preservation diff**: for each area page, confirm the diff shows only:
   - Prose replacements inside `<p>` / `<h2>` / `<h1>` / `<ul>`
   - One new `<section>` for Common Timber Issues
   No removals of `WhatsAppCTA`, `PhoneLink`, `BreadcrumbSchema`, or the service link grid.
4. **Duplicate-content scan**:
   ```
   grep -rh "[A-Z][^.]*\." src/pages/areas/*.astro | sort | uniq -d
   ```
   Anything returned is a near-duplicate. Fix.
5. **Keyword-stuffing scan**:
   ```
   grep -rni "Related Search Terms\|Common Repair Requests" src/pages/
   ```
   Must return zero.
6. **Voice check**: read 2 area pages aloud. If anything sounds like a brochure ("comprehensive solutions", "stewardship", "commitment to excellence"), rewrite.
7. **Mobile + tablet check**: dev server in Pixel 7 (412), Galaxy S8+ (360), iPad Pro (1024) viewports. Header, headings, bullet lists must not overflow or wrap badly.
8. **Internal links**: every `/services/...` and `/case-studies/...` link in new copy resolves to a real page.
9. **Schema integrity**: visit `view-source:` on a sample area page in dev — `BreadcrumbSchema` JSON-LD is still rendered in `<head>`.

---

## Banned patterns reference (for QA)

These should not appear anywhere in the site:

- "Related Search Terms" sections / keyword footer lists
- "stewardship", "condition-led", "scope opinion", "phased delivery"
- "repair-first but not repair-at-any-cost" (overused)
- "preservation-led", "viability framework"
- Adjective stacks ("careful, sympathetic, conservation-aware")
- Comma-separated keyword strings used as sentences
- US locality references (Indianapolis, Kansas City, Atlanta, Folsom, Melbourne, etc.)
- Generic location placeholders ("Conservation area streets", "side routes", "edge")

---

## Files referenced

- Hermes content: [Hermes/pages-content/](Hermes/pages-content/)
- v2 audit report: [Hermes/pages-content/04_keyword_coverage_check.txt](Hermes/pages-content/04_keyword_coverage_check.txt) (note: the keyword-match logic in this file is broken — do not rely on it)
- Site voice reference: [src/pages/index.astro](src/pages/index.astro) (homepage hero)
- Site config (NAP): [src/config/site.ts](src/config/site.ts)
- Existing area page reference (use as template): [src/pages/areas/pontefract.astro](src/pages/areas/pontefract.astro)
