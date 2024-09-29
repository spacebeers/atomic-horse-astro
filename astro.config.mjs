import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://atomic-horse-astro-lchgumj2n-helloatomichorses-projects.vercel.app/",
  output: 'server',
  adapter: netlify(),
  integrations: [sitemap()]
});