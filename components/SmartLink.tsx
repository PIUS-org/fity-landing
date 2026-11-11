"use client";
import type { MouseEvent, ReactNode } from "react";
import { LINK_META, type LinkKind } from "@/lib/links";
import { track } from "@/lib/analytics";
import { useOs } from "@/lib/useOs";
import { showToast } from "./Toast";

type Props = { kind: LinkKind; loc?: string; className?: string; children: ReactNode };

/**
 * 외부 링크 · 스토어 이동 · 클릭 이벤트를 한곳에서 처리한다.
 * kind="smart" : iPhone은 App Store, Android는 Google Play, 그 밖(PC)은 페이지 안 다운로드 섹션으로.
 */
export default function SmartLink({ kind, loc, className, children }: Props) {
  const os = useOs();
  const resolved: Exclude<LinkKind, "smart"> | null = kind === "smart" ? (os === "other" ? null : os) : kind;
  const meta = resolved ? LINK_META[resolved] : null;
  const href = meta ? meta.url || "#" : "#download";
  const external = /^https?:\/\//.test(meta?.url ?? "");

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (meta?.event) track(meta.event, loc, os);
    if (meta && !meta.url) {
      e.preventDefault();
      showToast(meta.pending);
    }
  };

  return (
    <a className={className} href={href} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {children}
    </a>
  );
}
