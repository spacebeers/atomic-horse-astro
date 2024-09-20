import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
  site: 'https://spacebeers.github.io',
  base: '/atomic-horse-astro',
  image: {
    service: squooshImageService()
  },
});