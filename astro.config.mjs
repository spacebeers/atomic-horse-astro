import { defineConfig, squooshImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import formDebug from "@astro-utils/forms/dist/integration.js";

export default defineConfig({
  site: 'https://spacebeers.github.io',
  base: '/atomic-horse-astro',
  integrations: [sitemap()],
  image: {
    service: squooshImageService()
  },
  output: 'server',
  integrations: [formDebug]
});