import type { NextConfig } from "next";

/** 정적 HTML로 내보낸다 (out/). Vercel이 그대로 서빙한다. 본문이 HTML에 들어 있어 네이버 · 구글 수집에 유리. */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // SITE_URL은 NEXT_PUBLIC_ 접두어가 없으므로, 클라이언트 컴포넌트(QR 등)에서도 쓰도록 빌드 시 주입한다.
  env: { SITE_URL: process.env.SITE_URL ?? "" },
};

export default nextConfig;
