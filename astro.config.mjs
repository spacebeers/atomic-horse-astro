import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  image: {
    domains: ['netlify.app']
  },
  integrations: [sitemap()]
});