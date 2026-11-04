import { LINKS } from "@/lib/links";
import SmartLink from "./SmartLink";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-top">
          <img src="/img/logo/logo-wordmark-ink.svg" alt="fity" width={50} height={34} loading="lazy" />
          <nav className="ftr-links" aria-label="정책 및 고객 문의">
            <SmartLink kind="terms">서비스 이용약관</SmartLink>
            <SmartLink kind="privacy" className="strong">개인정보 처리방침</SmartLink>
            <SmartLink kind="cs">고객 문의</SmartLink>
            <SmartLink kind="expert" loc="footer">전문가 로그인</SmartLink>
          </nav>
        </div>
        <address className="biz">
          <div>
            <span>피우스(PIUS)</span><span className="sep">|</span><span>대표자 최시온</span><span className="sep">|</span>
            <span>사업자등록번호 690-04-02624 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6900402624" target="_blank" rel="noopener">사업자정보확인</a></span>
          </div>
          <div>
            <span>통신판매업 신고번호 2023-용인기흥-0765</span><span className="sep">|</span>
            <span>주소 경기도 용인시 기흥구 강남서로 9, 7층 703호 b520(구갈동, 아카데미프라자)</span>
          </div>
          <div>
            <span>고객센터 FITY 카카오톡 채널 (평일 10:00~18:00)</span>
            {LINKS.csEmail && (<><span className="sep">|</span><span>이메일 {LINKS.csEmail}</span></>)}
          </div>
          <div style={{ marginTop: "8px" }}>
            FITY는 통신판매중개자로서 거래 당사자가 아니며, 전문가가 등록한 상품 정보와 거래에 대한 책임은 각 전문가에게 있습니다.
          </div>
        </address>
        <div className="ftr-legal"><span>© 2026 PIUS. All rights reserved.</span><span className="eyebrow">Find your fit</span></div>
      </div>
    </footer>
  );
}
