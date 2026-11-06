# Contributing to Cryptic Market

Thanks for wanting to help. This is a small project so keep it simple.

## Getting set up

Requires Node 22.23.4 or newer. Use nvm use to pick the right version from .nvmrc.

git clone https://github.com/LemuelOwusuAnsah/cryptic-market.git
cd cryptic-market
npm install
npm run dev

The dev server runs at http://localhost:4321/cryptic-market/

## Project layout

src/layouts has Base.astro, the page shell.
src/pages has index.astro and 404.astro.
src/components has one component per section.
src/lib/utils.js has the shared formatters.
src/styles/global.css has the design tokens and reset.

## Style

Two spaces, LF line endings, UTF-8. See .editorconfig.
One component per file.
Scoped styles inside each .astro file.
Global tokens live in src/styles/global.css.
Prefer CSS variables over hardcoded colors.

## Adding a section

Create src/components/YourSection.astro.
Import it in src/pages/index.astro.
Add a link in src/components/Nav.astro if it needs one.

## Before pushing

npm run lint
npm run format
npm run build

If all three pass, push. GitHub Actions runs the same checks and deploys automatically.

## Commits

Short, plain English, present tense.

Add sparkline fallback
Fix mobile nav overlap
Update BTC card to show volume

## Reporting issues

Open a GitHub issue with what you expected, what happened, your browser and OS, and a screenshot if visual.
