import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
  site: 'https://spacebeers.github.io',
  image: {
    service: squooshImageService()
  },
});