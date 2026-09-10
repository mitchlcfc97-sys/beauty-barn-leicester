# 🌸 The Beauty Barn Leicester — Next.js Website Upgrade

A modern, high-performance website prototype for **[The Beauty Barn Leicester](https://www.thebeautybarnleicester.co.uk/)** — Leicester's only 100% private day spa. Built to replace the existing Wix site with vastly improved SEO, Fresha booking integration, and a luxury boutique aesthetic.

## 🌐 Live Demo

**[https://beautybarn.futuresolutionstestbed.eu](https://beautybarn.futuresolutionstestbed.eu)**

## ✨ What This Project Does

| Feature | Description |
|---|---|
| **Luxury Spa Website** | Mobile-first, boutique aesthetic inspired by Bamford Wellness & Soho Farmhouse. Warm linen tones, elegant serif typography, smooth interactions. |
| **Fresha Booking Integration** | Every treatment card links directly to Fresha's booking portal with pre-loaded service, location, and provider IDs. One-click booking from any page. |
| **Interactive Spa Day Builder** | Replaces the old 48-hour email enquiry form. Guests select a package, choose group size (2-8), pick a date, and see real-time 50% deposit calculations. |
| **SEO & 301 Redirect Matrix** | Permanent redirects from old Wix URLs (`/blank-page` → `/gift-vouchers`, `/copy-of-facials` → `/treatments/facials`, etc.) to preserve all existing Google rankings. |
| **Rich JSON-LD Schema** | Injects `DaySpa`, `BeautySalon`, `LocalBusiness` structured data with opening hours, geo coordinates, aggregate ratings, and full service catalogue for Google rich results. |
| **Dynamic XML Sitemap** | Auto-generated sitemap at `/sitemap.xml` covering all pages with priority weighting. |

## 🔍 Current SEO Performance (Being Preserved)

The existing website already ranks well for high-value keywords. This rebuild preserves and improves those positions:

| Keyword | Monthly Searches | Current Rank |
|---|---|---|
| massage leicester | 12,100 | #5 |
| the beauty barn leicester | 1,000 | #1 |
| full body massage leicester | 720 | #5 |
| facial leicester | 480 | #5 |
| spa day leicester | 1,300+ | #8 |
| couples massage leicester | 210 | #6 |

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript (strict)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Playfair Display (headings) + Plus Jakarta Sans (body) via `next/font`
- **Booking**: [Fresha](https://www.fresha.com/) (deep-linked integration)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, schema, nav, footer
│   ├── page.tsx                # Homepage (hero, treatments, reviews, map)
│   ├── spa-days/page.tsx       # Private spa packages + interactive builder
│   ├── treatments/
│   │   ├── page.tsx            # Full treatment menu with category filters
│   │   ├── massage/page.tsx    # SEO landing page for massage keywords
│   │   └── facials/page.tsx    # SEO landing page for facial keywords
│   ├── gift-vouchers/page.tsx  # Fresha voucher portal + physical gift box info
│   ├── about/page.tsx          # Mel & Zofia's story, stats, values
│   ├── contact/page.tsx        # NAP details, opening hours, Google Map, directions
│   └── sitemap.ts              # Dynamic XML sitemap generation
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky header with booking CTA and mobile drawer
│   │   └── Footer.tsx          # Full footer with hours, links, NAP, trust badges
│   ├── booking/
│   │   ├── FreshaModal.tsx     # Fresha new-tab opener with confirmation toast
│   │   └── SpaPackageBuilder.tsx # Interactive package customiser with deposit calc
│   └── seo/
│       └── SchemaMarkup.tsx    # JSON-LD structured data generator
├── data/
│   ├── business.ts             # NAP, opening hours, geo, social links, Fresha URLs
│   ├── treatments.ts           # Full treatment catalogue with prices and Fresha links
│   ├── spa-packages.ts         # 4 spa day packages with inclusions and pricing
│   └── reviews.ts              # Client testimonials
└── lib/
    └── utils.ts                # Tailwind merge helper + Fresha config constants
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm

### Install & Run Locally

```bash
# Install dependencies
npm install

# Run development server on port 3005
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site runs on **port 3005** by default (configured in `package.json`).

### Deploy to VPS (Current Setup)

The live demo runs on a Hostinger VPS with:
- **PM2** process manager (service name: `beauty-barn`, port `3050`)
- **Caddy** reverse proxy with automatic SSL on `beautybarn.futuresolutionstestbed.eu`

## 📊 Fresha Integration Details

The website integrates with The Beauty Barn's existing Fresha account:

| Parameter | Value |
|---|---|
| Provider ID | `354459` |
| Location ID | `380113` |
| Slug | `the-beauty-barn-sowuxl7s` |
| Booking URL | `https://www.fresha.com/book-now/the-beauty-barn-sowuxl7s/services?lid=380113&share=true&pId=354459` |
| Voucher URL | `https://www.fresha.com/a/the-beauty-barn-leicester-leicester-hall-farm-barn-beeby-road-wv85isjz/vouchers?pId=354459` |

These are configured in [`src/lib/utils.ts`](src/lib/utils.ts).

## 📍 Business Information

- **Name**: The Beauty Barn Leicester
- **Address**: Hall Farm Barn, Beeby Road, Scraptoft, Leicester, LE7 9SJ
- **Phone**: 07535 243827
- **Email**: thebeautybarn.leic@gmail.com
- **Hours**: Mon 9-4, Tue 9-5, Wed-Thu 9-8, Fri 9-5:30, Sat 9-2, Sun Closed

## 📝 License

This project was built by [FutureSolutions](https://futuresolutionsai.com) for The Beauty Barn Leicester.

---
*Deployment verified: September 2026 via Hostinger VPS CI/CD.*
