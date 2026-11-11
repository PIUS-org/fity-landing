import { getPolicy, type PolicySlug } from "@/lib/policy";
import Footer from "./Footer";
import Toast from "./Toast";

/** 서비스 이용약관 · 개인정보 처리방침 공개 페이지 (/policy/terms, /policy/privacy) */
export default function PolicyPage({ slug }: { slug: PolicySlug }) {
  const p = getPolicy(slug);
  const other = slug === "terms" ? { href: "/policy/privacy/", label: "개인정보 처리방침" } : { href: "/policy/terms/", label: "서비스 이용약관" };
  return (
    <>
      <header className="hdr is-scrolled">
        <div className="wrap">
          <a className="logo" href="/" aria-label="FITY 홈으로">
            <img src="/img/logo/logo-wordmark-ink.svg" alt="FITY 핏티" width={53} height={36} />
          </a>
          <div className="hdr-right">
            <a className="link-expert" href={other.href}>{other.label}</a>
          </div>
        </div>
      </header>
      <main className="policy">
        <div className="wrap">
          <p className="eyebrow">Policy</p>
          <h1>{p.title}</h1>
          <p className="policy-meta">
            {p.version && <span>버전 {p.version}</span>}
            {p.effectiveDate && !p.effectiveDate.includes("{{") && <span>시행일 {p.effectiveDate}</span>}
          </p>
          <article className="policy-body" dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
      </main>
      <Footer />
      <Toast />
    </>
  );
}
