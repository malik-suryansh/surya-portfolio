import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      // Root notes index
      {
        source: "/notes/",
        destination: "https://coreml.pages.dev/",
      },
      // Static assets (have file extensions) — proxy without trailing slash
      {
        source: "/notes/:path+.:ext",
        destination: "https://coreml.pages.dev/:path+.:ext",
      },
      // Page/folder paths with trailing slash — destination also gets trailing slash
      // so Cloudflare Pages serves the folder index directly (no redirect escape)
      {
        source: "/notes/:path*/",
        destination: "https://coreml.pages.dev/:path*/",
      },
      // Fallback for paths without trailing slash
      {
        source: "/notes/:path*",
        destination: "https://coreml.pages.dev/:path*/",
      },
    ];
  },
};

export default nextConfig;
