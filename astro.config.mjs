import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'hybrid',
  adapter: netlify({
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg,', '**/*.jpeg'],
  }),
  site: "https://atomichorsedigital.netlify.app",
  image: {
    domains: ['netlify.app']
  },
  integrations: [sitemap()]
});