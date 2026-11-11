import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "서비스 이용약관 | FITY 핏티",
  description: "FITY(핏티) 서비스 이용약관 : 회원, 핏 요청, 구매와 의뢰 진행, 취소 · 환불, 후기, 신고 및 이용제한 규정",
  alternates: { canonical: "/policy/terms/" },
};

export default function Page() {
  return <PolicyPage slug="terms" />;
}
