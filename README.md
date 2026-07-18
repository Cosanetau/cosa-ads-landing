# COSA Core — Google Ads Landing Page

Standalone landing page for converting Google Ads traffic into COSA Core subscriptions with a first-month-free offer. Deliberately separate from the main marketing site (`Cosa-Website`) so ads traffic, copy and conversion tracking can change without touching cosa.net.au.

## Stack

- React 19 + Vite (no router — single page)
- Plain CSS (`src/index.css`), no Tailwind
- Icons: `lucide-react`

## How the offer works

Every CTA links to the existing COSA Core checkout with the free-month promo pre-applied:

```
https://core.cosa.net.au/subscribe?plan={starter|growth|scale}&billing=monthly&code=FIRSTFREE
```

The `FIRSTFREE` code and Stripe coupon already exist in `cosa-core` — this page contains no billing logic.

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
