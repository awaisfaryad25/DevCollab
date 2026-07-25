import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/", "/pricing", "/about", "/contact", "/blog"];
const AUTH_PATHS = ["/login", "/register", "/forgot-password"];
const ADMIN_PATHS = ["/users", "/analytics", "/reports", "/subscriptions", "/invoices", "/transactions", "/emails", "/notifications", "/activity", "/settings"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isPublic = PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
  const isAuthPath = AUTH_PATHS.some((p) => pathname.startsWith(p));

  // Not logged in → trying to access protected page
  if (!token && !isPublic && !isAuthPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Already logged in → trying to visit login/register
  if (token && isAuthPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};