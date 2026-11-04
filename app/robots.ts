import type { MetadataRoute } from "next";
import { LINKS } from "@/lib/links";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Yeti", allow: "/" }, // 네이버
      { userAgent: "*", allow: "/" },
    ],
    ...(LINKS.site ? { sitemap: new URL("/sitemap.xml", LINKS.site).toString() } : {}),
  };
}
