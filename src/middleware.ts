import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // For /notes subpaths without a file extension and without a trailing slash,
  // redirect to add the trailing slash. This prevents Cloudflare Pages from
  // returning an absolute-path 301 that escapes the /notes/ prefix.
  if (
    pathname.startsWith("/notes") &&
    !pathname.endsWith("/") &&
    !/\.[^/]+$/.test(pathname)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname + "/";
    return NextResponse.redirect(url, { status: 308 });
  }
}

export const config = {
  matcher: "/notes/:path*",
};
