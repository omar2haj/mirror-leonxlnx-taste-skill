# Opal Screening website

Marketing site for Opal Screening. Built with Next.js 16 (App Router), Tailwind CSS v4 and TypeScript, ready for Vercel.

Preview screenshots for desktop and mobile are in [`preview/`](./preview).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (41 static routes + 1 API route)
```

## Deploying to Vercel

1. Move this folder into its own repository, or point the Vercel project's **Root Directory** at `opal-screening/`.
2. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL`: the production domain, e.g. `https://www.opalscreening.com` (used for canonical URLs, sitemap and Open Graph).
   - `LEAD_WEBHOOK_URL`: where Get Started and Contact submissions go (CRM, Zapier/Make, Slack or an email service webhook). **Until you set it, the forms show a "not connected yet, please email us" message, so no lead is silently lost.**
3. Preview deployments get `Disallow: /` in robots.txt automatically. Only production is indexable.

## Where to edit things

All content lives in `src/data/`. Most changes never touch a component.

| What | File |
| --- | --- |
| Company name, email, phone, hours, portal URL | `src/data/site.ts` |
| Turn a service on or off, or mark it "Launching soon" | `src/data/services.ts` (`status`: `available` / `coming-soon` / `hidden`) |
| Prices (all `null` for now, which shows "Contact us") | `src/data/pricing.ts` |
| DOT & FMCSA and Employer page copy | `src/data/topics.ts` |
| "Who we help" cards | `src/data/audiences.ts` |
| FAQ pages | `src/data/faqs.ts` |
| Blog posts | `src/data/posts.ts` |
| Navigation | `src/data/nav.ts` (built from the files above) |

Setting a service to `hidden` removes it from the nav, homepage, pricing table and sitemap, and its pages return 404.

## Before launch: please confirm

- [ ] **Domain and inbox.** `site.url` and `contact.email` (`info@opalscreening.com`) are placeholders.
- [ ] **Phone number.** It's `null`, so it's hidden everywhere until you add one.
- [ ] **Plan features** in `pricing.ts` (e.g. "Priority human support", "Dedicated account contact", "Volume testing rates"). These are proposals. Remove anything you won't offer at launch.
- [ ] **Service statuses.** Occupational Health, Background Screening and Driver Compliance start as `coming-soon`.
- [ ] **Regulatory copy** in `topics.ts`, `faqs.ts` and the compliance guide. It's written against 49 CFR Parts 40 and 382, but have your compliance lead or counsel review it.
- [ ] **Privacy Policy and Terms.** These are placeholder pages (set to noindex).
- [ ] **Logo.** `src/components/ShieldMark.tsx` and `src/app/icon.svg` are vector rebuilds of the approved brand board. Swap in your designer's master SVG when you have it; the component API stays the same.

## Design system

- **Palette:** navy ink, slate neutrals tinted toward the brand hue, and a single opal (aqua) accent. Tokens are in `src/app/globals.css` (`@theme`).
- **Type:** Archivo set wide (echoing the OPAL wordmark) for display, Geist for body. Both are self-hosted; no Google Fonts requests.
- **Brand device:** the shield's cut corner (`.facet`) shapes cards and panels. Concentric shield outlines, shield-fragment glyphs and thin luminous lines (`.lumen-line`) carry the mark through the site.
- **Motion:** CSS-only reveals with an IntersectionObserver. Respects `prefers-reduced-motion`. No animation library.

## Content rules followed

No testimonials, statistics, location counts, years in business, accreditation badges or third-party and government logos. The footer states that Opal is not affiliated with or endorsed by DOT or FMCSA. The portal section is labeled as a preview with sample data.
