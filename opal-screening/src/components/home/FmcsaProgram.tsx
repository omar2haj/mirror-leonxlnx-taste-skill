import { Button } from "../Button";
import { Reveal } from "../Reveal";
import type { Plan } from "@/data/pricing";

const steps = [
  { t: "Enroll", d: "Set up your company and DOT program." },
  { t: "Add Drivers", d: "Build your roster of covered drivers." },
  { t: "Random Pool", d: "Drivers join a managed selection pool." },
  { t: "Testing", d: "Selected drivers visit a collection site." },
  { t: "Results", d: "MRO-verified results reach your DER." },
  { t: "Stay Compliant", d: "Records and queries kept current." },
];

const programLinks: Record<string, string> = {
  "owner-operator": "/dot-fmcsa/owner-operators",
  "small-fleet": "/dot-fmcsa/fleets",
  "growing-fleet": "/dot-fmcsa/fleets",
};

export function FmcsaProgram({ plans }: { plans: Plan[] }) {
  return (
    <section className="surface-dark relative isolate overflow-hidden py-24 md:py-32" aria-labelledby="fmcsa-heading">
      <div className="facet-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_20%_10%,#000,transparent_70%)]" aria-hidden />
      <ShieldFragment />
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-opal-400">FMCSA Division</p>
          <h2 id="fmcsa-heading" className="font-display mt-4 text-[clamp(2rem,4.4vw,3.5rem)] font-[720] leading-[1.02] tracking-[-0.025em] text-paper">
            Everything your DOT drug &amp; alcohol program needs.
          </h2>
          <p className="mt-6 max-w-[60ch] text-[1.06rem] leading-relaxed text-slate-300">
            Opal can serve as your Consortium/Third-Party Administrator, running the random pool, coordinating every test and keeping the records an auditor will ask for. You stay in control; we carry the administration.
          </p>
        </div>

        {/* Process rail */}
        <ol className="relative mt-16 grid gap-0 md:mt-20 md:grid-cols-6">
          <div className="absolute left-[11px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-opal-400/70 via-opal-600/40 to-transparent md:left-0 md:top-[11px] md:h-px md:w-full md:bg-gradient-to-r" aria-hidden />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 90} className="relative pb-8 pl-10 md:pb-0 md:pl-0 md:pr-5">
              <span className="absolute left-0 top-0 grid size-[23px] place-items-center md:relative md:mb-6" aria-hidden>
                <span className="absolute size-[23px] rotate-45 rounded-[3px] border border-opal-400/50 bg-ink-950" />
                <span className="relative size-2 rotate-45 bg-opal-400 shadow-[0_0_12px_oklch(0.8_0.13_210)]" />
              </span>
              <span className="font-mono text-[0.72rem] text-slate-550">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-[1.02rem] font-semibold text-paper">{s.t}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-slate-400">{s.d}</p>
            </Reveal>
          ))}
        </ol>

        {/* Programs */}
        <div className="mt-20 grid gap-3 md:mt-24 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article
                className={`facet facet-lg relative flex h-full flex-col p-7 sm:p-8 ${
                  p.featured
                    ? "bg-[linear-gradient(155deg,oklch(0.3_0.07_250),oklch(0.21_0.05_262))] ring-1 ring-inset ring-opal-500/40"
                    : "bg-[oklch(1_0_0/0.035)] ring-1 ring-inset ring-[oklch(1_0_0/0.09)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[0.82rem] font-medium text-slate-400">{p.drivers}</p>
                  {p.featured && <span className="rounded-full bg-opal-400/15 px-2.5 py-1 text-[0.7rem] font-semibold text-opal-300">Most common</span>}
                </div>
                <h3 className="font-display mt-4 text-[1.55rem] font-[680] tracking-[-0.015em] text-paper">{p.name}</h3>
                <p className="mt-1 text-[0.92rem] text-slate-400">{p.audience}</p>
                <ul className="mt-7 space-y-3 border-t border-[oklch(1_0_0/0.09)] pt-6">
                  {p.includes.map((x) => (
                    <li key={x} className="flex gap-3 text-[0.92rem] text-slate-200">
                      <svg viewBox="0 0 16 16" className="mt-1 size-3.5 shrink-0 text-opal-400" aria-hidden>
                        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <Button href={p.cta.href} variant={p.featured ? "light" : "ghost-dark"} arrow>
                    Get Started
                  </Button>
                  <Button href={programLinks[p.id] ?? "/dot-fmcsa"} variant="text" className="text-slate-300! hover:text-paper!">
                    View Program
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShieldFragment() {
  return (
    <svg viewBox="0 0 200 240" className="pointer-events-none absolute -right-40 -top-24 -z-10 hidden w-[620px] opacity-[0.07] md:block" aria-hidden>
      <path d="M100 6 182 50v82c0 48-36 82-82 102-46-20-82-54-82-102V50Z" fill="none" stroke="oklch(0.88 0.1 205)" strokeWidth="0.6" />
      <path d="M100 36 156 66v62c0 34-25 58-56 72-31-14-56-38-56-72V66Z" fill="none" stroke="oklch(0.88 0.1 205)" strokeWidth="0.6" />
      <path d="M128 0 58 60c-9 18-13 40-13 64s4 44 12 58l33 22" fill="none" stroke="oklch(0.88 0.1 205)" strokeWidth="0.6" />
    </svg>
  );
}
