import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://spacebeers.github.io',
  integrations: [sitemap()]
});