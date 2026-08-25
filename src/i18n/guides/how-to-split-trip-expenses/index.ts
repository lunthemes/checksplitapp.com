import type { SupportedLanguage } from "../../config";
import { tripExpensesGuideEn } from "./en";
import { tripExpensesGuideCs } from "./cs";
import { tripExpensesGuideRo } from "./ro";
import { tripExpensesGuideRu } from "./ru";
import { tripExpensesGuideFr } from "./fr";
import { tripExpensesGuideDe } from "./de";
import { tripExpensesGuideEs } from "./es";
import { tripExpensesGuideIt } from "./it";
import { tripExpensesGuidePl } from "./pl";
import { tripExpensesGuideHu } from "./hu";
import { tripExpensesGuideTr } from "./tr";
import type { TripExpensesGuideCopy } from "./types";

const byLang: Record<SupportedLanguage, TripExpensesGuideCopy> = {
  en: tripExpensesGuideEn,
  cs: tripExpensesGuideCs,
  ro: tripExpensesGuideRo,
  ru: tripExpensesGuideRu,
  fr: tripExpensesGuideFr,
  de: tripExpensesGuideDe,
  es: tripExpensesGuideEs,
  it: tripExpensesGuideIt,
  pl: tripExpensesGuidePl,
  hu: tripExpensesGuideHu,
  tr: tripExpensesGuideTr,
};

export function getTripExpensesGuideCopy(
  lang: SupportedLanguage,
): TripExpensesGuideCopy {
  return byLang[lang] ?? tripExpensesGuideEn;
}

export const tripExpensesGuideLocales = [
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

export type { TripExpensesGuideCopy };
export { tripExpensesGuideEn };
