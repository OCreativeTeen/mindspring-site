import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 根路径重定向到中文
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // 检查首段是否为有效 locale
  const segment = pathname.split("/")[1];
  if (locales.includes(segment as "zh" | "en")) {
    return NextResponse.next();
  }

  // 非 locale 路径，重定向到中文
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
