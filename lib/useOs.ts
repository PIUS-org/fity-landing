"use client";
import { useEffect, useState } from "react";

export type Os = "ios" | "android" | "other";

export function detectOs(): Os {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent || "";
  if (/iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

/** 첫 렌더는 서버와 같게 'other', 마운트 후 실제 기기로 바뀐다 */
export function useOs(): Os {
  const [os, setOs] = useState<Os>("other");
  useEffect(() => setOs(detectOs()), []);
  return os;
}
