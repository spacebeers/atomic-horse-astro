import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DR4vlaDS.mjs';
import 'kleur/colors';
import { a as $$Banner, $ as $$Layout } from '../chunks/Layout_DITra-SE.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome", "data-astro-cid-5c24fmmt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5c24fmmt> ${renderComponent($$result2, "Banner", $$Banner, { "title": "How can we help?", "showHorse": true, "data-astro-cid-5c24fmmt": true })} <section class="container" data-astro-cid-5c24fmmt></section> </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/contact-us.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
