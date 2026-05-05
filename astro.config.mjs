// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://heritagejoiners.co.uk',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  devToolbar: { enabled: false },
  integrations: [react(), sitemap({
    lastmod: new Date(),
    changefreq: 'weekly',
    serialize(item) {
      const path = new URL(item.url).pathname;
      return {
        ...item,
        priority: path === '/' ? 1 : path.startsWith('/services') || path.startsWith('/areas') ? 0.8 : 0.6
      };
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
