/**
 * Generează dist/sitemap.xml după `astro build`.
 * Păstrează lista de limbi aliniată cu `src/i18n/config.ts` → `supportedLanguages`.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

const SITE = "https://cheqsplitapp.com";
/** @type {readonly string[]} */
const SUPPORTED_LANGUAGES = [
  "en",
  "ro",
  "ru",
  "fr",
  "de",
  "es",
  "it",
  "pl",
  "hu",
  "tr",
];

const locs = SUPPORTED_LANGUAGES.map(
  (lang) => `  <url><loc>${SITE}/${lang}/</loc></url>`,
).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs}
</urlset>
`;

const out = join(distDir, "sitemap.xml");
writeFileSync(out, xml, "utf8");
console.log(`[generate-sitemap] wrote ${out} (${SUPPORTED_LANGUAGES.length} URLs)`);
