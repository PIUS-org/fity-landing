import type { NextConfig } from "next";

/** 정적 HTML로 내보낸다 (out/). S3 + CloudFront에 그대로 올리면 된다. 본문이 HTML에 들어 있어 네이버 · 구글 수집에 유리. */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
