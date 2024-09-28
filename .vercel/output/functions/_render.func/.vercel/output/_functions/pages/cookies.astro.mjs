import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DR4vlaDS.mjs';
import 'kleur/colors';
import { a as $$Banner, E as EMAIL, $ as $$Layout } from '../chunks/Layout_DITra-SE.mjs';
import { $ as $$Strip } from '../chunks/Strip_CVwSd_Eu.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Cookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cookie Policy", "data-astro-cid-6xh23lug": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="content-page" data-astro-cid-6xh23lug> ${renderComponent($$result2, "Banner", $$Banner, { "title": "Cookie Policy", "condense": true, "data-astro-cid-6xh23lug": true })} ${renderComponent($$result2, "Strip", $$Strip, { "data-astro-cid-6xh23lug": true }, { "default": ($$result3) => renderTemplate` <section class="wrapper" data-astro-cid-6xh23lug> <div class="w-clamp-3xl flush" data-astro-cid-6xh23lug> <p data-astro-cid-6xh23lug>
This website uses cookies to ensure you get the best experience on our
            website.
</p> <h2 class="text-1 fw-medium" data-astro-cid-6xh23lug>What are Cookies?</h2> <p data-astro-cid-6xh23lug>
Cookies are small text files stored on your computer or mobile device by
            your web browser. They are widely used to make websites work more
            efficiently and to provide information to website owners.
</p> <h2 class="text-1 fw-medium" data-astro-cid-6xh23lug>How We Use Cookies</h2> <p data-astro-cid-6xh23lug>We use cookies for a variety of purposes, including:</p> <ul data-astro-cid-6xh23lug> <li data-astro-cid-6xh23lug>Keeping you signed in</li> <li data-astro-cid-6xh23lug>Understanding how you use our website</li> <li data-astro-cid-6xh23lug>Customizing your experience</li> </ul> <h2 class="text-1 fw-medium" data-astro-cid-6xh23lug>Types of Cookies We Use</h2> <p data-astro-cid-6xh23lug>
We use both session and persistent cookies on our website. Session
            cookies are temporary and are deleted when you close your browser.
            Persistent cookies remain on your device until they expire or are
            deleted manually.
</p> <h2 class="text-1 fw-medium" data-astro-cid-6xh23lug>Google Analytics</h2> <p data-astro-cid-6xh23lug>
We use Google Analytics to collect information about how visitors use
            our website. Google Analytics stores information about what pages you
            visit, how long you are on the site, how you got here, and what you
            click on. This Analytics data is collected via a JavaScript tag in the
            pages of our site and is not tied to personally identifiable
            information. We do not collect or store your personal information (e.g.,
            your name or address) so this information cannot be used to identify who
            you are.
</p> <p data-astro-cid-6xh23lug>
You can find more information on how Google uses data from these cookies
            at <a href="https://policies.google.com/technologies/partner-sites" data-astro-cid-6xh23lug>Google's Privacy & Terms</a>.
</p> <h2 class="text-1 fw-medium" data-astro-cid-6xh23lug>Your Choices Regarding Cookies</h2> <p data-astro-cid-6xh23lug>
You can control and manage cookies in various ways. Please refer to your
            browser's help menu for instructions on how to do this.
</p> <h2 class="text-1 fw-medium" data-astro-cid-6xh23lug>Changes to Our Cookies Policy</h2> <p data-astro-cid-6xh23lug>
We may update our Cookies Policy from time to time. Any changes will be
            posted on this page.
</p> <h2 class="text-1 fw-medium" data-astro-cid-6xh23lug>Contact Us</h2> <p data-astro-cid-6xh23lug>If you have any questions about our Cookies Policy, please <a${addAttribute(`mailto:${EMAIL}`, "href")} data-astro-cid-6xh23lug>contact us</a>.</p> </div> </section> ` })} </main> ` })} `;
}, "/usr/local/var/www/magenta-magnitude/src/pages/cookies.astro", void 0);

const $$file = "/usr/local/var/www/magenta-magnitude/src/pages/cookies.astro";
const $$url = "/cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cookies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
