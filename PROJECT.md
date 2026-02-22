# Apilio Website

Rebuild of apilio.com using the Foxi Astro theme. Replaces the existing Webflow site.

## Tech Stack

- **Framework:** Astro 5.x (static site generator)
- **Styling:** Tailwind CSS 3.x with Typography plugin
- **Fonts:** Roboto Variable (body), Open Sans Variable (headings)
- **Icons:** astro-icon with 90+ local SVG icons in `src/icons/`
- **Images:** Sharp for optimisation
- **Analytics:** Google Analytics via Partytown (env var `PUBLIC_GA_TRACKING_ID`)
- **Hosting:** Vercel (git integration, main branch → production)
- **Template:** [Foxi Astro Theme](https://github.com/oxygenna-themes/foxi-astro-theme)

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Type-check + build to dist/
npm run preview   # Preview production build locally
vercel --prod --yes  # Deploy to production from CLI
```

## Project Structure

```
src/
├── assets/          # Images (logos, highlights, hero screenshot, webflow assets)
├── components/
│   ├── blocks/      # Page-level sections (hero, features, pricing, CTA, etc.)
│   ├── scripts/     # Analytics scripts (GA, GTM)
│   └── ui/          # Reusable UI components (Button, Card, Form, Modal, etc.)
├── config/          # Site-wide configuration
│   ├── config.ts          # Site title, description, OG image, logo, mode
│   ├── navigationBar.ts   # Header navigation items + CTA
│   ├── footerNavigation.ts # Footer columns + copyright
│   ├── socialLinks.ts     # Social media links
│   └── analytics.ts       # GA / GTM IDs (reads PUBLIC_GA_TRACKING_ID env var)
├── data/json-files/ # Structured content data
│   ├── pricingTablesdata.json  # 3 main pricing tiers
│   ├── featuresData.json       # 27 features in 6 categories
│   └── pricingFaqData.json     # Pricing FAQ
├── icons/           # Local SVG icons (Heroicons)
├── layouts/
│   └── Layout.astro      # Main page layout
├── pages/           # Routes (see below)
└── styles/
    └── global.css   # Tailwind directives, dark mode, animations
public/
├── favicon.svg
├── logo.svg
├── logo-full.png    # Brand logo with text
└── og.jpg           # Open Graph social image
```

## Active Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.astro` | Home — hero, integration logos, how it works, benefits, highlights, CTA |
| `/features` | `pages/features.astro` | 6 feature categories with sticky scroll sections |
| `/integrations` | `pages/integrations.astro` | Native integrations, webhooks/API, IFTTT brands, hubs |
| `/pricing` | `pages/pricing.astro` | Pricing cards, comparison table, FAQ, CTA |
| `/learn` | `pages/learn.astro` | Use case cards linking to community tutorials |
| `/about` | `pages/about.astro` | Team, story, community, location |
| `/terms` | `pages/terms.astro` | Terms & Conditions (verbatim from original, May 2019) |
| `/privacy` | `pages/privacy.astro` | Privacy Policy (verbatim from original, May 2019) |
| `/404` | `pages/404.astro` | Error page |

## Unused Foxi Pages (still present, not linked)

`/blog`, `/changelog`, `/faq`, `/contact` — template pages not removed yet.

## Theming

- **Primary colour:** `#FFC400` (amber/gold)
- **Neutral palette:** Blue Grey based on `#455A64`
- **Accent:** `#003BFF`
- **Dark mode:** Selector-based, toggleable (auto/light/dark)

## Content Guidelines

- All website copy uses **British English** (organise, authorise, minimise, metre, etc.)
- Legal pages (terms, privacy) are verbatim from the original Webflow site — spelling corrections to British English are the only allowed changes
- Don't name specific brands in generic benefit descriptions

## TODO

- [ ] Remove unused Foxi pages: `/blog`, `/changelog`, `/faq`, `/contact`
- [ ] Assets: Favicon (`public/favicon.svg`), OG image (`public/og.jpg`)
- [ ] Hero background: Improve dark bg with radial glow + watermark logo
