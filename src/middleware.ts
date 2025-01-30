import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decode, jwtVerify } from "./helpers/jwthelpers";
import { url } from "inspector";

export async function middleware(request: NextRequest) {
  console.log(request);

  const authRoutes = ["/login", "/register"];

  const { pathname } = request.nextUrl;

  const accessToken = (await cookies()).get("accessToken")?.value;

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }

  let decodedToken = null;
  decodedToken = decode(accessToken) as any;

  const { role } = decodedToken;
  if (role === "admin" && pathname.match(/^\/admin-dashboard/)) {
    return NextResponse.next();
  }
  if (role === "user" && pathname.match(/^\/dashboard/)) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
  ],
};
