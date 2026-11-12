import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

const TITLE = "서비스 이용약관 | FITY 핏티";

export const metadata: Metadata = {
  title: TITLE,
  description: "FITY(핏티) 서비스 이용약관 : 회원, 핏 요청, 구매와 의뢰 진행, 취소 · 환불, 후기, 신고 및 이용제한 규정",
  alternates: { canonical: "/policy/terms/" },
  openGraph: { type: "website", siteName: "FITY", locale: "ko_KR", url: "/policy/terms/", title: TITLE, images: [{ url: "/img/v6/og.jpg", width: 1200, height: 630 }] },
};

export default function Page() {
  return <PolicyPage slug="terms" />;
}
