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
  "cs",
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

const homeUrls = SUPPORTED_LANGUAGES.map(
  (lang) => `  <url><loc>${SITE}/${lang}/</loc><priority>1.0</priority></url>`,
);
const splitBillUrls = SUPPORTED_LANGUAGES.map(
  (lang) =>
    `  <url><loc>${SITE}/${lang}/split-bill-app/</loc><priority>0.85</priority></url>`,
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...homeUrls, ...splitBillUrls].join("\n")}
</urlset>
`;

const out = join(distDir, "sitemap.xml");
writeFileSync(out, xml, "utf8");
const n = SUPPORTED_LANGUAGES.length * 2;
console.log(`[generate-sitemap] wrote ${out} (${n} URLs)`);
