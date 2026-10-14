import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ShieldMark } from "@/components/ShieldMark";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Opal Screening",
  description: "Opal Screening is a drug and alcohol testing, C/TPA and employer screening company built to make compliance simple for carriers and employers nationwide.",
  alternates: { canonical: "/about" },
};

const principles = [
  { t: "Clarity over jargon", d: "Regulations are complicated. Our explanations should not be. Every answer we give is one you can act on." },
  { t: "People who pick up", d: "Compliance problems are time-sensitive. You should reach someone who knows your account and can help." },
  { t: "Accuracy, always", d: "We only say what we can stand behind, about the rules, our services and ourselves." },
  { t: "Built to scale with you", d: "From one truck to a national workforce, the program grows without becoming harder to run." },
];

export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }]}
        title="Screening, built on trust."
        lead="Opal Screening was founded to give employers a modern, dependable partner for drug and alcohol testing and compliance, starting with the motor carriers and owner-operators who keep the country moving."
      />
      <section className="bg-paper py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="prose-opal max-w-[62ch]">
            <h2 className="mt-0!">Why Opal</h2>
            <p>Most employers do not want to become experts in testing regulations. They want to hire, stay compliant and get back to work. Too often the tools available to them are fragmented, dated and hard to reach when something goes wrong.</p>
            <p>Opal brings testing, consortium management and screening together under one partner, with a clean experience and responsive people behind it. Our first focus is FMCSA-regulated carriers. From there, we are building out employer screening for staffing, healthcare, construction and beyond.</p>
            <p>The name comes from the opal: a stone that looks different from every angle but is one solid piece. That is how we think about compliance. Many requirements, one program.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="absolute inset-[15%] rounded-full bg-opal-500/25 blur-[70px]" aria-hidden />
            <ShieldMark className="relative w-full" title="Opal Screening shield" />
          </div>
        </div>
      </section>
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-[710] tracking-[-0.02em] text-ink-950">What we hold ourselves to</h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 80} className="border-t border-slate-300 pt-6">
                <h3 className="text-[1.15rem] font-semibold text-ink-950">{p.t}</h3>
                <p className="mt-2 max-w-[48ch] leading-relaxed text-slate-650">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-mist pb-4"><CtaBand /></div>
    </>
  );
}
