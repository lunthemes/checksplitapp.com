import type { SupportedLanguage } from "../config";
import type { LegalBundle } from "./types";
import { legalBundleEn } from "./bundles/en";
import { legalBundleCs } from "./bundles/cs";
import { legalBundleRo } from "./bundles/ro";
import { legalBundleRu } from "./bundles/ru";
import { legalBundleFr } from "./bundles/fr";
import { legalBundleDe } from "./bundles/de";
import { legalBundleEs } from "./bundles/es";
import { legalBundleIt } from "./bundles/it";
import { legalBundlePl } from "./bundles/pl";
import { legalBundleHu } from "./bundles/hu";
import { legalBundleTr } from "./bundles/tr";

const byLang: Record<SupportedLanguage, LegalBundle> = {
  en: legalBundleEn,
  cs: legalBundleCs,
  ro: legalBundleRo,
  ru: legalBundleRu,
  fr: legalBundleFr,
  de: legalBundleDe,
  es: legalBundleEs,
  it: legalBundleIt,
  pl: legalBundlePl,
  hu: legalBundleHu,
  tr: legalBundleTr,
};

export function getLegalBundle(lang: SupportedLanguage): LegalBundle {
  return byLang[lang] ?? legalBundleEn;
}
