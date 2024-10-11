import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://atomichorse.agency',
    output: 'hybrid',
    adapter: netlify({
        imageCDN: false,
    }),
    image: {
        domains: ['netlify.app'],
    },
    integrations: [sitemap(), mdx()]
});