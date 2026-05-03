import type { SupportedLanguage } from "./config";

/**
 * Site path or absolute URL: remove trailing slashes except root `/` or bare origin
 * `https://example.com/` (pathname `/` only — left unchanged).
 */
export function normalizePagePath(path: string): string {
  if (path === "/" || path === "") return "/";
  return path.replace(/\/+$/, "") || "/";
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
 * Home URL for a locale (respects `base` in astro.config, e.g. /subdir/en).
 * No trailing slash (canonical / sitemap; `trailingSlash: "ignore"` allows both URL forms).
 */
export function localePath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/`);
}

/** Localized “How CheqSplit works” landing (no trailing slash). */
export function localeSplitBillPath(lang: SupportedLanguage): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === "/") {
    return normalizePagePath(`/${lang}/split-bill-app/`);
  }
  const b = base.endsWith("/") ? base : `${base}/`;
  return normalizePagePath(`${b}${lang}/split-bill-app/`);
}
