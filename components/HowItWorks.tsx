
export default function HowItWorks() {
  return (
      <section className="sec is-gray" id="how" aria-labelledby="how-title">
        <div className="wrap">
          <div className="grid head">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="h2" id="how-title">신청부터 결과까지,<br />앱 하나로.</h2>
            </div>
            <p className="body">FITY 컨설팅은 모두 온라인으로 진행돼요. 신청하고, 사진을 보내고, 진행 상황을 확인하고, 결과물을 받는 것까지 앱에서 끝나요.</p>
          </div>
          <ol className="grid steps">
            <li className="step">
              <div className="scr"><img src="/img/v6/app_buyReq.jpg" alt="FITY 앱 주문하기 화면, 원하는 것과 지금 상황 입력" loading="lazy" width="780" height="1688" /></div>
              <span className="no">01</span>
              <h3>신청하기</h3>
              <p>원하는 것과 지금 상황을 적고, 가격과 작업 기간을 확인한 뒤 결제해요.</p>
            </li>
            <li className="step">
              <div className="scr"><img src="/img/v6/app_fitnote.jpg" alt="FITY 앱 핏노트 화면, 기본 정보와 얼굴 사진" loading="lazy" width="780" height="1688" /></div>
              <span className="no">02</span>
              <h3>사진 보내기</h3>
              <p>촬영 가이드대로 찍은 사진을 핏노트에 모아 두고, 컨설팅에 필요한 사진만 보내요.</p>
            </li>
            <li className="step">
              <div className="scr"><img src="/img/v6/app_ing.jpg" alt="FITY 앱 주문 상세 화면, 전문가가 작업 중인 상태" loading="lazy" width="780" height="1688" /></div>
              <span className="no">03</span>
              <h3>진행 확인</h3>
              <p>전문가가 일정을 확정하면 완료 예정일과 진행 단계를 앱에서 볼 수 있어요.</p>
            </li>
            <li className="step">
              <div className="scr"><img src="/img/v6/app_pdf.jpg" alt="FITY 앱 결과물 보기 화면, 퍼스널컬러 리포트" loading="lazy" width="780" height="1688" /></div>
              <span className="no">04</span>
              <h3>결과 받기</h3>
              <p>결과물을 PDF · 이미지 · 링크로 받아요. 저장하고, 필요할 때 다시 꺼내 봐요.</p>
            </li>
          </ol>
          <p className="swipe-hint" aria-hidden="true">옆으로 넘겨 보세요 →</p>
        </div>
      </section>
  );
}
