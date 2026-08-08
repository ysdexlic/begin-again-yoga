import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ysdexlic.github.io',
  base: '/begin-again-yoga',
  integrations: [sitemap()],
});
