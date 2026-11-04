import StoreButtons from "./StoreButtons";
import QrBlock from "./QrBlock";

export default function Download() {
  return (
      <section className="sec" id="download" aria-labelledby="dl-title">
        <div className="wrap grid dl-grid">
          <div className="dl-copy">
            <p className="eyebrow">Download FITY</p>
            <h2 className="h2" id="dl-title">나에게 맞는 전문가,<br />지금 FITY에서 찾아보세요.</h2>
            <p className="body">카카오 · 네이버 · 구글 계정으로 바로 가입하고, 첫 고민부터 올려 보세요.</p>
            <StoreButtons loc="download" />
            <QrBlock />
          </div>
          <div className="dl-pics">
            <div className="slot" data-slot="download-1"><img src="/img/v7/download-1.jpg" alt="휴대폰으로 FITY 앱을 보는 장면" loading="lazy" width="600" height="860" style={{ objectPosition: "50% 30%" }} /></div>
            <div className="slot" data-slot="download-2"><img src="/img/v7/download-2.jpg" alt="컨설팅 결과대로 스타일링하고 외출하는 장면" loading="lazy" width="600" height="860" style={{ objectPosition: "50% 30%" }} /></div>
          </div>
        </div>
      </section>
  );
}
