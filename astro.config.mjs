import { defineConfig, squooshImageService } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://spacebeers.github.io',
  base: '/atomic-horse-astro',
  integrations: [sitemap()],
  output: "hybrid",
  adapter: vercel(),
  image: {
    service: squooshImageService()
  }
});