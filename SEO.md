# Heritage Joiners — comprehensive SEO audit

**Website:** https://heritagejoiners.co.uk/  
**Audit date:** 18 October 2026, Europe/London  
**Scope:** audit only. No recommendations implemented. This report is the only authorised project change.

## 1. Executive summary

The website has a sound technical SEO foundation. This audit found **no confirmed critical crawling or indexing blocker** on its commercial or editorial pages. The strongest opportunities are to make the service pages more useful and better supported by relevant completed work, while preserving the existing Google Keyword Planner strategy.

The live crawl covered **63 HTML routes**, including the error page and two legal pages. All 63 returned their expected page content and matched the existing local generated HTML byte for byte. Of these, **60 are indexable in their HTML directives and appear in the XML sitemap**; the other three deliberately carry noindex. Actual Google indexing is a separate question and could not be confirmed without Search Console.

Measured strengths:

- Unique rendered titles and meta descriptions on all 63 routes; exactly one H1 on each.
- One correct absolute, self-referencing HTTPS canonical on every route inspected.
- No broken internal page or local file links found; no orphan indexable pages. All indexable HTML pages are reachable within two link steps from the homepage when navigation and footer links count.
- All **238 JSON-LD blocks parse**. Service, breadcrumb, Article, BlogPosting, business and website markup are already present where appropriate.
- All **238 distinct image URLs collected from img src/data-src and Open Graph references returned HTTP 200**. Additional carousel srcset variants and font references resolve locally.
- Static HTML contains the substantive copy and internal links without requiring a client framework. The generated asset directory contains no JavaScript bundle.
- Genuine, detailed project accounts are the site's best content: the Counting House, Dunster windows, the Bradford casement repair, the Wakefield roof repair and other recent jobs.
- Strong repair-versus-replacement explanations, named materials, process photographs, local job details and an identifiable tradesperson establish experience more convincingly than generic promotional copy.
- The researched primary keywords are largely retained. No evidence supports replacing the original strategy.

Most valuable improvements:

1. **Improve selected service FAQs and keyword-list prose** without changing their keyword ownership. Some answers repeat search phrases instead of answering the customer's question.
2. **Add relevant proof to the fitted-wardrobe page** when real examples are available, and strengthen the timber-panelling evidence. These are the two largest relative-demand clusters in the supplied research.
3. **Resolve the inconsistency between the timber-only positioning and documented PVC/uPVC jobs**, including one misleading gallery image description. This requires an accurate scope decision, not automatic removal of real work.
4. **Build local evidence on the weaker town pages** and connect the existing project evidence more effectively.
5. **Correct incomplete case-study Article data and make sitemap modification dates reflect rendered content changes.**

There is no evidence here of a Google penalty, an actual traffic decline, confirmed ranking cannibalisation or failing current Core Web Vitals. Those claims would require evidence not available in this audit.

## 2. Method, instructions and evidence limits

### What was read and inspected

- The supplied complete audit brief, root AGENTS.md and CLAUDE.md; the two instruction files are byte-identical.
- The full content voice guide and original keyword strategy, its parsing/intent instructions, the keyword ownership map, the supplementary stud-partition strategy, relevant implementation rules and earlier audit/fix/link-plan notes.
- All page families and their current generated HTML: 18 service detail pages, eight area detail pages, 14 blog posts, six case-study detail pages, two guide detail pages, their hubs, and every remaining standalone HTML route.
- Shared layouts, schema components, navigation/footer, business configuration, the contact-page implementation, content collection, Recent Work in Area, RSS, robots, redirects, headers, sitemap generation and lastmod maintenance.
- All image attributes and local image existence in the generated pages; real image dimensions read with identify; image file sizes without altering files. Three relevant images were visually inspected, including the wardrobe hero, panelling hero and award image.
- Live HTML GET responses for all 63 routes; robots and both sitemap XML files; representative host/path variants, missing URLs and retired service paths; public image availability and selected external references.

No packages were installed. No git commands were run. **A build was deliberately not run:** npm run build invokes prebuild and can write src/data/lastmod.json, dist and framework caches. That would breach the explicit instruction that SEO.md must be the only file created or modified. Existing dist was inspected read-only and its HTML was verified against production. This establishes what is live, not that a new clean build passes.

### Evidence terminology

- **Confirmed:** visible in current source, generated output or an actual HTTP response.
- **Opportunity:** an observed gap with a plausible benefit; not proof of lost rankings.
- **Needs verification:** an account, measurement or business fact not established here.
- **Critical:** blocks intended crawling/indexing or major site access.
- **High:** a substantial commercial/content opportunity or serious user-facing weakness.
- **Medium:** a material relevance, navigation, data-quality or maintenance problem.
- **Low:** limited SEO impact, social metadata, housekeeping or instruction consistency.

Severity is not a prediction of ranking loss. Change risk means the risk of disturbing existing organic performance or truthful positioning. Recommendations below are proposals for later review, not authorisation to implement them.

### Missing performance evidence

The project contains the **18 original Keyword Planner exports plus the supplementary stud-partition export**. Spot checks of the UTF-16/tab-separated originals confirmed the strategy's values for fitted wardrobes, wall panelling, wooden garden gates, skirting board fitting and second fix carpenter.

No Search Console query/page performance export, index coverage export, verified Google-selected canonical report, backlink export, current conversion report, crawl logs or Business Profile performance export was found. Earlier internal audit notes are historical observations, not current account data.

The Planner figures are **rounded relative-demand buckets for West Yorkshire**, not exact current monthly forecasts. Its competition field concerns advertising competition, not organic keyword difficulty. The 5,000 buckets for fitted wardrobes and wall panelling justify attention relative to smaller supplied clusters, but do not prove attainable traffic.

Mobile PageSpeed API requests for / and /services/windows returned **HTTP 429 quota errors**. No current Lighthouse score, LCP, INP, CLS or CrUX pass/fail is asserted. A July 2026 score in the private notes is historical and must not be presented as today's measurement. No browser viewport or accessibility interaction test was performed.

## 3. Critical problems

**None confirmed.**

The live robots file allows crawling and declares the correct sitemap. No commercial, area, guide, blog or case-study page carries noindex or an observed X-Robots-Tag restriction. Fresh random missing URLs return real HTTP 404 responses rather than a homepage fallback.

This does not establish that all 60 eligible URLs are indexed. Check Search Console before treating an eligible-but-unindexed page as a technical defect or before changing an established title.

## 4. High-priority improvements

### F01 — Service FAQs sometimes read like keyword lists rather than useful answers

**Status:** confirmed content weakness; ranking effect unmeasured.  
**Severity:** High for prioritising useful commercial-page improvements.  
**Change risk:** Medium. Preserve primary keywords, URLs, page structure and relevant secondary coverage; avoid a site-wide rewrite.

**Affected pages and evidence:**

| URL path | Current evidence |
|---|---|
| /services/bespoke-joinery | The wardrobe-cost answer begins “Joiner fitted wardrobes, carpenter to fit wardrobes” before listing more variants. |
| /services/kitchens | The kitchen-cost answer begins with a list of fitter/installer/company terms instead of explaining the fitting scope. |
| /services/cladding-panelling | The period-panelling FAQ groups period repair, fluted panels and feature-wall costs into one search-phrase list. |
| /services/woodworm-treatment | The cost answer lists specialist/company/roof-cost terms before asking for photos. |
| /services/outdoor-carpentry | A decking-cost question receives an answer about gates, fencing and general project size. |
| /services/timber-hardwoods | The price question mainly explains that the business is not a timber yard, leaving the useful material-choice answer underdeveloped. |
| /services/timber-repair | The treatment-cost answer runs through dry-rot/wood-treatment variants and ends with a general assessment question. |
| /services/windows | The sash-repair cost answer groups repair, new timber window prices and double-glazed-window costs together. |
| /services/finishing | The cost answer chains several refinishing-price variants together. |
| /services/skirting-architrave | The cost answer groups several fitting-cost phrases; useful variables are present but the wording is mechanical. |
| /services/first-fix-carpentry | The joist-cost answer uses awkward query-style phrasing, although its span/access/build-up factors are useful. |
| /services/flooring | The cost answer mixes price phrases with a condition question rather than giving a clear scope breakdown. |
| /services/staircases | The renovation-cost answer is broad; repair versus alteration versus replacement needs more practical explanation. |

