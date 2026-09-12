# Everything Hair by Prevail

An editorial React storefront and booking experience for Everything Hair by Prevail, a luxury hair and wig studio based in Lagos, Nigeria.

The site brings together premium wig shopping, professional revamping, bespoke styling, protective braiding, a finished-looks portfolio, and direct WhatsApp enquiries in one polished experience.

## What is included

- Luxury homepage with editorial hero, services, featured hair, reviews, lookbook, video journey, and booking CTA
- Shop catalogue with texture filters, curated collections, product pricing, specifications, and quick detail views
- Direct WhatsApp enquiry flows for products, portfolio looks, services, and appointments
- Responsive portfolio with category filtering and compact detail lightbox
- Services pages for custom wigs, wig revamping, professional styling, and braiding
- Booking form with service selection and WhatsApp confirmation flow
- Responsive navigation with mobile menu and persistent mobile actions
- Local image and video assets for product, portfolio, and social content

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local URL shown by Vite, usually `http://localhost:5173/`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
src/
├── components/       Reusable navigation, modal, booking, and interaction components
├── data/              Product, service, lookbook, and review content
├── pages/             Home, shop, services, portfolio, about, and contact pages
├── types/             Shared TypeScript models
├── App.tsx            Page routing and global modal state
└── index.css          Tailwind base styles and design utilities
public/
├── images/            Local product and editorial imagery
└── video/             Local journey videos
```

## Content and configuration

Product catalogue content lives in `src/data/products.ts`. Services, portfolio entries, and reviews are maintained in their corresponding files under `src/data/`.

Update social profile links, WhatsApp destinations, and studio contact details in the relevant components under `src/components/` and `src/pages/`.

## Brand channels

- TikTok: [@everythinghair_byprevail](https://www.tiktok.com/@everythinghair_byprevail)
- Instagram: [@everythinghairby_prevail](https://www.instagram.com/everythinghairby_prevail/)

## Build notes

The project intentionally keeps generated output and installed dependencies out of version control. See `.gitignore` for the complete list of ignored files.
