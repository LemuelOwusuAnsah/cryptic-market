# Cryptic Market

A live crypto market dashboard. Real prices, real sparklines, zero noise. Built by Lemy.

Live: https://lemuelowusuansah.github.io/cryptic-market/

## Overview

A production-grade static site that pulls live prices for the top crypto pairs directly from the CoinGecko public API. Auto-refreshes, pauses when the tab is hidden, handles rate limits gracefully, and ships zero JavaScript beyond what the page actually needs.

## Stack

Astro 5 for the static build. TypeScript for the price fetcher and format utilities. Handwritten CSS with a dark theme and gold accents. CoinGecko public API for data. Hand-rolled SVG for sparklines, no charting library. Vitest and Testing Library for tests. ESLint flat config and Prettier for code quality. GitHub Actions for lint, test, build, deploy.

## Architecture

src/layouts/Base.astro is the page shell with meta, Open Graph tags, and JSON-LD.

src/pages/index.astro composes the dashboard. src/pages/404.astro is the catch-all.

src/components contains Nav, Hero, Markets, Sparkline, LiveBadge, Signals, Tools, Learn, Community, and Footer.

src/lib/utils.js has formatMoney, formatPrice, formatChange.

src/styles/global.css has the tokens, reset, and reduced-motion rules.

Every section is its own component. index.astro composes them. Changing a section does not touch the rest of the page.

## Features

Live prices for BTC, ETH, SOL, BNB from CoinGecko, refreshed every 60 seconds.

24h sparklines as hand-rolled SVG, no charting library, sampling every 4th point from the market chart endpoint.

Smart lifecycle that pauses polling when the tab is hidden and resumes on return.

Graceful degradation with skeleton shimmer, fade transition, and a friendly error state on rate limit.

Manual refresh button.

Dark theme with gold accent and radial glow backgrounds.

Mobile-first hamburger nav, responsive grid, accessible touch targets.

Accessible ARIA labels, prefers-reduced-motion, semantic landmarks.

SEO with Open Graph, Twitter cards, canonical URL, and JSON-LD WebSite schema.

A styled 404 page that links back to the dashboard.

## Getting started

Requires Node 22.23.4 or newer. Use nvm use to pick the version from .nvmrc.

git clone https://github.com/LemuelOwusuAnsah/cryptic-market.git
cd cryptic-market
npm install
npm run dev

Dev server opens on http://localhost:4321/cryptic-market/

## Scripts

npm run dev starts the Astro dev server with HMR.

npm run build builds the static output to dist/.

npm run preview serves the production build locally.

npm run lint runs ESLint over .js and .ts.

npm run format runs Prettier across the repo.

## Deployment

Pushes to main trigger .github/workflows/deploy.yml, which reads Node version from .nvmrc, installs dependencies with npm ci, builds with npm run build, and publishes dist/ to GitHub Pages.

Pages must be enabled once in repo settings with source set to GitHub Actions.

## Environment

No environment variables required. CoinGecko public API is unauthenticated and rate-limited to roughly 10-30 requests per minute. The site polls once per coin per minute, plus one sparkline fetch per coin on first load.

## Data source

All prices come from CoinGecko at https://www.coingecko.com. Not financial advice. If the API rate-limits or goes down, the cards show a clear error state and retry on the next refresh cycle.

## Roadmap

Shipped: live prices, sparklines, 404 page, skeleton fade.

Planned: watchlist with localStorage persistence, position size calculator, extended lessons page.

## License

MIT. See LICENSE.
