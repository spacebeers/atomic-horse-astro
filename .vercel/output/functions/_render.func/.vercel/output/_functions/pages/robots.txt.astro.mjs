import { a as createComponent, r as renderTemplate } from '../chunks/astro/server_DIk37qPc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const GET = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
const $$Robots = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/usr/local/var/www/magenta-magnitude/src/pages/robots.txt.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/robots.txt.astro";
const $$url = "/robots.txt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Robots,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
