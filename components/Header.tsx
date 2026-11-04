"use client";
import { useEffect, useState } from "react";
import SmartLink from "./SmartLink";

const NAV = [
  ["#platform", "FITY 소개"],
  ["#consulting", "컨설팅 종류"],
  ["#how", "이용 방법"],
  ["#safe", "안심 보장"],
  ["#faq", "자주 묻는 질문"],
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`hdr${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="FITY 처음으로">
          <img src="/img/logo/logo-wordmark-ink.svg" alt="FITY 핏티" width={53} height={36} />
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="hdr-right">
          <SmartLink kind="expert" loc="header" className="link-expert">전문가 로그인</SmartLink>
          <SmartLink kind="smart" loc="header_cta" className="btn btn-ink">앱 다운로드</SmartLink>
        </div>
      </div>
    </header>
  );
}
