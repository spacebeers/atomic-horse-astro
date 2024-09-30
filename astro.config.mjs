import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    imageCDN: false,
    assetsInclude: ['**/*.svg'],
  }),
  site: "https://atomichorsedigital.netlify.app",
  image: {
    domains: ['netlify.app']
  },
  integrations: [sitemap()]
});