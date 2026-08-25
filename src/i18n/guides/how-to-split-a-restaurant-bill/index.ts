import type { SupportedLanguage } from "../../config";
import { restaurantBillGuideEn } from "./en";
import { restaurantBillGuideCs } from "./cs";
import { restaurantBillGuideRo } from "./ro";
import { restaurantBillGuideRu } from "./ru";
import { restaurantBillGuideFr } from "./fr";
import { restaurantBillGuideDe } from "./de";
import { restaurantBillGuideEs } from "./es";
import { restaurantBillGuideIt } from "./it";
import { restaurantBillGuidePl } from "./pl";
import { restaurantBillGuideHu } from "./hu";
import { restaurantBillGuideTr } from "./tr";
import type { RestaurantBillGuideCopy } from "./types";

const byLang: Record<SupportedLanguage, RestaurantBillGuideCopy> = {
  en: restaurantBillGuideEn,
  cs: restaurantBillGuideCs,
  ro: restaurantBillGuideRo,
  ru: restaurantBillGuideRu,
  fr: restaurantBillGuideFr,
  de: restaurantBillGuideDe,
  es: restaurantBillGuideEs,
  it: restaurantBillGuideIt,
  pl: restaurantBillGuidePl,
  hu: restaurantBillGuideHu,
  tr: restaurantBillGuideTr,
};

export function getRestaurantBillGuideCopy(
  lang: SupportedLanguage,
): RestaurantBillGuideCopy {
  return byLang[lang] ?? restaurantBillGuideEn;
}

export const restaurantBillGuideLocales = [
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

export type { RestaurantBillGuideCopy };
export { restaurantBillGuideEn };
