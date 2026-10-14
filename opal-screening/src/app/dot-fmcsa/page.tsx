import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { TopicGrid } from "@/components/TopicGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { topicsIn } from "@/data/topics";
import { isServiceVisible } from "@/data/services";

export const metadata: Metadata = {
  title: "DOT & FMCSA Compliance | C/TPA, Random Consortium & DOT Testing",
  description:
    "FMCSA drug testing consortium membership, C/TPA administration, DOT drug and alcohol testing and Clearinghouse support for owner-operators and motor carriers.",
  alternates: { canonical: "/dot-fmcsa" },
};

const programs = ["ctpa-services", "random-consortium", "fmcsa-clearinghouse", "owner-operators", "fleets"];

export default function DotHub() {
  const all = topicsIn("dot-fmcsa").filter((t) => isServiceVisible(t.service));
  return (
    <>
      <PageHero
        crumbs={[{ label: "DOT & FMCSA", href: "/dot-fmcsa" }]}
        title="DOT & FMCSA compliance, managed."
        lead="From joining a random consortium to handling a post-accident test, Opal gives owner-operators and motor carriers one partner for every part of their drug and alcohol program."
      >
        <Button href="/get-started?audience=owner-operator" variant="light" arrow className="h-12 px-6">Get Started</Button>
        <Button href="/pricing" variant="ghost-dark" className="h-12 px-6">View pricing structure</Button>
      </PageHero>
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-[700] tracking-[-0.02em] text-ink-950">Programs</h2>
          <div className="mt-8"><TopicGrid items={all.filter((t) => programs.includes(t.slug))} /></div>
          <h2 className="font-display mt-20 text-[clamp(1.7rem,3vw,2.4rem)] font-[700] tracking-[-0.02em] text-ink-950">DOT testing</h2>
          <div className="mt-8"><TopicGrid items={all.filter((t) => !programs.includes(t.slug))} /></div>
        </div>
      </section>
      <div className="bg-mist pb-4"><CtaBand /></div>
    </>
  );
}
