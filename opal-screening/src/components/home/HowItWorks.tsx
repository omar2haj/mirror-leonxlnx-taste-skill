import { Reveal } from "../Reveal";

const steps = [
  { t: "Create your account", d: "Tell us about your company and the employees or drivers you need to screen." },
  { t: "Order or manage testing", d: "Schedule tests and keep track of the screening each person needs." },
  { t: "Visit a collection location", d: "Each employee or driver receives clear instructions and a site near them." },
  { t: "Track everything", d: "Results, records and compliance tasks stay organized in one place." },
];

export function HowItWorks() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="how-heading">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)] lg:self-start">
          <h2 id="how-heading" className="font-display text-[clamp(2rem,4vw,3.2rem)] font-[720] leading-[1.03] tracking-[-0.025em] text-ink-950">
            Four steps.
            <span className="block text-slate-550">No guesswork.</span>
          </h2>
          <p className="mt-6 max-w-[42ch] text-[1.04rem] leading-relaxed text-slate-650">
            Whether you are testing one driver or a whole workforce, the process stays the same and every step is visible.
          </p>
        </div>
        <ol className="relative">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 70} className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-slate-200 py-8 first:border-t-0 first:pt-0 sm:gap-x-10 md:py-10">
              <span
                className="font-wide w-[2.6rem] text-[clamp(2.6rem,5vw,4.2rem)] sm:w-[4.4rem] font-[800] leading-none text-transparent [-webkit-text-stroke:1.2px_var(--color-slate-300)] transition-[-webkit-text-stroke-color] duration-500 group-hover:[-webkit-text-stroke-color:var(--color-opal-600)]"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-[1.3rem] font-[650] tracking-[-0.01em] text-ink-950 md:text-[1.45rem]">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.t}
                </h3>
                <p className="mt-2 max-w-[50ch] text-[1rem] leading-relaxed text-slate-650">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
