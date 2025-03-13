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
  const isAuthRoute = localPath.some((route) => path.endsWith(route));
  const isProtectPath = protectPath.some((route) => path.includes(route));

  // console.log(path);

  if (!token && isProtectPath) {
    return NextResponse.redirect(new URL("/en/login", request.url));
  }

  if (token && isProtectPath) {
    try {
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

      if (
        data.Cards !== null &&
        data.Cards.length > 0 &&
        data.phoneNumber === null &&
        !request.nextUrl.pathname.includes("/phone-number-req")
      ) {
        return NextResponse.redirect(
          new URL("/en/phone-number-req", request.url)
        );
      }
    } catch (error) {
      const response = NextResponse.redirect(new URL("/en/login", request.url));
      response.cookies.delete("token");
      response.cookies.delete("id");
      return response;
    }
  }

  if (isAuthRoute && token && userId) {
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
