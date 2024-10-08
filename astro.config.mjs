import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

export default defineConfig({
    output: 'hybrid',
    adapter: netlify({
        imageCDN: false,
    }),
    site: "https://atomichorsedigital.netlify.app",
    image: {
        domains: ['netlify.app']
    },
    integrations: [sitemap(), mdx()]
});