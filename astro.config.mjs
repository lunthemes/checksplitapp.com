import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = "https://cheqsplitapp.com";

export default defineConfig({
  site,
  /** Canonical public URLs use a trailing slash (`/en/`, `/ro/split-bill-app/`). */
  trailingSlash: "always",
  integrations: [tailwind()],
});
