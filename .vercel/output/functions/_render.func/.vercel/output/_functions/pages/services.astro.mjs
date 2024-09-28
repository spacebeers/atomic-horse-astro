import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, e as renderComponent, b as addAttribute } from '../chunks/astro/server_DIk37qPc.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BbiEy2Z2.mjs';
import { a as $$Banner, $ as $$Layout } from '../chunks/Layout_DXyH0pJh.mjs';
import { $ as $$Strip } from '../chunks/Strip_BeYYhyJa.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DCldwSx2.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://atomic-horse-astro-lchgumj2n-helloatomichorses-projects.vercel.app/");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { heading, imageSrc, imageAlt } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/case-studies/wave-plumbing.svg": () => import('../chunks/wave-plumbing_CrgAn0tC.mjs'),"/src/assets/case-studies/website.png": () => import('../chunks/website_3wN7bu4G.mjs'),"/src/assets/placeholder-wide.png": () => import('../chunks/placeholder-wide_CdAIMp8E.mjs'),"/src/assets/placeholder.png": () => import('../chunks/placeholder_DFjLvn5D.mjs')});
  if (!images[imageSrc]) throw new Error(`"${imageSrc}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${maybeRenderHead()}<section class="service-card" data-astro-cid-uhzbvkqe> <div class="service-card-grid" data-astro-cid-uhzbvkqe> <div class="service-card-grid__content" data-astro-cid-uhzbvkqe> <h2 data-astro-cid-uhzbvkqe>${heading}</h2> ${renderSlot($$result, $$slots["card-content"])} </div> <div class="service-card-grid__image" data-astro-cid-uhzbvkqe> ${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": imageAlt, "width": "800", "height": "400", "class": "card-image", "data-astro-cid-uhzbvkqe": true })} </div> </div> </section> `;
}, "/usr/local/var/www/magenta-magnitude/src/components/ServiceCard.astro", void 0);

const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const creativeSercices = await getCollection("service", ({ data }) => {
    return data.tags.includes("creative");
  });
  const digitalServices = await getCollection("service", ({ data }) => {
    return data.tags.includes("digital");
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Banner", $$Banner, { "title": "What can we do for you?", "showHorse": true, "data-astro-cid-ucd2ps2b": true })} <section class="strip text-center w-clamp-xl intro-section" data-astro-cid-ucd2ps2b> <h2 class="text-4 fw-normal mb-2" data-astro-cid-ucd2ps2b>
Techincal solutions to human problems
</h2> <p class="text-0" data-astro-cid-ucd2ps2b>
A technical and creative digital agency supporting the people behind
        businesses large and small.
</p> </section> ${renderComponent($$result2, "Strip", $$Strip, { "theme": "MID", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="wrapper" data-astro-cid-ucd2ps2b> <p class="tag" data-astro-cid-ucd2ps2b>Services</p> <h2 class="heading" data-astro-cid-ucd2ps2b>Creative Services</h2> <div class="services-grid" data-astro-cid-ucd2ps2b> ${creativeSercices.map((item) => renderTemplate`${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "heading": item.data.title, "imageSrc": item.data.image, "imageAlt": item.data.alt, "data-astro-cid-ucd2ps2b": true }, { "card-content": ($$result4) => renderTemplate`<div data-astro-cid-ucd2ps2b> <p data-astro-cid-ucd2ps2b>Lorem ipsum dolor sit amet, movet facilisis posidonium an vel, lucilius tacimates petentium eu duo, ei iuvaret insolens disputando sit. Vel minim nonumy labitur ex, vel eu debet facete. Per quas civibus in. Sed an putent pericula reprimique, id pro accusam voluptatibus. Ex veniam ornatus usu.</p> <p data-astro-cid-ucd2ps2b>Et sit recusabo eleifend. Scripta platonem reformidans vim eu, vitae dolore cu est. Per altera imperdiet mediocritatem ad. Movet iisque ponderum qui id.</p> <a${addAttribute(`/services/${item.slug}`, "href")} class="button" data-astro-cid-ucd2ps2b>Learn more</a> </div>` })}`)} </div> </div> ` })}${renderComponent($$result2, "Strip", $$Strip, { "theme": "DARK", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="wrapper" data-astro-cid-ucd2ps2b> <p class="tag" data-astro-cid-ucd2ps2b>Services</p> <h2 class="heading" data-astro-cid-ucd2ps2b>Digital Services</h2> <div class="services-grid" data-astro-cid-ucd2ps2b> ${digitalServices.map((item) => renderTemplate`${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "heading": item.data.title, "imageSrc": item.data.image, "imageAlt": item.data.alt, "data-astro-cid-ucd2ps2b": true }, { "card-content": ($$result4) => renderTemplate`<div data-astro-cid-ucd2ps2b> <p data-astro-cid-ucd2ps2b>Lorem ipsum dolor sit amet, movet facilisis posidonium an vel, lucilius tacimates petentium eu duo, ei iuvaret insolens disputando sit. Vel minim nonumy labitur ex, vel eu debet facete. Per quas civibus in. Sed an putent pericula reprimique, id pro accusam voluptatibus. Ex veniam ornatus usu.</p> <p data-astro-cid-ucd2ps2b>Et sit recusabo eleifend. Scripta platonem reformidans vim eu, vitae dolore cu est. Per altera imperdiet mediocritatem ad. Movet iisque ponderum qui id.</p> <a${addAttribute(`/services/${item.slug}`, "href")} class="button" data-astro-cid-ucd2ps2b>Learn more</a> </div>` })}`)} </div> </div> ` })} </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/services.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
