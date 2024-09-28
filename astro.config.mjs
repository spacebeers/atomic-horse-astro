import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://atomic-horse-astro-lchgumj2n-helloatomichorses-projects.vercel.app/",
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()]
});