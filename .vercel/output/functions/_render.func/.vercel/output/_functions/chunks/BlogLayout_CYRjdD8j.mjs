import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as createAstro } from './astro/server_7FlixKJL.mjs';
import 'kleur/colors';
import { a as $$Layout } from './Layout_CQhcHKs_.mjs';

const $$Astro = createAstro();
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${frontmatter.title}</h1> <p>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p><em>${frontmatter.description}</em></p> <p>Written by: ${frontmatter.author}</p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")}> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/usr/local/var/www/magenta-magnitude/src/layouts/BlogLayout.astro", void 0);

export { $$BlogLayout as $ };
