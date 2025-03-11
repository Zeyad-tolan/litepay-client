import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  const userId = request.cookies.get("id")?.value;
  const protectPath = [
    "/dashboard",
    "/add-balance",
    "/add-balance-wait",
    "/card-dashboard",
    "/card-req",
    "/charge-card",
    "/instapay",
    "/order-wait",
    "/profile",
    "/phone-number-req",
  ];
  const localPath = ["/login", "/signup", "/forgot-password"];
  const isAuthRoute = localPath.some((route) => path.includes(route));
  const isProtectPath = protectPath.some((route) => path.includes(route));
  if (!token && isProtectPath) {
    return NextResponse.redirect(new URL("/en/login", request.url));
  }

  if (token && isProtectPath) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}users/one/${userId}`,
      {
        method: "GET",
        headers: {
          token: token,
        },
      }
    );

    const { data } = await res.json();
    console.log(data);

    if (
      data.Cards.length > 0 &&
      data.phoneNumber === null &&
      !request.nextUrl.pathname.includes("/phone-number-req")
    ) {
      return NextResponse.redirect(
        new URL("/en/phone-number-req", request.url)
      );
    }
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/en", request.url));
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(ar|en)/:path*",
    "/dashboard:path*",
    "/login",
    "/signup",
    "/forgot-password",
    "/add-balance",
    "/add-balance-wait",
    "/card-dashboard",
    "/card-req",
    "/charge-card",
    "/instapay",
    "/order-wait",
  ],
};
