import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "fr", "de", "es", "it"] as const;
type Loc = (typeof locales)[number];
const defaultLocale: Loc = "en";

function pickLocale(request: NextRequest): Loc {
  const header = request.headers.get("accept-language") ?? "";
  const preferred = header.split(",")[0]?.split("-")[0]?.toLowerCase();
  return locales.includes(preferred as Loc) ? (preferred as Loc) : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.\w+$/.test(pathname)
  ) {
    return;
  }

  const locale = pickLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\.\\w+).*)"],
};
