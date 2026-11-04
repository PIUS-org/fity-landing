import SmartLink from "./SmartLink";

export default function ForExperts() {
  return (
      <section className="sec pro-band" id="experts" aria-labelledby="pro-title">
        <div className="wrap grid">
          <div className="pro-copy">
            <p className="eyebrow">For Experts</p>
            <h2 className="h2" id="pro-title">뷰티 전문가라면,<br />FITY에서 고객을 만나세요.</h2>
            <p className="body">퍼스널컬러, 헤어, 메이크업, 이미지 · 스타일링 컨설팅을 하는 사업자라면 가입 신청할 수 있어요. 심사를 통과하면 바로 활동할 수 있어요.</p>
            <SmartLink kind="expert" loc="experts_section" className="btn">전문가 로그인 · 가입</SmartLink>
          </div>
          <ol className="pro-items">
            <li><span className="no">01</span><span>내 컨설팅을 상품으로 올리고 판매해요</span></li>
            <li><span className="no">02</span><span>고객이 올린 핏 요청에 직접 제안해요</span></li>
            <li><span className="no">03</span><span>포트폴리오로 내 작업을 보여줘요</span></li>
            <li><span className="no">04</span><span>의뢰 확인부터 결과물 전달, 정산까지 전문가 전용 WEB에서 관리해요</span></li>
          </ol>
        </div>
      </section>
  );
}
