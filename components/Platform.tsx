
export default function Platform() {
  return (
      <section className="sec" id="platform" aria-labelledby="pf-title">
        <div className="wrap">
          <div className="grid head">
            <div>
              <p className="eyebrow">How FITY connects</p>
              <h2 className="h2" id="pf-title">고르거나, 제안받거나.</h2>
            </div>
            <p className="body">FITY는 컨설팅을 받고 싶은 사람과 뷰티 전문가를 이어주는 플랫폼이에요. 전문가가 올린 컨설팅을 고르거나, 내 고민에 맞춰 전문가의 제안을 받을 수 있어요.</p>
          </div>
          <div className="grid ways">
            <article className="way">
              <div className="way-vis">
                <figure className="phone"><img src="/img/v6/app_search.jpg" alt="FITY 앱 검색 화면, 분야별 전문가 목록" loading="lazy" width="780" height="1688" /></figure>
                <figure className="phone"><img src="/img/v6/app_product.jpg" alt="FITY 앱 컨설팅 상세 화면, 가격과 진행 방식" loading="lazy" width="780" height="1688" /></figure>
              </div>
              <span className="no">01</span>
              <h3>직접 고르기</h3>
              <p className="body">원하는 분야가 정해져 있다면, 전문가들의 컨설팅을 비교하고 마음에 드는 걸 바로 골라요.</p>
              <ul className="way-tags"><li>가격 · 작업 기간 비교</li><li>포트폴리오 · 후기 확인</li><li>보낼 사진 미리 확인</li></ul>
            </article>
            <article className="way">
              <div className="way-vis">
                <figure className="phone"><img src="/img/v6/app_fitNew.jpg" alt="FITY 앱 핏 요청 올리기 화면, 제목과 분야, 내용 입력" loading="lazy" width="780" height="1688" /></figure>
                <figure className="phone"><img src="/img/v6/app_myfits.jpg" alt="FITY 앱 내 핏 요청 목록, 받은 제안 수" loading="lazy" width="780" height="1688" /></figure>
              </div>
              <span className="no">02</span>
              <h3>핏 요청으로 제안받기</h3>
              <p className="body">뭘 받아야 할지 모르겠다면 고민을 '핏 요청'으로 올려요. 그 분야 전문가들이 나에게 맞는 컨설팅을 골라 제안해요.</p>
              <ul className="way-tags"><li>고민과 사진 1장이면 시작</li><li>여러 전문가의 제안 비교</li><li>공개할 사진은 내가 선택</li></ul>
            </article>
          </div>
          <div className="grid sides">
            <div className="side">
              <p className="eyebrow">For you</p>
              <h3>컨설팅을 받고 싶다면</h3>
              <ul><li>전문가를 비교하고 직접 골라요</li><li>고민을 올리고 제안을 받아요</li><li>사진을 보내고 결과물을 앱으로 받아요</li></ul>
            </div>
            <div className="side">
              <p className="eyebrow">For experts</p>
              <h3>컨설팅을 하는 전문가라면</h3>
              <ul><li>내 컨설팅을 상품으로 올려요</li><li>고객의 핏 요청에 직접 제안해요</li><li>의뢰부터 정산까지 전문가 전용 WEB에서 관리해요</li></ul>
            </div>
          </div>
        </div>
      </section>
  );
}
