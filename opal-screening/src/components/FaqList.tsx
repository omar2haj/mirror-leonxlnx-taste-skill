import { JsonLd } from "./JsonLd";
import type { Faq } from "@/data/faqs";

export function FaqList({ items, schema = true }: { items: Faq[]; schema?: boolean }) {
  return (
    <>
      {schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }}
        />
      )}
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {items.map((f) => (
          <details key={f.q} className="group/faq">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-[1.04rem] font-semibold text-ink-950 transition-colors hover:text-blue-650 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="relative mt-1.5 size-3 shrink-0" aria-hidden>
                <span className="absolute left-0 top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-current" />
                <span className="absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 group-open/faq:rotate-90 group-open/faq:opacity-0" />
              </span>
            </summary>
            <p className="max-w-[68ch] pb-6 pr-8 text-[0.98rem] leading-relaxed text-slate-650">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
