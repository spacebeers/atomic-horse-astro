import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_7FlixKJL.mjs';
import 'kleur/colors';
import { $ as $$Banner, a as $$Layout } from '../chunks/Layout_CQhcHKs_.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Page not found", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="content-page" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Banner", $$Banner, { "title": "This is fine", "showHorse": true, "data-astro-cid-zetdm5md": true })} <section class="strip text-center w-clamp-xl intro-section" data-astro-cid-zetdm5md> <h2 class="text-4 fw-normal mb-2" data-astro-cid-zetdm5md>
We're very sorry that we cannot find this page
</h2> <p class="text-0" data-astro-cid-zetdm5md>
Which is odd as we built the website and we're pretty sure it should be here.
</p> </section> </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/404.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
