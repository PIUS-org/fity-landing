# FITY 랜딩페이지 (Next.js · React)

FITY 공식 랜딩페이지. 프로젝트 기술 스택(Next.js 16 App Router · React 19 · TypeScript)에 맞춰 만들었고, **정적 HTML로 내보내** S3 + CloudFront에 그대로 올린다.

## 실행
```bash
pnpm install        # 또는 npm install
cp .env.example .env.local   # 운영 값 채우기
pnpm dev            # http://localhost:3000
pnpm build          # out/ 폴더에 정적 사이트 생성 → S3 업로드
```

## 구조
```
app/
  layout.tsx      메타데이터(SEO · OG · 소유확인), 폰트, GA4
  page.tsx        섹션 조립
  globals.css     디자인 토큰 · 전체 스타일 (BI V1.5)
  robots.ts · sitemap.ts   robots.txt · sitemap.xml 자동 생성
components/       섹션별 컴포넌트 (Hero, Platform, Consulting, HowItWorks, Safe, Faq …)
  SmartLink       외부 링크 · 스토어 이동 · 클릭 이벤트 · '준비 중' 안내
  StoreButtons    기기에 맞는 스토어 버튼을 앞에
  QrBlock         PC용 다운로드 QR (주소가 없으면 숨김)
  AppRedirect     ?go=app 으로 들어오면 기기별 스토어로 이동 (QR 착지)
  MobileBar · Header · Toast · JsonLd
lib/
  links.ts        운영 링크 (환경 변수)
  faq.ts          FAQ 내용 (화면 + 구조화 데이터 공용)
public/           이미지 · 폰트
```

## 배포 전 체크
- `.env.local` 값 전부 채우기 (사이트 주소 · 전문가 로그인 · 스토어 · 정책 · 카카오톡 채널 · 이메일 · GA4 · 소유확인)
- 네이버 서치어드바이저 · 구글 서치 콘솔 등록, `sitemap.xml` 제출
- 공식 App Store · Google Play 배지로 교체 (`components/StoreButtons.tsx`)
- Pretendard 경량 버전(다이나믹 서브셋)으로 교체 (`public/fonts`, `app/globals.css` 첫 줄)
- GA4 전환 이벤트 : `click_app_store` · `click_google_play` · `click_expert_login`
