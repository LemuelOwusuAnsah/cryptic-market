# Changelog

All notable changes to Cryptic Market are listed here. Format follows Keep a Changelog, versions follow SemVer.

## [0.4.0] - 2026-11-06

### Added
- Sparkline component rendering 24h price trends as inline SVG
- Fade transition from skeleton to live data
- LiveBadge component with pulsing indicator
- Shared format utilities in src/lib/utils.js
- ESLint flat config and Prettier config
- 404 page with back-to-dashboard link
- README, LICENSE, CONTRIBUTING, CHANGELOG

### Changed
- Markets.astro now uses shared formatters instead of inline functions
- Section content expanded in Signals, Tools, and Learn

## [0.3.0] - 2026-11-02

### Added
- Live CoinGecko price fetcher for BTC, ETH, SOL, BNB
- Auto-refresh every 60 seconds, pauses when tab is hidden
- Manual refresh button with spinner state
- Error fallback when CoinGecko rate-limits
- Skeleton shimmer while loading

### Changed
- Rebuilt from single HTML file into Astro project
- Old index.html preserved in git history

## [0.2.0] - 2026-10-22

### Added
- GitHub Actions workflow for Pages deploy
- Mobile hamburger nav
- Dark theme with gold accents

## [0.1.0] - 2026-09-29

### Added
- Initial single-file landing page
- Hero, Markets, Signals, Tools, Learn, Community sections
- Footer with social links
