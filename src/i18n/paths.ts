import type { SupportedLanguage } from "./config";

/**
 * Home URL for a locale (respects `base` in astro.config, e.g. /subdir/en/).
 * Use for logo, language switcher, and any locale link.
 */
export function localePath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return `/${lang}/`;
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return `${b}${lang}/`;
}

/** Localized “How CheqSplit works” landing (trailing slash). */
export function localeSplitBillPath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return `/${lang}/split-bill-app/`;
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return `${b}${lang}/split-bill-app/`;
}
