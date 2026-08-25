import type { SupportedLanguage } from "../config";
import { groupExpenseTrackerEn } from "./en";
import { groupExpenseTrackerCs } from "./cs";
import { groupExpenseTrackerRo } from "./ro";
import { groupExpenseTrackerRu } from "./ru";
import { groupExpenseTrackerFr } from "./fr";
import { groupExpenseTrackerDe } from "./de";
import { groupExpenseTrackerEs } from "./es";
import { groupExpenseTrackerIt } from "./it";
import { groupExpenseTrackerPl } from "./pl";
import { groupExpenseTrackerHu } from "./hu";
import { groupExpenseTrackerTr } from "./tr";
import type { GroupExpenseTrackerCopy } from "./types";

const byLang: Record<SupportedLanguage, GroupExpenseTrackerCopy> = {
  en: groupExpenseTrackerEn,
  cs: groupExpenseTrackerCs,
  ro: groupExpenseTrackerRo,
  ru: groupExpenseTrackerRu,
  fr: groupExpenseTrackerFr,
  de: groupExpenseTrackerDe,
  es: groupExpenseTrackerEs,
  it: groupExpenseTrackerIt,
  pl: groupExpenseTrackerPl,
  hu: groupExpenseTrackerHu,
  tr: groupExpenseTrackerTr,
};

export function getGroupExpenseTrackerCopy(
  lang: SupportedLanguage,
): GroupExpenseTrackerCopy {
  return byLang[lang] ?? groupExpenseTrackerEn;
}

export const groupExpenseTrackerLocales = [
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

export type { GroupExpenseTrackerCopy };
export { groupExpenseTrackerEn };
export * from "./assets";
