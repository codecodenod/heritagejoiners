# Website text review update (heritagejoiners.pages.dev)

Date: 2026-04-30
Reviewed by: Hermes Agent
Scope: Live site text + source copy audit (headings, wording, locations, SEO-facing descriptions)

---

## Summary

Home page positioning is strong and aligned to the strategy (repair-first, listed/period, Yorkshire-wide).

Main issues found are:
1. **Legacy location copy** still referencing **Bristol / South West / Bath** on several non-home pages.
2. **Inconsistent geography language** (`West Yorkshire` in footer vs `Yorkshire-wide` elsewhere).
3. **Placeholder public text** still visible (`TODO`, `Address pending`, `Email pending`) across header/footer/contact areas.
4. Case studies contain partial placeholder copy (`[Details to be added - awaiting copy from Rob]`).

No JS console errors found during this review pass.

---

## Priority fixes (text only)

## P1 — Location consistency (must fix first)

### 1) `src/pages/about.astro`

- Current:
  - `Learn about Heritage Joiners - Bristol's timber window and door specialists.`
  - `provide Bristol and the surrounding area...`
  - `...across the South West.`
  - `Based in Bristol... including Bath, Keynsham, Clevedon...`

- Replace with:
  - **Meta description**:
    - `Learn about Heritage Joiners - Yorkshire timber repair specialists for listed and period buildings.`
  - **Body copy**:
    - `Heritage Joiners was established to provide Yorkshire with specialist timber repair and joinery craftsmanship for listed and period buildings.`
    - `Our team has decades of hands-on experience working on listed buildings, conservation areas, and period properties across Yorkshire.`
    - `Based in Yorkshire, we work across the region including York, Leeds, Wakefield, Harrogate, Sheffield, and surrounding areas.`

---

### 2) `src/pages/contact.astro`

- Current:
  - `Get in touch with Heritage Joiners - Bristol's timber window and door specialists.`

- Replace with:
  - `Get in touch with Heritage Joiners - Yorkshire timber repair specialists for listed and period buildings.`

---

### 3) `src/pages/services/index.astro`

- Current:
  - `...services in Bristol...`
  - `...across Bristol and the South West.`

- Replace with:
  - **Meta description**:
    - `Heritage Joiners - specialist timber window and door services across Yorkshire. Repair-first work for listed and period properties.`
  - **Intro paragraph**:
    - `We specialize in timber window and door repair, restoration, and selective replacement for listed and period properties across Yorkshire.`

---

### 4) `src/pages/services/timber-window-repair.astro`

- Current:
  - `Specialist timber window repair in Bristol...`

- Replace with:
  - `Specialist timber window repair across Yorkshire. Sash windows, casements, and period windows skillfully repaired.`

(Apply to both `schemaProps.description` and page `description` prop.)

---

### 5) `src/pages/services/doors-and-frames.astro`

- Current:
  - `Timber doors and frames in Bristol...`

- Replace with:
  - `Timber doors and frames repaired and restored across Yorkshire. External doors, internal doors, frames, and door furniture handled with a repair-first approach.`

(Apply to both `schemaProps.description` and page `description` prop.)

---

### 6) `src/pages/case-studies/index.astro`

- Current:
  - `A complete restoration of this historic Bristol building.`

- Replace with:
  - `A complete timber restoration project delivered by Heritage Joiners.`

(If you want explicit location, swap to the real Yorkshire location once confirmed.)

---

### 7) `src/pages/case-studies/counting-house/index.astro`

- Current:
  - Multiple `Bristol` references in meta description, hero text, overview paragraph, and project location.

- Replace with one of these two options:

**Option A (safe now):** location-neutral until verified
- Meta: `A complete restoration project by Heritage Joiners - case study.`
- Hero: `A complete timber window and door restoration project delivered for a historic building.`
- Body: `The Counting House required comprehensive timber window and door restoration work.`
- Project overview location: `Yorkshire` or `Location available on request`

**Option B (if confirmed Yorkshire location exists):**
- Use exact town/city in Yorkshire for all instances.

---

## P2 — Brand consistency copy

### 8) `src/components/layout/Footer.astro`

- Current:
  - `serving West Yorkshire.`

- Replace with:
  - `serving Yorkshire.`

Reason: aligns with your stated Yorkshire-wide positioning.

---

### 9) `src/config/site.ts`

- Current service area:
  - `['Bristol', 'Bath', 'South West England']`

- Replace with:
  - `['Yorkshire']`
  - or granular: `['York', 'Leeds', 'Wakefield', 'Harrogate', 'Sheffield', 'Yorkshire']`

Also update inline example comment using Bristol postcode to a Yorkshire example.

---

## P3 — Launch-readiness text placeholders

These are fine for dev, but should be removed before public launch.

### Visible now on live site
- Header phone CTA shows `TODO`
- Footer shows `Address pending`
- Footer email shows `Email pending`
- Footer/other links may show `TODO`

### Files driving this
- `src/config/site.ts` (phone/whatsapp/email/address placeholders)
- `src/components/layout/Footer.astro`
- `src/components/layout/Header.astro`
- `src/pages/contact.astro`

Recommendation: if details are not ready, use neutral temporary text that still looks intentional (e.g. `Phone details being finalised`) instead of `TODO`.

---

## SEO copy tuning (quick wins)

- Keep “Yorkshire” in each key page description naturally once (About, Contact, Services, key service pages).
- Keep “listed and period buildings/properties” in top-of-page descriptions.
- Keep “repair-first” language, but include replacement honesty line where relevant.
- Avoid over-repeating “specialist” in the same sentence.

---

## Suggested final meta description set (ready to paste)

- About:
  - `Learn about Heritage Joiners - Yorkshire timber repair specialists for listed and period buildings.`
- Contact:
  - `Contact Heritage Joiners for repair-first timber window and door work across Yorkshire listed and period properties.`
- Services overview:
  - `Specialist timber window and door services across Yorkshire - repair-first restoration for listed and period properties.`
- Timber window repair:
  - `Specialist timber window repair across Yorkshire for sash, casement, and period windows. Repair-first, heritage-focused.`
- Doors & frames:
  - `Timber doors and frames repaired and restored across Yorkshire with a preservation-first approach for period properties.`
- Case studies index:
  - `Case studies from Heritage Joiners showing repair-first timber restoration outcomes for period and historic buildings.`

---

## What was checked

Live pages reviewed:
- `/`
- `/about/`
- `/services/`
- `/contact/`
- `/case-studies/`

Source copy reviewed:
- All primary page files under `src/pages/`
- Footer and global config affecting public text (`Footer.astro`, `site.ts`, layout meta descriptions)

---

## Recommendation for next pass

Once you approve this copy direction, next action is a **text-only implementation commit** replacing all Bristol/South West legacy strings and placeholder-facing words in public sections.
