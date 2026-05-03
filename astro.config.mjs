import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = "https://cheqsplitapp.com";

export default defineConfig({
  site,
  /**
   * Must be `"never"` with default `build.format: "directory"`. Using `"ignore"` makes Astro
   * prerender with a `/en/` URL, which becomes a 301 and writes **redirect stub HTML** instead
   * of the real page (the “Redirecting from /en/ to …” screen). Trailing `/en/` is handled by
   * `src/middleware.ts` in dev and `dist/_redirects` on Netlify/Cloudflare.
   */
  trailingSlash: "never",
  integrations: [tailwind()],
});
