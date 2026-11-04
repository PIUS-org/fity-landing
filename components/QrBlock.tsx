"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { QR_TARGET } from "@/lib/links";

/** PC 방문자용 앱 다운로드 QR. 주소가 정해지지 않았으면 블록 전체를 숨긴다. 모바일에서는 CSS로 숨김. */
export default function QrBlock() {
  const [src, setSrc] = useState("");
  useEffect(() => {
    if (!QR_TARGET) return;
    QRCode.toDataURL(QR_TARGET, { width: 176, margin: 0, color: { dark: "#1F1F23", light: "#FFFFFF" }, errorCorrectionLevel: "M" })
      .then(setSrc)
      .catch(() => setSrc(""));
  }, []);
  if (!QR_TARGET) return null;
  return (
    <div className="qr">
      <div className="qr-code">{src && <img src={src} alt="FITY 앱 다운로드 QR 코드" width={78} height={78} />}</div>
      <p><b>휴대폰으로 바로 받기</b>카메라로 스캔하면 앱 설치 화면으로 이동해요.</p>
    </div>
  );
}
