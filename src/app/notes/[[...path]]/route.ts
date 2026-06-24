import { NextRequest } from "next/server";

const QUARTZ = "https://coreml.pages.dev";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path } = await params;
  const segments = path ?? [];
  const tail = segments.join("/");

  // Assets have file extensions — no trailing slash added
  const isAsset = /\.[^/]+$/.test(tail);
  const upstream = tail
    ? `${QUARTZ}/${tail}${isAsset ? "" : "/"}`
    : `${QUARTZ}/`;

  const res = await fetch(upstream, {
    headers: { "User-Agent": "Mozilla/5.0 Quartz-Proxy/1.0" },
    redirect: "follow",
  });

  const contentType = res.headers.get("content-type") ?? "";

  if (contentType.includes("text/html")) {
    let html = await res.text();
    // Inject <base> pointing to the current request URL with trailing slash.
    // Quartz uses relative paths (e.g. ../../index.css) — setting base to the
    // current page URL makes them resolve correctly at any nesting depth.
    // Do NOT add trailing slash — Quartz uses paths like ../index.css where
    // the browser resolves "../" relative to the directory of the base URL.
    // Without trailing slash, /notes/foundations/calculus has directory
    // /notes/foundations/, so ../index.css → /notes/index.css (correct).
    // With trailing slash it would resolve to /notes/foundations/index.css (wrong).
    const base = request.nextUrl.pathname;
    html = html.replace("<head>", `<head><base href="${base}">`);
    return new Response(html, {
      status: res.status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        // Serve stale copy instantly while revalidating in background.
        // 60s before Vercel edge considers it stale; up to 24h served while fresh copy fetches.
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=86400",
      },
    });
  }

  // Assets use content-hashed filenames — safe to cache forever.
  // New Quartz builds generate new hashes, old cached files are simply never requested again.
  const cacheControl = isAsset
    ? "public, s-maxage=31536000, immutable"
    : "public, s-maxage=60, stale-while-revalidate=86400";

  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": cacheControl,
    },
  });
}
