import type { SupportedLanguage } from "./config";

/**
 * Public HTML page path: ensure a trailing slash. Root stays `/`.
 * Does not apply to asset URLs (those should not go through this helper).
 */
export function normalizePagePath(path: string): string {
  if (path === "/" || path === "") return "/";
  const trimmed = path.replace(/\/+$/, "");
  if (trimmed === "") return "/";
  return `${trimmed}/`;
}

/**
 * Same as {@link normalizePagePath} for paths; for `http(s)://` URLs, normalizes `pathname` only.
 */
export function normalizePageUrl(url: string): string {
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    return normalizePagePath(url);
  }
  try {
    const u = new URL(url);
    if (u.pathname === "/" || u.pathname === "") {
      return url;
    }
    u.pathname = normalizePagePath(u.pathname);
    return u.href;
  } catch {
    return url;
  }
}

/**
 * Home URL for a locale (respects `base` in astro.config, e.g. /subdir/en/).
 * Trailing slash (canonical / sitemap; Astro `trailingSlash: "always"`).
 */
export function localePath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/`);
}

/** Localized “How CheqSplit works” landing (trailing slash). */
export function localeSplitBillPath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/split-bill-app/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/split-bill-app/`);
}

/** SEO landing: group / trip expense tracker (trailing slash). */
export function localeGroupExpenseTrackerPath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/group-expense-tracker/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/group-expense-tracker/`);
}

/** Guide: how to split a restaurant bill (trailing slash). */
export function localeRestaurantBillGuidePath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/guides/how-to-split-a-restaurant-bill/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/guides/how-to-split-a-restaurant-bill/`);
}

/** Guide: how to split trip / group expenses (trailing slash). */
export function localeTripExpensesGuidePath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/guides/how-to-split-trip-expenses/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/guides/how-to-split-trip-expenses/`);
}

/** Guides hub (trailing slash). */
export function localeGuidesHubPath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/guides/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/guides/`);
}

/** Legal/support marketing pages under `/[lang]/…/` */
export type LegalSlug =
  | "privacy-policy"
  | "terms-of-service"
  | "delete-account"
  | "delete-data"
  | "support";

export function localeLegalPath(lang: SupportedLanguage, slug: LegalSlug): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/${slug}/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/${slug}/`);
}
