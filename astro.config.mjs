import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { ImageService } from 'astro';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    imageCDN: false,
  }),
  site: "https://atomichorsedigital.netlify.app",
  image: {
    domains: ['netlify.app']
  },
  integrations: [sitemap()]
});