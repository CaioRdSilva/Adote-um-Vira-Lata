import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRECT,
  });


  if (!session && path === "/protected") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && (path === "/register" || path === "/login")) {
    return NextResponse.redirect(new URL("/protected", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected/:path*", "/proteceted"],
};
