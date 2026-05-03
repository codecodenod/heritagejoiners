# Heritage Joiners — Build Plan

**Last updated:** 2026-05-03
**Drives from:** [Hermes/Competition-ideas.md](Hermes/Competition-ideas.md) (Appendix A) + [Hermes/repair-vs-replacement-uk-listed-buildings-competitive-research.md](Hermes/repair-vs-replacement-uk-listed-buildings-competitive-research.md) (content reference library) + [BUSINESS_PLANNER.md](BUSINESS_PLANNER.md)
**Repo:** Astro site, source in [src/](src/), routing via [src/pages/](src/pages/)

---

## 0. Ground truth — what's actually live

Verified against [src/pages/](src/pages/) on 2026-05-03:

- [src/pages/index.astro](src/pages/index.astro) — Homepage. Has hero, trust strip, repair-vs-replace logic, services snapshot, case proof, 4-step process, coverage paragraph, [src/components/sections/RepairVsReplacement.astro](src/components/sections/RepairVsReplacement.astro) section, FAQ, final CTA.
- [src/pages/services/index.astro](src/pages/services/index.astro) — Three service cards.
- [src/pages/services/timber-window-repair.astro](src/pages/services/timber-window-repair.astro)
- [src/pages/services/doors-and-frames.astro](src/pages/services/doors-and-frames.astro)
- [src/pages/services/rot-and-splice.astro](src/pages/services/rot-and-splice.astro)
- [src/pages/about.astro](src/pages/about.astro) — Generic, no founder name.
- [src/pages/case-studies/index.astro](src/pages/case-studies/index.astro) + [src/pages/case-studies/counting-house/](src/pages/case-studies/counting-house/)
- [src/pages/contact.astro](src/pages/contact.astro)
- [src/pages/404.astro](src/pages/404.astro)

**Not yet built:** `/repair-or-replace/`, `/services/listed-and-period-property-repairs/`, anything under `/areas/`.

---

## 0.5. Bugs and blockers found during audit

### Bugs (fix in Phase 0, no decisions needed)

