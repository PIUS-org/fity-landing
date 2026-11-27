import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

const TITLE = "계정 삭제 안내 | FITY 핏티";
const DESCRIPTION = "FITY(핏티) 고객 계정과 데이터를 삭제하는 방법 : 앱에서 회원 탈퇴, 카카오톡 채널로 삭제 요청, 삭제 · 보관되는 정보";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/account-deletion/" },
  openGraph: { type: "website", siteName: "FITY", locale: "ko_KR", url: "/account-deletion/", title: TITLE, description: DESCRIPTION, images: [{ url: "/img/v6/og.jpg", width: 1200, height: 630 }] },
};

export default function Page() {
  return <PolicyPage slug="account-deletion" />;
}
