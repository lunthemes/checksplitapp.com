import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = "https://cheqsplitapp.com";

export default defineConfig({
  site,
  /**
   * URL-uri aliniate cu <link rel="canonical"> (slash final) și cu cerința
   * https://cheqsplitapp.com/{lang}/
   */
  trailingSlash: "always",
  integrations: [tailwind()],
});
