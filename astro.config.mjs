import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://lemuelowusuansah.github.io',
  base: '/cryptic-market',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
})
