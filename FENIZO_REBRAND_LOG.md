# Fenizo Rebrand — Project Notes & Change Log

This file exists so a future session (human or AI) can pick up this project without
re-deriving context from scratch. It has two parts: **how the app is built** (so you can
find things), and **what changed and why** (so you don't redo work or reintroduce bugs
that were already fixed on purpose).

Scope note: this log covers `react-app-v2/` only. The repo root also contains the original
static WordPress export (`*.html`, `wp-content/`, `wp-includes/` at the top level) and a
`MIGRATION_PLAN.md` — those are reference/source material for the migration, not the live
app, and were intentionally left untouched.

---

## 1. What this project is

`react-app-v2` is a Vite + React 19 + React Router SPA rebuild of a WordPress site that
sold "clone script" products (Uber clone, Airbnb clone, Amazon clone, etc.) under the old
brand **Sanvish**. It is being rebranded to **Fenizo Technologies**
(`fenizotechnologies.com`), a real company — verified contact details, social handles and
a handful of real client testimonials were pulled from the live Fenizo site and are used
throughout instead of invented placeholders.

Business-model note: Fenizo's own marketing site presents itself as a broader dev shop
(web/mobile/AI/cybersecurity/crypto), but this codebase's actual built product is the
clone-script marketplace inherited from the WordPress export (21 pages, each selling a
specific "Clone Script"). That's not a bug — Fenizo's real product suite includes ready-made
platforms (School CRM, Crypto Exchange Script, etc.), so "sells productized clone/ready-made
software" is a genuine, factual part of Fenizo's business, not a leftover from the old
brand. The rebrand work below keeps that business model and reframes the presentation
around it with real Fenizo facts, rather than trying to turn the site into something it
isn't.

## 2. How a page loads — sequence flow

```
index.html (static SPA shell: favicon, default OG/canonical/JSON-LD, font/CSS preloads)
  → src/main.jsx (mounts <App/>)
    → src/App.jsx (BrowserRouter + <Routes>)
      → Layout.jsx (Header + MegaMenu + <Outlet/> + Footer + WhatsApp float button + lead popup)
         — OR — MinimalLayout.jsx (bare, no header/footer — used only by /schedule-free-demo)
        → one Page component from src/pages/ (e.g. HomePage.jsx, or src/pages/ClonePages/UberClonePage.jsx)
          → usePageStylesheets(pageStylesheets.xxx) — injects that page's legacy WordPress
            CSS bundles as <link> tags at runtime (see src/data/pageStylesheets.js)
          → useSeo('Page Title | Fenizo') — sets document.title + meta description +
            canonical + OG/Twitter tags for this route (src/hooks/useSeo.js)
          → renders section components from src/components/<page-slug>/ and
            src/components/shared/, most of which pull their copy from a sibling file in
            src/data/ (e.g. src/data/uber/uberData.js)
```

Static assets (images, legacy CSS/JS bundles, fonts) live under `public/` and are served
byte-for-byte at their path — nothing in `public/` goes through Vite's build pipeline. New
Fenizo-authored images go in `public/assets/images/fenizo/` (not the legacy
`public/wp-content/uploads/...` tree, which is inherited WordPress export structure).

Routes are declared in `src/App.jsx` — one entry per page, clean slugs only (no legacy
`.html` redirects are registered).

## 3. Where to look for things

| You want to change... | Look in... |
|---|---|
| Company name, address, phone, email | `src/data/siteContact.js` |
| Social media links | `src/data/socialLinks.js` |
| Homepage services grid | `src/data/ourServices.js` + `src/components/home/OurServices.jsx` |
| Homepage hero copy/CTAs | `src/components/home/Hero.jsx` |
| Trust badges (replaces old client-logo carousel) | `src/data/trustedByLogos.js` (exports `trustCategories`) |
| Testimonials | `src/data/testimonials.js` |
| Footer nav columns | `src/data/footerSitemap.js`, `src/data/socialLinks.js` (`footerNavColumns`) |
| Per-page SEO title | `useSeo('...')` call near the top of each page component in `src/pages/` |
| A specific clone page's copy (e.g. Uber) | `src/data/uber/uberData.js` + `src/components/uber/*.jsx` |

## 4. Change log (this session)

Commits are listed oldest → newest; each is a standalone, buildable checkpoint.

