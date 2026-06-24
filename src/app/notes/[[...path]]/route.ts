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
    // Quartz generates `../` relative paths for depth-2 leaf pages, designed to
    // resolve from a no-trailing-slash URL. Root page uses `./` and needs /notes/.
    const base = segments.length === 0
      ? "/notes/"
      : request.nextUrl.pathname;
    html = html.replace("<head>", `<head><base href="${base}">`);
    return new Response(html, {
      status: res.status,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return new Response(res.body, {
    status: res.status,
    headers: { "Content-Type": contentType },
  });
}
