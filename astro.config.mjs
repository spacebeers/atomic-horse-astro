import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
  image: {
    service: squooshImageService(),
    site: 'https://spacebeers.github.io',
  },
});