/**
 * Emite toate șirurile din `Dictionary` ca Markdown, grupate pe limbă și pe secțiune.
 * Rulare: npx tsx scripts/site-copy-export.ts
 */
import type { Dictionary } from "../src/i18n/types";
import { en } from "../src/i18n/dictionaries/en";
import { ro } from "../src/i18n/dictionaries/ro";
import { fr } from "../src/i18n/dictionaries/fr";
import { de } from "../src/i18n/dictionaries/de";
import { es } from "../src/i18n/dictionaries/es";
import { it } from "../src/i18n/dictionaries/it";
import { pl } from "../src/i18n/dictionaries/pl";
import { ru } from "../src/i18n/dictionaries/ru";
import { hu } from "../src/i18n/dictionaries/hu";
import { tr } from "../src/i18n/dictionaries/tr";
import {
  supportedLanguages,
  localeFlags,
  localeDisplayNames,
  localePickerLabel,
  localeShortCode,
} from "../src/i18n/config";

const packs: { code: (typeof supportedLanguages)[number]; label: string; d: Dictionary }[] = [
  { code: "en", label: "English", d: en },
  { code: "ro", label: "Română", d: ro },
  { code: "fr", label: "Français", d: fr },
  { code: "de", label: "Deutsch", d: de },
  { code: "es", label: "Español", d: es },
  { code: "it", label: "Italiano", d: it },
  { code: "pl", label: "Polski", d: pl },
  { code: "ru", label: "Русский", d: ru },
  { code: "hu", label: "Magyar", d: hu },
  { code: "tr", label: "Türkçe", d: tr },
];

function esc(s: string): string {
  return s.replace(/\r\n/g, "\n");
}

function renderDict(d: Dictionary): string {
  const m = d.meta;
  const lines: string[] = [];
  const L = (s: string) => lines.push(esc(s));

  L("### `meta`");
  L(`- **title:** ${m.title}`);
  L(`- **description:** ${m.description}`);
  L(`- **ogDescription:** ${m.ogDescription}`);
  L(`- **twitterDescription:** ${m.twitterDescription}`);
  L(`- **softwareDescription:** ${m.softwareDescription}`);

  L("### `nav`");
  L(`- **features:** ${d.nav.features}`);
  L(`- **how:** ${d.nav.how}`);
  L(`- **useCases:** ${d.nav.useCases}`);
  L(`- **faq:** ${d.nav.faq}`);

  L("### `header`");
  L(`- **download:** ${d.header.download}`);

  L("### `hero`");
  L(`- **title:** ${d.hero.title}`);
  L(`- **body:** ${d.hero.body}`);
  d.hero.alts.forEach((a, i) => L(`- **alts[${i}]:** ${a}`));

  L("### `features`");
  L(`- **title:** ${d.features.title}`);
  d.features.items.forEach((f, i) => {
    L(`- **Item ${i + 1} — title:** ${f.title}`);
    L(`  - **desc:** ${f.desc}`);
  });

  L("### `how`");
  L(`- **title:** ${d.how.title}`);
  L(`- **subtitle:** ${d.how.subtitle}`);
  L(
    `- **stepPill(n):** For n=1…5 the pill text is: ${[1, 2, 3, 4, 5].map((n) => d.how.stepPill(String(n))).join(" · ")}`,
  );
  d.how.steps.forEach((s, i) => {
    L(`- **Step ${i + 1}**`);
    L(`  - **label:** ${s.label}`);
    L(`  - **body:** ${s.body}`);
    L(`  - **imageAlt:** ${s.imageAlt}`);
    s.bullets.forEach((b, j) => L(`  - **bullets[${j}]:** ${b}`));
  });

  L("### `useCases`");
  L(`- **title:** ${d.useCases.title}`);
  L(`- **intro:** ${d.useCases.intro}`);
  d.useCases.items.forEach((u, i) => {
    L(`- **Item ${i + 1} — title:** ${u.title}`);
    L(`  - **desc:** ${u.desc}`);
  });

  L("### `cta`");
  L(`- **title:** ${d.cta.title}`);
  L(`- **body:** ${d.cta.body}`);
  L(`- **sectionAria:** ${d.cta.sectionAria}`);
  L(`- **imgAlt:** ${d.cta.imgAlt}`);
  L(`- **badgeAlts.appStore:** ${d.cta.badgeAlts.appStore}`);
  L(`- **badgeAlts.play:** ${d.cta.badgeAlts.play}`);
  L(`- **playSoon:** ${d.cta.playSoon}`);
  L(`- **playDisabledHint:** ${d.cta.playDisabledHint}`);
  L(`- **groupAria:** ${d.cta.groupAria}`);

  L("### `faq`");
  L(`- **title:** ${d.faq.title}`);
  d.faq.items.forEach((item, i) => {
    L(`- **${i + 1}. Q:** ${item.q}`);
    L(`  - **A:** ${item.a}`);
  });

  L("### `footer`");
  L(`- **tagline:** ${d.footer.tagline}`);
  L(`- **product:** ${d.footer.product}`);
  L(`- **company:** ${d.footer.company}`);
  L(`- **legal:** ${d.footer.legal}`);
  L(`- **about:** ${d.footer.about}`);
  L(`- **contact:** ${d.footer.contact}`);
  L(`- **privacy:** ${d.footer.privacy}`);
  L(`- **terms:** ${d.footer.terms}`);
  L(`- **rights:** ${d.footer.rights}`);

  L("### `a11y`");
  L(`- **keyFeatures:** ${d.a11y.keyFeatures}`);
  L(`- **primaryNav:** ${d.a11y.primaryNav}`);
  L(`- **howSection:** ${d.a11y.howSection}`);
  L(`- **logoHome:** ${d.a11y.logoHome}`);

  return lines.join("\n");
}

/** Fiecare limbă = antet de nivel 2; sub-secțiunile meta/nav/… rămân `###`. */
function languageHeading(p: (typeof packs)[0]): string {
  return `## \`${p.code}\` — ${p.label}`;
}

const toc = packs.map((p) => `\`${p.code}\` (${p.label})`).join(" · ");

let out = "";

out += `# CheqSplit – toate textele de pe site (export automat)\n\n`;
out += `**Regenerare:** \`npm run site-copy\` (sau \`npx tsx scripts/site-copy-export.ts\`) — sursa este \`src/i18n/dictionaries/*.ts\`.\n\n`;
out += `**Structură:** un antet \`## cod — nume\` per limbă, apoi \`###\` pentru fiecare secțiune (meta, nav, header, hero, features, how, useCases, cta, faq, footer, a11y).\n\n`;
out += `**Index (cod):** ${toc}\n\n---\n\n`;
out += `## Comutator limbă — \`src/i18n/config.ts\`\n\n`;
out += `| Cod | Denumire | Steag | Etichetă (picker) | Scurt |\n|-----|----------|-------|-------------------|------|\n`;
for (const code of supportedLanguages) {
  out += `| ${code} | ${localeDisplayNames[code]} | ${localeFlags[code]} | ${localePickerLabel[code]} | ${localeShortCode[code]} |\n`;
}
out += "\n---\n\n## Text static brand — `src/data/landing.ts`\n\n";
out += "- **Nume aplicație / text logo:** CheqSplit\n\n---\n\n";
for (const p of packs) {
  out += `${languageHeading(p)}\n\n`;
  out += renderDict(p.d);
  out += "\n\n---\n\n";
}

process.stdout.write(out);
