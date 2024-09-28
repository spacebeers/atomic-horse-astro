import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DIk37qPc.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BbiEy2Z2.mjs';
import { a as $$Banner, $ as $$Layout } from '../chunks/Layout_DXyH0pJh.mjs';
import { $ as $$Card, a as $$Clients } from '../chunks/Clients_B8xkrdjb.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome", "data-astro-cid-ijnerlr2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ijnerlr2> ${renderComponent($$result2, "Banner", $$Banner, { "title": "Being useful since 2007", "showHorse": true, "data-astro-cid-ijnerlr2": true })} <section class="strip text-center w-clamp-xl intro-section" data-astro-cid-ijnerlr2> <h2 class="text-4 fw-normal mb-2" data-astro-cid-ijnerlr2>Techincal solutions to human problems</h2> <p data-astro-cid-ijnerlr2>
Here at Atomic Horse we just want to help you, who ever you are, what
        ever you do to make the best of your online presence.
</p> </section> <section class="card-grid" data-astro-cid-ijnerlr2> ${allBlogPosts.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "heading": item.data.title, "content": item.data.description, "imageSrc": item.data.image, "imageAlt": item.data.alt, "link": `/work/${item.slug}`, "data-astro-cid-ijnerlr2": true })}`)} </section> ${renderComponent($$result2, "Clients", $$Clients, { "data-astro-cid-ijnerlr2": true })} </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/blog.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
