import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://surya.nsh.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE}/work`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/research`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/notes`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE}/now`, lastModified: new Date(), priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
