import type { MetadataRoute } from "next";
import { LINKS } from "@/lib/links";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = LINKS.site || "https://example.com";
  const now = new Date();
  return [
    { url: new URL("/", base).toString(), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: new URL("/policy/terms/", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: new URL("/policy/privacy/", base).toString(), lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
