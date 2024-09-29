import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://marvelous-bubblegum-768f00.netlify.app/",
  output: 'server',
  adapter: netlify(),
  integrations: [sitemap()]
});