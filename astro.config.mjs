// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';

// Per-page last-modified dates, committed to the repo.
// A CI clone resets every file mtime, so real dates cannot be read at build time —
// they live in src/data/lastmod.json and are updated when a page's content changes.
// Any route missing from the map gets NO lastmod at all: saying nothing is better than
// stamping today's date on a page that has not changed, which teaches Google to ignore
// the field entirely.
const lastmodMap = JSON.parse(readFileSync(new URL('./src/data/lastmod.json', import.meta.url), 'utf8'));

// https://astro.build/config
export default defineConfig({
  site: 'https://heritagejoiners.co.uk',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  devToolbar: { enabled: false },
  integrations: [sitemap({
    changefreq: 'weekly',
    // Legal pages for the Meta app integration. Publicly reachable and not
    // disallowed in robots.txt (Meta must fetch them), but kept out of the
    // XML sitemap and marked noindex, follow on the pages themselves.
    filter: (page) => !/\/(privacy-policy|facebook-data-deletion)\/?$/.test(page),
    serialize(item) {
      const path = new URL(item.url).pathname;
      const key = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
      const entry = {
        ...item,
        priority: path === '/' ? 1 : path.startsWith('/services') || path.startsWith('/areas') ? 0.8 : 0.6
      };
      const lastmod = lastmodMap[key];
      if (lastmod) entry.lastmod = new Date(`${lastmod}T00:00:00Z`).toISOString();
      else delete entry.lastmod;
      return entry;
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
