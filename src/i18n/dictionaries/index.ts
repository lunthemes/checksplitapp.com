import { defaultLocale, isLocale, type SupportedLanguage } from "../config";
import type { Dictionary } from "../types";
import { en } from "./en";
import { ro } from "./ro";
import { fr } from "./fr";
import { de } from "./de";
import { es } from "./es";
import { it } from "./it";
import { pl } from "./pl";
import { ru } from "./ru";
import { hu } from "./hu";
import { tr } from "./tr";

const byLocale: Record<SupportedLanguage, Dictionary> = {
  en,
  ro,
  fr,
  de,
  es,
  it,
  pl,
  ru,
  hu,
  tr,
};

export function getDictionary(lang: string): Dictionary {
  if (isLocale(lang) && byLocale[lang]) {
    return byLocale[lang]!;
  }
  return byLocale[defaultLocale]!;
}

export { en, ro };
