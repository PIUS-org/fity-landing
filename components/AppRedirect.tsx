"use client";
import { useEffect } from "react";
import { LINKS } from "@/lib/links";
import { detectOs } from "@/lib/useOs";

/** QR로 들어온 경우(?go=app) 기기에 맞는 스토어로 바로 보낸다 */
export default function AppRedirect() {
  useEffect(() => {
    if (!/[?&]go=app\b/.test(window.location.search)) return;
    const os = detectOs();
    const dest = os === "ios" ? LINKS.ios : os === "android" ? LINKS.android : "";
    if (dest) window.location.replace(dest);
  }, []);
  return null;
}
