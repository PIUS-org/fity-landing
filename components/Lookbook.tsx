
export default function Lookbook() {
  return (
      <section className="sec" aria-labelledby="look-title">
        <div className="wrap">
          <div className="grid head">
            <div>
              <p className="eyebrow">Find your fit</p>
              <h2 className="h2" id="look-title">유행 말고,<br />나에게 맞는 걸로.</h2>
            </div>
            <p className="body">나를 알면 고르는 게 쉬워져요. 컬러부터 헤어, 스타일까지 나에게 맞는 기준을 FITY에서 찾아보세요.</p>
          </div>
          <div className="look-grid">
            <div className="slot"><img src="/img/v8/l1.jpg" alt="흰 카디건과 회색 스커트 차림으로 거리를 걷는 모습" loading="lazy" width="520" height="1000" /></div>
            <div className="slot"><img src="/img/v8/l2.jpg" alt="블루 카디건과 흰 와이드 팬츠 전신 코디" loading="lazy" width="600" height="860" /></div>
            <div className="slot"><img src="/img/v8/l3.jpg" alt="행거 앞에서 니트를 골라 코디하는 모습" loading="lazy" width="600" height="920" /></div>
            <div className="slot"><img src="/img/v8/l4.jpg" alt="레이어드 컷 긴 머리 정면 모습" loading="lazy" width="540" height="920" /></div>
            <div className="slot"><img src="/img/v8/l5.jpg" alt="베이지 재킷에 검은 가방을 메고 웃는 모습" loading="lazy" width="600" height="920" /></div>
            <div className="slot"><img src="/img/v8/l6.jpg" alt="침대 위에 셔츠와 카디건, 가방, 운동화를 펼쳐 놓은 코디" loading="lazy" width="526" height="1004" /></div>
            <div className="slot"><img src="/img/v8/l7.jpg" alt="트렌치코트를 입고 외출하는 모습" loading="lazy" width="540" height="920" /></div>
            <div className="slot"><img src="/img/v8/l8.jpg" alt="창가에서 셀카를 찍는 모습" loading="lazy" width="650" height="920" /></div>
          </div>
        </div>
      </section>
  );
}
