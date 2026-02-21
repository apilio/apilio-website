# Apilio Website

Rebuild of apilio.com using the Foxi Astro theme. Replaces the existing Webflow site.

## Tech Stack

- **Framework:** Astro 5.x (static site generator)
- **Styling:** Tailwind CSS 3.x with Typography plugin
- **Fonts:** Inter Variable (body), Outfit Variable (headings)
- **Icons:** astro-icon with 90+ SVG icons in `src/icons/`
- **Images:** Sharp for optimization
- **Analytics:** Google Analytics / Tag Manager ready (via Partytown)
- **Hosting:** Vercel (free tier, `@astrojs/vercel` adapter included)
- **Template:** [Foxi Astro Theme](https://github.com/oxygenna-themes/foxi-astro-theme)

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Type-check + build to dist/
npm run preview   # Preview production build locally
```

## Project Structure

```
src/
├── assets/          # Images (avatars, cards, highlights, logos, backgrounds)
├── components/
│   ├── blocks/      # Page-level sections (hero, features, pricing, CTA, etc.)
│   └── ui/          # Reusable UI components (Button, Card, Form, Modal, etc.)
├── config/          # Site-wide configuration
│   ├── config.ts          # Site title, description, OG image, logo, mode
│   ├── navigationBar.ts   # Header navigation items + CTA
│   ├── footerNavigation.ts # Footer columns + copyright
│   ├── socialLinks.ts     # Social media links
│   └── analytics.ts       # GA / GTM IDs
├── content/blog/    # Blog posts (Markdown with frontmatter)
├── data/json-files/ # Structured content data
│   ├── pricingTablesdata.json  # 3 pricing tiers
│   ├── featuresData.json       # 40+ features in 5 categories
│   ├── faqData.json            # 21 FAQs grouped by category
│   └── changelogData.json      # Version history
├── data/markdown-files/
│   └── terms.md     # Terms of service
├── icons/           # SVG icons (90+)
├── layouts/
│   ├── Layout.astro      # Main page layout
│   └── PostLayout.astro  # Blog post layout
├── pages/           # Routes (see below)
└── styles/
    └── global.css   # Tailwind directives, dark mode, animations
public/
├── blog/            # Blog post images
├── feeds/           # Changelog images
├── favicon.svg
├── logo.svg
└── og.jpg           # Open Graph social image
```

## Pages / Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.astro` | Home — hero, features, testimonials, highlights, CTA |
| `/pricing` | `pages/pricing.astro` | Pricing tables, social proof, FAQ, CTA |
| `/features` | `pages/features.astro` | Feature categories with sticky scroll sections |
| `/faq` | `pages/faq.astro` | FAQ sections with text/image blocks |
| `/contact` | `pages/contact.astro` | Contact form, contact cards, social proof |
| `/changelog` | `pages/changelog.astro` | Version history feed |
| `/terms` | `pages/terms.astro` | Terms & conditions with sidebar nav |
| `/blog` | `pages/blog/index.astro` | Blog post listing |
| `/blog/[id]` | `pages/blog/[...id].astro` | Individual blog posts |
| `/blog/tags/[tag]` | `pages/blog/tags/[tag].astro` | Posts filtered by tag |
| `/404` | `pages/404.astro` | Custom error page |

## Theming

- **Primary color:** `#E2187D` (pink) — defined in `tailwind.config.mjs`
- **Neutral palette:** Slate-based
- **Dark mode:** Selector-based, toggleable (auto/light/dark via `config.ts`)
- **Animations:** fadeUp, fadeInShadow, dropdown (Tailwind config)

## TODO

- [ ] Logo text font: Roboto Slab doesn't match the original Apilio brand typeface — identify the correct font (thin serif used in `Logo/` assets) and replace `font-logo` in Tailwind config

## Customization Checklist

- [ ] Update site config (`src/config/config.ts`) — title, description, logo
- [ ] Replace colors in `tailwind.config.mjs` with Apilio brand colors
- [ ] Update navigation (`src/config/navigationBar.ts`, `footerNavigation.ts`)
- [ ] Replace content in JSON data files (`src/data/json-files/`)
- [ ] Update or remove blog posts (`src/content/blog/`)
- [ ] Replace images and logo (`public/`, `src/assets/`)
- [ ] Set up analytics (`src/config/analytics.ts`)
- [ ] Update `astro.config.mjs` site URL
- [ ] Remove unneeded pages/sections
- [ ] Create GitHub repo and connect to Vercel
