# Heritage Joiners — PLAN v2 (SEO + Site Expansion)

**Last updated:** 2026-05-04  
**Purpose:** Replace/upgrade PLAN.md to align with current direction: full-service heritage timber repair (not windows-only), Yorkshire-wide ambition, and keyword-led build.

**Primary inputs reviewed:**
- `/home/user/heritage_joiners_research/business_plan.txt`
- `/home/user/heritage_joiners_research/output/04_keyword_research.md`
- `/home/user/heritage_joiners_research/output/05_website_architecture.md`
- `/home/user/heritage_joiners_research/output/07_service_page_strategy.md`
- `/home/user/heritage_joiners_research/output/08_local_seo_strategy.md`
- `/home/user/Documents/heritagejoiners/heritage-joiners-business-plan.txt`
- `/home/user/Documents/heritagejoiners/keyword_research/top_200_keywords_priority.md`
- `/home/user/Documents/heritagejoiners/keyword_research/top_300_curated_keywords_uk_local.md`
- `/home/user/Documents/heritagejoiners/keyword_research/pontefract_structural_keyword_universe_expanded.csv`
- `/home/user/Documents/heritagejoiners/keyword_research/pontefract_beams_keywords_expanded.csv`

---

## 1) Strategic direction (non-negotiable)

1. **Repair-first** for listed/period timber, but **not repair-at-any-cost**.
2. Preserve original fabric wherever structurally/commercially viable.
3. Recommend selective/full replacement when retention is too low.
4. Position as Yorkshire’s specialist for:
   - timber windows
n   - doors/frames
   - rot/splice
   - structural timber (beams/joists/rafters/purlins)
   - timber frames
   - floorboards/joists
   - heritage wall panelling
   - colour/finish matching (stains/oils/waxes/distressing)
5. Local SEO starts **Pontefract/WF corridor first**, then expands Yorkshire-wide.

---

## 2) Ground truth — current live + codebase

Live site: `https://heritagejoiners.pages.dev/`

Current strengths:
- Strong repair-vs-replacement narrative on homepage.
- Existing services and case-study base.
- Clear Pontefract/Yorkshire positioning language in key sections.

Current gaps:
- Service footprint still too narrow (window/door weighted).
- Structural/interior heritage timber service silos missing.
- Canonical appears generic and needs page-level self-canonical checks.
- Contact details still placeholder values in user-facing areas.

---

## 3) Keyword policy (v2)

## 3.1 Use, but clean aggressively
`top_200_keywords_priority.md` and related files contain both value and noise.

### Hard exclude patterns
- glossary/no-intent: `another word`, `definition`, `meaning`, `example sentence`
- irrelevant intent: jobs/career/salary/course
- foreign/irrelevant geos (non-UK target)
- competitor brand strings as primary targets

### Priority include patterns
- Local service intent: `near me`, `pontefract`, `wakefield`, `castleford`, `featherstone`, `knottingley`, `normanton`, `leeds`, `yorkshire`, `wf8`
- Transactional/commercial intent: `repair`, `restoration`, `cost`, `specialists`, `contractor`
- Structural intent: `beam`, `oak beam`, `joist`, `rafter`, `purlin`, `roof timber`, `floor joist`, `timber frame`

---

## 4) Top 50 local SEO targets (v2 working set)

1. heritage joinery near me  
2. heritage joinery leeds  
3. window sill repair near me  
4. timber window repair near me  
5. timber window frame repairs near me  
6. wooden window restoration near me  
7. wooden window frame repair near me  
8. wooden window sill repair near me  
9. sash window repair near me  
10. timber window restoration near me  
11. wooden window repair leeds  
12. wood door repair near me  
13. timber door repair near me  
14. wooden door repair near me  
15. antique door repair near me  
16. wooden door frame repair near me  
17. timber door replacement near me  
18. wood rot repair near me  
19. wood rot repair companies near me  
20. wood rot repair contractor near me  
21. wood rot repair epoxy near me  
22. dry rot repair near me  
23. exterior wood rot repair near me  
24. window wood rot repair near me  
25. joist repair near me  
26. floor joist repair near me  
27. wood joist repair near me  
28. rim joist repair near me  
29. wood floor joist repair near me  
30. ceiling joist repair near me  
31. joist replacement near me  
32. sagging floor joist repair near me  
33. rafter repair near me  
34. roof rafter repair near me  
35. rafter tail repair near me  
36. timber frame repair near me  
37. joiners pontefract area  
38. timber repair near me  
39. wood beam repair near me  
40. structural wood beam repair near me  
41. oak frame specialists near me  
42. oak frame builders near me  
43. oak frame companies near me  
44. oak frames near me  
45. timber repairs near me  
46. timber repair specialists near me  
47. sash window repair leeds  
48. sash cord replacement near me  
49. sash cord replacement cost near me  
50. window restoration near me

