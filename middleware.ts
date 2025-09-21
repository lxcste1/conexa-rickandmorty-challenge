import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { Langs } from "@/types";

const locales = ["es", "en"] as Langs[];
const defaultLocale = "es";

function getLocale(request: Request) {
  const negotiatorHeaders = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales as unknown as string[], defaultLocale);
}

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  const pathnameHasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  const url = new URL(request.url);
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
