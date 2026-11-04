"use client";
import { useEffect, useState } from "react";
import SmartLink from "./SmartLink";

/** 모바일 하단 고정 다운로드 버튼 : 히어로를 지나면 나타나고, 다운로드 섹션이 보이면 숨는다 (PC는 CSS로 숨김) */
export default function MobileBar() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const update = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const dl = document.getElementById("download");
      const heroH = hero?.offsetHeight ?? 600;
      const dlTop = dl?.getBoundingClientRect().top ?? Infinity;
      setOn(window.scrollY > heroH * 0.8 && dlTop > window.innerHeight * 0.6);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className={`mbar${on ? " is-on" : ""}`}>
      <SmartLink kind="smart" loc="mobile_bar">FITY 앱 다운로드</SmartLink>
    </div>
  );
}
