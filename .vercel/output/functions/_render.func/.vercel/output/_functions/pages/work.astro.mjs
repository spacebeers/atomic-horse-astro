import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DIk37qPc.mjs';
import 'kleur/colors';
import { a as $$Banner, $ as $$Layout } from '../chunks/Layout_DXyH0pJh.mjs';
import { $ as $$Card, a as $$Clients } from '../chunks/Clients_B8xkrdjb.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bkwwh7qG.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogPosts = await getCollection("work");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome", "data-astro-cid-jljc7dey": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-jljc7dey> ${renderComponent($$result2, "Banner", $$Banner, { "title": "Being useful since 2007", "showHorse": true, "data-astro-cid-jljc7dey": true })} <section class="strip text-center w-clamp-xl intro-section" data-astro-cid-jljc7dey> <h2 class="text-4 fw-normal mb-2" data-astro-cid-jljc7dey>Techincal solutions to human problems</h2> <p data-astro-cid-jljc7dey>
Here at Atomic Horse we just want to help you, who ever you are, what
        ever you do to make the best of your online presence.
</p> </section> <section class="card-grid" data-astro-cid-jljc7dey> ${allBlogPosts.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "heading": item.data.title, "content": item.data.description, "imageSrc": item.data.image, "imageAlt": item.data.alt, "link": `/work/${item.slug}`, "data-astro-cid-jljc7dey": true })}`)} </section> ${renderComponent($$result2, "Clients", $$Clients, { "data-astro-cid-jljc7dey": true })} </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/work.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
