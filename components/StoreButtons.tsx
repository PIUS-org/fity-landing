"use client";
import { useOs } from "@/lib/useOs";
import SmartLink from "./SmartLink";

const IOS = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="6" y="2.5" width="12" height="19" rx="3" />
    <path d="M10.5 18.5h3" />
  </svg>
);
const ANDROID = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="6" y="2.5" width="12" height="19" rx="3" />
    <path d="M9 5.5h6" />
    <circle cx="12" cy="18" r=".9" fill="currentColor" />
  </svg>
);

/** 접속 기기에 맞는 스토어 버튼을 앞에, 다른 쪽은 보조 스타일로 */
export default function StoreButtons({ loc }: { loc: string }) {
  const os = useOs();
  const ios = (
    <SmartLink key="ios" kind="ios" loc={loc} className={`store${os === "android" ? " is-alt" : ""}`}>
      {IOS}
      <span><small>iPhone 앱</small><b>App Store</b></span>
    </SmartLink>
  );
  const android = (
    <SmartLink key="android" kind="android" loc={loc} className={`store${os === "ios" ? " is-alt" : ""}`}>
      {ANDROID}
      <span><small>Android 앱</small><b>Google Play</b></span>
    </SmartLink>
  );
  return <div className="stores">{os === "android" ? [android, ios] : [ios, android]}</div>;
}
