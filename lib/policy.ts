import { readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

/**
 * 정책 문서(content/policy/*.md)를 빌드 시점에 HTML로 바꾼다.
 * - 맨 위 frontmatter(--- ... ---)에서 이름 · 버전 · 시행일을 읽는다.
 * - "## 데모 반영 정보" 블록(앱 화면 연결용 내부 메모)은 공개 페이지에서 뺀다.
 * - "## 제목 {#id}" 는 id가 붙은 제목으로 바꿔 /policy/terms#refund 같은 바로가기가 동작하게 한다.
 */
export type PolicySlug = "terms" | "privacy";

export type Policy = { title: string; version: string; effectiveDate: string; html: string };

export function getPolicy(slug: PolicySlug): Policy {
  const raw = readFileSync(join(process.cwd(), "content", "policy", `${slug}.md`), "utf8").replace(/\r\n/g, "\n");

  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const meta: Record<string, string> = {};
  for (const line of fm?.[1].split("\n") ?? []) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) meta[m[1]] = m[2].replace(/^"(.*)"$/, "$1").trim();
  }

  let body = fm ? raw.slice(fm[0].length) : raw;
  body = body.replace(/^# .+\n/m, ""); // 제목은 페이지 머리에서 따로 보여준다
  body = body.replace(/^## 데모 반영 정보\n[\s\S]*?\n---\n/m, "");
  body = body.replace(/^(#{2,6}) (.+?) \{#([\w-]+)\}$/gm, (_, h: string, text: string, id: string) => `<h${h.length} id="${id}">${text}</h${h.length}>`);

  return {
    title: meta.name ?? "",
    version: meta.version ?? "",
    effectiveDate: meta.effective_date ?? "",
    html: marked.parse(body, { async: false, gfm: true }),
  };
}