### `db8e847` — Replace Sanvish-branded photos with Fenizo SVG illustrations
Two real photographs were being used site-wide and were not just "old branding" in the
copy sense — they depicted real, identifiable content:
- `founder-1.webp`: a real photo of a real person, captioned **"Mr. Raja"** baked into the
  image, used with `alt="founder"` as a fake "chat with our expert" CTA across 5 clone
  pages (fiverr, rentalBooking, swiggy, tiktok, tinder).
- `website-aboutus-1.webp`: a stats graphic with **"#SANVIS" visible on a lanyard** and
  invented numbers (13+ years, 60+ products, 50+ countries, 500+ customers), used on the
  homepage achievement banner, the ERP and Turo "why choose us" sections, and as an image
  prop on the Vinted/Zillow pages.

Both were deleted and replaced with new SVG illustrations
(`public/assets/images/fenizo/expert-chat.svg`, `achievement-stats.svg`) using the site's
real blue brand palette (`#0030b8` / `#00366d`) and real verified stats (20+ countries,
24+ happy clients — see §5 below for where those numbers came from).

### `a2e624c` — Remove visible placeholders and last old-brand traces
- The footer and contact page were rendering literal bracket placeholders —
  `CIN: [Add CIN]`, `GSTIN: [Add GSTIN]`, a `USA:` address of `[USA office address]`, a USA
  phone of `[+1 phone]` — because those fields don't exist for Fenizo (no CIN/GSTIN or
  overseas office is published on the live site). Removed the fields from
  `siteContact.js` and the UI blocks that rendered them, rather than shipping bracket
  placeholders in production. Also fixed a dead `href="tel:"` (no number) bug found while
  editing that block.
- Replaced `'#'` social icon placeholders with Fenizo's real profiles (Facebook,
  Twitter/X, LinkedIn, Instagram, YouTube — handles confirmed from fenizotechnologies.com).
  Dropped GitHub/Pinterest icons since Fenizo has no presence there.
- 9 `.custom-tab-sangvish` CSS selector occurrences (dead/unused, but shipped statically)
  renamed to `.custom-tab-fenizo` across 4 stylesheets.
- Deleted 5 legacy WordPress/LiteSpeed `.js` bundles under `public/assets/js/` that were
  never imported by the app (confirmed via grep) but were still reachable as static files
  and contained `sangvish.com` API URLs / a `skype:sangvishtech` handle.
- Reworded the handful of source-code comments that still named the old brand.
- **Result: `grep -ri sangvish` across the whole `react-app-v2` tree returns zero matches.**

### `2f5660c` — Add per-route SEO metadata and site-wide structured data
- All 22 pages had the exact same pattern: a `useEffect` that only set `document.title`,
  duplicated file-for-file. Replaced with one shared hook, `src/hooks/useSeo.js`, that also
  upserts the meta description, canonical `<link>`, and OG/Twitter title+description+url on
  every route change (previously these were static and identical on every page after first
  paint — a real SEO gap, since a Vite SPA has no per-route server-rendered `<head>`).
- The homepage `<title>` never contained the word "Fenizo" (it was
  `"Mobile App & Web Development Company | Clone Script Solutions"`). Fixed to
  `"Fenizo | Web, Mobile App & Software Development Company"` in both `index.html` (first
  paint, before React mounts) and `HomePage.jsx` (post-mount, via `useSeo`).
- `index.html` gained a canonical link, full OG/Twitter card tags, and a JSON-LD
  `Organization` block (real name, logo, address, phone, verified social profiles) — none
  of this existed before.
- ⚠️ Mechanical hazard, noted for future editors: this change was done as a bulk
  find/replace across 22 files. The first regex pass accidentally stripped every page's
  title argument (`useSeo()` with no string). The original title text for all 22 pages was
  recovered from the prior git commit and re-applied — verified by diffing against
  `git show` output before committing. If you're doing a similar bulk edit, verify each
  file's actual content post-edit, not just that it parses.

### `56c5bd4` — Remove false client-endorsement claims (real third-party logos + fake stats)
Found while grounding homepage content in verified facts, and more serious than a branding
issue: the "Trusted by Industry Leaders" logo carousel (used on the homepage **and**
5 product pages — fiverr, rentalBooking, olx, udemy, tinder) was displaying **real
third-party companies' actual logos** (e.g. an accommodation-booking brand, a
resale-marketplace brand — verified by opening the image files) with zero real
relationship to Fenizo, next to an invented **"Trusted by 600+ Buyers"** stat on 4 of those
pages. A separate panel on the schedule-demo page showed a fabricated
Trustpilot/Google/Glassdoor rating composite image the same way.

