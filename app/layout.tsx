import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { LINKS } from "@/lib/links";
import "./globals.css";

const TITLE = "FITY 핏티 온라인 뷰티 컨설팅";
const DESCRIPTION =
  "핏티(FITY) | 퍼스널컬러 진단, 얼굴형 헤어, 메이크업, 골격 · 체형, 스타일링 컨설팅을 사진 몇 장으로. 검증된 뷰티 전문가를 직접 고르거나 고민을 올리고 제안받는 온라인 뷰티 컨설팅 플랫폼 FITY.";

export const metadata: Metadata = {
  ...(LINKS.site ? { metadataBase: new URL(LINKS.site) } : {}),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "핏티", "핏티 앱", "FITY", "뷰티 컨설팅", "온라인 뷰티 컨설팅", "퍼스널컬러 진단", "온라인 퍼스널컬러",
    "비대면 퍼스널컬러 진단", "웜톤 쿨톤", "얼굴형 헤어 추천", "헤어 컨설팅", "메이크업 컨설팅",
    "골격 진단", "체형 진단", "스타일링 컨설팅", "이미지 컨설팅",
  ],
  robots: { index: true, follow: true },
  alternates: LINKS.site ? { canonical: "/" } : undefined,
  icons: { icon: { url: "/img/logo/logo-icon-ink.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    siteName: "FITY",
    locale: "ko_KR",
    url: LINKS.site || undefined,
    title: "FITY 핏티 · 나에게 맞는 뷰티 전문가를 만나는 온라인 뷰티 컨설팅",
    description:
      "퍼스널컬러 · 헤어 · 메이크업 · 스타일링 전문가를 직접 고르거나, 고민을 올리고 제안받아요. 사진 몇 장이면 온라인으로 컨설팅을 받을 수 있어요.",
    images: [{ url: "/img/v6/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  verification: {
    ...(LINKS.googleVerification ? { google: LINKS.googleVerification } : {}),
    ...(LINKS.naverVerification ? { other: { "naver-site-verification": LINKS.naverVerification } } : {}),
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" />
        <link rel="preload" href="/fonts/PretendardVariable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        {LINKS.ga4 && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${LINKS.ga4}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${LINKS.ga4}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
