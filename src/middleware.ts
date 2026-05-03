import { defineMiddleware } from "astro/middleware";

/** 301 `/page/` → `/page` for canonical URLs (dev); production uses `dist/_redirects` on Netlify/CF. */
export const onRequest = defineMiddleware((context, next) => {
  const u = new URL(context.url);
  const { pathname } = u;
  if (pathname !== "/" && pathname.endsWith("/")) {
    u.pathname = pathname.replace(/\/+$/, "") || "/";
    return Response.redirect(u.toString(), 301);
  }
  return next();
});