This is a false-endorsement risk (implying a real company endorses Fenizo when it doesn't),
not just leftover old branding, so it needed fixing regardless of whose original task this
was. All 6 usages were replaced with a shared `trustCategories` list
(`src/data/trustedByLogos.js`) rendered as plain badges — "Built for Startups", "Built for
SMEs", "Built for Growing Businesses", "20+ Countries Served" (the last one is Fenizo's own
verified stat, not invented) — per the standard fallback for "don't invent client logos."
Deleted the 24 now-unreferenced logo images and the fake-ratings composite image.

### `fc7b35d` — Ground hero, services and testimonials in real Fenizo facts
- The homepage hero image (`web-development-company.webp`) had *another* invented stat
  baked into the picture itself: **"60+ Products"**. Replaced with a new
  `hero-development.svg` illustration (laptop/code/UI concept, no fabricated numbers).
- Rewrote the hero headline/badge/CTAs: badge "Digital Product & Software Development",
  headline "We Build Digital Products That Move Businesses Forward.", supporting copy
  naming websites/mobile apps/SaaS/e-commerce/custom software. The CTAs were dead links
  (`href="#"`) — now "Start Your Project" routes to `/contact-us` and "Explore Our
  Services" anchors to `#services` on the same page.
- Services grid swapped generic "Graphic Design" / "Clone Scripts" for: Web Development,
  Mobile App Development, Custom Software & Clone Scripts, UI/UX Design, AI & Automation
  Solutions, Digital Marketing — a merge of what Fenizo's real site advertises and what
  this codebase's product pages actually sell.
- Replaced all 9 "illustrative" testimonials (explicitly fake names/cities, self-labeled
  as not real in a source comment) with **4 real, named client testimonials** confirmed on
  fenizotechnologies.com: Samuel (CEO, Hoppr Technologies), Ebrahim Alzeyoudi (CEO, Al
  Khaleej Exchange), Manikandan (Director, Callerfinder), and the Principal of St. Joseph
  Mat. Hr. School, Madurai. Quote text is a close paraphrase of what the live site
  attributes to each, not an invented transcript — since these are real, identifiable
  people, the wording was kept deliberately close to source rather than dramatized.

