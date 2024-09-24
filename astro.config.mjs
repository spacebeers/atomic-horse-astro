import { defineConfig, squooshImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://spacebeers.github.io',
  base: '/atomic-horse-astro',
  integrations: [sitemap()],
  image: {
    service: squooshImageService()
  }
});