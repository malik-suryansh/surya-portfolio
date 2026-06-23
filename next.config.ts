import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/notes",
        destination: "https://CLOUDFLARE_PAGES_URL/notes",
      },
      {
        source: "/notes/:path*",
        destination: "https://CLOUDFLARE_PAGES_URL/notes/:path*",
      },
    ];
  },
};

export default nextConfig;
