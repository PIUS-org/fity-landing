import SmartLink from "./SmartLink";

export default function Hero() {
  return (
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="grid hero-top">
            <div className="hero-title">
              <p className="eyebrow ko">온라인 뷰티 컨설팅 플랫폼</p>
              <h1 id="hero-title">나에게 맞는 뷰티 전문가,<br />FITY에서 만나요.</h1>
            </div>
            <div className="hero-side">
              <p className="body">퍼스널컬러 진단, 얼굴형 헤어, 메이크업, 골격 · 스타일링까지. 전문가를 직접 고르거나, 고민을 올리고 제안을 받아보세요. 사진 몇 장이면 충분해요.</p>
              <div className="hero-cta">
                <SmartLink kind="smart" loc="hero" className="btn btn-ink">앱 다운로드</SmartLink>
                <a className="btn btn-line" href="#platform">어떻게 이용하나요?</a>
              </div>
            </div>
          </div>
          <div className="hero-phones">
            <figure className="hero-col"><div className="phone"><img src="/img/v6/app_expert.jpg" alt="FITY 앱 전문가 프로필 화면, 포트폴리오와 소개" width="780" height="1688" fetchPriority="high" /></div><figcaption>전문가 프로필과 포트폴리오</figcaption></figure>
            <figure className="hero-col"><div className="phone"><img src="/img/v6/app_fit.jpg" alt="FITY 앱 핏 요청 화면, 여러 전문가에게 받은 제안" width="780" height="1688" /></div><figcaption>고민을 올리면 도착하는 제안</figcaption></figure>
            <figure className="hero-col"><div className="phone"><img src="/img/v6/app_done.jpg" alt="FITY 앱 결과물 도착 화면, 컬러 팔레트 리포트" width="780" height="1688" /></div><figcaption>앱으로 받는 맞춤 결과물</figcaption></figure>
          </div>
          <p className="swipe-hint" aria-hidden="true">옆으로 넘겨 보세요 →</p>
        </div>
      </section>
  );
}