### (this session) — Fix horizontal overflow bug + remove fabricated review ratings + de-brand tech-stack image
Continuing from the master rebuild brief, which called out a specific horizontal-scrollbar/overflow
bug and asked for a full audit. Ran `npm install` (node_modules wasn't present) and started the
dev server to verify against the live app rather than just reading code.

- **Horizontal overflow bug (confirmed via `document.documentElement.scrollWidth` vs `clientWidth`,
  1353px vs 1265px on the homepage).** Root cause: components using the `useInView` scroll-reveal
  hook (`WhyWeStandOutRow.jsx`, `OurServices.jsx`, others) intentionally render off-screen via inline
  `translateX/Y(±150px)` before scrolling into view, with nothing clipping that offset. Fixed with a
  deliberate `overflow-x: hidden` on `html, body` in `src/index.css` — this is the correct, standard
  pairing for translate-based scroll-reveal (not a blanket patch masking a real layout bug; verified
  `scrollWidth === clientWidth` afterward at both desktop and 375px mobile widths).
- **Fabricated review-platform ratings, sitewide.** `src/data/reviewPlatforms.js` held 6 badge images
  (Google/Glassdoor/Trustpilot/AmbitionBox/SiteJabber/JustDial) with specific invented ratings baked
  into the images (e.g. "4.3/5 on Google", "4.0/5 on Trustpilot") — confirmed via `WebFetch` against
  the live fenizotechnologies.com that no real ratings exist to source these from. These were used by
  3 different components reaching **every page on the site**: `ReviewPlatforms.jsx` (rendered inside
  `Footer.jsx`, sitewide), `TrustedByClients.jsx` (erp-software page), and `TrustedByBadges.jsx`
  (shared, used on uber/gojek/tiktok/youtube/zillow/vinted/alibaba/schoolCrm clone pages). Same
  false-endorsement category as the fake logo carousel already fixed in `56c5bd4` — removed the data
  file, the 6 images, and the `ReviewPlatforms.jsx` component entirely; `TrustedByBadges.jsx` and
  `TrustedByClients.jsx` now render the existing verified `trustCategories` badges
  (`src/data/trustedByLogos.js`) instead of badge images.
- **"Trusted by 600+ Buyers" fabricated stat, missed by the `56c5bd4` cleanup.** That commit fixed
  `TrustedByBuyers.jsx` (fiverr/olx/rentalBooking) but a same-purpose, differently-named component
  (`TrustedByBadges.jsx`) still had 4 pages (Uber, Gojek, Tiktok, Youtube) passing
  `heading="by 600+ Buyers"`, and `SwiggyClonePage.jsx` had the same stat hardcoded inline. Reworded
  all 5 to page-specific honest headings (e.g. "by Mobility Entrepreneurs" for Uber), matching the
  style already used on Zillow/Alibaba/Vinted/SchoolCrm. Re-grepped the whole tree for `600\+` and
  similar invented-number patterns afterward — zero remaining matches.
- **"SANGVISH" visible inside an image**, found on the homepage's "Robust Tech Stack We Used" banner
  (`TechStackBanner.jsx`) — the old brand's wordmark was rendered directly onto the 3D logo cube in
  `technology-stacks-scaled.webp`. Text-based `grep -ri sangvish` (per the `a2e624c` log entry) can't
  catch text baked into images, so this survived that pass. Rebuilt the whole section as a
  text-driven icon grid (`src/data/homeTechStack.js`, reusing the existing `iconbox` pattern from
  `TechStackRow.jsx`, 12 real technologies with Font Awesome brand icons: HTML5, CSS3, JavaScript,
  React, Node.js, PHP, Laravel, WordPress, Android, Swift, Java, AWS) instead of swapping in another
  static image — this also fixes the accessibility gap flagged in §6 below (images had no text
  alternative for the tech names) and removes the now-redundant separate desktop/mobile image pair.
  Deleted the 4 now-unused image files.
- Verified via `npm run build` (clean) after each step and live DOM checks in the running app
  (overflow, leftover branded/fabricated image references, `600+` text) rather than relying on
  static analysis alone — the review-badge fix in particular required a rebuild to catch 2 additional
  importers of `reviewPlatforms.js` that a first-pass grep of "known usages" would have missed.
- Not done this session: the footer sitemap dead-link question (§6 below) and a full page-by-page
  visual audit against the original HTML — the sandboxed browser pane here can't composite frames for
  real screenshots, so visual (not DOM-level) comparison wasn't possible; flagging rather than
  claiming it was checked.

### (later session) — Restored original per-page testimonials on explicit request, then re-cleaned brand traces they reintroduced
A separate rebrand direction from this same site's owner: several sections (footer nav-column
badges, the "Recognized by clients" carousel on Vinted/Zillow/Alibaba, the sitewide "Book a
Meeting" video-testimonial carousel) were missing content that exists in the original HTML.
Explicitly directed to restore the *original* per-page testimonials/photos/video links (not the
`fc7b35d` real-Fenizo-facts set) for these specific sections, brand name swapped only — the
tradeoff (real customer photos/quotes/videos vs. names that read as placeholder-style) was raised
and the owner chose restoration. New data: `src/data/placeholderTestimonials.js` (Ms. Zemira /
Mr. Jaxon / Mr. Henry trio, shared verbatim by Vinted/Zillow/Alibaba in the original) and
`src/data/videoTestimonials.js` (6-person video-testimonial carousel, global). `TestimonialCarousel.jsx`
and the shared `BlockquoteTestimonials.jsx` both gained an `items` prop so callers can override the
default real-testimonials pool without duplicating carousel markup.

This reintroduced the brand's old domain in 7 asset filenames carried over from the original site
(`google-sangvish.webp` and 5 sibling badge images, `razeb-sangvish.png`) plus 2 explanatory source
comments — the exact class of issue `a2e624c` had already zeroed out. Renamed all 7 files to
`*-clonescript.*` (in `public/wp-content/uploads/2025/01/` and `2024/07/`) and updated every
reference; reworded the 2 comments. Verified `grep -ril sangvish src/` and `find public -iname
"*sangvish*"` both return nothing, and re-verified each affected image still loads (200, not 404)
across Home/Vinted/ERP/schedule-free-demo in the running app.

Also note: this codebase went through a second rename after the above — **Fenizo → CloneScript**
(`siteContact.js`'s `companyName` etc. — see git log `406f0fc`). This log file's older entries
still say "Fenizo" throughout; that's the brand name *at the time those entries were written*, not
a claim about the current state. `useSeo.js`'s canonical/OG `SITE_URL` still hardcodes
`fenizotechnologies.com` (the domain, not just the display name) — flagged but not changed, since
domain ownership wasn't part of either rebrand instruction.

### (later session) — Fixed a site-wide invisible-page bug the Fenizo→CloneScript rename left behind
Every page was rendering correctly (right content, right layout) but **invisible** — `#wrap`/
`main.content` stuck at `visibility: hidden` forever, on every route, even minutes after all
stylesheets and fonts had finished loading. Root cause: `index.html`'s static app-shell spinner
(shows a spinner + hides `#wrap` before React mounts) and `src/hooks/usePageStylesheets.js` /
`src/styles/FenizoDesignSystem.css` (which reveal the page once route-specific CSS is ready) are
two halves of one mechanism that only work if they agree on a class name. The Fenizo→CloneScript
rename (`406f0fc`) renamed `index.html`'s copy of the class to `clonescript-page-styles-loading`
but missed the other two files, which kept managing the old `fenizo-page-styles-loading` name —
so `index.html`'s class was set on `<body>` at first paint and then *nothing ever cleared it*.
Fixed by renaming the hook and CSS to the same `clonescript-page-styles-loading` name. Separately
hardened the hook's reveal step, which was gated purely on two chained `requestAnimationFrame`
calls: browsers pause `requestAnimationFrame` indefinitely for a tab that never composites a frame
(backgrounded on load, minimized, or this project's browser-automation test environment), so a
real user opening the site in a background tab could hit the same permanent-hidden state even with
the class names fixed. Added a 300ms `setTimeout` fallback that races the rAF chain — normal
foreground loads still get the intended anti-FOUC double-rAF timing, everything else self-heals
within 300ms instead of hanging forever. This also explains why the Vinted Clone page's FAQ
section looked "missing" — it was present and correctly wired, just invisible along with
everything else in `main.content`.

## 5. Where the "real facts" came from

Fetched directly from `https://fenizotechnologies.com` on 2026-08-10. Key facts used
throughout the rebrand:
- Verified stats: **20+ countries served**, **24 happy clients worldwide** (used instead
  of the old brand's invented 13+ years / 60+ products / 500+ customers).
- Real social handles: Facebook `FenizoTechnologies`, Twitter/X `@FenizoTechs`, LinkedIn
  `fenizo-technologies-software-company`, Instagram `fenizotechnologies`, YouTube
  `@FenizoTechnologies`.
- Real named testimonials (see §4, `fc7b35d`).
- Confirmed **no** CIN/GSTIN or overseas office is published — hence those fields were
  removed rather than left as placeholders.

## 6. Known follow-ups (not done this session — scoped out, not forgotten)

- **Footer sitemap dead links** (`src/data/footerSitemap.js`): many entries (e.g. "Uber
  For Babysitters", "Uber for Beauty App") point to `'#'` because there's no dedicated page
  built for that specific variant — only ~20 real routes exist against ~70 listed link
  labels. This mirrors the original site's structure (a mega-menu of keyword variants
  funneling into a smaller set of real pages) and predates the rebrand; it wasn't touched
  because fixing it means either building many new pages or deleting most of the footer,
  both bigger decisions than a rebrand pass. Flagging for a deliberate decision later.
- ~~`src/data/reviewPlatforms.js` badge images~~ — **done, this session**: removed (fabricated
  ratings, not just old-brand traces; see change log above).
- ~~Tech stack section as static images~~ — **done, this session**: rebuilt as a text-driven
  icon grid (`src/data/homeTechStack.js`); also removed a "SANGVISH" wordmark baked into the
  old desktop image that text-grepping had missed.
- **Process step naming** (`src/data/devProcessSteps.js`): current steps (Requirement
  Analysis → Customization Planning → Design & Development → Testing → Launch → Support)
  are conceptually equivalent to but don't literally match a Discover/Plan/Design/Develop/
  Test/Launch naming convention. Left as-is since the current copy is specific and honest
  about the clone-script business model; revisit only if strict naming alignment matters.
- Only the homepage, footer, contact page and the shared trust-badge components got a full
  content audit this session. The 17 individual clone-product pages (Uber, Airbnb, Amazon,
  etc.) were spot-checked for the sangvish/SEO/image issues above but not deep-audited
  section-by-section against the full brand brief.

## 7. How to verify changes

```bash
cd react-app-v2
npm run dev      # start Vite dev server
npm run build     # production build — catches import/syntax errors bulk edits can introduce
npm run lint      # oxlint
```

After any bulk find/replace across many files, diff a sample of the results against
`git show HEAD:<path>` before committing — see the `2f5660c` note in §4 for why.
