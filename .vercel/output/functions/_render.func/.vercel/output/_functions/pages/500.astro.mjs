import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DIk37qPc.mjs';
import 'kleur/colors';
import { a as $$Banner, $ as $$Layout } from '../chunks/Layout_DXyH0pJh.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "500 error", "data-astro-cid-5v2qf5k4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="content-page" data-astro-cid-5v2qf5k4> ${renderComponent($$result2, "Banner", $$Banner, { "title": "500 Internal Server Error", "showHorse": true, "data-astro-cid-5v2qf5k4": true })} <section class="strip text-center w-clamp-xl intro-section" data-astro-cid-5v2qf5k4> <h2 class="text-4 fw-normal mb-2" data-astro-cid-5v2qf5k4>
That's the worst sort of error!
</h2> <p class="text-0" data-astro-cid-5v2qf5k4>
We're very sorry and hope you can forgive us. Please contact us to let us know what happened.
</p> </section> </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/500.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
