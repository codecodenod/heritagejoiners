# Codex work order — Heritage Joiners site fixes

Derived from `check.md` (full site review, 2026-07-24) plus a Seobility on-page report for the homepage.

Work through the tasks in order. **P1 first** — those are low-risk and high-value. Stop and ask before starting P4.

---

## Before you start — read this

### The site is already in good shape. Do not over-correct.

Measured baseline, homepage, mobile, 2026-07-25:

- **PageSpeed Insights:** Performance 93 · Accessibility 96 · Best Practices 100 · SEO 100
- FCP 0.9s · TBT 0ms · CLS 0.021 · Speed Index 0.9s · **LCP 3.3s** (the one weak metric)
- **Seobility on-page:** 85%, one warning (a false positive — see the "Do NOT do" section)

Every task below is an incremental improvement on a healthy site, not a rescue. **No task in this document authorises restructuring a page, changing the visual design, or refactoring a component wholesale.** If a fix appears to require that, stop and ask.

The scores above are also why several findings need explaining: they do not contradict the review, they simply cannot see it.

- Lighthouse ran *"Initial page load · single page session"* — a **cold cache**. `Cache-Control` only affects repeat visits, so task 1 is structurally invisible to it.
- CLS 0.021 is the **homepage**. The two layout-shift bugs in task 2 are on `/blog/can-timber-windows-be-repaired` and `/about`, neither of which was tested.
- Accessibility 96 is axe-core, which covers roughly a third of WCAG and only tests the page's initial rendered state. The mobile menu is `hidden` at load, so it is skipped entirely. WCAG 2.2.2 (auto-advancing carousel), focus-indicator quality and missing live regions are not machine-detectable.
- Best Practices 100 does not include any cookie-consent or GDPR audit.

A green Lighthouse score means no basic errors. It is a floor, not a ceiling.

### Project shape

Astro static site, deployed GitHub → Cloudflare Pages. No React, no client frameworks. Plain `.astro` components and small inline scripts only. Read `CLAUDE.md` in the repo root in full before touching anything.

### Hard rules (do not break these)

