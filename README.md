# Apilio Website

The marketing website for [Apilio](https://www.apilio.com) — reliable automation for your smart home. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), based on the Foxi template.

## Getting Started

```bash
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview production build
```

Requires Node.js 20.3.0 or later.

## Project Structure

```
src/
├── assets/            # Images, illustrations, integration logos
│   └── webflow/       # Assets migrated from Webflow site
├── components/
│   ├── blocks/        # Page section components (hero, CTA, features, etc.)
│   └── ui/            # Reusable UI components (Button, Section, Row, Col, etc.)
├── config/            # Site config, navigation, footer, social links, analytics
├── content/blog/      # Blog posts (MDX)
├── icons/             # Local SVG icons (Heroicons)
├── layouts/           # Page layouts
└── pages/             # Routes (each .astro file = one page)
```

## Configuration

Site-wide settings live in `src/config/`:

| File                     | Purpose                          |
| :----------------------- | :------------------------------- |
| `config.ts`              | Site title, description, SEO     |
| `navigationBar.ts`       | Header nav items + CTA           |
| `footerNavigation.ts`    | Footer columns + about text      |
| `socialLinks.ts`         | Social media links               |
| `analytics.ts`           | GA / GTM / Search Console        |

Brand colors and fonts are configured in `tailwind.config.mjs` and imported in `src/layouts/Layout.astro`.

## Content Plan

See `CONTENT.md` for the full page-by-page content plan and `APILIO.md` for product details.

## Pages

| Route           | Status      |
| :-------------- | :---------- |
| `/`             | Implemented |
| `/features`     | Planned     |
| `/integrations` | Planned     |
| `/pricing`      | Planned     |
| `/about`        | Planned     |

## License

Based on the [Foxi Astro Theme](https://github.com/oxygenna/foxi-astro) by Oxygenna (MIT).