---

## 5) Architecture v2 (what to build)

## 5.1 Keep and improve existing pages
- `/`
- `/services/`
- `/services/timber-window-repair/`
- `/services/doors-and-frames/`
- `/services/rot-and-splice/`
- `/about/`
- `/case-studies/`
- `/contact/`

## 5.2 New core services (high priority)
1. `/services/structural-timber-repair/`
2. `/services/oak-beam-repair/`
3. `/services/roof-timber-repair/`
4. `/services/floor-joist-and-floorboard-repair/`
5. `/services/timber-frame-repair/`
6. `/services/heritage-wall-panelling-repair/`
7. `/services/timber-colour-matching-and-finishing/`
8. `/services/listed-building-timber-repair/`

## 5.3 Supporting commercial pages
9. `/services/repair-vs-replacement/`
10. `/services/when-repair-is-not-viable/`
11. `/services/wood-rot-repair-cost-yorkshire/`
12. `/services/oak-beam-repair-cost-yorkshire/`
13. `/services/floor-joist-repair-cost-yorkshire/`

## 5.4 Areas (phase 1 then 2)
Phase 1:
- `/areas/pontefract/`
- `/areas/wakefield/`
- `/areas/castleford/`
- `/areas/featherstone/`
- `/areas/knottingley/`
- `/areas/normanton/`

Phase 2:
- `/areas/leeds/`
- `/areas/yorkshire/`

---

## 6) Service page template (mandatory on each)

1. H1 with service + local cue where natural.
2. Repair-first opener.
3. “What we repair” scope list.
4. Viability logic: when repair is suitable.
5. Honesty block: when replacement is recommended.
6. Typical cost range bands (hedged language).
7. Craft detail block: colour match, distressing, stain/oil/wax finish blending.
8. Listed building practicality notes.
9. FAQ block + schema.
10. Internal links to related services + relevant areas + case studies.
11. CTA block (phone + WhatsApp + contact form).

---

## 7) Technical SEO gates

1. Unique titles/meta per route.
2. **Self-canonical per page** (no homepage-wide canonical override).
3. Breadcrumb schema on all service/area pages.
4. Service schema for service pages.
5. FAQ schema for pages with FAQ sections.
6. Internal linking minimums:
   - every service page links to 3+ related services
   - every area page links to 4+ relevant services
   - homepage links to all core service silos
7. Sitemap contains all new routes.
8. No placeholder contact values on production build.

---

## 8) Build phases (execution order)

### Phase 0 — Cleanup and blockers (fast)
- Fix typos/invalid classes.
- Replace placeholders in `src/config/site.ts` where data available.
- Confirm founder-led About copy direction.

### Phase 1 — Strategic expansion pages
- Build structural/beam/roof/floor/frame/panelling/finishing service pages.
- Update services hub/nav/footer/internal linking.

### Phase 2 — Conversion and trust pages
- Build repair-vs-replacement and not-viable framework pages.
- Add cost guidance pages (hedged ranges, not promises).

### Phase 3 — Area rollout (WF first)
- Build 6 area pages with unique local context and service links.

### Phase 4 — Yorkshire scaling
- Leeds + Yorkshire pages.
- Expand case studies and evidence sections.

---

## 9) Acceptance criteria for PLAN v2 completion

- [ ] Site is no longer windows-only in structure or messaging.
- [ ] Structural timber services (beams/roofs/floors/frames) are represented with dedicated pages.
- [ ] Local pages exist for Pontefract + WF cluster.
- [ ] Repair-first logic is present on every core service page.
- [ ] “When replacement is right” is explicitly included (credibility safeguard).
- [ ] Canonical + schema + internal linking QA passes.
- [ ] Top keyword set is mapped across service and area pages without junk terms.

---

## 10) Next file to produce immediately after this plan

Create: `Hermes/KEYWORD_TO_PAGE_MAP_v2.md`

Include for each page:
- Primary keyword
- 3–8 secondary keywords
- Search intent
- H1 draft
- Meta title draft
- Meta description draft
- Required internal links

This is the direct handoff for implementation in Claude Code.