- **Never run git commands.** No `add`, `commit`, `push`, `status`. Rob commits himself. If asked for a commit message, output message text only.
- **Never add a JS library or a third-party CDN.** The site ships zero JS bundles apart from small inline scripts. Fonts are self-hosted via `@fontsource`.
- **The business email must never appear in plaintext** anywhere — HTML, JS, schema, config. It lives base64-encoded in `src/components/ui/EmailLink.astro` only. Never add `email` to `siteConfig`.
- **Contact details always come from `src/config/site.ts`.** Never hardcode a phone number, address or social URL.
- **Never write the word "pine".** Say "original timber", "original exterior frame", "original Victorian door".
- **Award wording is exact:** "Heritage Award at Pontefract Civic Society's 2025 Design Awards". Never "restoration award", never "award-winning joiner" — the *project* won it, not Rob.
- **No testimonials, reviews, star ratings or review schema** beyond what already exists on `/reviews`. Never invent quotes, prices or claims.
- **No prices anywhere.** No £ figures. Use "saves thousands" style framing if needed.
- **Never invent a new visual pattern.** Copy the exemplar file for the page type and swap content. Exemplars are listed in `CLAUDE.md`.
- **Voice:** plain, proud, traditional Yorkshire trade voice. Concrete and physical. No marketing hype.
- Do not touch `PRIVATE/` (gitignored, owner's notes) and never reference it in site code.

### Verify after every task

```bash
npm run build                  # must complete with no errors
```

Then for anything touching page output:

```bash
grep -ri "pine" dist/ --include=*.html          # must be 0 matches
grep -ril "rob@\|@heritagejoiners" dist/        # must be 0 matches
```

Confirm exactly one `<h1>` per page and that heading classes match the scale in `CLAUDE.md`.

---

## P1 — Do these first

### 1. Fix `public/_headers` — the syntax is invalid, all cache rules are dead

**File:** `public/_headers`

**Problem:** Every path line has a trailing colon (`/images/*:`). Cloudflare Pages treats an unindented line as the URL pattern, so the pattern is literally `/images/*:` and matches nothing. None of the caching is being applied.

**This is confirmed against live production, not inferred.** Measured 2026-07-25:

| URL | Live `Cache-Control` | What `_headers` intends |
|---|---|---|
| `/images/homepage/the-counting-house-oak-staircase-landing.webp` | `public, max-age=14400, must-revalidate` | `max-age=31536000, immutable` |
| `/_astro/BaseLayout.PFM54PKk.css` | `public, max-age=14400, must-revalidate` | `max-age=31536000, immutable` |
| `/about` | `public, max-age=0, must-revalidate` | `no-store, no-cache` |

All three are Cloudflare Pages defaults. Both assets returned `cf-cache-status: REVALIDATED` rather than a clean `HIT`. Re-run these after the fix — the images and `_astro` rows must change, or the file is still wrong:

```bash
curl -sI https://heritagejoiners.co.uk/_astro/<hashed>.css | grep -i 'cache-control\|cf-cache'
```

Two more bugs in the same file:
- `/fonts/*` matches nothing — fonts build into `/_astro/`, not `/fonts/`.
- `/*.html` matches nothing — `astro.config.mjs` sets `build.format: 'file'`, so pages are served at `/about`, not `/about.html`.

**Replace the whole file with:**

```
# Cloudflare Cache Rules
# Path lines take NO trailing colon — that is the documented _headers syntax.

# Content-hashed build output. Safe to cache forever.
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

# Images use stable descriptive filenames, so they are NOT immutable —
# a replaced photo at the same filename must be able to expire.
/images/*
  Cache-Control: public, max-age=2592000

# Security header.
# Note: Cloudflare Pages already sends x-content-type-options: nosniff and
# referrer-policy: strict-origin-when-cross-origin by default (verified live),
# so only the clickjacking header is actually missing.
/*
  X-Frame-Options: SAMEORIGIN
```

**Notes:**
- Do **not** add a `Cache-Control` rule under `/*`. Cloudflare Pages already serves HTML as `public, max-age=0, must-revalidate` and purges its edge cache on every deploy, so Rob's updates go live immediately. Adding a conflicting broad rule creates ordering ambiguity.
- The old file set `no-store` on HTML. That was trying to solve a problem the platform already handles, and it defeats edge caching. Dropping it is intentional.
- `immutable` is deliberately **not** used on `/images/*`. It affects the browser cache, which a deploy cannot purge — a replaced photo would show stale for up to a year.

**Verify:** the file has no `:` on any unindented line, and every header line is indented by two spaces.

### 2. Fix two wrong image dimensions causing layout shift

Both declare a width/height whose aspect ratio does not match the actual file. With `h-auto` the browser reserves the wrong box, then jumps when the image loads.

**2a.** `src/content/blog/can-timber-windows-be-repaired.md` line 68

Declared `800x1422`, file is actually `1080x1434`. At mobile width the reserved box is ~345 px too tall — a large CLS hit.

```
width="800" height="1422"   →   width="1080" height="1434"
```

**2b.** `src/pages/about.astro` line 68

Declared `1600x900`, file is actually `1315x681`. ~46 px shift.

```
width="1600"  →  width="1315"
height="900"  →  height="681"
```

**Do not** change the homepage service-card images even though their declared `600x192` also mismatches the files. `.service-card-image` pins `height: 12rem`, so CSS wins and there is no shift. Changing them would break the card layout.

**Verify:** run this and confirm only the 8 service-card entries remain:

```bash
npm run build && cd dist && python3 - <<'EOF'
import re,os,struct,glob
def size(p):
    d=open(p,'rb').read(40)
    if d[12:16]==b'VP8X': return (int.from_bytes(d[24:27],'little')+1,int.from_bytes(d[27:30],'little')+1)
    if d[12:16]==b'VP8L':
        b=int.from_bytes(d[21:25],'little'); return ((b&0x3FFF)+1,((b>>14)&0x3FFF)+1)
    if d[12:16]==b'VP8 ': return (struct.unpack('<H',d[26:28])[0]&0x3fff, struct.unpack('<H',d[28:30])[0]&0x3fff)
for f in glob.glob('**/*.html',recursive=True):
    for tag in re.findall(r'<img\b[^>]*>',open(f,encoding='utf8').read()):
        s=re.search(r'(?:data-)?src="([^"]+\.webp)"',tag)
        w=re.search(r'width="(\d+)"',tag); h=re.search(r'height="(\d+)"',tag)
        if not(s and w and h): continue
        p=s.group(1).lstrip('/')
        if not os.path.exists(p): continue
        r=size(p)
        if r and abs(int(w.group(1))/int(h.group(1)) - r[0]/r[1])/(r[0]/r[1]) > 0.02:
            print(f, p, f"declared {w.group(1)}x{h.group(1)}", f"actual {r[0]}x{r[1]}")
EOF
```

### 3. Lazy-load the mobile-menu panel logo

**File:** `src/components/layout/Header.astro`, the `<img>` at ~line 73 (inside `<div id="mobile-menu">`)

Add `loading="lazy"`. The panel is `hidden` until opened, so the image never needs to be fetched on first paint.

**Leave the header logo at ~line 17 alone** — it is above the fold and correctly eager.

`src/components/layout/Footer.astro` contains no images. Do not go looking for one there.

### 4. Give the 404 page a descriptive `<h1>`

**File:** `src/pages/404.astro` line 14

Currently the `<h1>` is literally `404`. Replace the text with something descriptive while keeping the existing classes and the big-numeral visual:

- Keep the large `404` as a separate non-heading element (e.g. a `<p>` or `<span>` with the current `text-6xl lg:text-8xl` classes) so the page still looks the same.
- Make the `<h1>` a real sentence — e.g. "Page not found" — styled with the standard `font-display text-4xl lg:text-5xl text-ink`.

Keep the `noindex` prop on this page. It is the only page on the site that should ever have it.

### 5. Add descriptive alt text to the 8 homepage service-card photos

**File:** `src/pages/index.astro`, the service card grid (~lines 330–425)

**Context:** Seobility flagged "12 images have no alt attribute" on the homepage. That is a false positive in the strict sense — all 12 have `alt=""`, which is valid and *correct* markup for decorative images. But 8 of the 12 are real photos of Rob's work and deserve real alt text for image search.

**Leave these 4 exactly as they are — `alt=""` is correct:**
- `/images/icons/35-years-hands-on-woodgrain-icon.png`
- `/images/icons/repair-first-period-building-icon.png`
- `/images/icons/pontefract-based-yorkshire-icon.png`
- `/images/homepage/heritage-joiners-timber-restoration.webp` (parallax background, also `aria-hidden="true"`)

Adding alt to those would make screen readers worse, not better — the adjacent text already carries the meaning.

**Add alt to these 8.** Suggested text below, but **you must open each `.webp` first and confirm the description actually matches the photo.** These suggestions were written from filenames and card context, not from viewing the images. Correct anything that does not match.

| Image | Suggested alt |
|---|---|
| `fitted-oak-kitchen-pontefract.webp` | Fitted oak kitchen with timber worktops in a Pontefract home |
| `oak-staircase-handrails-spindles.webp` | Oak staircase with turned spindles and a shaped handrail |
| `timber-sash-window-stone-surround.webp` | Timber sash window set in a stone surround on a period property |
| `oak-roof-trusses-timber-rafters.webp` | Oak roof trusses and timber rafters in an open roof structure |
| `oak-ledged-and-braced-front-door.webp` | Solid oak ledged and braced front door hung in a stone opening |
| `workshop.webp` | Joinery workshop bench set up for bespoke timber work |
| `service-rot.webp` | Rotten timber cut back ready for a splice repair |
| `carpentry-maintenance-repairs-yorkshire.webp` | Carpentry maintenance and repair work in progress on site |

Alt text must obey the content guardrails — no "pine", no invented claims, plain trade voice. Describe what is in the photo; do not stuff keywords.

**Verify:** `grep -c 'alt=""' dist/index.html` should return 4.

---

### 5b. Serve a responsive hero image — this is the LCP

**File:** `src/pages/index.astro`, hero carousel slides (~lines 58–140)

**Why:** PageSpeed Insights (mobile, 2026-07-25) scored the homepage 93 Performance with FCP 0.9s, TBT 0ms, CLS 0.021 — but **LCP 3.3s**, the only amber metric. The 2.4s gap between FCP and LCP is the hero image.

Slide 1 (`the-counting-house-oak-staircase-landing.webp`) is **1920×1078, 90.6 KB**, served at full size to an emulated 412 px-wide Moto G Power on throttled 4G. That is roughly 5× the pixel area the device needs.

**Before changing anything, confirm the LCP element.** Open the PSI report and read the "Largest Contentful Paint element" audit. It could plausibly be the `<h1>` text rather than the image. Do not optimise the wrong resource — if it is the text, the fix is the font preload in task 12 instead, and you should skip this task and say so.

**If it is the hero image:**

Generate smaller variants per the image pipeline in `CLAUDE.md` (ImageMagick, strip metadata, quality 80) and add a `srcset` / `sizes` to the slide images. Suggested widths: 800, 1200, 1920. The hero spans the full viewport, so `sizes="100vw"`.

```bash
convert <source> -auto-orient -strip -resize "800x800>"  -quality 80 <name>-800.webp
convert <source> -auto-orient -strip -resize "1200x1200>" -quality 80 <name>-1200.webp
```

Constraints:
- Keep `fetchpriority="high"` and `loading="eager"` on slide 1 only.
- Keep the existing `width`/`height` attributes at the **largest** variant's intrinsic size so the reserved aspect ratio stays correct — CLS is currently 0.021 and must not regress.
- Slides 2–5 use `data-src` and are swapped in on `window.load`. Give them `data-srcset` and have the existing script transfer both attributes, not just `src`.
- Source photos live outside the repo — see `~/Documents/heritage-joiners-private/`. Ask Rob if the originals for these aren't available; do **not** upscale the existing 1920px webp to make variants.

**Verify:** rebuild, re-run PSI mobile on the homepage, confirm LCP has dropped and CLS is still under 0.1.

---

## P2 — Accessibility

### 6. Add a skip link

**File:** `src/layouts/BaseLayout.astro`

WCAG 2.4.1 (A). The sticky header plus 8 nav items must currently be tabbed through on all 48 pages.

Add a skip link as the first focusable element in `<body>`, before `<Header />`, targeting the existing `<main>`. It should be visually hidden until focused, then clearly visible. Give `<main>` an `id`.

Use plain Tailwind utilities in the existing style — `sr-only focus:not-sr-only` plus the site's `bg-ink text-bone` treatment. No new CSS file, no library.

### 7. Fix the mobile menu

**File:** `src/components/layout/Header.astro` (button ~lines 41–60, panel ~line 66, script ~lines 115–129)

Four issues:

- **`aria-expanded` / `aria-controls`** are missing on the `#mobile-menu-open` button. Add both, and keep `aria-expanded` in sync in the script.
- **No Escape-to-close.** Add a `keydown` listener.
- **No focus management.** On open, move focus into the panel (the close button is the natural target). On close, return focus to the toggle button.
- **Real bug — scroll lock leaks.** The script sets `document.body.style.overflow = 'hidden'` on open and only clears it on the close button. Open the menu on mobile, then rotate to landscape or resize to desktop: `lg:hidden` hides the panel but the page stays scroll-locked with no way to unlock it.

  Fix by adding a single `closeMenu()` function that clears the class, clears `overflow`, resets `aria-expanded` and restores focus — then call it from the close button, from Escape, and from a `matchMedia('(min-width: 1024px)')` change listener.

A focus trap is nice-to-have but not required. Focus move plus Escape plus a working close covers the practical cases.

### 8. Give the hero carousel a keyboard pause

**File:** `src/pages/index.astro` (dots ~line 140, script ~lines 188–266)

The carousel auto-advances every 6s. It already pauses on `mouseenter` and when the tab is hidden, and it respects `prefers-reduced-motion` — but a keyboard-only user has no way to stop it. That is a WCAG 2.2.2 (A) failure.

Two changes:

- **Add `focusin` / `focusout` listeners** on `.hero-carousel` calling the existing `stop()` / `start()`. Cheap, and covers keyboard users landing on the dots.
- **Add a visible pause/play toggle button** next to the dots. This is what actually satisfies 2.2.2. Style it to match `.hero-dot` — same size, same colours, same `:focus-visible` outline. Give it an `aria-label` that updates between "Pause slideshow" and "Play slideshow". When paused, it must stay paused — do not let `mouseleave` restart it.

**Also fix the ARIA roles.** The dots currently use `role="tab"` inside `role="tablist"` with no `aria-controls`, no `role="tabpanel"` on the slides, and no arrow-key handling. Screen readers announce a tab widget that does not behave like one.

Simplest correct fix: drop `role="tablist"` and `role="tab"` entirely, keep the plain `<button>`s, and swap `aria-selected` for `aria-pressed`. Keep the existing `aria-label="Slide N: ..."` text and keep the `aria-label="Heritage Joiners showcase"` on the section.

### 9. Announce the contact form banners

**File:** `src/pages/contact.astro` (banners ~lines 66–69, hint ~line 100, script ~lines 110–177)

The success, error and Turnstile-hint elements toggle the `hidden` attribute with no live-region role, so screen reader users get no feedback after submitting via the enhanced fetch path.

- Add `role="status"` to the `data-form-banner="sent"` div.
- Add `role="alert"` to the `data-form-banner="error"` div and to `[data-turnstile-hint]`.

**Also improve the focus indicator.** Every input uses `focus:outline-none` with only a border-colour change, which is weak against WCAG 2.4.11. Replace `focus:outline-none focus:border-oak` with a visible ring — e.g. `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oak` alongside the border change. Match the treatment already used by `.hero-dot:focus-visible` in `src/pages/index.astro` so it stays consistent.

---

## P3 — SEO and schema polish

### 10. Remove the dangling `parentOrganization` reference

**File:** `src/components/schema/LocalBusiness.astro`

The schema emits `parentOrganization: { '@id': `${url}/#organization` }` on all 48 pages, but `Organization` schema is never rendered anywhere — `BaseLayout` only emits it when `schema="organization"`, and no page passes that. The `@id` points at a node that does not exist.

**Also remove the `logo` property.** It is not valid on `LocalBusiness` (it belongs on `Organization`). The `image` property is already present and is the one Google uses.

Delete both lines. Do not add an `Organization` block to fix it — the site does not need one, and `HomeAndConstructionBusiness` already carries everything.

**Verify:** rebuild, then confirm no page references `#organization`:

```bash
grep -rc "#organization" dist/ --include=*.html | grep -v ":0" || echo "clean"
```

### 11. Descriptions only — DO NOT TOUCH THE TITLES

> **CORRECTION, 2026-07-25.** An earlier version of this task said ~23 titles exceeded 60 characters and told you to shorten the location half — e.g. `in Pontefract & Wakefield` → `in Pontefract`. **That instruction was wrong and is withdrawn.**
>
> **If you have already made that change, revert it.** Restore `& Wakefield` (and any other trimmed location) to every page title you edited. Known affected: `services/doors.astro`, `services/skirting-architrave.astro`, `services/second-fix-carpentry.astro`, `services/windows.astro`, `services/woodworm-treatment.astro`. Check the others too.
>
> Two reasons it was wrong:
>
> 1. **The measurement was broken.** Title lengths were counted from raw HTML, where `&` appears as the entity `&amp;` — 5 characters, not 1. Every title with an ampersand was over-counted by 4, and the two with a pair by 8. Real range is ~51–66 characters, not 57–74. `services/doors.astro` is **57** and was never over the limit. Seobility independently measured the homepage title at 533 px of a 580 px budget and rated it "perfect".
> 2. **Trimming the town is a bad trade even when a title is genuinely long.** Google truncates the *displayed* title around 580 px but still indexes the full string, so the keyword keeps its ranking value. You would be buying appearance with a ranking signal. And "Wakefield" is a primary local keyword, not filler — largest town in the service area, its own `/areas/wakefield` page, present in `siteConfig.serviceArea` and the site-wide default description.
>
> Most importantly, `CLAUDE.md` specifies the convention explicitly:
>
> > Title/H1 lead with the page's primary keyword: `"<Primary Keyword> in Pontefract, Wakefield & West Yorkshire | Heritage Joiners"`
>
> **Leave all page titles as they are.** The longest is `services/skirting-architrave.astro` at 66 characters; the only thing that clips is the `| Heritage Joiners` suffix, which is the least valuable part of the string. That is an acceptable trade. If Rob ever wants them shorter, the answer is to tighten the *keyword phrasing*, never to drop a town.

The rest of this task still stands. Three descriptions run slightly over the 165-char guideline and should be trimmed:
- `services/roofing-carpentry.astro` — 168
- `contact.astro` — 167
- `src/pages/blog/index.astro` — 166

**Verify.** This script decodes HTML entities before measuring — the shell version in the earlier draft did not, which is what caused the bad title data. Titles are reported for information only; **do not act on the title column.**

```bash
npm run build && cd dist && python3 -c "
import glob,re,html
for f in sorted(glob.glob('**/*.html',recursive=True)):
    s=open(f,encoding='utf8').read()
    t=re.search(r'<title>([^<]*)</title>',s)
    d=re.search(r'<meta name=\"description\" content=\"([^\"]*)\"',s)
    if t and len(html.unescape(t.group(1)))>66: print('TITLE',len(html.unescape(t.group(1))),f)
    if d and len(html.unescape(d.group(1)))>165: print('DESC ',len(html.unescape(d.group(1))),f)
print('done')"
```

Every title must still contain its town names. Confirm none were lost:

```bash
grep -L "Wakefield" dist/services/*.html
```

### 12. Add resource hints to the document head

**File:** `src/layouts/BaseLayout.astro`

Three cheap wins, all in `<head>`:

- **Move the GA4 script block** (currently lines 63–70, the very first thing in `<head>`) to sit *after* the `<title>`, canonical and description. It is `async` so it does not block parsing, but as the first element it opens a third-party connection before the browser has even discovered the page's own stylesheet.
- **Add `<link rel="preconnect" href="https://www.googletagmanager.com">`** immediately before the GA4 script.
- **Preload the Fraunces woff2.** It renders every `<h1>` and is a text-LCP candidate. The hashed filename changes per build, so import the font asset in the layout frontmatter and reference the resolved URL — do not hardcode `/_astro/fraunces-latin-wght-normal.ukD16Tqj.woff2`. If that cannot be done cleanly without adding tooling, skip this one and say so.

---

## P4 — Needs Rob's decision, do not start unsolicited

### 13. GA4 consent and a privacy policy

`src/layouts/BaseLayout.astro` fires `gtag` on page load, setting cookies before any consent is given, and the site has no `privacy`, `cookies` or `terms` page. For a UK business this is a PECR / UK-GDPR exposure.

The technical fix is GA4 Consent Mode v2 defaulting to `denied`, plus a small consent control and a privacy page. But this involves legal copy and a product decision about whether Rob wants a cookie banner on the site at all.

**Do not build this without Rob agreeing to the approach first.** Flag it and stop.

### 14. Visible breadcrumbs

34 pages emit `BreadcrumbList` schema but the site renders no visible breadcrumbs anywhere. `CLAUDE.md` claims `ServiceLayout` "auto-provides breadcrumbs" — it provides the *schema* only.

Google's guidance is that structured data should reflect visible page content, and deep service and case-study pages lose the navigation affordance. But adding a breadcrumb row is a new visual pattern across 34 pages, which the golden rule says not to invent unilaterally.

**Propose a design to Rob first.** If approved, build it into `ServiceLayout.astro` and `CaseStudyLayout.astro` so it inherits everywhere at once, reusing the existing `breadcrumbs` prop that both layouts already accept.

---

## Do NOT do these

Seobility flagged the following. All are either false positives or actively bad advice for this site. Leave them alone.

- **"34 headings should be more in proportion to the amount of text."** A blog-shaped heuristic hitting a card-grid homepage. 1 H1 + 10 H2 + 23 H3 is the layout working correctly. Do not delete or downgrade headings.
- **"Some anchor texts are used more than once."** It is "Message on WhatsApp" ×2 and the phone number ×2 — the standard CTA block that ends nearly every page. Correct as-is.
- **"Some internal link anchor texts are too long."** Mildly true — each service card wraps the title *and* its description in one `<a>`, so the anchor runs ~90 chars. Leave it. Splitting the link would shrink the tap target for a negligible gain.
- **"Few social sharing options."** Sharing widgets are dead weight on a local trade site and would break the no-JS-libraries rule.
- **"Server location: Germany."** That is the Cloudflare PoP nearest Seobility's crawler. Means nothing.
- **"The domain name is very long."** `heritagejoiners.co.uk` is 22 characters. Nonsense.
- **"No additional page markup was found."** Seobility failed to detect the three JSON-LD blocks on the homepage (`WebSite`, `HomeAndConstructionBusiness`, `FAQPage`) because it looks for microdata/RDFa. The schema is fine — verify it with Google's Rich Results Test, not Seobility.
- **Do not add review or rating schema** to `/reviews` or anywhere else. This is a standing project guardrail.

---

## Not a code task — for Rob

The lowest-scoring item in the Seobility report was external factors at **3%**: one backlink from one referring domain. That, not anything on-page, is what is currently capping the site's ranking. No amount of on-page work above will move the needle as much as fixing this.

Legitimate, already-earned links worth claiming:

- **Pontefract Civic Society** — they gave The Counting House the Heritage Award, and the site already links out to them. A link back from their 2025 Design Awards page is natural and deserved.
- **Pergo Certified Installer directory** — Rob's certification entitles him to that listing.
- **Local press** — coverage of The Counting House restoration (Pontefract & Castleford Express and similar).
- **The Counting House itself** — a trade credit link from the business.

No code change required. This is outreach, and it is the highest-value item on this entire document.
