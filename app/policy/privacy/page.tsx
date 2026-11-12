import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

const TITLE = "개인정보 처리방침 | FITY 핏티";

export const metadata: Metadata = {
  title: TITLE,
  description: "FITY(핏티) 개인정보 처리방침 : 처리하는 개인정보와 목적, 보유 기간, 제3자 제공 · 위탁, 이용자의 권리",
  alternates: { canonical: "/policy/privacy/" },
  openGraph: { type: "website", siteName: "FITY", locale: "ko_KR", url: "/policy/privacy/", title: TITLE, images: [{ url: "/img/v6/og.jpg", width: 1200, height: 630 }] },
};

export default function Page() {
  return <PolicyPage slug="privacy" />;
}
