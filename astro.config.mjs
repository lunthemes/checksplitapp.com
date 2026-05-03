import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = "https://cheqsplitapp.com";

export default defineConfig({
  site,
  /**
   * `ignore`: `/en` and `/en/` serve the same HTML (fixes static preview and hosts without redirects).
   * Canonicals, hreflang, and sitemap still omit the trailing slash.
   */
  trailingSlash: "ignore",
  integrations: [tailwind()],
});