The exact answer strings are in faqItems near the top of the corresponding src/pages/services/*.astro files and feed both visible copy and FAQPage markup.

**Why it matters:** these are hire-intent landing pages. Answers should help someone understand what work is included, what changes the scope and what information Rob needs. Repeated query variants make the copy less natural and less persuasive. This is not a finding of an algorithmic keyword-stuffing penalty.

**Recommendation:** selectively improve the worst answers first: wardrobes, kitchens, panelling, woodworm and outdoor carpentry. Explain real scope variables, preparation, access, material, finishing and repair decisions without inventing prices. Keep relevant vocabulary naturally distributed through the page. Edit the shared FAQ data so visible answers and markup stay consistent.

FAQ markup itself is not a traffic opportunity to expand: Google's current documentation records that FAQ rich results stopped appearing from **7 May 2026**. Keep useful visible answers; do not promise FAQ snippets or remove sound markup merely to chase a tool score. [Google Search documentation updates](https://developers.google.com/search/updates)

### F02 — The fitted-wardrobe landing page lacks fitted-wardrobe proof

**Status:** confirmed evidence gap; improvement opportunity.  
**Severity:** High opportunity.  
**Change risk:** Low for adding genuine evidence; High if claims or examples are invented.

**Affected URL:** https://heritagejoiners.co.uk/services/bespoke-joinery  
**Source:** src/pages/services/bespoke-joinery.astro.

The page targets fitted wardrobes correctly in its title, H1 and main subject. It contains approximately 430 words of main text, including the shared area band. Its only main image is a hand plane and shavings on a bench; visual inspection confirms it is not a wardrobe. Its case-study link leads to the Counting House's broader oak joinery, not a wardrobe installation. Two adjacent list entries also repeat fitted/made-to-measure wardrobes with little added information.

**Why it matters:** the largest relative-demand cluster in the supplied research is competing for customers who need confidence in layout, storage, doors, awkward openings and the finished appearance. General workshop skill is relevant but does not demonstrate the actual product the visitor is seeking.

**Recommendation:** retain /services/bespoke-joinery and the established fitted-wardrobes target. When Rob has a documented job, use his unchanged, approved photographs and a compact explanation of the room problem, internal layout, scribing, doors, hardware and finish. Add only scope that is actually offered. Do not create a competing fitted-wardrobes service URL. Until photos exist, improve the practical decision detail without implying that unrelated oak work is a wardrobe example.

The panelling page also deserves early attention because of the equally large Planner bucket, but its first task is the material/scope inconsistency in F03.

## 5. Medium-priority findings and opportunities

### F03 — Timber positioning conflicts with documented non-timber work

**Status:** confirmed inconsistency; current intended business scope needs verification.  
**Severity:** Medium.  
**Change risk:** Medium–High: removing genuine jobs or retargeting the service could lose useful evidence and enquiries.

**Affected URLs:**

- https://heritagejoiners.co.uk/services/cladding-panelling
- https://heritagejoiners.co.uk/blog/bathroom-wall-panels-doncaster
- https://heritagejoiners.co.uk/blog/mock-tudor-boarding-repair-castleford
- https://heritagejoiners.co.uk/gallery

**Evidence:** the service page says Rob stays on the timber side of panelling, while linking to the PVC bathroom-panel job and the uPVC mock-Tudor replacement. The original research deliberately excluded PVC and other non-timber panel searches. The gallery describes /images/services/cladding-panelling/wall-panelling-fitted-doncaster.webp as timber wall panelling, while visual inspection shows the same type of marble-effect wet-wall setting as the PVC job. The image alone cannot establish its material; the site must identify it truthfully rather than infer timber from the service category.

The flooring page's laminate installation, supported by a specific job and an installer claim, also represents broader current content than the original timber-focused export. This is not evidence that its floor-sanding primary should change.

**Why it matters:** the service promise and the proof should agree. A visitor looking for decorative timber panelling may interpret the bathroom image as a material/product mismatch. The risk is misleading positioning and irrelevant enquiries, not a demonstrated indexing penalty.

**Recommendation:** Rob should confirm the current service scope. Keep genuine completed jobs truthful. If PVC/uPVC jobs are accepted exceptions, distinguish them clearly from decorative timber work and correct any inaccurate alt text. Prefer a real timber-panelling example to demonstrate the existing primary offer when available. Do not expand into broad plastic-product keywords, delete successful posts or change the original keyword map automatically.

### F04 — Four town pages have little unique local evidence

**Status:** confirmed content gap; no doorway or duplicate-content penalty established.  
**Severity:** Medium.  
**Change risk:** Low for genuine additions; High for invented local projects or a blanket location-page expansion.

| Affected URL | Observed main-text words* | Specific limitation |
|---|---:|---|
| https://heritagejoiners.co.uk/areas/featherstone | 210 | Broad housing description and service list; no matching local job card. |
| https://heritagejoiners.co.uk/areas/knottingley | 211 | Similar general template; no matching local job card. |
| https://heritagejoiners.co.uk/areas/normanton | 196 | Limited local decision detail; no matching local job card. |
| https://heritagejoiners.co.uk/areas/leeds | 210 | Selective travel is explained honestly, but no completed Leeds job is evidenced. |

*Approximate counts include the main heading, link labels and shared area band; they are diagnostic context, not minimum word-count targets.

The pages are not exact duplicates, and a shared service list is normal. Pontefract, Wakefield and Castleford are stronger because real jobs are linked; Yorkshire has broader coverage and actual work.

**Why it matters:** a town name plus a similar service list gives less reason to choose that page for a local enquiry than actual work in that town. It may also provide less information gain than the service page.

**Recommendation:** add a real project, a relevant building-specific example or useful local scope detail as evidence becomes available. Do not invent neighbourhood expertise or tag work with nearby towns where it did not happen. Retain honest Leeds travel qualifications. Judge indexation and query performance before considering consolidation or noindex.

### F05 — Several useful links are still missing despite strong overall navigation

**Status:** confirmed opportunities, not orphan-page errors.  
**Severity:** Medium.  
**Change risk:** Low for a few relevant links in existing copy.

| Source URL(s) | Destination | Evidence and benefit |
|---|---|---|
| /areas/pontefract, /areas/wakefield, /areas/castleford, /areas/featherstone, /areas/knottingley, /areas/normanton, /areas/leeds | /services/bespoke-joinery | All seven town service grids omit fitted wardrobes/bespoke joinery. Leeds mentions built-ins but does not link the phrase to its service page. This is the most commercially valuable missing town-to-service link. |
| The same seven town service grids | /services/extensions-conversions, /services/finishing, /services/timber-hardwoods | These three services are also absent from the main service grids. Add only where useful; global footer discovery already works. |
| /services/kitchens | /blog/kitchen-fitting-wakefield-rental-property | The recent genuine kitchen job links back to the service and appears in Wakefield, but the kitchen service does not yet link to it. |
| /gallery | Relevant service and project pages | Gallery item links lead to image files for the lightbox. No main-content links lead to the service/project behind the photograph. Add a small number of relevant links without breaking the lightbox. |
| /services/timber-hardwoods | /case-studies/counting-house/oak-front-door and /case-studies/counting-house/oak-staircases | The oak/materials page has no direct project proof link in main content. Existing case studies are highly relevant. |
| /services/timber-repair | /case-studies/counting-house/beam-repair-and-restoration | The service demonstrates window repair but lacks a direct link to the structural beam account. This would support the beam-repair secondary cluster. |
| /blog/flat-roof-repair-wakefield | /areas/wakefield | The area links to the job, but the job lacks the reciprocal contextual town link. Existing service links are already good. |
| /services/first-fix-carpentry | /services/roofing-carpentry | A relevant optional handoff from roof structure/flat-roof set-out. |
| /services/maintenance-repairs | /services/doors | Optional deeper destination for a door repair beyond minor adjustment. |

Use natural destination descriptions such as fitted wardrobes, the Wakefield kitchen refit, oak staircases and beam repair. Do not force exact-match keywords into every anchor. Header, footer and the repeated AreaLinks band provide discovery but should not be confused with unique editorial recommendations.

Many links in the old internal link plan are **already implemented**: stairs to panelling; timber repair to windows and woodworm; second fix to doors and skirting; finishing to flooring; kitchens to bespoke; and reciprocal cladding/outdoor links. They should not be reported as still missing.

### F06 — Doncaster stud-wall job is not tagged for Recent Work in Area

**Status:** confirmed omission.  
**Severity:** Medium.  
**Change risk:** Low.

**URL:** https://heritagejoiners.co.uk/blog/how-to-build-a-stud-partition-wall  
**Source:** src/content/blog/how-to-build-a-stud-partition-wall.md.

The post explicitly documents a real Doncaster job but has no areas array. It therefore cannot participate in the Yorkshire matchAny feed, or a future matching town section, despite the instructions requiring actual-town tagging for job posts.

**Recommendation:** in a separately authorised content task, tag the real town, Doncaster. Do not tag Wakefield or another research-market town instead. The garden-gate post also has no area tag, but its actual town is not established in the post; confirm it with Rob before adding one. The two general explainers correctly need no town tag merely to fill a feed.

### F07 — Case-study Article data ignores the page's real image and description

**Status:** confirmed structured-data quality defect; JSON syntax is valid.  
**Severity:** Medium.  
**Change risk:** Low if limited to accurate structured data.

**All six affected URLs:**

- /case-studies/counting-house
- /case-studies/counting-house/beam-repair-and-restoration
- /case-studies/counting-house/oak-frames-and-joinery
- /case-studies/counting-house/oak-front-door
- /case-studies/counting-house/oak-staircases
- /case-studies/dunster-windows

**Evidence:** each live Article block uses the default /images/heritage-joiners-social-card-v2.jpg and omits description, although the page has a specific description and a real ogImage. src/layouts/CaseStudyLayout.astro:38 spreads articleProps only; it does not pass the existing page description or ogImage into ArticleSchema. Its articleProps interface also omits description.

**Why it matters:** the structured account is less specific than the page. This does not invalidate the page for ordinary indexing, and description is not being described here as a mandatory Google Article property. Representative images and accurate authorship/dates help communicate the article. [Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article)

**Recommendation:** later, pass the existing accurate description and an absolute representative project-photo URL into the Article data using the established component. Validate semantics and Rich Results Test output after any authorised change. Do not alter dates to suggest freshness.

The five Counting House Articles all declare 2024-01-01. That might be a real publication date, but it is unverified and looks uniform. Confirm it before changing it; it is not proven false by the later award date. BlogPosting author data already identifies Rob and links to About; do not replace it with anonymous organisation-only attribution.

### F08 — lastmod maintenance follows source mtimes rather than rendered content changes

**Status:** confirmed implementation limitations; likely stale index date needs deployment-history verification.  
**Severity:** Medium.  
**Change risk:** Low–Medium for an isolated maintenance correction; avoid resetting the entire map.

**Affected files:** scripts/update-lastmod.mjs, src/data/lastmod.json, astro.config.mjs.  
**Affected live evidence:** /blog has sitemap lastmod 2026-09-17 while it lists the kitchen post dated 2026-10-18. This is consistent with the missing collection dependency and is a likely stale index date. Publication dates alone cannot prove when a listing first changed; verify deployment history before assigning the correct lastmod.

The maintenance script reads only individual .astro and blog Markdown mtimes. It does not track dependencies from blog posts to /blog, to a service's linked work or to area cards. It also does not hash file contents: an isolated touch can advance a date even if the content did not change. The guard skips when all source mtimes are within ten seconds; this is a heuristic, not an explicit guarantee that every CI clone is detected.

**Why it matters:** inaccurate dates reduce the usefulness of a signal intended to describe meaningful updates. This is not an indexing blocker. The current map's many 18 October dates are not automatically wrong; recent real edits may explain them.

**Recommendation:** retain committed per-route dates, but later make date updates depend on meaningful changes and relevant collection/component dependencies. Verify CI behaviour explicitly. Correct only dates backed by actual content changes; do not stamp today on all pages. Google ignores sitemap priority/changefreq and expects lastmod to reflect significant updates. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

### F09 — Two titles no longer explicitly contain the researched primary phrase

**Status:** confirmed strategy/implementation divergence; benefit of changing titles needs performance evidence.  
**Severity:** Medium review priority; not a demonstrated ranking error.  
**Change risk:** Medium–High without Search Console baseline.

| URL | Researched primary | Current title before brand suffix | Current H1 |
|---|---|---|---|
| /services/outdoor-carpentry | wooden garden gates | Outdoor Carpentry in Pontefract & Wakefield | Wooden Garden Gates in Pontefract, Wakefield & West Yorkshire |
| /services/skirting-architrave | skirting board fitting | Skirting & Architrave in Pontefract & Wakefield | Skirting Board Fitting in Pontefract, Wakefield & West Yorkshire |

The H1s and content preserve the original targets. /services/second-fix-carpentry similarly uses “Second Fix Carpentry” in the title and the researched “Second Fix Carpenter” in H1; that natural variant alone is not an SEO error.

**Recommendation:** record these divergences against the strategy, then inspect query impressions, clicks and Google title rewrites before deciding whether a title change is warranted. Preserve the original primary ownership. This audit does not supply replacement titles or recommend a blanket exact-match rewrite.

Every service detail title includes Pontefract and Wakefield but omits West Yorkshire, while H1s include the region. The root conventions require the region in titles. This is an instruction-consistency observation, not evidence that all 18 titles need changing. Do not drop a town, or treat a 60-character target as a reason to weaken the researched targeting. Google has no fixed character limit for title elements; display truncation is width-dependent. [Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link)

### F10 — Heritage service evidence is strong, but structural repair could use a clearer handoff

**Status:** opportunity, not a missing-service or authority failure.  
**Severity:** Medium.  
**Change risk:** Low for linking existing evidence; Medium for expanding technical claims.

**Affected:** /services/timber-repair, /services/windows, /services/extensions-conversions, /services/roofing-carpentry and the Counting House beam-repair page.

The strongest current repair proof on the service side is window-led. The beam case study gives concrete threaded-bar/washer-plate detail, while the structural/conversion and roof pages explain broader work. Ownership between these pages should remain clear: general decay/splice/beam repairs on timber-repair; window operation/sash/casement repairs on windows; roof structure on roofing-carpentry; conversion packages on extensions-conversions.

**Recommendation:** bring existing beam evidence into the timber-repair journey through a direct link and a concise, truthful scope explanation. For any additional structural case account, distinguish Rob's carpentry from structural design/specification where relevant and use actual project records. Do not create separate sash-restoration, casement-repair, listed-building-joiner and beam-repair service pages merely to repeat established targets.

## 6. Low-priority findings and housekeeping

### F11 — Open Graph dimensions are hardcoded for differently shaped photos

**Status:** confirmed. **Severity:** Low. **Change risk:** Low if metadata-only; do not alter image files.

**Source:** src/layouts/BaseLayout.astro always emits og:image:width 1200 and height 630. **Affected:** all 51 routes using non-default OG images; the metadata appendix identifies each page's OG URL. Examples: /about uses a 748×1000 image, /gallery uses 619×1100, /services/windows uses 2880×1440, /guides/standard-door-sizes uses 1500×844, and /case-studies/dunster-windows uses 1920×1080.

This can misdescribe a social-preview image. It is not a canonical or ordinary ranking defect. A later approved metadata change could use actual dimensions or omit unsupported dimensions, retaining the unchanged real photographs. Shared layout structure is protected by project instructions, so any implementation must respect that constraint.

Blog and guide pages also inherit og:type website. Article-specific social metadata is an optional improvement, not a condition of indexing or valid Article JSON-LD.

### F12 — Some photos exceed the owner's intended export size

**Status:** confirmed delivery-size observation; current CWV impact not measured.  
**Severity:** Low, rising to Medium only if performance measurement identifies a real bottleneck.  
**Change risk:** Low for asking Rob for replacements; High if existing compressed files are recompressed without permission.

| File under public/images/ | Size in bytes | Principal affected pages |
|---|---:|---|
| case-studies/dunster-windows/sash-window-refurbishment-pontefract.webp | 530,924 | /case-studies/dunster-windows, /case-studies, /gallery |
| blog/timber-window-sill-repair/repaired-timber-windows-front-elevation-pontefract.webp | 530,924 | /blog/rotten-timber-window-sill-repair-pontefract |
| blog/commercial-door-closers/refitted-staircase-handrail-commercial-stairs.webp | 243,410 | Commercial door-repair post |
| blog/herringbone-laminate-flooring-hallway/grey-oak-herringbone-laminate-flooring-hallway.webp | 240,748 | Flooring post; /blog and Pontefract/Yorkshire recent-work cards |
| gallery/grey-oak-herringbone-laminate-flooring-hallway.webp | 240,748 | /gallery |
| blog/kitchen-fitting-wakefield/light-grey-fitted-kitchen-wakefield.webp | 226,406 | Kitchen post; /blog and Wakefield/Yorkshire cards |

Several bathroom-panel images are also around 174–226 KB. These are not multi-megabyte raw phone files, and size alone is not proof of a slow page. Measure the LCP element and actual network cost first. If new exports or responsive variants are justified, Rob supplies them. **Never resize, recompress, re-encode or overwrite his supplied photos.**

### F13 — Intrinsic image attributes differ from real dimensions in fixed display slots

**Status:** confirmed. **Severity:** Low. **Change risk:** Low only if the fixed display/crop is preserved.

There are 62 image occurrences whose width/height attributes do not exactly match the file dimensions, mostly repeated 600×192 card slots across /, /services, /blog, /guides and the four populated recent-work area pages. The icons are displayed at half their file dimensions. The mouldings guide's large-custom-skirting photo declares 1080×1080 but is actually 1080×856. Two flat-roof body images declare larger dimensions than their actual files, with almost the same aspect ratio.

**Why it matters:** this departs from the project rule to record real dimensions. However, CSS fixes the card height or containing aspect ratio, so these should not be reported as proven CLS faults. The previously documented wrong free-flowing About/window-post dimensions are no longer present.

**Recommendation:** treat as housekeeping during a later authorised image-markup pass, preserve all CSS crop sizes, and verify before claiming a performance improvement. Do not change the image bytes.

### F14 — Deferred carousel images rely on JavaScript for their src

**Status:** confirmed implementation tradeoff. **Severity:** Low. **Change risk:** Medium: an eager-loading change could worsen homepage performance.

**URL/source:** /; src/pages/index.astro. Slides 2–5 use data-src/data-srcset rather than a native initial src. Slide 1 correctly has src, srcset, sizes, eager loading and high priority.

Secondary slide discovery depends on script execution. This does not stop crawling the page or its primary image, and the deferred loading has a clear performance purpose. If image-search coverage for a particular secondary image becomes important, first check whether that photo already appears natively in its relevant project/gallery page. Prefer an existing crawlable context over loading every carousel slide eagerly.

### F15 — Below-the-fold benefit icons load eagerly; several blog lead photos lack explicit priority

**Status:** confirmed markup observations, not measured LCP failures. **Severity:** Low. **Change risk:** Low for correct lazy loading; Medium if lead-image priority is guessed.

On /, the six /images/benefits/01-cost-savings.webp through 06-property-value.webp images are ordinary eager images below the hero. In the stud-wall, bathroom-panel, external-cladding and commercial-door posts, the first photograph has neither loading=lazy nor fetchpriority=high. It is therefore eager by default; it is **not** incorrectly lazy-loaded.

Later, lazy-load genuinely below-the-fold benefit images. Check the actual LCP/viewport before promoting any blog image. Do not add high priority to every photograph. The header logo is appropriately eager and is not a defect; decorative/redundant empty alt attributes are also intentional.

### F16 — Minor schema housekeeping

**Status:** confirmed semantics/graph observations. **Severity:** Low. **Change risk:** Low.

- All 18 Service objects emit priceRange directly. Schema.org documents that property for LocalBusiness, not Service. The shared business object already carries the range; avoid inventing Offers or numeric prices to satisfy a validator. Source: src/components/schema/Service.astro:52. [Schema.org priceRange](https://schema.org/priceRange)
- /privacy-policy and /facebook-data-deletion use schema="none" for the business block, but WebSite remains and points to /#localbusiness, defined on the homepage. This is a cross-document reference, not proof of an invalid graph or missing business site-wide.
- BreadcrumbList exists on service, area, case-study and guide pages. Most are schema-only rather than a visible breadcrumb navigation. This is primarily an optional navigation improvement; absence of visible breadcrumbs alone is not treated as a confirmed Google violation. Preserve the existing visual patterns.

All JSON parses; Google feature eligibility and property semantics are separate from syntax. No missing self-serving review stars should be “fixed” by adding AggregateRating: Google's rules exclude self-serving LocalBusiness/Organisation review snippets. [Google review guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

### F17 — A few project-instruction/credibility details need owner review

**Status:** confirmed discrepancies; no direct ranking penalty established.  
**Severity:** Low. **Change risk:** Medium for changing claims, reviews or legal indexing without confirming intent.

- **Legal noindex:** /privacy-policy and /facebook-data-deletion deliberately use noindex, follow and are excluded from XML. This contradicts the root rule saying only 404 is noindex, but the legal-page source explicitly documents the intent. There is no commercial indexation loss. Resolve the instruction inconsistency; do not blindly remove these directives.
- **Reviews:** /reviews currently publishes six named Google reviews and a 5.0 summary; /case-studies/dunster-windows reproduces one. Source comments identify them as genuine. The audit did not authenticate them or their approval against a live Business Profile. Root instructions/private notes still describe approval restrictions. Confirm records/approval; do not call them fabricated, remove them automatically or add new testimonials.
- **Award alt:** the gallery's award image describes Heritage Joiners receiving the award. The approved claim is that the project received the Heritage Award at Pontefract Civic Society's 2025 Design Awards. Use precise project attribution in any later approved wording pass. The linked Civic Society URL has 2026 in its slug, but its actual content explicitly reports the 2025 awards and names the Counting House: **the URL is not an incorrect-year reference.** [Civic Society award evidence](https://www.pontefractcivicsociety.org.uk/design-awards-2026/)
- **Email:** no plaintext business email was found in generated HTML. The source nevertheless contains a literal address in src/components/ui/EmailLink.astro and a matching address string in a comment in functions/api/contact.ts, rather than the strict encoded-only source convention. This is source-rule housekeeping, not a public-email exposure in the inspected output. Do not add email to configuration or business schema.
- **Heading scale:** /, /repair-or-replace and the two case-study parents use lg:text-6xl H1s; the shared blog template uses text-3xl on small screens. Several homepage H2s also exceed the stated scale. This is a design-convention difference, not an H1-count problem or an SEO reason to redesign the site. Protected styles/layout must remain untouched without a separate appropriate task.

The only heading-level skip found was the 404 page going from H1 to footer H3 headings; that noindex error page does not warrant SEO prioritisation.

### F18 — Small supporting-page metadata/content opportunities

**Status:** confirmed observations; optional improvements. **Severity:** Low. **Change risk:** Low–Medium; use data before changing titles.

- /gallery has the informative H1 “Carpentry & Joinery Work Across West Yorkshire” but the short title “Gallery | Heritage Joiners”. A descriptive title is a possible future improvement, not a mandatory fix or a reason to change its URL.
- /reviews is primarily presented as a place to leave a review, although it now contains six existing reviews. If the page is intended to reassure new customers too, consider that purpose in a future approved wording review; do not invent review content.
- /facebook-data-deletion has a 114-character meta description, below the local 130–165 convention. It is noindex, so this is negligible SEO housekeeping.
- /blog/what-is-second-fix-carpentry has about 307 main-text words including the CTA. It answers a narrow question and need not meet an arbitrary length. Add genuinely useful first-fix/second-fix distinctions or examples only if the query data shows a gap.
- /services/bespoke-joinery and /services/cladding-panelling include some legacy heritage-focused category wording despite modern fitting being the main offer. Keep restoration as relevant proof, while explaining the primary everyday job first. Do not spread a new restoration target across unrelated pages.

## 7. Keyword targeting and search-intent map

This map preserves the original strategy. Secondary examples are selected from the supplied research/ownership map; they are not new volume claims.

| Owner URL | Established primary | Supporting terms / intended intent | Audit judgment |
|---|---|---|---|
| / | joiner near me | carpenter near me, joinery services, carpentry services; local hire | Correct broad home-page role. Keep researched near-me phrasing. |
| /contact | Contact / support the site-wide hire-intent cluster | find a joiner, local enquiry | Distinct contact title and practical enquiry flow; no need to duplicate the homepage title. |
| /services/doors | door hanging | internal/external door fitting, fire door installation, door frame repair | Clear hire intent; useful reciprocal sizes-guide link and oak-door proof. |
| /services/windows | sash window repair | timber window repairs, draught proofing, timber window restoration, casement work | Strong owner for sash/casement/window-restoration commercial queries. |
| /services/staircases | staircase fitter | bespoke staircase, renovation, repair, handrails/spindles | Appropriate service and case-study connection. |
| /services/kitchens | kitchen fitter | fitted kitchens, worktop fitting, kitchen installer | Correct target; improve FAQ and connect recent proof. |
| /services/skirting-architrave | skirting board fitting | architrave fitting, profile matching, picture/dado rails | H1/content aligned; title divergence merits evidence-led review only. |
| /services/flooring | floor sanding | wood flooring fitter, wood floor repair, floorboard replacement | Preserve floor-sanding primary; laminate fitting is a documented secondary/current service. |
| /services/first-fix-carpentry | first fix joiner | stud partition walls, floor joists, timber partition walls | Appropriate commercial owner; good how-to/loft links. |
| /services/second-fix-carpentry | second fix carpenter | finishing joinery, boxing in pipes, doors and trims | Appropriate; natural title variant is not inherently wrong. |
| /services/roofing-carpentry | roof carpenter | cut roof, rafters, dormers, timber roof repairs | Good practical scope and real roof-job handoff. |
| /services/extensions-conversions | attic conversion | dormer loft conversion, timber frame construction/extensions | Keep primary; clarify carpentry package/scope using real plans and work. |
| /services/bespoke-joinery | fitted wardrobes | built-in wardrobes, alcove units, shelving, window seats | Large relative-demand cluster; highest evidence gap. |
| /services/outdoor-carpentry | wooden garden gates | fencing, decking, pergolas, supplied/fitted gates | H1/content aligned, broader current title; retain ownership. |
| /services/cladding-panelling | wall panelling | tongue and groove, hallway/stair panelling, external timber cladding | Large relative-demand cluster; material/proof consistency needs attention. |
| /services/timber-repair | timber repair | rot/splice/scarf repair, timber beam repair, listed/period fabric | Main owner for general decay and structural timber repair; direct beam proof would help. |
| /services/woodworm-treatment | woodworm treatment | timber treatment, woodworm in joists, damage repair | Appropriate target; make assessment/treatment scope and FAQs more concrete. |
| /services/finishing | wood staining | wood oiling/waxing, French polishing, colour matching | Keep finishing distinct from the flooring owner's sanding offer. |
| /services/timber-hardwoods | oak joinery | hardwood choice, reclaimed/green oak, Accoya, iroko | Materials/advice within joinery, not a timber-merchant landing page. |
| /services/maintenance-repairs | general carpentry repairs | door adjustment, locks, shelving, minor joinery repairs | Ownership map supplies this target; export 18 is site-wide hire intent, not a separate maintenance-page primary. |
| /areas/[town] | carpenter & joiner in the actual town | town-specific general hire | Correct local-intent layer; stronger with genuine jobs. |
| /areas/yorkshire | carpenter/joiner across Yorkshire | selected wider timber-led work | Regional overview, not another fake local premises page. |
| /guides/standard-door-sizes | standard door sizes UK | measuring, leaf/frame/opening, metric/imperial | National informational intent, appropriately feeds door service. No guide volume invented. |
| /guides/skirting-architrave-timber-moulding-profiles | skirting/architrave/moulding profiles | torus, ogee, identification, matching | Informational reference, feeds fitting/repair services. |
| /repair-or-replace | timber repair versus replacement assessment | retained fabric, repair decision | Framework/reassurance; keep distinct from the commercial repair page. |
| /case-studies/counting-house and children | Named-project proof and individual oak/beam tasks | project-specific commercial evidence | Good parent/child structure; no generic duplicate service pages needed. |
| /case-studies/dunster-windows | Named-project sash/timber-window refurbishment in Pontefract | repair/maintenance/refinish evidence | Substantial original proof supporting windows and finishing. |
| /blog | Advice and completed-work discovery | informational/project long tails | Good supporting layer, not a competing general service page. |

### Heritage cluster boundaries

Retain primary commercial ownership on windows and timber-repair. Case studies and actual job posts can naturally discuss restoration, conservation and listed status as evidence. Roofing, oak joinery and finishing can mention relevant specialist work without turning every title into a listed-building target.

The Bradford post distinguishes an actual listed building and cites council guidance; the Dunster case study explicitly identifies the building as **unlisted within a conservation area**. That distinction is valuable. Do not relabel all old-building jobs as listed work. No evidence supports replacing the researched general-joinery positioning with a repair-only business identity.

## 8. Keyword cannibalisation and duplicate-content report

**No ranking cannibalisation is confirmed.** Overlapping vocabulary alone is not cannibalisation. A real diagnosis needs the same query's performance across multiple URLs over time, the intended search role, and conversion/landing-page evidence.

| Cluster / URLs | Observed relationship | Current seriousness / risk | Recommendation |
|---|---|---|---|
| / and /contact and /services/maintenance-repairs | General hire, enquiry and minor repair roles are distinguishable. | Low potential overlap; High risk from unnecessary broad retargeting. | Keep home as broad hire owner, contact as enquiry page, maintenance as small-job service. |
| /services/windows and /services/timber-repair | Both discuss window decay; timber-repair already links window terms to windows. | Medium monitoring priority; no confirmed harm. | Preserve window operation/restoration versus general rot/beam repair distinction. |
| /services/windows, /case-studies/dunster-windows, /blog/can-timber-windows-be-repaired, /blog/listed-casement-window-repair-bradford | Service, named-project account, general repair explainer and actual listed job have different roles. | Low–Medium potential; High risk if strong proof is merged blindly. | Keep; use service links and page-specific headings. Check query/page data before consolidation. |
| /case-studies/dunster-windows and /blog/rotten-timber-window-sill-repair-pontefract | Both concern the same real job/repair and reuse some photographs. The case study covers the wider 11-window/door refurbishment; blog focuses on failed cills/splices. | Medium overlap to monitor; not exact duplicate main text. | Maintain narrow defect/repair angle versus whole-project story; cross-link and avoid copying whole sections. |
| /services/flooring and /services/finishing | Both mention floor sanding/refinishing; finishing links to flooring for floor sanding. | Medium monitoring priority; ownership is already supported. | Keep floor sanding on flooring, finishing for staining/colour/finish work. |
| /services/doors and /services/second-fix-carpentry | Doors are one element of second fix; second fix already links to doors. | Low. | Preserve broad package versus individual door-service distinction. |
| /services/first-fix-carpentry and /blog/how-to-build-a-stud-partition-wall | Commercial package versus detailed how-to/job explanation. | Low current overlap. | Keep both. The supplementary proposed stud-partitions service is a conditional opportunity, not a missing required page. |
| /services/cladding-panelling and /services/outdoor-carpentry | External cladding overlaps with outdoor joinery; reciprocal links exist. | Low–Medium. | Keep decorative/external cladding owner versus gates/fencing/outdoor structures. |
| /repair-or-replace and /blog/can-timber-windows-be-repaired | General framework versus window-specific decision detail. | Low–Medium. | Preserve scopes and links; do not merge just because both discuss repair. |
| Town pages and their service pages | Town hire intent differs from a specific service; location lists are shared. | Medium content-quality opportunity, not proven cannibalisation. | Add real local evidence; do not build every service × town combination. |
| Counting House parent and four children | Parent summarises; children explain particular work. | Low. | Retain reciprocal parent/service links and distinct task detail. |

No exact duplicate main-body text was found across the 63 pages. Shared navigation, area bands, CTAs, repeated phone details and similar service grids are expected. Reusing original photographs across a project, service and gallery is not a duplicate-content penalty.

The tested HTTP/www, .html, index and trailing-slash variants redirect to the preferred host/path. Query parameters can remain fetchable while the canonical drops them; that is not itself a fault. See the live technical evidence below.

## 9. Recent Work in Area: current assessment

This system is already more developed than the root instructions describe.

- All **eight area detail pages** include the component.
- It filters non-draft posts, matches town names case-insensitively, sorts newest first and defaults to three cards.
- It produces ordinary server-rendered links, dated cards and photographs; there is no client-side API dependency.
- It renders nothing when no post matches, avoiding empty headings.
- Yorkshire uses matchAny, so real towns do not need inaccurate Yorkshire tags simply to participate.

| Area page | Live recent-work cards |
|---|---|
| /areas/pontefract | Herringbone laminate hallway; rotten window sill repair |
| /areas/wakefield | Kitchen fitting; commercial door repairs; flat roof repair |
| /areas/castleford | Mock Tudor board repair; external timber cladding |
| /areas/yorkshire | Latest kitchen, herringbone-floor and mock-Tudor jobs |
| /areas/featherstone | None: no matching tagged post |
| /areas/knottingley | None: no matching tagged post |
| /areas/normanton | None: no matching tagged post |
| /areas/leeds | None: no matching tagged post |

Ten posts currently have actual-town tags. Four do not: the two general explainers, the Doncaster stud-wall job and the garden-gate account. The first two are not tagging errors; the stud-wall omission is F06; the gate location needs confirmation.

**SEO value:** the system links actual work to a relevant local hiring page, differentiates otherwise similar area pages and lets detailed posts support the service/area journey without writing the same content twice. It does not guarantee local rankings or require adding every nearby town to every post.

**Future safeguards:** retain genuine town names, selected newest cards and meaningful links. The Yorkshire alt-text helper currently appends Yorkshire rather than inventing a narrower location, which is acceptable. Card alt labels repeat post titles; that is not a missing-alt error. Do not add a Bradford/Doncaster/South Kirkby area page solely to make every tag immediately display: the Yorkshire feed can use them as newer jobs appear.

## 10. Local SEO, authority and content opportunities

### Business identity and geography

The configured business identity, phone, WhatsApp, hours, locality and social link are centralised and flow into footer/contact/schema. The business is based in Ackworth, Pontefract, not claimed to have offices in every service town. HomeAndConstructionBusiness is an appropriate LocalBusiness subtype; the stable /#localbusiness ID is used by Service provider and BlogPosting publisher data.

The schema includes Ackworth, West Yorkshire, postcode, coordinates, phone, weekdays/hours, areaServed and Facebook sameAs. A full street address is deliberately absent. That should be verified against how the business operates and its Business Profile, not “fixed” by inventing or exposing a private address. Google describes LocalBusiness address as the physical business location, while a service-area operation may deliberately hide its address in its profile. Rich-result eligibility for this exact markup remains unverified. [Google LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business)

| Verification opportunity | Evidence / affected scope | Severity | Risk / next action |
|---|---|---|---|
| Business Profile NAP, category, address visibility, service areas and hours | /contact, all business schema; actual Business Profile account not available | Medium verification | Low for checking; do not change public/private address without business context. |
| Review authenticity, approved republication and current totals | /reviews, Dunster case study | Medium verification | Medium; keep source records and check whether the displayed six-review total is a selected set or current total. No invented reviews. |
| Pergo installer credential | /about, /services/flooring; both state certification/registration | Low verification/opportunity | Check current evidence and link an approved public listing/certificate if available. Absence of a link is not proof the claim is false. |
| Historical work/qualifications | /about and relevant services | Low opportunity | Add verifiable evidence only where useful; do not invent memberships, insurance claims or accreditations. |
| Local citations and project attribution | Whole business; no backlink/citation export supplied | Medium opportunity, unmeasured | Check genuine directories, project collaborators and existing mentions. This audit did not contact anyone or create listings. |

The configuration includes Bradford, and a real Bradford job supports that coverage. No Bradford landing page exists; that is an opportunity to evaluate with query/enquiry evidence, not a broken route. Doncaster and South Kirkby job posts are valid evidence of where a specific job occurred; they do not automatically establish a standing offer for every small job in those areas.

### Content gaps worth considering without new competing pages

| Existing owner | Useful addition when evidence exists | Priority | Effort / change risk |
|---|---|---|---|
| /services/bespoke-joinery | Actual wardrobe/alcove job, interior layout, scribing, door and hardware choices | High | Medium; Low if truthful and additive |
| /services/cladding-panelling | Actual timber hallway/stair/tongue-and-groove installation and setting-out decisions | High after scope clarification | Medium; Medium scope risk |
| /services/timber-repair | Beam-end/scarf/structural repair evidence and direct existing beam-case link | Medium | Low–Medium; verify specification |
| /services/windows | More direct sash mechanism/cord/balance/draught-proofing examples as completed | Medium | Medium; preserve established sash target |
| /services/kitchens | Link the existing Wakefield refit; distinguish new fitting from a sound-unit refresh | Medium | Low |
| /services/woodworm-treatment | Concrete explanation of active/historic assessment and treatment versus follow-on carpentry, using actual practice | Medium | Medium; do not invent guarantees or qualifications |
| /services/first-fix-carpentry | Keep current stud-wall/loft evidence; assess the supplementary researched stud-partitions commercial page only if a distinct service page would help | Medium conditional opportunity | Medium; avoid duplicating first-fix content |
| Existing service FAQs | Explain cost drivers with no fabricated price figures | High for F01 pages | Low–Medium |
| Existing area pages | Genuine local project evidence and relevant service links | Medium | Low where records exist |

Guides already cover door sizes and moulding profiles in depth, use tables and feed the corresponding service. Do not create alternative URLs for internal-door sizes, UK size charts, torus profiles or similar questions already answered well unless a genuinely different intent is established.

The research suggests cost questions across many trades, but a page per cost phrase is not automatically valuable. Improve the existing FAQ/guide first; create a separate article only when actual explanation and demand justify it.

## 11. Live technical evidence and performance assessment

### HTTP behaviour

| Requested URL / pattern | Observed result | Assessment |
|---|---|---|
| https://heritagejoiners.co.uk/ and all 62 other HTML routes | 200 with expected content; matches local generated HTML | Pass for availability; /404 is the explicitly noindex error document when visited directly |
| http://heritagejoiners.co.uk/ | Redirects once to canonical HTTPS homepage | Pass |
| https://www.heritagejoiners.co.uk/ | Redirects once to non-www HTTPS homepage | Pass |
| http://www.heritagejoiners.co.uk/ | Two hops through HTTPS www to HTTPS non-www | Low optional simplification only; no demonstrated ranking problem |
| /index.html and /index | Redirect to / | Pass |
| /about/ and /about.html | Redirect to /about | Pass |
| /services/windows/ and /services/windows.html | Redirect to /services/windows | Pass |
| /?audit=seo | Returns homepage; source canonical logic strips query parameters | Expected; no unnecessary query-string canonical target |
| /seo-audit-missing-page-20261018 | 404, not a soft-404 homepage response | Pass |
| /services/seo-audit-missing-page-20261018 | 404 | Pass |
| /services/sash-window-repair and /services/timber-window-repair | 404 | Retired paths; no current internal links. Historical notes say they were removed pre-launch. Redirect only if Search Console/backlinks/logs establish prior value. |
| /sitemap.xml | Redirects to /sitemap-index.xml | Pass |
| /rss.xml | 200, application/rss+xml, 14 items | Pass |

Only representative URL variants were requested; .html/slash behaviour was not individually tested for every route. The common serving behaviour matches the current file-format configuration. [Cloudflare Pages serving behaviour](https://developers.cloudflare.com/pages/configuration/serving-pages/)

### Sitemaps and robots

- Live /robots.txt: User-agent *, Allow: /, correct absolute Sitemap declaration.
- Live /sitemap-index.xml points to /sitemap-0.xml; both return XML successfully.
- URL sitemap has **60 unique URLs**, with canonical host/path forms; no privacy, Facebook deletion or 404 URLs.
- The homepage sitemap URL and canonical both end in /. The historical mismatch is fixed.
- Lastmod dates vary by page, rather than assigning the audit date everywhere. Dependency/date precision still needs F08.
- /sitemap links every indexable HTML page. It is a useful fallback; it is not a substitute for editorial/service links.
- /rss.xml is valid XML and lists all 14 posts. It need not be treated as an HTML landing page.
- Sitemap priority/changefreq values are harmless, but optimising them is not an SEO action priority.

### Rendering, images and performance

- Main content, headings, links and JSON-LD are present in the initial static HTML.
- No React hydration/client bundles were found in generated output. React-related installed dependencies alone do not mean React is shipped; removing packages is outside this audit.
- The shared stylesheet is about **51,091 bytes raw / 9,340 bytes locally gzip-compressed**. Those are file measurements, not a browser transfer timing.
- Its 18 font-face declarations use font-display:swap and local font files; no Google Fonts CDN was found.
- The homepage already has 800/1200/full-width hero srcset variants and deferred secondary slides. Do not repeat the old recommendation that responsive hero variants are absent.
- All inspected img elements have alt and dimensions. Empty alt on decorative icons/backgrounds and linked blog thumbnails is intentional; the thumbnail's adjacent title names the link.
- All blog-body photographs use figure/figcaption, including the older gate/window posts that the instructions describe as exceptions. The second-fix explainer has no body photo; no image is mandatory for a text answer.
- All 11 guide tables have horizontal-overflow wrappers in source. Actual 375px behaviour, nav crowding, tap targets and contrast remain browser-test items.
- The largest HTML file is /gallery at approximately 100 KB raw / 15 KB locally gzip-compressed; the mouldings guide is roughly 78 KB raw / 18 KB compressed. These sizes alone are not performance failures.
- Live image responses have Cache-Control: public, max-age=2592000. HTML responses have revalidation caching. The old invalid-header-syntax issue is fixed; /_astro hashed-asset policy is correct in source.
- GA4 is loaded asynchronously; no current lab trace was obtained to attribute delay to it. Check CTA/phone/WhatsApp/form conversion measurement in the analytics account before judging SEO by enquiries. This audit did not submit forms or alter tracking.

Google can discover native img elements and use descriptive surrounding text/alt; images do not require EXIF geotags or an image sitemap to qualify for ordinary discovery. Do not add invented geographical metadata or generic keyword alt text. [Google image guidance](https://developers.google.com/search/docs/appearance/google-images)

### External evidence links

The Civic Society award link and the Bradford council consent links resolve; one council link redirects to its newer path. Historic England returned a Cloudflare challenge to this audit client, which does **not** prove the public link is broken. Both manufacturer PDF references in the door-size guide returned HTTP 200 and application/pdf on full GET requests (about 4.2 MB and 10.0 MB). Their HEAD requests returned 500, a server-method inconsistency. They are **not reported as broken links**. The referenced sources are reachable; a full independent revalidation of every technical dimension or regulatory statement was outside the HTTP check and remains a reference-maintenance task, not a claimed accuracy failure.

## 12. Technical SEO checklist

“Pass” means the stated test passed, not guaranteed indexing or rankings.

| Check | Result | Evidence / limitation |
|---|---|---|
| Complete source/generated HTML inventory | Pass | 63 routes, no source-only or generated-only page discrepancy |
| Live page content matches local output | Pass | All 63 HTML responses byte-identical to existing dist |
| Commercial/editorial page access | Pass | 60 indexable HTML routes return 200 |
| robots crawl permission | Pass | Live Allow: / and sitemap declaration |
| Correct canonical host/paths | Pass | One self-referencing canonical per route |
| Title presence/uniqueness | Pass | All 63; F09 records strategy divergences without assuming harm |
| Meta description presence/uniqueness | Pass | All 63 |
| Local description-length convention | Pass for indexable pages | Only noindex Facebook deletion page is shorter |
| Exactly one H1 | Pass | All 63 |
| Meaningful heading structure H1–H6 | Pass for indexable pages | H1–H3 used; H4–H6 are unnecessary here; 404 footer skip is low impact |
| Uniform project heading-class scale | Fail — Low governance | Exceptions listed in F17; not an indexation defect |
| Internal page/file links | Pass | All destinations resolve locally; live HTML targets crawled |
| Anchor fragments | Pass for actual section targets | #main-content/contact target present; intentional email # placeholders are script-populated |
| Orphan indexable HTML pages | Pass | None; maximum two links from home including shared navigation |
| XML sitemap validity/coverage | Pass | 60 canonical eligible URLs, no duplicates/noindex URLs |
| Sitemap lastmod maintenance | Fail — Medium implementation; date accuracy partly unverified | Likely stale /blog date; confirmed dependency/mtime limitations, F08 |
| Missing-URL status | Pass | Random root and nested paths return 404 |
| Host/slash/html/index normalisation | Pass in tested samples | Not every route variant individually tested |
| JSON-LD parsing | Pass | 238 blocks |
| Schema semantic completeness | Fail — Medium/Low | Article fields/images and Service priceRange, F07/F16 |
| Google rich-result eligibility | Not verified | No Rich Results Test/URL Inspection run |
| Google-selected canonical / real indexation | Not verified | Requires Search Console |
| Image URL availability | Pass | 238 distinct src/data-src/OG URLs return 200; extra variants local |
| Img alt/dimensions present | Pass | Decorative/redundant empty alt allowed |
| Exact intrinsic width/height convention | Fail — Low | Fixed-slot mismatches, F13; no asserted CLS failure |
| Accurate OG image dimensions | Fail — Low | 51 photo pages inherit 1200×630, F11 |
| Local font availability / swap | Pass | Existing fonts local, declarations use swap |
| Static HTML content / no framework requirement | Pass | Initial HTML contains content/links; no generated JS bundle |
| Mobile viewport / responsive source patterns | Pass in source | Includes viewport meta and responsive classes |
| Guide table overflow wrappers | Pass in source | 11/11 wrapped |
| Actual mobile rendering and interactions | Not verified | No browser viewport audit |
| Current LCP / INP / CLS / CWV | Not verified | PSI requests returned 429; no field data |
| Historical backlinks / retired URL value | Not verified | No export/logs |
| NAP, hours and Business Profile agreement | Not verified externally | Central source internally consistent |
| Review authenticity/approval | Not verified | Existing claimed Google reviews; no account verification |
| Build success from current source | Not verified by this audit | Build would modify files beyond SEO.md |
| Plaintext business email in generated HTML | Pass | None found |
| Strict encoded-only email source convention | Fail — Low governance | Literal/comment occurrences, F17 |
| Protected files/assets unchanged | Required and preserved | No implementation or image manipulation performed |

## 13. Prioritised action plan

These are recommendations for a future task. None has been implemented.

| Order | Action | Severity / expected benefit | Effort | Change risk | Validation / dependency |
|---:|---|---|---|---|---|
| 1 | Obtain Search Console and enquiry/conversion baseline | Medium evidence priority; prevents harmful guesses | Low | Low | Export query×page data over 3–6 months and a comparison period; index coverage, selected canonicals, device/country. Use the maximum useful history where volumes are sparse. |
| 2 | Improve the worst service FAQ answers | High opportunity | Low–Medium | Medium | Preserve ownership/URLs/layout; check visible/schema agreement and review actual enquiry usefulness. Start with F01's first five pages. |
| 3 | Assemble genuine fitted-wardrobe proof for the existing page | High opportunity | Medium | Low if factual | Rob's approved job details/photos; no competing service page or invented work. |
| 4 | Confirm panelling/non-timber scope and fix inconsistent proof/alt | Medium, commercially important | Low–Medium | Medium–High | Owner scope decision; retain truthful job records and core wall-panelling target. |
| 5 | Add a few missing proof and town-to-wardrobe links | Medium | Low | Low | F05; preserve lightbox and page pattern; all targets already exist. |
| 6 | Tag the Doncaster stud-wall job; confirm gate town | Medium | Low | Low | F06; actual town only; ensure correct feed output and no draft inclusion. |
| 7 | Improve weakest town pages with actual work | Medium | Medium / depends on available jobs | Low–Medium | No fictitious examples or town stuffing; monitor local enquiries/indexation. |
| 8 | Correct Article image/description flow and review Service property | Medium/Low | Low | Low | F07/F16; syntax plus semantic checks, real image URLs, no fake prices. |
| 9 | Make lastmod updates reflect meaningful dependent content changes | Medium | Medium | Low–Medium | F08; deterministic checks and CI behaviour; no global date reset. |
| 10 | Obtain fresh mobile performance/field evidence | Medium verification priority | Low | Low | Actual LCP/CLS/INP by template and page; distinguish lab from field results. |
| 11 | Ask Rob for any justified new photo exports; correct markup metadata | Low / conditional performance benefit | Low–Medium | Low with preserved assets | F11–F15; never re-encode current images; preserve fixed CSS slots. |
| 12 | Review title divergences only against query/page performance | Medium review / uncertain benefit | Low | Medium–High | F09; preserve primary keywords and all required towns; record before/after metrics. |
| 13 | Resolve source instructions, claims and legal-page exceptions | Low governance / credibility | Low | Medium if substantive changes | F17; confirm owner intent/approval; no automatic legal/review removal. |
| 14 | Evaluate distinct new informational/commercial content only after evidence | Medium conditional growth | Medium–High | Medium | Existing keyword research, real service scope and one definitive URL per intent. |

Do not prioritise tool-score work such as shortening every title to 60 characters, changing sitemap priority, adding fake review schema, creating a service×town page matrix, adding geotags, or rewriting already strong case studies. Establish what is performing before touching the most consequential search-facing elements.

## 14. Page-by-page findings

All paths below are on https://heritagejoiners.co.uk. All return 200 when directly requested. A “pass” means no distinct defect beyond applicable shared findings; it is not an instruction to change the page. F-number references contain evidence, SEO impact, recommendation and risk above. Shared Service/OG/layout findings apply in addition to the page-specific notes.

| URL | Intent / role | Findings and recommendation | Severity | Risk of changing |
|---|---|---|---|---|
| [/](https://heritagejoiners.co.uk/) | Broad local hiring | Pass on primary ownership and technical access. F01 applies to service journeys, not a reason to remove the home target. F14/F15 cover image-loading tradeoffs; F17 covers heading-scale conventions. | Low | Medium if retargeted |
| [/404](https://heritagejoiners.co.uk/404) | Error recovery | Correct descriptive H1 and noindex, nofollow. Direct /404 is 200; genuinely missing paths were 404. Footer H3 skip has negligible SEO impact. | Low | Low |
| [/about](https://heritagejoiners.co.uk/about) | Tradesperson identity and experience | Strong first-person qualification/history and real project links. Current photo dimensions fix the previously recorded free-flowing ratio problem. Verify credentials only where evidence is available; F11/F17. | Low | Medium for claim changes |
| [/areas](https://heritagejoiners.co.uk/areas) | Coverage hub | All eight area pages linked; selective wider travel described. Short hub content is sufficient for navigation. No missing town is assumed from absence alone. | Pass | Low |
| [/areas/castleford](https://heritagejoiners.co.uk/areas/castleford) | Local hire | Two real local job cards and relevant links strengthen the page. F05: wardrobe destination absent from service grid; F03: distinguish the uPVC example from timber-only positioning. | Medium | Low–Medium |
| [/areas/featherstone](https://heritagejoiners.co.uk/areas/featherstone) | Local hire | No matching real-job card and limited distinctive local detail, F04. Component is installed correctly. F05: relevant missing service links. | Medium | Low for factual additions |
| [/areas/knottingley](https://heritagejoiners.co.uk/areas/knottingley) | Local hire | No matching real-job card; F04/F05. Do not manufacture a project or change indexing merely because the page is short. | Medium | Low for factual additions |
| [/areas/leeds](https://heritagejoiners.co.uk/areas/leeds) | Selective local hire | Honest travel qualification; no completed Leeds evidence. F04/F05. Existing built-in storage mention could hand off to fitted wardrobes. | Medium | Low–Medium |
| [/areas/normanton](https://heritagejoiners.co.uk/areas/normanton) | Local hire | Broad template with limited local detail, F04; link opportunities F05. No duplicate or indexability fault proved. | Medium | Low for factual additions |
| [/areas/pontefract](https://heritagejoiners.co.uk/areas/pontefract) | Local hire at business base | Counting House proof plus two recent jobs give genuine local relevance. F05: wardrobe link is still missing from the service grid. | Medium opportunity | Low |
| [/areas/wakefield](https://heritagejoiners.co.uk/areas/wakefield) | Local hire | Three correctly ordered genuine job cards. East Ardsley is explicitly identified in the commercial post; Wakefield tag follows the district convention. F05 missing wardrobe link. | Medium opportunity | Low |
| [/areas/yorkshire](https://heritagejoiners.co.uk/areas/yorkshire) | Regional coverage | matchAny works; actual towns preserved. Three latest located jobs appear. Distinct wider-project role; avoid converting it into a copy of a single-town page. | Pass | Medium if scope changed |
| [/blog](https://heritagejoiners.co.uk/blog) | Editorial/job discovery | 14 posts, standard links and dates; all reachable. F08 likely stale sitemap date and confirmed dependency gap. Empty thumbnail alt is deliberately redundant with the linked title, not missing alt. | Medium | Low |
| [/blog/bathroom-wall-panels-doncaster](https://heritagejoiners.co.uk/blog/bathroom-wall-panels-doncaster) | Real PVC job / informational | Detailed original work account with nine captioned photographs and Doncaster tag. F03 scope relationship needs clarification; material-specific content must stay truthful. First image eager by default, F15. | Medium | Medium–High |
| [/blog/bespoke-ledged-and-braced-garden-gate](https://heritagejoiners.co.uk/blog/bespoke-ledged-and-braced-garden-gate) | Real gate example / informational | Detailed making/fitting account and three captioned photos; relevant service links. Actual town not stated/tagged: confirm before adding, F06. No mandatory need for a new gate page. | Low verification | Low after town confirmed |
| [/blog/can-timber-windows-be-repaired](https://heritagejoiners.co.uk/blog/can-timber-windows-be-repaired) | Window-repair decision explainer | Useful detailed repair/replacement explanation, six figures, service/case-study links. No area tag required for its general informational role. Monitor overlap, not automatic consolidation. | Pass | High if merged unnecessarily |
| [/blog/commercial-door-closer-replacement-wakefield](https://heritagejoiners.co.uk/blog/commercial-door-closer-replacement-wakefield) | Actual small commercial job | Five figures; precise East Ardsley/Wakefield detail and links to doors, stairs and repairs. First image eager by default, F15. Larger handrail photo is F12. | Low | Low |
| [/blog/external-timber-cladding-castleford](https://heritagejoiners.co.uk/blog/external-timber-cladding-castleford) | Actual cladding job | Five figures, Castleford tag, reciprocal area/service journey. Useful real timber evidence. First image eager by default, F15. | Pass / Low | Low |
| [/blog/flat-roof-repair-wakefield](https://heritagejoiners.co.uk/blog/flat-roof-repair-wakefield) | Actual timber-led roof repair | Strong 16-figure process account, actual Wakefield tag and relevant service links. F05 reciprocal town link opportunity; F13 two same-ratio dimension corrections only. | Low | Low |
| [/blog/herringbone-laminate-flooring-hallway](https://heritagejoiners.co.uk/blog/herringbone-laminate-flooring-hallway) | Actual fitted flooring job | Six figures, Pontefract tag, service and local links. Valid documented secondary flooring service; preserve floor-sanding primary. F12 larger photo appears in several card contexts. | Low | Medium if retargeted |
| [/blog/how-to-build-a-stud-partition-wall](https://heritagejoiners.co.uk/blog/how-to-build-a-stud-partition-wall) | How-to plus actual Doncaster job | 15 figures and relevant first/second-fix/door links. F06 missing Doncaster tag; F15 lead priority. Keep separate from a future commercial page only if intent warrants one. | Medium | Low for tag; Medium for new page |
| [/blog/kitchen-fitting-wakefield-rental-property](https://heritagejoiners.co.uk/blog/kitchen-fitting-wakefield-rental-property) | Actual rental kitchen refit | Four figures, 18 October publication and Wakefield tag. Already appears in Wakefield/Yorkshire. F05 missing reciprocal service-page proof link; F12 photo size. | Medium opportunity | Low |
| [/blog/listed-casement-window-repair-bradford](https://heritagejoiners.co.uk/blog/listed-casement-window-repair-bradford) | Actual listed-building repair | Six figures, exact real town and named listed-cottage context with primary-source links. Good authority. No Bradford area page is required simply because its tag exists. | Pass | High if generic rewrite |
| [/blog/loft-boarding-south-kirkby](https://heritagejoiners.co.uk/blog/loft-boarding-south-kirkby) | Actual storage-floor/ladder job | 11 figures; correctly distinguishes loft storage from habitable conversion. South Kirkby tag is truthful; do not relabel to a larger town. Strong first-fix/conversion handoffs. | Pass | Medium if scope changed |
| [/blog/mock-tudor-boarding-repair-castleford](https://heritagejoiners.co.uk/blog/mock-tudor-boarding-repair-castleford) | Actual single-board repair | Five figures and real town tag; useful matching/repair decision. F03: actual replacement is uPVC, not timber. Preserve truth and confirm relationship to service positioning. | Medium | Medium–High |
| [/blog/rotten-timber-window-sill-repair-pontefract](https://heritagejoiners.co.uk/blog/rotten-timber-window-sill-repair-pontefract) | Actual cill/splice repair | Nine figures, Pontefract tag, good service/area/case links. F12 largest elevation file; watch same-job overlap with Dunster while preserving specific repair focus. | Low / monitor | Medium–High if merged |
| [/blog/what-is-second-fix-carpentry](https://heritagejoiners.co.uk/blog/what-is-second-fix-carpentry) | Narrow informational explanation | Clear short answer and shared Rob attribution/CTA. F18 optional useful detail; no need for a town tag or arbitrary length increase. | Low | Low–Medium |
| [/case-studies](https://heritagejoiners.co.uk/case-studies) | Project hub | Both genuine projects described accurately with working links and photos. Previous dead/misleading sash-story card is fixed. F12 larger Dunster card image. | Low | Low |
| [/case-studies/counting-house](https://heritagejoiners.co.uk/case-studies/counting-house) | Flagship project overview | Excellent detailed oak/restoration proof; project award attribution and four child links. F07 Article fallback image/description; unverified uniform historical date. F17 heading scale. | Medium | Low for schema; High for unnecessary rewrite |
| [/case-studies/counting-house/beam-repair-and-restoration](https://heritagejoiners.co.uk/case-studies/counting-house/beam-repair-and-restoration) | Named-project structural/repair detail | Concrete repair methods, original timber retention, parent/service links. F07 Article data; F10 can support general timber-repair service more directly. | Medium | Low for schema/link |
| [/case-studies/counting-house/oak-frames-and-joinery](https://heritagejoiners.co.uk/case-studies/counting-house/oak-frames-and-joinery) | Named-project interior detail | Distinct oak/reused-timber account and parent/second-fix/finishing links. F07 Article data. | Medium | Low for schema |
| [/case-studies/counting-house/oak-front-door](https://heritagejoiners.co.uk/case-studies/counting-house/oak-front-door) | Named-project made oak door | Distinct manufacture/fitting evidence and parent/service/materials links. F07 Article data; good destination for oak-joinery evidence. | Medium | Low for schema/link |
| [/case-studies/counting-house/oak-staircases](https://heritagejoiners.co.uk/case-studies/counting-house/oak-staircases) | Named-project oak stairs | Concrete geometry, joints and tread detail; parent/services linked. F07 Article data; good destination for oak-joinery proof. | Medium | Low for schema/link |
| [/case-studies/dunster-windows](https://heritagejoiners.co.uk/case-studies/dunster-windows) | Named-project sash refurbishment | Substantial real 11-window/door account with conservation-area distinction. F07 Article data, F12 hero size, F17 review approval/heading-scale checks. Preserve narrow cill-post distinction. | Medium | Low for schema; Medium for claims |
| [/contact](https://heritagejoiners.co.uk/contact) | Enquiry | Useful postcode/photo/scope guidance, phone/WhatsApp/hours and accessible form source. No live submission attempted. External Business Profile and conversion tracking not verified. | Pass / verification | Medium for business-detail changes |
| [/facebook-data-deletion](https://heritagejoiners.co.uk/facebook-data-deletion) | Legal utility | Deliberate noindex, follow and sitemap exclusion. F17 instruction conflict; F18 short description is negligible on a noindex page. | Low | Medium if indexing intent changed |
| [/gallery](https://heritagejoiners.co.uk/gallery) | Visual proof | Photos and captions crawlable with working image links; lightbox not required for initial thumbnails. F05 no main service/project links; F03 material alt, F17 award attribution; F11 portrait OG mismatch. | Medium | Low for links; Medium for claims |
| [/guides](https://heritagejoiners.co.uk/guides) | Reference hub | Both guides discoverable through appropriate category cards, reciprocal service relationships and ItemList. No duplicate topic created. | Pass | Low |
| [/guides/skirting-architrave-timber-moulding-profiles](https://heritagejoiners.co.uk/guides/skirting-architrave-timber-moulding-profiles) | Profile identification reference | Useful profiles, real images, five wrapped tables and relevant service links. Pine appears only in material/product/search-term context allowed by the rules. F13 one incorrect intrinsic dimension; F11 OG metadata. | Low | Low |
| [/guides/standard-door-sizes](https://heritagejoiners.co.uk/guides/standard-door-sizes) | Dimension/measurement reference | Six wrapped tables and useful leaf/lining/opening/fire/access distinctions; reciprocal door link. Reference PDFs pass GET despite HEAD errors. No specific wrong dimension established; maintain sources over time. | Pass / Low maintenance | Medium for technical-copy changes |
| [/privacy-policy](https://heritagejoiners.co.uk/privacy-policy) | Legal utility | Deliberate noindex, follow and sitemap exclusion; reachable from footer. F17 instruction reconciliation, not a commercial indexability defect. | Low | Medium if indexing intent changed |
| [/repair-or-replace](https://heritagejoiners.co.uk/repair-or-replace) | Assessment framework | Distinct retain/splice/partial/full replacement framework and service links. F17 H1 scale; no evidence supports merging it with the window-specific explainer. | Low | High if merged unnecessarily |
| [/reviews](https://heritagejoiners.co.uk/reviews) | Existing testimonials / review collection | Six named reviews and outbound Google/Facebook links; no Review/AggregateRating schema. F17 verify approval/current totals, F18 visitor-purpose wording opportunity. | Low / verification | Medium |
| [/services](https://heritagejoiners.co.uk/services) | Service discovery | All 18 services linked, grouped and represented in ItemList. No current registration gap. F13 fixed card-dimension convention only. | Pass / Low | Low |
| [/services/bespoke-joinery](https://heritagejoiners.co.uk/services/bespoke-joinery) | Fitted wardrobes | F01 FAQ and F02 evidence gap are the main opportunities; F05 missing town links. Keep researched primary and existing route. | High opportunity | Low for real proof; Medium for copy |
| [/services/cladding-panelling](https://heritagejoiners.co.uk/services/cladding-panelling) | Wall panelling | F01 FAQ, F03 material positioning and proof; links to three real jobs already exist. Keep wall-panelling ownership; confirm material scope. | High opportunity / Medium inconsistency | Medium–High |
| [/services/doors](https://heritagejoiners.co.uk/services/doors) | Door hanging | Good door/fitting detail, sizes guide and relevant oak-door proof. FAQ explains useful cost variables; no blanket rewrite needed. Existing target correct. | Pass | Medium if retitled |
| [/services/extensions-conversions](https://heritagejoiners.co.uk/services/extensions-conversions) | Attic conversion carpentry | Appropriate structural/conversion scope and first-fix/loft-storage links. F05 town-grid omissions; F10 strengthen actual structural proof as available. | Medium opportunity | Low–Medium |
| [/services/finishing](https://heritagejoiners.co.uk/services/finishing) | Wood staining | Good flooring handoff and Dunster finishing proof. F01 query-list answer; preserve finishing versus sanding roles. | Medium | Medium |
| [/services/first-fix-carpentry](https://heritagejoiners.co.uk/services/first-fix-carpentry) | First fix joiner | Real stud-wall and loft links; correct primary. F01 polish awkward joist answer; F05 optional roof handoff. | Medium | Low–Medium |
| [/services/flooring](https://heritagejoiners.co.uk/services/flooring) | Floor sanding | Primary retained, with documented laminate fitting and useful repair-first scope. F01 FAQ; F12 linked job photo; verify installer claim rather than assume it is false. | Medium | Medium if retargeted |
| [/services/kitchens](https://heritagejoiners.co.uk/services/kitchens) | Kitchen fitter | F01 FAQ and F05 link to existing Wakefield refit. Built-in storage already links to bespoke page. Keep primary. | High opportunity | Low for proof link; Medium for copy |
| [/services/maintenance-repairs](https://heritagejoiners.co.uk/services/maintenance-repairs) | General carpentry repairs | Correct small-job role; existing commercial/mock-Tudor proof links. F05 optional deeper door handoff; keep broad near-me ownership at home. | Low | Medium if retargeted |
| [/services/outdoor-carpentry](https://heritagejoiners.co.uk/services/outdoor-carpentry) | Wooden garden gates | Relevant gate proof and cladding handoff. F01 decking FAQ; F09 broader title differs from primary, review only with performance evidence. | Medium | Medium–High for title change |
| [/services/roofing-carpentry](https://heritagejoiners.co.uk/services/roofing-carpentry) | Roof carpenter | Concrete cut-roof terminology, roof-job link and woodworm handoff; useful cost/access answer. F10 opportunity for more actual roof evidence, not keyword change. | Pass / Medium opportunity | Low for evidence |
| [/services/second-fix-carpentry](https://heritagejoiners.co.uk/services/second-fix-carpentry) | Second fix carpenter | Good links to door/skirting owners, explainer and finished floor. F09 natural title variant noted, not treated as an error. | Low review | Medium if title changed |
| [/services/skirting-architrave](https://heritagejoiners.co.uk/services/skirting-architrave) | Skirting board fitting | Strong reciprocal profile-guide/second-fix links. F01 mechanical FAQ, F09 primary absent from current title. Preserve H1 and researched ownership. | Medium | Medium–High for title change |
| [/services/staircases](https://heritagejoiners.co.uk/services/staircases) | Staircase fitter | Relevant Counting House stairs and panelling links; useful technical scope. F01 could make renovation-cost answer more concrete. | Medium | Low–Medium |
| [/services/timber-hardwoods](https://heritagejoiners.co.uk/services/timber-hardwoods) | Oak joinery / material advice | Correctly avoids merchant intent. F01 underdeveloped answer and F05 absent direct oak project links. Existing material focus should remain. | Medium | Low for links; Medium for copy |
| [/services/timber-repair](https://heritagejoiners.co.uk/services/timber-repair) | Timber repair | Good window/woodworm/decision handoffs and real photo. F01 query-list answer; F10 direct beam proof and scope clarity. | Medium | Low for links; Medium for copy |
| [/services/windows](https://heritagejoiners.co.uk/services/windows) | Sash window repair | Strongest developed service evidence: casement sequence, listed-job/cill/Dunster links, council references. F01 cost answer can improve selectively; do not rewrite the strong repair account. | Medium selective improvement | High for broad rewrite |
| [/services/woodworm-treatment](https://heritagejoiners.co.uk/services/woodworm-treatment) | Woodworm treatment | Relevant timber-repair link and assessment-led scope. F01 cost answer and F10/section 10 evidence opportunity; no current real woodworm job is shown. | Medium | Medium |
| [/sitemap](https://heritagejoiners.co.uk/sitemap) | HTML discovery | Lists all 60 indexable HTML URLs and is footer-linked; legal/error omissions intentional. XML is separately accessible. | Pass | Low |

## 15. Complete rendered metadata and heading inventory

This is a record of current output, **not proposed replacement wording**. Character counts use decoded text, so an ampersand counts as one character. All titles are unique and all descriptions are unique. Fourteen titles exceed 60 characters; that alone is not an error and is not a reason to remove a town or primary keyword.

All pages have one H1. H2/H3 counts below cover main content; footer headings are excluded. No H4, H5 or H6 is used or needed in the inspected output. Main heading text and semantic hierarchy were inspected across the full crawl; a title and H1 can differ while remaining aligned to the same intent.

| URL | Rendered title (characters) | H1 | H2 / H3 count | Meta description (characters) |
|---|---|---|---|---|
| [/](https://heritagejoiners.co.uk/) | Joiner Near Me in Pontefract & Wakefield \| Heritage Joiners (59) | Joiner Near Me in Pontefract, Wakefield & Across West Yorkshire | 10 / 20 | Joiner and carpenter in Pontefract, Wakefield and West Yorkshire for kitchens, doors, windows, stairs, roofing, flooring and heritage timber repair. (148) |
| [/404](https://heritagejoiners.co.uk/404) | Page Not Found \| Heritage Joiners (33) | Page not found | 0 / 0 | Joiner and carpenter in Pontefract, Wakefield and West Yorkshire — kitchens, doors, windows, stairs, flooring and heritage timber repair by Heritage Joiners. (157) |
| [/about](https://heritagejoiners.co.uk/about) | About Heritage Joiners \| Heritage Joiners (41) | About Heritage Joiners | 5 / 3 | Meet Rob at Heritage Joiners, a fully qualified, time-served bench hand joiner with over 35 years' experience in carpentry, joinery and old buildings. (150) |
| [/areas](https://heritagejoiners.co.uk/areas) | Areas We Cover from Pontefract \| Heritage Joiners (49) | Areas we cover | 2 / 8 | Heritage Joiners covers Pontefract, Wakefield, Castleford, Featherstone, Knottingley, Normanton, Leeds, and selected timber-led projects across Yorkshire. (154) |
| [/areas/castleford](https://heritagejoiners.co.uk/areas/castleford) | Carpenter & Joiner in Castleford \| Heritage Joiners (51) | Carpenter & Joiner in Castleford | 7 / 2 | Carpenter and joiner in Castleford for kitchens, doors, windows, staircases, flooring, roofing carpentry, repairs, and heritage timber work. (140) |
| [/areas/featherstone](https://heritagejoiners.co.uk/areas/featherstone) | Carpenter & Joiner in Featherstone \| Heritage Joiners (53) | Carpenter & Joiner in Featherstone | 5 / 0 | Carpenter and joiner in Featherstone for kitchens, doors, windows, staircases, flooring, roofing carpentry, repairs, and heritage timber work. (142) |
| [/areas/knottingley](https://heritagejoiners.co.uk/areas/knottingley) | Carpenter & Joiner in Knottingley \| Heritage Joiners (52) | Carpenter & Joiner in Knottingley | 5 / 0 | Carpenter and joiner in Knottingley for kitchens, doors, windows, staircases, flooring, roofing carpentry, repairs, and heritage timber work. (141) |
| [/areas/leeds](https://heritagejoiners.co.uk/areas/leeds) | Carpenter & Joiner in Leeds \| Heritage Joiners (46) | Carpenter & Joiner in Leeds | 5 / 0 | Carpenter and joiner in Leeds for kitchens, doors, windows, staircases, flooring, roofing carpentry, repairs, and heritage timber work. (135) |
| [/areas/normanton](https://heritagejoiners.co.uk/areas/normanton) | Carpenter & Joiner in Normanton \| Heritage Joiners (50) | Carpenter & Joiner in Normanton | 5 / 0 | Carpenter and joiner in Normanton for kitchens, doors, windows, staircases, flooring, roofing carpentry, repairs, and heritage timber work. (139) |
| [/areas/pontefract](https://heritagejoiners.co.uk/areas/pontefract) | Carpenter & Joiner in Pontefract \| Heritage Joiners (51) | Carpenter & Joiner in Pontefract | 8 / 2 | Carpenter and joiner in Pontefract for kitchens, doors, windows, staircases, flooring, roofing carpentry, repairs, and heritage timber work. (140) |
| [/areas/wakefield](https://heritagejoiners.co.uk/areas/wakefield) | Carpenter & Joiner in Wakefield \| Heritage Joiners (50) | Carpenter & Joiner in Wakefield | 7 / 3 | Carpenter and joiner in Wakefield for kitchens, doors, windows, staircases, flooring, roofing carpentry, repairs, and heritage timber work. (139) |
| [/areas/yorkshire](https://heritagejoiners.co.uk/areas/yorkshire) | Carpenter & Joiner Across Yorkshire \| Heritage Joiners (54) | Carpenter & Joiner Across Yorkshire | 6 / 7 | Carpentry and joinery across Yorkshire for timber-led projects, with West Yorkshire as the core service area and heritage repair kept as a specialism. (150) |
| [/blog](https://heritagejoiners.co.uk/blog) | Blog — Carpentry & Joinery Advice \| Heritage Joiners (52) | Carpentry & joinery, explained | 14 / 0 | Practical carpentry and joinery advice from Heritage Joiners — what good workmanship looks like, what jobs cost, and how things should be done properly. (152) |
| [/blog/bathroom-wall-panels-doncaster](https://heritagejoiners.co.uk/blog/bathroom-wall-panels-doncaster) | Fitting Bathroom Wall Panels in a Doncaster Ensuite \| Heritage Joiners (70) | Fitting Bathroom Wall Panels in a Doncaster Ensuite | 9 / 0 | A practical look at fitting marble-effect PVC bathroom wall panels in a Doncaster ensuite, including setting the first panel plumb, cut-outs and trims. (151) |
| [/blog/bespoke-ledged-and-braced-garden-gate](https://heritagejoiners.co.uk/blog/bespoke-ledged-and-braced-garden-gate) | Bespoke Ledged and Braced Garden Gate \| Heritage Joiners (56) | Bespoke Ledged and Braced Garden Gate | 12 / 0 | Bespoke ledged and braced garden gate built from 4x1 tanalised timber with an arched top. See how it was made, braced and fitted by Heritage Joiners. (149) |
| [/blog/can-timber-windows-be-repaired](https://heritagejoiners.co.uk/blog/can-timber-windows-be-repaired) | Can Timber Windows Be Repaired? \| Heritage Joiners (50) | Can Timber Windows Be Repaired? | 11 / 0 | Can rotten timber windows be repaired? When a timber window repair, restoration or full replacement is the right call — practical advice from a Pontefract joiner. (162) |
| [/blog/commercial-door-closer-replacement-wakefield](https://heritagejoiners.co.uk/blog/commercial-door-closer-replacement-wakefield) | Commercial Door Repairs in Wakefield \| Heritage Joiners (55) | Commercial Door Repairs in Wakefield | 7 / 0 | Three failed overhead door closers replaced and a loose staircase handrail refitted at Spawforths in East Ardsley, near Wakefield — a small commercial job. (155) |
| [/blog/external-timber-cladding-castleford](https://heritagejoiners.co.uk/blog/external-timber-cladding-castleford) | External Timber Cladding in Castleford \| Heritage Joiners (57) | External Timber Cladding in Castleford | 8 / 0 | See how Heritage Joiners fitted vertical external timber cladding to a garage wall in Castleford using treated battens and exterior-grade screws. (145) |
| [/blog/flat-roof-repair-wakefield](https://heritagejoiners.co.uk/blog/flat-roof-repair-wakefield) | Flat Roof Repair in Wakefield \| Heritage Joiners (48) | Flat Roof Repair in Wakefield | 10 / 0 | A leaking GRP flat roof in Wakefield stripped back to rotten, sodden timber — how we treated the wet rot, strengthened the joists and re-decked it. (147) |
| [/blog/herringbone-laminate-flooring-hallway](https://heritagejoiners.co.uk/blog/herringbone-laminate-flooring-hallway) | Herringbone Laminate Floor in Pontefract \| Heritage Joiners (59) | Herringbone Laminate Floor in Pontefract | 8 / 0 | Grey oak herringbone laminate flooring fitted in a Pontefract hallway — levelling the subfloor, fibreboard underlay, undercutting the linings and gluing the joints. (164) |
| [/blog/how-to-build-a-stud-partition-wall](https://heritagejoiners.co.uk/blog/how-to-build-a-stud-partition-wall) | How to Build a Timber Stud Partition Wall \| Heritage Joiners (60) | How to Build a Timber Stud Partition Wall | 14 / 0 | How we built a timber stud partition wall in Doncaster — a West Yorkshire joiner's guide to setting out, stud wall framing, noggins, insulation and plasterboarding. (164) |
| [/blog/kitchen-fitting-wakefield-rental-property](https://heritagejoiners.co.uk/blog/kitchen-fitting-wakefield-rental-property) | Kitchen Fitting in Wakefield for a Landlord \| Heritage Joiners (62) | Kitchen Fitting in Wakefield for a Landlord | 9 / 0 | A light grey handleless kitchen fitted in a Wakefield terrace for a landlord — a cost-effective refit with space left for a freestanding cooker and washing machine. (164) |
| [/blog/listed-casement-window-repair-bradford](https://heritagejoiners.co.uk/blog/listed-casement-window-repair-bradford) | Listed Casement Window Repair in Bradford \| Heritage Joiners (60) | Listed Casement Window Repair in Bradford | 10 / 0 | A Grade II listed cottage in Greengates, Bradford. The owner expected to replace the window. The rot was in the bottom rail — so we repaired it instead. (152) |
| [/blog/loft-boarding-south-kirkby](https://heritagejoiners.co.uk/blog/loft-boarding-south-kirkby) | Loft Boarding in South Kirkby \| Heritage Joiners (48) | Loft Boarding in South Kirkby | 8 / 0 | Loft boarding and loft ladder installation in South Kirkby — a new timber floor structure over the ceiling joists, more insulation and 18mm chipboard flooring. (159) |
| [/blog/mock-tudor-boarding-repair-castleford](https://heritagejoiners.co.uk/blog/mock-tudor-boarding-repair-castleford) | Mock Tudor Boarding Repair in Castleford \| Heritage Joiners (59) | Mock Tudor Boarding Repair in Castleford | 8 / 0 | One bowed board on a mock-Tudor frontage in Whitwood, Castleford. Matching a discontinued 15mm board, and why the whole elevation did not need replacing. (153) |
| [/blog/rotten-timber-window-sill-repair-pontefract](https://heritagejoiners.co.uk/blog/rotten-timber-window-sill-repair-pontefract) | Rotten Window Sill Repair in Pontefract \| Heritage Joiners (58) | Rotten Window Sill Repair in Pontefract | 9 / 0 | A rotten timber window sill on a Pontefract office building — how far the decay went, why filler was not enough, and how sapele splice repairs saved the windows. (161) |
| [/blog/what-is-second-fix-carpentry](https://heritagejoiners.co.uk/blog/what-is-second-fix-carpentry) | What is second fix carpentry? \| Heritage Joiners (48) | What is second fix carpentry? | 4 / 0 | Second fix carpentry explained: doors, skirting, architraves and finishing joinery fitted after plastering, with a practical guide to what the work covers. (155) |
| [/case-studies](https://heritagejoiners.co.uk/case-studies) | Joinery Case Studies \| Heritage Joiners (39) | Case studies | 2 / 0 | Case studies from carpentry, joinery, and heritage timber repair work across Yorkshire, led by The Counting House flagship project. (131) |
| [/case-studies/counting-house](https://heritagejoiners.co.uk/case-studies/counting-house) | The Counting House Oak Joinery \| Heritage Joiners (49) | The Counting House | 7 / 13 | Oak joinery at The Counting House in Pontefract, including staircases, a solid oak front door, beam repairs and restoration carpentry in a historic building. (157) |
| [/case-studies/counting-house/beam-repair-and-restoration](https://heritagejoiners.co.uk/case-studies/counting-house/beam-repair-and-restoration) | Beam Repair — The Counting House \| Heritage Joiners (51) | Beam Repair & Restoration Carpentry | 5 / 0 | Beam repairs, kitchen studwork and restoration carpentry at The Counting House in Pontefract, including original timber pieces repaired and refitted. (149) |
| [/case-studies/counting-house/oak-frames-and-joinery](https://heritagejoiners.co.uk/case-studies/counting-house/oak-frames-and-joinery) | Oak Frames & Joinery — The Counting House \| Heritage Joiners (60) | Oak Frames, Boxing-ins & Interior Details | 4 / 0 | Oak frames, boxing-ins and interior joinery at The Counting House in Pontefract, including reused timber, rustic sawn oak, and a fluted ogee-style newel detail. (160) |
| [/case-studies/counting-house/oak-front-door](https://heritagejoiners.co.uk/case-studies/counting-house/oak-front-door) | Oak Front Door — The Counting House \| Heritage Joiners (54) | Solid Oak Front Door & Frame | 4 / 0 | A full solid oak front door and frame replacement at The Counting House in Pontefract, made as a heavy ledged and braced door over 60mm thick. (142) |
| [/case-studies/counting-house/oak-staircases](https://heritagejoiners.co.uk/case-studies/counting-house/oak-staircases) | Oak Staircases — The Counting House \| Heritage Joiners (54) | Oak Staircases & Landings | 5 / 0 | Two large rear staircases and landings in solid oak, made and fitted for The Counting House in Pontefract with non-slip metal treads worked into the design. (156) |
| [/case-studies/dunster-windows](https://heritagejoiners.co.uk/case-studies/dunster-windows) | Sash Window Refurbishment in Pontefract \| Heritage Joiners (58) | Sash & Timber Window Refurbishment in Pontefract | 13 / 2 | Sash and timber window refurbishment in Pontefract. See how 11 weathered windows were repaired, sealed and refinished, including local cill and splice repairs. (159) |
| [/contact](https://heritagejoiners.co.uk/contact) | Contact a Joiner in Pontefract & Wakefield \| Heritage Joiners (61) | Contact a Joiner in Pontefract, Wakefield & West Yorkshire | 7 / 0 | Contact a joiner or carpenter in Pontefract, Wakefield and West Yorkshire for joinery, repairs, kitchens, doors, windows, stairs and heritage timber work. (154) |
| [/facebook-data-deletion](https://heritagejoiners.co.uk/facebook-data-deletion) | Facebook Data Deletion Instructions \| Heritage Joiners (54) | Facebook Data Deletion Instructions | 4 / 0 | How to request deletion of personal data held by the Heritage Joiners 'heritage integration' Facebook application. (114) |
| [/gallery](https://heritagejoiners.co.uk/gallery) | Gallery \| Heritage Joiners (26) | Carpentry & Joinery Work Across West Yorkshire | 14 / 59 | See carpentry, joinery, timber repair and heritage work from Heritage Joiners across Pontefract, Wakefield and West Yorkshire, including doors and windows. (155) |
| [/guides](https://heritagejoiners.co.uk/guides) | Carpentry & Joinery Guides \| Heritage Joiners (45) | Carpentry & Joinery Guides | 2 / 2 | Practical carpentry and joinery guides covering door sizes, timber, mouldings, finishing and repairs, written from workshop and site experience. (144) |
| [/guides/skirting-architrave-timber-moulding-profiles](https://heritagejoiners.co.uk/guides/skirting-architrave-timber-moulding-profiles) | Skirting, Architrave & Moulding Profiles \| Heritage Joiners (59) | Standard Skirting, Architrave and Timber Moulding Profiles | 17 / 16 | Identify standard skirting board, architrave and timber moulding profiles — torus, ogee, ovolo, bullnose, lamb’s tongue, scotia and quadrant explained. (151) |
| [/guides/standard-door-sizes](https://heritagejoiners.co.uk/guides/standard-door-sizes) | Standard Door Sizes UK \| Heritage Joiners (41) | Standard Door Sizes UK | 16 / 6 | Standard door sizes UK guide with internal, external, fire-door and metric dimensions, plus clear advice on measuring openings, linings and safe trimming. (154) |
| [/privacy-policy](https://heritagejoiners.co.uk/privacy-policy) | Privacy Policy \| Heritage Joiners (33) | Privacy Policy | 12 / 0 | How Heritage Joiners handles personal information from website enquiries, analytics and the Heritage Joiners Facebook Page integration. (135) |
| [/repair-or-replace](https://heritagejoiners.co.uk/repair-or-replace) | Repair or Replace? Period Timber Assessment \| Heritage Joiners (62) | Repair or replace? Our four-stage assessment | 8 / 13 | A four-stage repair-or-replace assessment for listed and period timber windows, doors, frames, and splice repairs across Pontefract, Wakefield, and Yorkshire. (158) |
| [/reviews](https://heritagejoiners.co.uk/reviews) | Reviews \| Heritage Joiners (26) | Leave Heritage Joiners a Review | 2 / 0 | Had joinery or carpentry work done by Heritage Joiners? Leave a review on Google or Facebook — honest feedback from real jobs in Pontefract and West Yorkshire. (159) |
| [/services](https://heritagejoiners.co.uk/services) | Carpentry & Joinery Services in Yorkshire \| Heritage Joiners (60) | Carpentry & Joinery Services Across West Yorkshire | 4 / 18 | Explore carpentry and joinery services across West Yorkshire, from doors, kitchens, staircases, and roofing to heritage timber repair and specialist finishing. (159) |
| [/services/bespoke-joinery](https://heritagejoiners.co.uk/services/bespoke-joinery) | Fitted Wardrobes in Pontefract & Wakefield \| Heritage Joiners (61) | Fitted Wardrobes in Pontefract, Wakefield & West Yorkshire | 7 / 3 | Fitted wardrobes, bespoke joinery, built-in cupboards, alcove units, and made-to-measure storage across Pontefract, Wakefield and West Yorkshire. (145) |
| [/services/cladding-panelling](https://heritagejoiners.co.uk/services/cladding-panelling) | Wall Panelling in Pontefract & Wakefield \| Heritage Joiners (59) | Wall Panelling in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Wall panelling, tongue and groove panelling, stair wall panelling, and external timber cladding across Pontefract, Wakefield and West Yorkshire. (144) |
| [/services/doors](https://heritagejoiners.co.uk/services/doors) | Door Hanging in Pontefract & Wakefield \| Heritage Joiners (57) | Door Hanging in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Door hanging, internal and external door fitting, and door frame repair across Pontefract, Wakefield and West Yorkshire for homes and period properties. (152) |
| [/services/extensions-conversions](https://heritagejoiners.co.uk/services/extensions-conversions) | Attic Conversion in Pontefract & Wakefield \| Heritage Joiners (61) | Attic Conversion in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Attic conversion, loft conversion, timber frame construction, and structural carpentry across Pontefract, Wakefield and West Yorkshire. (135) |
| [/services/finishing](https://heritagejoiners.co.uk/services/finishing) | Wood Staining in Pontefract & Wakefield \| Heritage Joiners (58) | Wood Staining in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Wood staining, wood oiling, timber finishing, French polishing, and sanding and refinishing across Pontefract, Wakefield and West Yorkshire. (140) |
| [/services/first-fix-carpentry](https://heritagejoiners.co.uk/services/first-fix-carpentry) | First Fix Joiner in Pontefract & Wakefield \| Heritage Joiners (61) | First Fix Joiner in Pontefract, Wakefield & West Yorkshire | 7 / 2 | First fix joiner services across Pontefract, Wakefield and West Yorkshire, including floor joists, stud partition walls, door linings, and structural timber work. (162) |
| [/services/flooring](https://heritagejoiners.co.uk/services/flooring) | Floor Sanding in Pontefract & Wakefield \| Heritage Joiners (58) | Floor Sanding & Wood Flooring in Pontefract, Wakefield & West Yorkshire | 8 / 2 | Floor sanding, wood floor repair and floorboard replacement across Pontefract and West Yorkshire, with certified Pergo fitting for laminate and wood flooring. (158) |
| [/services/kitchens](https://heritagejoiners.co.uk/services/kitchens) | Kitchen Fitter in Pontefract & Wakefield \| Heritage Joiners (59) | Kitchen Fitter in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Kitchen fitter services across Pontefract, Wakefield and West Yorkshire, including fitted kitchens, kitchen installation, solid wood worktops, and kitchen repairs. (163) |
| [/services/maintenance-repairs](https://heritagejoiners.co.uk/services/maintenance-repairs) | Carpentry Repairs in Pontefract & Wakefield \| Heritage Joiners (62) | General Carpentry Repairs in Pontefract, Wakefield & West Yorkshire | 7 / 2 | General carpentry repairs, door and window adjustments, lock replacement, shelving, and maintenance joinery across Pontefract, Wakefield and West Yorkshire. (156) |
| [/services/outdoor-carpentry](https://heritagejoiners.co.uk/services/outdoor-carpentry) | Outdoor Carpentry in Pontefract & Wakefield \| Heritage Joiners (62) | Wooden Garden Gates in Pontefract, Wakefield & West Yorkshire | 7 / 3 | Wooden garden gates, fence installation, decking, pergolas, and outdoor carpentry across Pontefract, Wakefield and West Yorkshire. (130) |
| [/services/roofing-carpentry](https://heritagejoiners.co.uk/services/roofing-carpentry) | Roof Carpenter in Pontefract & Wakefield \| Heritage Joiners (59) | Roof Carpenter in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Roof carpenter services across Pontefract, Wakefield and West Yorkshire, including cut roofs, rafter repair, dormer construction and timber roof repairs. (153) |
| [/services/second-fix-carpentry](https://heritagejoiners.co.uk/services/second-fix-carpentry) | Second Fix Carpentry in Pontefract & Wakefield \| Heritage Joiners (65) | Second Fix Carpenter in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Second fix carpenter services across Pontefract, Wakefield and West Yorkshire, including door hanging, skirting, architrave, boxing-in, and finishing joinery. (158) |
| [/services/skirting-architrave](https://heritagejoiners.co.uk/services/skirting-architrave) | Skirting & Architrave in Pontefract & Wakefield \| Heritage Joiners (66) | Skirting Board Fitting in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Skirting board fitting, architrave fitting, picture rails, dado rails, and profile-matched trim work across Pontefract, Wakefield and West Yorkshire. (149) |
| [/services/staircases](https://heritagejoiners.co.uk/services/staircases) | Staircase Fitter in Pontefract & Wakefield \| Heritage Joiners (61) | Staircase Fitter in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Staircase fitter services across Pontefract, Wakefield and West Yorkshire, including bespoke staircases, staircase repair, staircase renovation, and loft staircases. (165) |
| [/services/timber-hardwoods](https://heritagejoiners.co.uk/services/timber-hardwoods) | Oak Joinery in Pontefract & Wakefield \| Heritage Joiners (56) | Oak Joinery in Pontefract, Wakefield & West Yorkshire | 7 / 3 | Oak joinery, hardwood joinery, reclaimed timber, Accoya windows, and material-led timber advice across Pontefract, Wakefield and West Yorkshire. (144) |
| [/services/timber-repair](https://heritagejoiners.co.uk/services/timber-repair) | Timber Repair in Pontefract & Wakefield \| Heritage Joiners (58) | Timber Repair in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Timber repair, wood rot repair, wet rot repair, dry rot repair, splice repair, and timber restoration across Pontefract, Wakefield and West Yorkshire. (150) |
| [/services/windows](https://heritagejoiners.co.uk/services/windows) | Sash Window Repair in Pontefract & Wakefield \| Heritage Joiners (63) | Sash Window Repair in Pontefract, Wakefield & West Yorkshire | 8 / 3 | Sash window repair, timber window repairs, draught proofing windows, and timber window restoration across Pontefract, Wakefield and West Yorkshire. (147) |
| [/services/woodworm-treatment](https://heritagejoiners.co.uk/services/woodworm-treatment) | Woodworm Treatment in Pontefract & Wakefield \| Heritage Joiners (63) | Woodworm Treatment in Pontefract, Wakefield & West Yorkshire | 7 / 2 | Woodworm treatment, woodworm repair, timber treatment, and replacement of damaged timber across Pontefract, Wakefield and West Yorkshire. (137) |
| [/sitemap](https://heritagejoiners.co.uk/sitemap) | Site Map \| Heritage Joiners (27) | Site map | 6 / 0 | Browse every Heritage Joiners page, including carpentry and joinery services, areas covered across West Yorkshire, case studies, the gallery and practical guides. (162) |

### Structured data and social-image inventory

JSON-LD types are recorded as emitted, not a claim of Google rich-result eligibility. On all pages with LocalBusiness, the emitted subtype is HomeAndConstructionBusiness. The OG URL column identifies the exact affected photo for F11; only the default social-card image has the declared 1200×630 dimensions. Default social cards on appropriate supporting pages are a fallback, not a missing-image error.

| URL | JSON-LD types | Current OG image path | Robots |
|---|---|---|---|
| / | WebSite, HomeAndConstructionBusiness, FAQPage | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /404 | WebSite, HomeAndConstructionBusiness | /images/heritage-joiners-social-card-v2.jpg | noindex, nofollow |
| /about | WebSite, HomeAndConstructionBusiness | /images/about/heritage-joiners-hand-cut-dovetails-furniture.webp | No noindex directive |
| /areas | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /areas/castleford | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/homepage/the-counting-house-solid-oak-door-being-made.webp | No noindex directive |
| /areas/featherstone | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/gallery/timber-joist-repair.webp | No noindex directive |
| /areas/knottingley | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/services/staircases/oak-staircase-fitted-pontefract.webp | No noindex directive |
| /areas/leeds | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/homepage/heritage-joiners-timber-restoration.webp | No noindex directive |
| /areas/normanton | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/services/timber-hardwoods/oak-boards-stacked-workshop-yorkshire.webp | No noindex directive |
| /areas/pontefract | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/case-studies/counting-house/the-counting-house-pontefract-historic-building.webp | No noindex directive |
| /areas/wakefield | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/case-studies/counting-house/the-counting-house-rear-oak-staircase-finished.webp | No noindex directive |
| /areas/yorkshire | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/services/windows/yorkshire-stone-building-timber-sash-windows.webp | No noindex directive |
| /blog | WebSite, HomeAndConstructionBusiness | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /blog/bathroom-wall-panels-doncaster | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/bathroom-wall-panels/completed-bathroom-wall-cladding-doncaster.webp | No noindex directive |
| /blog/bespoke-ledged-and-braced-garden-gate | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/garden-gate/made-to-measure-wooden-garden-gate-fitted.webp | No noindex directive |
| /blog/can-timber-windows-be-repaired | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/timber-window-repair/restored-sash-window-after-timber-repair.webp | No noindex directive |
| /blog/commercial-door-closer-replacement-wakefield | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/commercial-door-closers/new-commercial-door-closer-fitted-wakefield.webp | No noindex directive |
| /blog/external-timber-cladding-castleford | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/timber-cladding/finished-garage-wall-cladding.webp | No noindex directive |
| /blog/flat-roof-repair-wakefield | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/flat-roof-wakefield/15-completed-flat-roof-timber-deck-wakefield.webp | No noindex directive |
| /blog/herringbone-laminate-flooring-hallway | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/herringbone-laminate-flooring-hallway/grey-oak-herringbone-laminate-flooring-hallway.webp | No noindex directive |
| /blog/how-to-build-a-stud-partition-wall | WebSite, HomeAndConstructionBusiness, BlogPosting | /images/blog/stud-partition/finished-stud-partition-wall-with-internal-door-doncaster.webp | No noindex directive |
| /blog/kitchen-fitting-wakefield-rental-property | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/kitchen-fitting-wakefield/light-grey-fitted-kitchen-wakefield.webp | No noindex directive |
| /blog/listed-casement-window-repair-bradford | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/listed-casement-window-repair-bradford/repaired-casement-window-back-in-use-greengates.webp | No noindex directive |
| /blog/loft-boarding-south-kirkby | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/loft-boarding-south-kirkby/boarded-loft-floor-for-storage-south-kirkby.webp | No noindex directive |
| /blog/mock-tudor-boarding-repair-castleford | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/mock-tudor-boarding-castleford/replacement-upvc-tudor-board-fitted-castleford.webp | No noindex directive |
| /blog/rotten-timber-window-sill-repair-pontefract | WebSite, HomeAndConstructionBusiness, BlogPosting, FAQPage | /images/blog/timber-window-sill-repair/repaired-timber-window-sill-finished-pontefract.webp | No noindex directive |
| /blog/what-is-second-fix-carpentry | WebSite, HomeAndConstructionBusiness, BlogPosting | /images/services/bespoke-joinery/bespoke-joinery-workshop-bench-pontefract.webp | No noindex directive |
| /case-studies | WebSite, HomeAndConstructionBusiness, BreadcrumbList | /images/case-studies/counting-house/counting-house-hero.webp | No noindex directive |
| /case-studies/counting-house | WebSite, HomeAndConstructionBusiness, Article, BreadcrumbList | /images/case-studies/counting-house/heritage-award-counting-house.webp | No noindex directive |
| /case-studies/counting-house/beam-repair-and-restoration | WebSite, HomeAndConstructionBusiness, Article, BreadcrumbList | /images/case-studies/counting-house/the-counting-house-oak-roof-structure.webp | No noindex directive |
| /case-studies/counting-house/oak-frames-and-joinery | WebSite, HomeAndConstructionBusiness, Article, BreadcrumbList | /images/case-studies/counting-house/the-counting-house-oak-interior-boxing-in-window.webp | No noindex directive |
| /case-studies/counting-house/oak-front-door | WebSite, HomeAndConstructionBusiness, Article, BreadcrumbList | /images/case-studies/counting-house/the-counting-house-oak-front-door-in-situ.webp | No noindex directive |
| /case-studies/counting-house/oak-staircases | WebSite, HomeAndConstructionBusiness, Article, BreadcrumbList | /images/case-studies/counting-house/the-counting-house-rear-oak-staircase-finished.webp | No noindex directive |
| /case-studies/dunster-windows | WebSite, HomeAndConstructionBusiness, Article, BreadcrumbList | /images/case-studies/dunster-windows/sash-window-refurbishment-pontefract.webp | No noindex directive |
| /contact | WebSite, HomeAndConstructionBusiness | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /facebook-data-deletion | WebSite | /images/heritage-joiners-social-card-v2.jpg | noindex, follow |
| /gallery | WebSite, HomeAndConstructionBusiness | /images/gallery/oak-door-counting-house.webp | No noindex directive |
| /guides | WebSite, HomeAndConstructionBusiness, BreadcrumbList, ItemList | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /guides/skirting-architrave-timber-moulding-profiles | WebSite, HomeAndConstructionBusiness, BreadcrumbList, FAQPage, Article | /images/guides/skirting-architrave-profiles/skirting-board-architrave-plinth-block.webp | No noindex directive |
| /guides/standard-door-sizes | WebSite, HomeAndConstructionBusiness, BreadcrumbList, FAQPage, Article | /images/case-studies/counting-house/the-counting-house-oak-front-door-in-situ.webp | No noindex directive |
| /privacy-policy | WebSite | /images/heritage-joiners-social-card-v2.jpg | noindex, follow |
| /repair-or-replace | WebSite, HomeAndConstructionBusiness, Article | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /reviews | WebSite, HomeAndConstructionBusiness | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /services | WebSite, HomeAndConstructionBusiness, BreadcrumbList, ItemList | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |
| /services/bespoke-joinery | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/bespoke-joinery/bespoke-joinery-workshop-bench-pontefract.webp | No noindex directive |
| /services/cladding-panelling | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/cladding-panelling/wall-panelling-fitted-doncaster.webp | No noindex directive |
| /services/doors | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/case-studies/counting-house/the-counting-house-oak-front-door-in-situ.webp | No noindex directive |
| /services/extensions-conversions | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/extensions-conversions/hipped-roof-extension-carpentry-yorkshire.webp | No noindex directive |
| /services/finishing | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/finishing/joinery-workshop-bench-finishing-pontefract.webp | No noindex directive |
| /services/first-fix-carpentry | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/first-fix-carpentry/first-fix-carpentry-stud-partition-frame-yorkshire.webp | No noindex directive |
| /services/flooring | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/flooring/engineered-oak-wood-flooring-yorkshire.webp | No noindex directive |
| /services/kitchens | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/kitchens/bespoke-oak-kitchen-fitted-pontefract.webp | No noindex directive |
| /services/maintenance-repairs | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/maintenance-repairs/carpentry-maintenance-and-repairs-yorkshire.webp | No noindex directive |
| /services/outdoor-carpentry | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/outdoor-carpentry/outdoor-carpentry-and-joinery-yorkshire.webp | No noindex directive |
| /services/roofing-carpentry | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/roofing-carpentry/roof-carpentry-new-timber-joists-wakefield.webp | No noindex directive |
| /services/second-fix-carpentry | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/second-fix-carpentry/second-fix-carpentry-door-lining-fitted-yorkshire.webp | No noindex directive |
| /services/skirting-architrave | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/skirting-architrave/torus-skirting-board-fitted-yorkshire.webp | No noindex directive |
| /services/staircases | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/staircases/oak-staircase-fitted-pontefract.webp | No noindex directive |
| /services/timber-hardwoods | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/timber-hardwoods/oak-boards-stacked-workshop-yorkshire.webp | No noindex directive |
| /services/timber-repair | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/timber-repair/timber-splice-repair-yorkshire.webp | No noindex directive |
| /services/windows | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/windows/yorkshire-stone-building-timber-sash-windows.webp | No noindex directive |
| /services/woodworm-treatment | WebSite, HomeAndConstructionBusiness, Service, FAQPage, BreadcrumbList | /images/services/woodworm-treatment/timber-treatment-roof-joists-wakefield.webp | No noindex directive |
| /sitemap | WebSite, HomeAndConstructionBusiness | /images/heritage-joiners-social-card-v2.jpg | No noindex directive |

## 16. Findings from earlier notes that should not be repeated as current faults

| Earlier concern | Current evidence |
|---|---|
| Site-wide pre-launch noindex | No longer present. Only error/legal documents are noindex. |
| Broken Cloudflare _headers path syntax | Corrected source; live image caching matches the intended current policy. |
| No privacy page | Privacy policy exists and is footer-linked. This audit is not a legal compliance opinion. |
| Wrong About and window-blog free-flowing photo dimensions | Earlier specific faults corrected; remaining fixed-slot mismatches are F13. |
| No responsive homepage hero | srcset/sizes variants exist and all 15 carousel image paths resolve locally. |
| No blog image captions on gate/window accounts | Both now use figure and figcaption. |
| Six service pages with no contextual incoming links | Old finding has been superseded by service/area/blog links; no current service orphan found. |
| Homepage links only four services | It now links eight service cards. |
| Recent-work component only on Wakefield | All eight area pages include it; four currently render cards. |
| Counting House index wrongly describes sash work | Current index accurately describes oak/restoration carpentry. |
| Homepage canonical/sitemap trailing-slash mismatch | Both use the root slash now. |
| Award link has wrong year because URL says 2026 | Destination explicitly documents the 2025 award and the Counting House. |
| Door-guide manufacturer PDFs are broken because HEAD fails | Both pass binary GET with 200/application/pdf. |
| Empty alt always means missing alt | Decorative/redundant images legitimately have empty alt; actual img attributes are present. |
| Every title over 60 characters must be shortened | No fixed Google title-character limit; preserve researched targeting and use evidence. |
| Adding FAQ or self-review schema will produce Google stars/snippets | FAQ rich results have been retired; self-serving local-business reviews are not eligible for review snippets. |

## 17. Evidence needed before consequential changes

1. **Search Console:** query, landing page, clicks, impressions, CTR and average position with dates, device and UK/country filters. Compare like periods and inspect page-level URL Inspection/canonicals for the important services. Do not infer rankings from Keyword Planner.
2. **Commercial outcomes:** actual qualified enquiries by landing page/service, with phone/WhatsApp/form measurement checked. Broad impressions are less valuable than relevant work.
3. **Cannibalisation verification:** for a suspected query cluster, see which URLs actually receive impressions/clicks over time. Multiple useful pages can appear without harming each other; title rewrites or URL switching alone need context.
4. **Performance:** current mobile PSI/lab diagnostics and Search Console CWV/CrUX where available. Measure the actual LCP element, image transfer and layout shifts per template before asking for image exports or changing priority.
5. **Local evidence:** current Business Profile details, service area, categories, hours, review records and enquiry geography. Do not expand coverage pages based solely on a keyword appearing in an export.
6. **Authority:** any existing relevant backlinks, local citations and project mentions; check retired URLs only if historical demand/links exist. No paid-link or invented-directory programme is proposed.

A later implementation task should make small, reviewable changes, retain URLs/primary ownership, preserve protected designs and original image bytes, and measure results against the baseline. This audit does not authorise implementation.

## 18. Audit-only completion record

- Recommendations are documented only.
- No page copy, title, H1, URL, metadata, schema, image, robots rule, redirect, package or configuration was changed.
- No package installation, build, git operation, deployment or external message was performed.
- The report separates confirmed observations, conditional opportunities and unverified performance/account facts.
- SEO.md is the sole audit deliverable. Existing website files and generated output are preserved.

