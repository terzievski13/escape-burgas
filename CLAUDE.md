# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (localhost:4321)
npm run build     # production build → dist/
npm run preview   # preview the production build
npx astro check  # TypeScript type-check (uses @astrojs/check)
```

No test suite exists. Deployment is via Netlify (`.netlify/state.json` present).

## Architecture

Static Astro site (no SSR) with Tailwind CSS v4 and TypeScript, deployed to Netlify. The site is entirely in **Bulgarian**.

### Data layer

All content is hard-coded in two source-of-truth files:

- [src/config.ts](src/config.ts) — site-wide constants: `site` object (name, phones, email, locations, social links, `web3formsKey`), `nav` array, `activeSocials` helper. Edit this to change contact info, navigation, or booking form credentials.
- [src/data/rooms.ts](src/data/rooms.ts) — the `Room[]` array that drives every page. Each room has: `slug`, `name`, `location` (`"mazze1"` | `"mazze2"`), `players`, `duration`, `minAge`, `cover`, `gallery[]`, `description`, `slots[]`, `pricing[]`, `featured`. Room images are CDN URLs from the old WordPress site (`https://escapeburgas.com/wp-content/uploads`). `featuredRooms` is a filtered export.

### Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero, all rooms grid, reviews, locations |
| `/stai` | `src/pages/stai/index.astro` | All rooms listing |
| `/stai/[slug]` | `src/pages/stai/[slug].astro` | Individual room detail + booking sidebar |
| `/ceni` | `src/pages/ceni.astro` | Pricing cards for all rooms |
| `/kontakti` | `src/pages/kontakti.astro` | Contact page with BookingForm |

### Layout

[src/layouts/Base.astro](src/layouts/Base.astro) is the single shell used by every page. It handles: `<head>` with SEO meta, OG tags, canonical URL, JSON-LD LocalBusiness schema, Google Fonts (`Cormorant Garamond`, `EB Garamond`), Header, Footer, and the global `IntersectionObserver` scroll-reveal script.

Props on `Base`:
- `overHero` — pass `true` when the page starts with a full-bleed hero so the header renders transparent instead of solid
- `hideFooterCta` — suppresses the large CTA block in the footer (used on `/kontakti`)

### Design system

All tokens and utilities live in [src/styles/global.css](src/styles/global.css), defined via Tailwind v4's `@theme` block:

| Token | Value | Use |
|---|---|---|
| `--color-void` | `#130e09` | page background |
| `--color-surface` | `#180f0a` | footer, cards |
| `--color-card` | `#1b130c` | booking card bg |
| `--color-paper` | `#e6dcc4` | primary text |
| `--color-muted` | `#c4b89a` | secondary text |
| `--color-faint` | `#8f8366` | tertiary / labels |
| `--color-ember` | `#c5382c` | accent (red) |
| `--color-line` | `rgba(197,56,44,0.18)` | dividers |

Key CSS utility classes (all defined globally, not as Tailwind plugins):
- `.eyebrow` — small uppercase red label used for section labels
- `.btn`, `.btn-ember`, `.btn-solid`, `.btn-outline` — button variants
- `.link-underline` — animated underline on hover
- `.reveal` — scroll-reveal: elements start invisible/translated, add class `.in` to animate in (done by `IntersectionObserver` in Base.astro). Apply `transition-delay` inline for staggered effects.
- `.container-x` — centered max-width (1200px) with responsive padding
- `.section-pad` / `.section-pad-xl` — standard vertical section spacing
- Layout grids: `.rooms-grid`, `.two-col-grid`, `.room-layout-grid`, `.gallery-grid`, `.howto-grid`, `.other-rooms-grid` (all responsive via breakpoint overrides in global.css)

### Booking form

[src/components/BookingForm.astro](src/components/BookingForm.astro) submits to [Web3Forms](https://web3forms.com/). Set `site.web3formsKey` in `src/config.ts` to a real key to activate it. If the key is the placeholder `"YOUR_WEB3FORMS_ACCESS_KEY"`, the form shows an error directing users to email directly.
