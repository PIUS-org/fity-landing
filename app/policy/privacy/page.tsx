import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | FITY 핏티",
  description: "FITY(핏티) 개인정보 처리방침 : 처리하는 개인정보와 목적, 보유 기간, 제3자 제공 · 위탁, 이용자의 권리",
  alternates: { canonical: "/policy/privacy/" },
};

export default function Page() {
  return <PolicyPage slug="privacy" />;
}
