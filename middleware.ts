import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const variant = host.startsWith("dog.") ? "dog" : "main";
  const url = request.nextUrl.clone();
  url.pathname = `/favicons/${variant}/favicon.ico`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/favicon.ico"],
};
