/**
 * 운영 링크 설정 — .env(.local)의 값(SITE_URL, NEXT_PUBLIC_*)으로 채운다. (.env.example 참고)
 * 빈 값인 링크는 누르면 '준비 중' 안내가 뜬다. 운영 배포 전 모두 채울 것.
 */
export const LINKS = {
  expertLogin: process.env.NEXT_PUBLIC_EXPERT_WEB_LOGIN_URL ?? "",
  ios: process.env.NEXT_PUBLIC_IOS_APP_STORE_URL ?? "",
  android: process.env.NEXT_PUBLIC_ANDROID_PLAY_STORE_URL ?? "",
  appSmart: process.env.NEXT_PUBLIC_APP_SMART_URL ?? "",
  site: process.env.SITE_URL ?? "",
  terms: process.env.NEXT_PUBLIC_TERMS_URL ?? "",
  privacy: process.env.NEXT_PUBLIC_PRIVACY_URL ?? "",
  cs: process.env.NEXT_PUBLIC_CS_URL ?? "",
  csEmail: process.env.NEXT_PUBLIC_CS_EMAIL ?? "",
  ga4: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  naverVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION ?? "",
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
};

export type LinkKind = "expert" | "ios" | "android" | "smart" | "terms" | "privacy" | "cs";

export const LINK_META: Record<Exclude<LinkKind, "smart">, { url: string; event?: string; pending: string }> = {
  expert: { url: LINKS.expertLogin, event: "click_expert_login", pending: "전문가 로그인 주소를 준비 중이에요." },
  ios: { url: LINKS.ios, event: "click_app_store", pending: "App Store 출시를 준비 중이에요." },
  android: { url: LINKS.android, event: "click_google_play", pending: "Google Play 출시를 준비 중이에요." },
  terms: { url: LINKS.terms, pending: "이용약관 페이지를 준비 중이에요." },
  privacy: { url: LINKS.privacy, pending: "개인정보 처리방침 페이지를 준비 중이에요." },
  cs: { url: LINKS.cs, pending: "카카오톡 채널 주소를 준비 중이에요." },
};

/** QR에 담을 주소 : 스마트 링크가 있으면 그것, 없으면 사이트 주소 ?go=app (접속 기기별 스토어로 이동) */
export const QR_TARGET = LINKS.appSmart || (LINKS.site ? LINKS.site.replace(/[?#].*$/, "") + "?go=app" : "");
