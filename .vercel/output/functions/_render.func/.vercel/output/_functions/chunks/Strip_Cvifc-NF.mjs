import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as createAstro } from './astro/server_7FlixKJL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro();
const $$Strip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Strip;
  const { theme } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["strip", { dark: theme === "DARK", mid: theme === "MID", light: theme === "LIGHT" }, "full-bleed"], "class:list")} data-astro-cid-ytctoxy7> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "/usr/local/var/www/magenta-magnitude/src/components/Strip.astro", void 0);

export { $$Strip as $ };
