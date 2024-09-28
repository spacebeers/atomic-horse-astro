import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DR4vlaDS.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$Banner, $ as $$Layout } from '../chunks/Layout_DITra-SE.mjs';
import { $ as $$Card, a as $$Clients } from '../chunks/Clients_Dwc77C8c.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$CaseStudies = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogPosts = await getCollection("case-studies");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome", "data-astro-cid-44gysecv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-44gysecv> ${renderComponent($$result2, "Banner", $$Banner, { "title": "Being useful since 2007", "showHorse": true, "data-astro-cid-44gysecv": true })} <section class="strip text-center w-clamp-xl intro-section" data-astro-cid-44gysecv> <h2 class="text-4 fw-normal mb-2" data-astro-cid-44gysecv>Techincal solutions to human problems</h2> <p data-astro-cid-44gysecv>
Here at Atomic Horse we just want to help you, who ever you are, what
        ever you do to make the best of your online presence.
</p> </section> <section class="card-grid" data-astro-cid-44gysecv> ${allBlogPosts.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "heading": item.data.title, "content": item.data.description, "imageSrc": item.data.image, "imageAlt": item.data.alt, "link": `/work/${item.slug}`, "data-astro-cid-44gysecv": true })}`)} </section> ${renderComponent($$result2, "Clients", $$Clients, { "data-astro-cid-44gysecv": true })} </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/case-studies.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/case-studies.astro";
const $$url = "/case-studies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CaseStudies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
