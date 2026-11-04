
export default function Safe() {
  return (
      <section className="sec" id="safe" aria-labelledby="safe-title">
        <div className="wrap">
          <div className="grid head">
            <div>
              <p className="eyebrow">Safe with FITY</p>
              <h2 className="h2" id="safe-title">처음이어도<br />안심하고 맡기세요.</h2>
            </div>
            <p className="body">결제부터 결과물까지 FITY 안에서 진행돼요. 문제가 생기면 정해진 기준대로 바로 처리해요.</p>
          </div>
          <ul className="grid safe">
            <li><b>확인 전에는 언제든 취소</b><span>전문가가 의뢰를 확인하기 전이라면 직접 취소하고 100% 환불받아요.</span></li>
            <li><b>확인하지 않으면 자동 환불</b><span>결제 다음 날부터 1영업일 안에 전문가가 확인하지 않으면 100% 자동 환불돼요.</span></li>
            <li><b>결과물이 안 오면 자동 환불</b><span>완료 예정일이 지나고 3영업일 안에도 결과물이 오지 않으면 100% 자동 환불돼요.</span></li>
            <li><b>사업자 확인을 거친 전문가</b><span>FITY가 사업자등록증을 확인하고 승인한 전문가만 컨설팅을 판매해요.</span></li>
            <li><b>내 사진은 컨설팅에만</b><span>전문가는 사진을 내려받을 수 없고, 이름과 전화번호도 볼 수 없어요.</span></li>
            <li><b>믿을 수 있는 후기</b><span>후기는 컨설팅을 결제하고 결과물을 받은 고객만 쓸 수 있어요.</span></li>
          </ul>
        </div>
      </section>
  );
}
