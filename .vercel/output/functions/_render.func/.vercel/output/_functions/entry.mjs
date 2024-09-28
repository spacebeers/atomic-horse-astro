import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B_P5ffEu.mjs';
import { manifest } from './manifest_BYWitKZv.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contact-us.astro.mjs');
const _page5 = () => import('./pages/cookies.astro.mjs');
const _page6 = () => import('./pages/privacy.astro.mjs');
const _page7 = () => import('./pages/robots.txt.astro.mjs');
const _page8 = () => import('./pages/services.astro.mjs');
const _page9 = () => import('./pages/work.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/contact-us.astro", _page4],
    ["src/pages/cookies.astro", _page5],
    ["src/pages/privacy.astro", _page6],
    ["src/pages/robots.txt.astro", _page7],
    ["src/pages/services.astro", _page8],
    ["src/pages/work.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0a31331c-d2e3-4b66-8ce2-5cb36957abba",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
