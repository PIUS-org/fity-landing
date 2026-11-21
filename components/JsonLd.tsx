import { FAQ } from "@/lib/faq";
import { KAKAO_CHANNEL, LINKS } from "@/lib/links";

/** 검색엔진용 구조화 데이터 (Organization · WebSite · FAQPage) */
export default function JsonLd() {
  const abs = (path: string) => (LINKS.site ? new URL(path, LINKS.site).toString() : path);
  const sameAs = [KAKAO_CHANNEL, LINKS.ios, LINKS.android].filter(Boolean);
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "FITY",
      alternateName: ["핏티", "FITY(핏티)", "fity"],
      legalName: "피우스(PIUS)",
      ...(LINKS.site ? { url: LINKS.site } : {}),
      logo: abs("/icon-512.png"),
      description: "퍼스널컬러 · 헤어 · 메이크업 · 골격 · 패션 스타일링 전문가와 고객을 이어주는 온라인 뷰티 · 패션 컨설팅 플랫폼",
      sameAs,
      contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: LINKS.cs, availableLanguage: "Korean" },
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
        addressRegion: "경기도",
        addressLocality: "용인시 기흥구",
        streetAddress: "강남서로 9, 7층 703호 b520",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "FITY",
      alternateName: ["핏티", "FITY(핏티)", "fity"],
      inLanguage: "ko-KR",
      ...(LINKS.site ? { url: LINKS.site } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <>
      {data.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
