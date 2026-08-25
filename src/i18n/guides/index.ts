import type { SupportedLanguage } from "../config";
import { guidesHubEn } from "./en";
import { guidesHubCs } from "./cs";
import { guidesHubRo } from "./ro";
import { guidesHubRu } from "./ru";
import { guidesHubFr } from "./fr";
import { guidesHubDe } from "./de";
import { guidesHubEs } from "./es";
import { guidesHubIt } from "./it";
import { guidesHubPl } from "./pl";
import { guidesHubHu } from "./hu";
import { guidesHubTr } from "./tr";
import type { GuidesHubCopy } from "./types";

const byLang: Record<SupportedLanguage, GuidesHubCopy> = {
  en: guidesHubEn,
  cs: guidesHubCs,
  ro: guidesHubRo,
  ru: guidesHubRu,
  fr: guidesHubFr,
  de: guidesHubDe,
  es: guidesHubEs,
  it: guidesHubIt,
  pl: guidesHubPl,
  hu: guidesHubHu,
  tr: guidesHubTr,
};

export function getGuidesHubCopy(lang: SupportedLanguage): GuidesHubCopy {
  return byLang[lang] ?? guidesHubEn;
}

export const guidesHubLocales = [
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
] as const satisfies readonly SupportedLanguage[];

export type { GuidesHubCopy };
export { guidesHubEn };
