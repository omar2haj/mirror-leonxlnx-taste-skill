import { FaqList } from "./FaqList";
import { JsonLd } from "./JsonLd";
import type { Faq } from "@/data/faqs";

export function FaqGroups({ groups }: { groups: { group: string; items: Faq[] }[] }) {
  const all = groups.flatMap((g) => g.items);
  return (
    <section className="bg-mist py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: all.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <div className="container-x space-y-16">
        {groups.map((g) => (
          <div key={g.group} className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-[700] tracking-[-0.02em] text-ink-950">{g.group}</h2>
            <FaqList items={g.items} schema={false} />
          </div>
        ))}
      </div>
    </section>
  );
}
