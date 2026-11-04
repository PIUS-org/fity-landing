import SmartLink from "./SmartLink";

export default function Consulting() {
  return (
      <section className="sec" id="consulting" aria-labelledby="c-title">
        <div className="wrap">
          <div className="grid head">
            <div>
              <p className="eyebrow">Consulting</p>
              <h2 className="h2" id="c-title">이런 뷰티 컨설팅을<br />받을 수 있어요.</h2>
            </div>
            <p className="body">분야마다 전문가가 내 사진과 정보를 보고, 나에게 맞는 기준을 PDF · 이미지 · 링크 결과물로 정리해 줘요.</p>
          </div>
          <div className="fields">
            <article className="field">
              <div className="slot" data-slot="field-color"><img src="/img/v7/field-color.jpg" alt="퍼스널컬러 진단 장면" loading="lazy" width="600" height="860" style={{ objectPosition: "50% 30%" }} /></div>
              <p className="eyebrow">Personal Color</p>
              <h3>퍼스널컬러 진단</h3>
              <p>웜톤인지 쿨톤인지, 나를 밝혀 주는 색을 찾아요.</p>
              <p className="for">화장품 색이 자꾸 안 어울릴 때</p>
              <ul><li>베스트 · 워스트 컬러</li><li>어울리는 립 · 헤어 톤</li><li>컬러 팔레트</li></ul>
            </article>
            <article className="field">
              <div className="slot" data-slot="field-hair"><img src="/img/v7/field-hair.jpg" alt="헤어 컨설팅 장면" loading="lazy" width="600" height="860" style={{ objectPosition: "50% 30%" }} /></div>
              <p className="eyebrow">Hair</p>
              <h3>얼굴형 헤어 컨설팅</h3>
              <p>얼굴형과 분위기에 맞는 헤어를 정리해요.</p>
              <p className="for">미용실에서 뭐라고 할지 모를 때</p>
              <ul><li>커트 라인 · 앞머리</li><li>기장 · 염색 컬러</li><li>미용실에 보여줄 시안</li></ul>
            </article>
            <article className="field">
              <div className="slot" data-slot="field-makeup"><img src="/img/v7/field-makeup.jpg" alt="메이크업 컨설팅 장면" loading="lazy" width="600" height="860" style={{ objectPosition: "40% 40%" }} /></div>
              <p className="eyebrow">Makeup</p>
              <h3>메이크업 컨설팅</h3>
              <p>피부 톤과 이목구비에 맞는 메이크업을 알려줘요.</p>
              <p className="for">매일 같은 화장이 어색할 때</p>
              <ul><li>색조 · 제품 고르기</li><li>데일리 메이크업 순서</li><li>면접 · 촬영 메이크업</li></ul>
            </article>
            <article className="field">
              <div className="slot" data-slot="field-body"><img src="/img/v7/field-body.jpg" alt="골격 · 체형 진단 장면" loading="lazy" width="600" height="860" style={{ objectPosition: "50% 40%" }} /></div>
              <p className="eyebrow">Body Shape</p>
              <h3>골격 · 체형 진단</h3>
              <p>골격 타입과 비율에 맞는 실루엣을 찾아요.</p>
              <p className="for">사이즈는 맞는데 핏이 어색할 때</p>
              <ul><li>골격 타입 · 비율</li><li>어울리는 기장 · 핏</li><li>피해야 할 실루엣</li></ul>
            </article>
            <article className="field">
              <div className="slot" data-slot="field-style"><img src="/img/v7/field-style.jpg" alt="패션 스타일링 컨설팅 장면" loading="lazy" width="600" height="860" style={{ objectPosition: "50% 50%" }} /></div>
              <p className="eyebrow">Styling</p>
              <h3>패션 스타일링 컨설팅</h3>
              <p>가진 옷부터 다시 조합하고 필요한 것만 사요.</p>
              <p className="for">옷은 많은데 입을 게 없을 때</p>
              <ul><li>코디 · 룩북</li><li>옷장 정리</li><li>쇼핑 리스트</li></ul>
            </article>
          </div>
          <div className="c-cta">
            <p>어떤 컨설팅이 필요한지 모르겠다면, 고민부터 올려 보세요.</p>
            <SmartLink kind="smart" loc="consulting_cta" className="btn btn-ink">앱에서 핏 요청하기</SmartLink>
          </div>
        </div>
      </section>
  );
}
