import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beginagainyoga.co.uk',
  integrations: [sitemap()],
});
