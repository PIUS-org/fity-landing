import { FAQ } from "@/lib/faq";

export default function Faq() {
  return (
    <section className="sec is-gray" id="faq" aria-labelledby="faq-title">
      <div className="wrap grid faq-wrap">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="h2" id="faq-title">자주 묻는 질문</h2>
        </div>
        <div className="faq">
          {FAQ.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
