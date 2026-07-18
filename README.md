# COSA Core — Google Ads Landing Page

Standalone landing page for converting Google Ads traffic into COSA Core subscriptions with a first-month-free offer. Deliberately separate from the main marketing site (`Cosa-Website`) so ads traffic, copy and conversion tracking can change without touching cosa.net.au.

## Stack

- React 19 + Vite (no router — single page)
- Plain CSS (`src/index.css`), no Tailwind
- Icons: `lucide-react`

## How the offer works

Offer CTAs always include `code=FIRSTFREE`.

| Billing | What the customer gets |
|---------|------------------------|
| Monthly | First month free (Stripe coupon), then monthly price |
| Yearly | First month free (30-day trial), then annual price = 11 × monthly |

The page has a monthly/yearly toggle. Default is monthly (lower commitment for ads). Yearly is labelled best value.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Deploy as its own Vercel project (SPA rewrite included in `vercel.json`). Suggested domain: `start.cosa.net.au` or `try.cosa.net.au`.

## Screenshots

The "See it in action" section looks for real product screenshots in `public/screenshots/`:

- `dashboard.png`
- `bookings.png`
- `job-cards.png`
- `customers.png`
- `invoicing.png`

Until those files exist, styled placeholder tiles are shown instead. Shared brand assets (wordmark, preview video, integration logos) are loaded from cosa.net.au.
