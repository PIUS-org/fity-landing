import type { MetadataRoute } from "next";
import { LINKS } from "@/lib/links";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = LINKS.site || "https://example.com";
  return [{ url: new URL("/", base).toString(), lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
