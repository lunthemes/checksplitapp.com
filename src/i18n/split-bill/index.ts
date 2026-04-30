import type { SupportedLanguage } from "../config";
import type { SplitBillLocaleCopy } from "./types";
import { splitBillEn } from "./en";
import { splitBillCs } from "./cs";
import { splitBillRo } from "./ro";
import { splitBillRu } from "./ru";
import { splitBillFr } from "./fr";
import { splitBillDe } from "./de";
import { splitBillEs } from "./es";
import { splitBillIt } from "./it";
import { splitBillPl } from "./pl";
import { splitBillHu } from "./hu";
import { splitBillTr } from "./tr";

const byLang: Record<SupportedLanguage, SplitBillLocaleCopy> = {
  en: splitBillEn,
  cs: splitBillCs,
  ro: splitBillRo,
  ru: splitBillRu,
  fr: splitBillFr,
  de: splitBillDe,
  es: splitBillEs,
  it: splitBillIt,
  pl: splitBillPl,
  hu: splitBillHu,
  tr: splitBillTr,
};

export function getSplitBillCopy(lang: SupportedLanguage): SplitBillLocaleCopy {
  return byLang[lang] ?? splitBillEn;
}

export type { SplitBillLocaleCopy } from "./types";
export { splitBillHeroScreens, splitBillStepIcons, splitBillFeatureAssets } from "./assets";
