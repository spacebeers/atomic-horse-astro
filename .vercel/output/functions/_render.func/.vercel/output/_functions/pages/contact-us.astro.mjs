import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_7FlixKJL.mjs';
import 'kleur/colors';
import { $ as $$Banner, a as $$Layout } from '../chunks/Layout_CQhcHKs_.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome", "data-astro-cid-5c24fmmt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5c24fmmt> ${renderComponent($$result2, "Banner", $$Banner, { "title": "How can we help?", "showHorse": true, "data-astro-cid-5c24fmmt": true })} <section class="container" data-astro-cid-5c24fmmt> <h2 data-astro-cid-5c24fmmt>A web development studio with a difference</h2> <p data-astro-cid-5c24fmmt>
Here at Atomic Horse we just want to help you, who ever you are, what
        ever you do to make the best of your online presence.
</p> <p data-astro-cid-5c24fmmt>
Are you a small business who needs help getting on the internet property
        ladder?
</p> <p data-astro-cid-5c24fmmt>
Want to update a tired old website with something modern, performant and
        accessible?
</p> <p data-astro-cid-5c24fmmt>
Tired of paying someone to update your business website and want to do
        it yourself?
</p> <p data-astro-cid-5c24fmmt>
Are you a designer who needs help turning your ideas into something
        real?
</p> <p data-astro-cid-5c24fmmt>
Are you an agency looking for developers to get projects across the
        line?
</p> <p data-astro-cid-5c24fmmt>
Our team of <a href="about.html" data-astro-cid-5c24fmmt>highly skilled developers</a> with over
        15 years of agency and enterprise level experience are available to take
        the project and run with it or embed themselves in your company until the
        work is finished.
</p> <p data-astro-cid-5c24fmmt>
Whatever your needs - we would <span aria-label="love" data-astro-cid-5c24fmmt>❤️</span> to help
        you.
</p> </section> </main> ` })} `;
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
