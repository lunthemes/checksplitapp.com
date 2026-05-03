import { defineMiddleware } from "astro/middleware";

/** Skip redirect for URLs whose last path segment looks like a static file (has an extension). */
const FILE_EXT = /\.[a-zA-Z0-9]{1,24}$/;

function shouldSkipTrailingSlashRedirect(pathname: string): boolean {
  if (pathname === "/") return true;
  if (pathname.endsWith("/")) return true;
  if (pathname.startsWith("/_astro")) return true;
  if (pathname.startsWith("/_image")) return true;
  const lastSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  if (FILE_EXT.test(lastSegment)) return true;
  return false;
}

/** 301 `/page` → `/page/` for HTML routes (dev); production uses `dist/_redirects` on Netlify/Cloudflare. */
export const onRequest = defineMiddleware((context, next) => {
  const u = new URL(context.url);
  const { pathname } = u;
  if (shouldSkipTrailingSlashRedirect(pathname)) {
    return next();
  }
  const base = pathname.replace(/\/+$/, "") || "/";
  u.pathname = `${base}/`;
  return Response.redirect(u.toString(), 301);
});