1. **Broken Tailwind class** — [src/pages/services/rot-and-splice.astro:53](src/pages/services/rot-and-splice.astro#L53) has `class="max-w-7xl mx-auto px-4 shash:px-6 lg:px-8"`. The `shash:` prefix is invalid and breaks responsive padding. Should be `sm:px-6`.
2. **American spelling** — [src/pages/services/rot-and-splice.astro:36](src/pages/services/rot-and-splice.astro#L36) reads "We specialize". Brand voice is Yorkshire-local; should be `specialise`. Grep the rest of [src/](src/) for other instances.

### Blockers — decisions needed from Rob before Phase 1+ ships

1. **[src/config/site.ts](src/config/site.ts) is full of `TODO` values** — phone, WhatsApp, email, address, registration number, VAT, Plausible domain. The `WhatsAppCTA` and `PhoneLink` components rely on these. Location pages cannot ship convincingly with no address. **Need:** real values, or confirmation we're shipping with placeholders for now.
2. **Founder name on About page** — every competitor (NY Sash's Rob, Sash Window Restoration's Stephen Westerman, The Sash Man's James Lonsdale, HJSL's Joe Buckley) wins on personal brand. Heritage Joiners' About page says "our team has decades of experience" — generic. **Need:** confirmation of founder name + permission to lead with it.
3. **Date stamps** — both Hermes docs are dated 2026-05-01/05-03 (this week). New site copy should not parrot those dates. Use undated copy and add `lastUpdated` only where genuinely useful (case studies, blog).

---

## 1. Phasing strategy

Five phases, smallest shippable units first. Each phase ends in a publishable site.

| Phase | Scope | Effort | Ships independently? |
|------|-------|--------|----------------------|
| 0 | Bug fixes + spelling | 15 min | Yes |
| 1 | Geographic positioning fix (copy edits to existing pages) | 30 min | Yes |
| 2 | New `/repair-or-replace/` page (the strategic moat) | 2–3 hr | Yes |
| 3 | Service page deepening + new 4th service | 4–6 hr | Yes |
| 4 | About page rewrite (founder-led) | 1–2 hr | Yes |
| 5 | Location pages — Phase 1 WF towns | 4–6 hr | Yes |
| 6 | Location pages — Phase 2 (Leeds, York) | 2–3 hr | Optional, after Phase 1 indexes |

Total estimate: ~14–22 hours of focused build for the full plan.

---

## Phase 0 — Bug fixes (do first, no decisions needed)

**Files:** [src/pages/services/rot-and-splice.astro](src/pages/services/rot-and-splice.astro)

- [ ] Line 53: `shash:px-6` → `sm:px-6`
- [ ] Line 36: `specialize` → `specialise`
- [ ] Grep [src/](src/) for other `specialize|specialized|specializing` and fix.

**Acceptance:** site builds clean, no broken class names, British spelling consistent.

---

## Phase 1 — Geographic positioning fix

Source: Appendix A2 in [Hermes/Competition-ideas.md](Hermes/Competition-ideas.md). The strategic point is that current copy lists "York, Leeds, Wakefield, Harrogate, Sheffield" — putting NY Sash territory ahead of Heritage Joiners' uncontested home patch.

### 1.1. [src/pages/index.astro](src/pages/index.astro)

- [ ] Line 23: hero H1 → `Listed & Period Timber Repairs in Pontefract, Wakefield & Across Yorkshire`
- [ ] Line 56–58: trust-strip third item — `Yorkshire-wide / serving the whole region` → `Pontefract-based / serving Yorkshire`
- [ ] Line 280–282: coverage paragraph — replace with:
  > Based in Pontefract. We work on listed and period properties across West Yorkshire — Pontefract, Wakefield, Castleford, Featherstone, Knottingley, Normanton — and travel further across Yorkshire for Leeds, York, and selected heritage projects.

### 1.2. [src/pages/about.astro](src/pages/about.astro)

- [ ] Line 67–69: same coverage paragraph as above.

### 1.3. Footer / BaseLayout

- [ ] Check [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) for any hard-coded coverage list and update to the same WF-first ordering.

**Acceptance:** Pontefract appears above the fold on the homepage; Harrogate and Sheffield are no longer in primary coverage lists; Wakefield Council jurisdiction is implicitly clear.

---

## Phase 2 — `/repair-or-replace/` (the strategic moat)

Source: Appendix A3.2 in [Hermes/Competition-ideas.md](Hermes/Competition-ideas.md), padded with the legal/consent/thermal/sustainability sections from [Hermes/repair-vs-replacement-uk-listed-buildings-competitive-research.md](Hermes/repair-vs-replacement-uk-listed-buildings-competitive-research.md).

This is the single most defensible asset — no competitor has it. Becomes the link target from every service page.

### 2.1. New file: `src/pages/repair-or-replace.astro`

Sections, in order:

1. **Hero** — `Repair or replace? Our four-stage assessment` + opening paragraph (most period timber can be repaired but not all of it should be).
2. **Four stages** — each with: photo placeholder, trigger points, typical cost band, link out.
   1. Retain (sound, minor work) — typical band: site assessment £80–£150, easing/finishing in low hundreds.
   2. Selective splice — band: small repairs £180–£350.
   3. Partial replacement — band: standard jobs £350–£900.
   4. Full replacement — band: complex above £900, or replacement at £2,500–£4,000 per sash equivalent.
3. **What we look at** — decay depth, structural retention %, joint condition, previous repair history, expected service life, listed building consent implications.
4. **The honest position** — plain-English: not repair-at-any-cost. (Mine the messaging from line 144–145 of the repair-vs-replacement doc.)
5. **Why repair usually wins** — short stack of: cost (mine §"Cost benefits of repair"), legal/consent (mine §"Legal and consent advantages"), heritage/character (mine §"Heritage and character benefits"), thermal (mine §"Thermal and energy performance"), sustainability (mine §"Sustainability and environmental benefits"). Hedging language preserved.
6. **Ventrolla anchor** — frame as the comparison: a national replacement firm starts at full replacement by default; we default to the lowest viable stage.
7. **Cross-links** to all four service pages (including the new fourth one from Phase 3).
8. **CTA** — `WhatsAppCTA` + `PhoneLink`.

### 2.2. Wire links into existing pages

- [ ] Homepage repair-vs-replace section ([src/pages/index.astro:64–134](src/pages/index.astro#L64-L134)) — add a `Read the full framework →` link to `/repair-or-replace/` after the "straight recommendation" paragraph.
- [ ] FAQ "Can listed building timber always be repaired?" answer — append link to `/repair-or-replace/`.

### 2.3. Schema

- [ ] Add an `Article` or `WebPage` schema block; this is intended to rank for "repair vs replace listed window" intent.

**Acceptance:** page exists at `/repair-or-replace/`, all four stages have photos (placeholders OK if we don't have real ones yet), Ventrolla comparison present, claims hedged with "can often / typically / where appropriate" — never absolute.

---

## Phase 3 — Service page depth + new 4th service

### 3.1. Standard 8-section structure for service pages

Per Appendix A3.3. Apply to all four service pages going forward:

1. Headline + opening paragraph (repair-first stance for this specific service).
2. What we do (existing bullet list, kept).
3. How we decide repair vs replacement *for this service* — mini framework with link to `/repair-or-replace/`.
4. Typical cost bands localised to this service.
5. Ventrolla comparison localised to this service.
6. Counting House cross-link (specific section relevant to this service).
7. Coverage — Pontefract-based, Yorkshire-covering, WF postcodes named first.
8. CTA — WhatsApp + phone.

### 3.2. [src/pages/services/timber-window-repair.astro](src/pages/services/timber-window-repair.astro)

- [ ] Add a section: `Sash, casement, hung lights — what we repair on each` (period properties have multiple window types; buyer needs to know theirs is in scope).
- [ ] Add `When repair isn't viable` section linking to `/repair-or-replace/`.
- [ ] Add cost band block: site assessment £80–£150 · small repairs £180–£350 · standard £350–£900 · complex >£900.
- [ ] Add Ventrolla comparison: per-sash replacement £2,500–£4,000 vs repair £350–£900.
- [ ] Counting House cross-link (window section).
- [ ] Coverage block.

### 3.3. [src/pages/services/doors-and-frames.astro](src/pages/services/doors-and-frames.astro)

- [ ] **Critical copy fix** — line 34–37 currently reads "We repair and replace timber doors and frames" — treats both as equal and weakens repair-first stance. Rewrite per Appendix A3.4:
  > We repair timber doors and frames wherever the original timber can carry a sound repair. Where replacement is genuinely the right answer, we source or manufacture period-accurate alternatives.
- [ ] Add four-stage decision logic *specific to doors* (door stiles and lower rails fail differently from sash boxes — different trigger points).
- [ ] List specific door types: external Georgian/Victorian/Edwardian doors · cottage doors · frame and lining repair · architraves · door furniture and ironmongery.
- [ ] Cost bands + Ventrolla comparison.
- [ ] Counting House cross-link (door section).

### 3.4. [src/pages/services/rot-and-splice.astro](src/pages/services/rot-and-splice.astro)

(Phase 0 already fixed the spelling and class typo.)

- [ ] Add a visual step-by-step section explaining the splice method: identify decay → cut back to sound timber → scarf the joint → splice in new timber → blend the finish. This is where the craft is most visible and most defensible.
- [ ] Reference the named techniques from §"Named techniques that signal technical competence" in [Hermes/repair-vs-replacement-uk-listed-buildings-competitive-research.md](Hermes/repair-vs-replacement-uk-listed-buildings-competitive-research.md): scarf joints, Dutchman repairs, splice repairs, epoxy consolidation (where appropriate).
- [ ] Explicit comparison: "A full replacement frame costs £X. A splice repair on the affected section typically costs £Y. The rest of the original window stays."
- [ ] Counting House cross-link (rot/splice section).

### 3.5. New file: `src/pages/services/listed-and-period-property-repairs.astro`

The missing 4th service (Appendix A3.1). Highest-value entry point — converts whole-property listed-home owners with multiple problems.

Use [src/layouts/ServiceLayout.astro](src/layouts/ServiceLayout.astro). Sections:

1. Headline: `Whole-property timber repair for listed and period homes`
2. Opening — frame the integrated offer: windows, doors, frames, rot/splice, all by one specialist on one project.
3. What's included — mine from Appendix A3.1.
4. Why a single specialist matters — mixing trades on a listed building creates visible mismatch and consent risk.
5. Repair-first decision logic mini-framework + link to `/repair-or-replace/`.
6. Counting House cross-link.
7. Whole-property Ventrolla anchor: 6 listed sashes through national firm £15,000–£24,000 vs repaired £3,000–£5,400.
8. Who this is for — listed building owners, period property owners, conservation area homeowners, architects, surveyors.
9. Coverage block.
10. CTA.

### 3.6. [src/pages/services/index.astro](src/pages/services/index.astro)

- [ ] Update `services` array to four entries, with the new integrated service as the lead card.
- [ ] Add intro paragraph above the cards stating the repair-first stance and linking to `/repair-or-replace/`.

### 3.7. Homepage services snapshot

- [ ] [src/pages/index.astro:143–181](src/pages/index.astro#L143-L181) — currently a 3-card grid. Decide: extend to 4 cards (matching `/services`) or keep as 3 and let the integrated service be the "promoted" entry on `/services` only. **Recommend 4 cards** for parity, with the integrated service first.

**Acceptance:** four service pages live, all follow the same 8-section structure, doors page no longer reads "we repair and replace", `/services` overview lists four cards with the integrated service leading.

---

## Phase 4 — About page (founder-led rewrite)

Source: Appendix A5. Blocked on confirming founder name (see Blocker §0.5).

Rewrite [src/pages/about.astro](src/pages/about.astro). Structure:

1. Headline: `35+ years of timber repair on listed and period buildings`
2. Founder paragraph — name, apprenticeship-trained bench joiner and site carpenter, listed-building track record, route into specialist heritage timber work. **First-person voice** ("I work this way because…") reads more credibly than corporate.
3. Why repair-first — personal explanation tying to the framework on `/repair-or-replace/`.
4. Where we work — Pontefract-based, Yorkshire-covering, same coverage order as Phase 1.
5. Notable projects — Counting House Pontefract as the anchor.
6. Approach to listed and period work — reference four-stage framework, timber matching, finishing, conservation awareness.
7. What we don't do — brief honest list (not kitchens, not decking, not painting-led).
8. Coverage detail — Pontefract, Wakefield, Castleford, Featherstone first, then Leeds, York.

**Acceptance:** page is founder-named, first-person where natural, opens stronger than NY Sash's "Rob 20+ years" or Westerman's "Stephen 20+ years" by leaning on the 35+ year apprenticeship-trained anchor.

---

## Phase 5 — Location pages (Phase 1 — WF territory)

Source: Appendix A4. Build only after Phase 1–4 are live and the site has the credentialling depth to support local pages.

### 5.1. Standard location page template

Create `src/pages/areas/[slug].astro` files manually, OR create a single `src/pages/areas/[slug].astro` dynamic route reading from a content collection. **Recommend static `.astro` files per location** — content is genuinely different per town and a content collection adds complexity without payoff at four pages.

Each page follows the 9-section template in Appendix A4.1.

### 5.2. Files to create (priority order)

- [ ] `src/pages/areas/pontefract.astro` — primary location anchor, Counting House lives here, postcodes WF7/WF8/WF9, surrounding villages (Ackworth, Darrington, East Hardwick, Carleton, Tanshelf).
- [ ] `src/pages/areas/wakefield.astro` — Wakefield Council jurisdiction, Cathedral Quarter conservation area, postcodes WF1/WF2/WF3/WF4. This is where the Wakefield Council conservation approval (when achieved) gets announced.
- [ ] `src/pages/areas/castleford.astro` — postcode WF10, distinguish from The Window Doctor (UPVC) as timber specialist.
- [ ] `src/pages/areas/featherstone.astro` — postcode WF7, distinguish from StyleHaus Windows.

### 5.3. Wire-up

- [ ] Add an "Areas we cover" section to homepage linking to all four area pages, OR add to footer.
- [ ] Update `/services` and each service page coverage block to link to area pages.
- [ ] Sitemap regen.

### 5.4. Do not build

Per Appendix A4: no Harrogate (NY Sash + Westerman + Sash Man territory), no Sheffield (out of patch), no Whitby (Heritage Joinery Whitby brand collision).

**Acceptance:** four WF area pages live, each with genuinely local content (period housing stock, conservation areas, postcodes), Pontefract page anchors the Counting House proof, no templated copy.

---

## Phase 6 — Location pages (Phase 2 — Leeds, York)

Build only after Phase 5 pages are indexing in Google (typically 4–6 weeks).

- [ ] `src/pages/areas/leeds.astro` — frame as travel-from-Pontefract specialist, reference Headingley Victorian terraces, Roundhay Edwardian semis, central Georgian. Acknowledge Leeds has more competitors; lean on personal craftsman story + Counting House.
- [ ] `src/pages/areas/york.astro` — frame as travel-from-Pontefract specialist, reference York's listed-building density and City of York Council consent landscape. Lean hardest here on the integrated listed/period service from Phase 3.5.

**Optional Phase 3:** Knottingley, Normanton — if leads from those areas justify the effort.

---

## 2. Cross-cutting items

### 2.1. Hedging discipline

The repair-vs-replacement doc is carefully hedged. Site copy mined from it must preserve that hedging:
- "can often" not "always"
- "typically" not "every time"
- "where appropriate" / "subject to heritage constraints" — keep these qualifiers
- Cost bands shown as ranges, never single numbers

The credentialling angle (conservation officers, surveyors, architects) only works if the claims are defensible.

### 2.2. Image inventory

The site references images in [public/images/](public/images/). New pages will need:
- 4 photos for `/repair-or-replace/` four stages (one per stage)
- Splice method step-by-step photos for `/services/rot-and-splice/`
- A founder photo for the About page
- Hero/header images for each location page (ideally a recognisable local building)

If real photos aren't available yet, ship with placeholders or stock and tag for replacement. Don't block the build on photography.

### 2.3. Schema and SEO

Each new page needs `BreadcrumbList` and either `Service`, `WebPage`, or `Article` schema. The existing [src/layouts/ServiceLayout.astro](src/layouts/ServiceLayout.astro) handles service-level schema; check it covers the new 4th service.

### 2.4. Brand-confusion hygiene (per Appendix A4 + Competition-ideas §1)

- Meta titles + GBP must hammer "Pontefract" and "WF" identifiers to differentiate from Heritage Joinery Solutions Ltd (Manchester) and Heritage Joinery Whitby.
- Monitor SERP overlap quarterly; if confusion materially affects enquiries, business plan contingency around naming kicks in.

### 2.5. What we are *not* building

To stay disciplined and avoid scope creep:
- No blog cluster yet (Appendix recommends one — defer until base pages are live).
- No downloadable lead magnets / PDFs (defer).
- No filtered case studies index (defer until 3–4 case studies exist; currently only Counting House).
- No FAQ expansion beyond the homepage (defer).
- No painting-led service pages (deliberate niche per Appendix A5 "what we don't do").

---

## 3. Sequencing recommendation

**This week (post-Hermes docs landing):**
1. Phase 0 (15 min) — fix bugs.
2. Phase 1 (30 min) — geographic positioning.
3. Get Rob's input on §0.5 blockers (config values, founder name).

**Next week:**
4. Phase 2 — `/repair-or-replace/`. The strategic moat. Single biggest competitive lever.

**Following week:**
5. Phase 3 — service depth + 4th service.
6. Phase 4 — About page rewrite.

**Once site has the depth to support local pages:**
7. Phase 5 — WF area pages.

**Once Phase 5 indexes:**
8. Phase 6 — Leeds, York.

---

## 4. Acceptance criteria for "v2 of the site is shipped"

- [ ] No "Harrogate" or "Sheffield" in primary coverage copy anywhere.
- [ ] Pontefract appears above the fold on homepage hero.
- [ ] `/repair-or-replace/` page exists and is linked from every service page and the homepage.
- [ ] Four service pages live, each with the standard 8-section structure.
- [ ] Doors service page no longer treats repair and replacement as equals.
- [ ] About page is founder-named and first-person where natural.
- [ ] Four WF area pages live (Pontefract, Wakefield, Castleford, Featherstone).
- [ ] No `specialize`/`specialized` anywhere in [src/](src/).
- [ ] [src/config/site.ts](src/config/site.ts) has no `TODO` values in production-shipped fields (phone, WhatsApp, address).
- [ ] Site builds clean with no broken Tailwind classes.
