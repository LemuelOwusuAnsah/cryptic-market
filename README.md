# Cryptic Market

Live crypto prices, clear signals, and tools for the trader who wants the work to speak louder than the noise. Built by Lemy.

Live: https://lemuelowusuansah.github.io/cryptic-market/

## Stack

- Astro 5, static output
- Vanilla TypeScript for the price fetcher
- CoinGecko public API, no key required
- Handcrafted CSS, dark theme with gold accents
- GitHub Actions auto-deploy to Pages

## What it does

- Live BTC, ETH, SOL, BNB prices
- 24h change, volume, market cap
- Auto-refresh every 60s, pauses when the tab is hidden
- Manual refresh button
- Loading skeleton and error fallback
- Mobile hamburger nav
- Respects prefers-reduced-motion

## What it does not do

- Not financial advice.
- Signals, Tools, and Learn sections are placeholder content. Live tools are in build.
- No backend yet. Everything runs client-side.

## Run locally

nvm use
npm install
npm run dev

Opens at http://localhost:4321/cryptic-market/

## Build

npm run build
npm run preview

Output goes to dist/

## Deploy

Push to main. The workflow in .github/workflows/deploy.yml builds and publishes to GitHub Pages automatically.

First-time setup: enable Pages in the repo settings, source set to GitHub Actions.

## Layout

src/layouts/Base.astro - page shell, meta, OG, JSON-LD
src/pages/index.astro - composes all sections
src/components/ - Nav, Hero, Markets, Signals, Tools, Learn, Community, Footer
src/styles/global.css - tokens, reset, reduced-motion

## License

MIT. See LICENSE.
