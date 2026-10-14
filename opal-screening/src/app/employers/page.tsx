import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { TopicGrid } from "@/components/TopicGrid";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/home/CtaBand";
import { topicsIn } from "@/data/topics";
import { isServiceVisible } from "@/data/services";
import { employerFaq } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Employer Drug Screening & Workplace Testing",
  description:
    "Workplace drug testing, alcohol testing, background screening and occupational health for employers, staffing agencies, healthcare and construction.",
  alternates: { canonical: "/employers" },
};

const industries = ["Staffing agencies", "Healthcare", "Construction", "Logistics & warehousing", "Manufacturing", "General employers"];

export default function EmployersHub() {
  const items = topicsIn("employers").filter((t) => isServiceVisible(t.service));
  return (
    <>
      <PageHero
        crumbs={[{ label: "Employer Screening", href: "/employers" }]}
        title="Employer screening, without the friction."
        lead="Workplace drug and alcohol testing designed around your policy, plus background screening and occupational health as we bring them online."
      >
        <Button href="/get-started?audience=employer" variant="light" arrow className="h-12 px-6">Get Started</Button>
        <Button href="/contact" variant="ghost-dark" className="h-12 px-6">Talk to a Screening Specialist</Button>
      </PageHero>
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <TopicGrid items={items} columns={2} />
          <div className="mt-20 grid gap-8 border-t border-slate-200 pt-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-[700] leading-[1.08] tracking-[-0.02em] text-ink-950">Built for every kind of workforce</h2>
            <ul className="flex flex-wrap gap-2.5">
              {industries.map((x) => (
                <li key={x} className="rounded-full bg-paper px-4 py-2 text-[0.92rem] font-medium text-ink-800 ring-1 ring-inset ring-slate-200">{x}</li>
              ))}
            </ul>
          </div>
          <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-[700] leading-[1.08] tracking-[-0.02em] text-ink-950">Employer questions</h2>
            <FaqList items={employerFaq[0].items} />
          </div>
        </div>
      </section>
      <div className="bg-mist pb-4"><CtaBand /></div>
    </>
  );
}
