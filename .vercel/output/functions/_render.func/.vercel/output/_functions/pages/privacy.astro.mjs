import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DIk37qPc.mjs';
import 'kleur/colors';
import { a as $$Banner, E as EMAIL, $ as $$Layout } from '../chunks/Layout_DXyH0pJh.mjs';
import { $ as $$Strip } from '../chunks/Strip_BeYYhyJa.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy", "data-astro-cid-fb3qbcs3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="content-page" data-astro-cid-fb3qbcs3> ${renderComponent($$result2, "Banner", $$Banner, { "title": "Privacy Policy", "condense": true, "data-astro-cid-fb3qbcs3": true })} ${renderComponent($$result2, "Strip", $$Strip, { "data-astro-cid-fb3qbcs3": true }, { "default": ($$result3) => renderTemplate` <section class="wrapper" data-astro-cid-fb3qbcs3> <div class="w-clamp-3xl flush" data-astro-cid-fb3qbcs3> <p data-astro-cid-fb3qbcs3>
This website uses cookies to ensure you get the best experience on
            our website.
</p> <h2 class="text-1 fw-medium" data-astro-cid-fb3qbcs3>What are Cookies?</h2> <p data-astro-cid-fb3qbcs3>
Cookies are small text files stored on your computer or mobile
            device by your web browser. They are widely used to make websites
            work more efficiently and to provide information to website owners.
</p> <h2 class="text-1 fw-medium" data-astro-cid-fb3qbcs3>How We Use Cookies</h2> <p data-astro-cid-fb3qbcs3>We use cookies for a variety of purposes, including:</p> <ul data-astro-cid-fb3qbcs3> <li data-astro-cid-fb3qbcs3>Keeping you signed in</li> <li data-astro-cid-fb3qbcs3>Understanding how you use our website</li> <li data-astro-cid-fb3qbcs3>Customizing your experience</li> </ul> <h2 class="text-1 fw-medium" data-astro-cid-fb3qbcs3>Types of Cookies We Use</h2> <p data-astro-cid-fb3qbcs3>
We use both session and persistent cookies on our website. Session
            cookies are temporary and are deleted when you close your browser.
            Persistent cookies remain on your device until they expire or are
            deleted manually.
</p> <h2 class="text-1 fw-medium" data-astro-cid-fb3qbcs3>Google Analytics</h2> <p data-astro-cid-fb3qbcs3>
We use Google Analytics to collect information about how visitors
            use our website. Google Analytics stores information about what
            pages you visit, how long you are on the site, how you got here, and
            what you click on. This Analytics data is collected via a JavaScript
            tag in the pages of our site and is not tied to personally
            identifiable information. We do not collect or store your personal
            information (e.g., your name or address) so this information cannot
            be used to identify who you are.
</p> <p data-astro-cid-fb3qbcs3>
You can find more information on how Google uses data from these
            cookies at <a href="https://policies.google.com/technologies/partner-sites" data-astro-cid-fb3qbcs3>Google's Privacy & Terms</a>.
</p> <h2 class="text-1 fw-medium" data-astro-cid-fb3qbcs3>Your Choices Regarding Cookies</h2> <p data-astro-cid-fb3qbcs3>
You can control and manage cookies in various ways. Please refer to
            your browser's help menu for instructions on how to do this.
</p> <h2 class="text-1 fw-medium" data-astro-cid-fb3qbcs3>Changes to Our Cookies Policy</h2> <p data-astro-cid-fb3qbcs3>
We may update our Cookies Policy from time to time. Any changes will
            be posted on this page.
</p> <h2 class="text-1 fw-medium" data-astro-cid-fb3qbcs3>Contact Us</h2> <p data-astro-cid-fb3qbcs3>
If you have any questions about our Cookies Policy, please <a${addAttribute(`mailto:${EMAIL}`, "href")} data-astro-cid-fb3qbcs3>contact us</a>.
</p> </div> </section> ` })} </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/privacy.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
