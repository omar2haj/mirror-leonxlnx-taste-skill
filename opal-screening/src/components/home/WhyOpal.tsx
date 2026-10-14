import { Reveal } from "../Reveal";

const points = [
  { t: "Nationwide access", d: "Testing coordinated through collection sites across the country, close to where your people work and drive." },
  { t: "Responsive human support", d: "Real specialists who answer questions, chase down open tests and help when something goes sideways." },
  { t: "Streamlined testing", d: "Fewer handoffs from order to result, so tests get done and you hear back sooner." },
  { t: "Employer-focused compliance", d: "Programs built around your obligations, explained in plain language." },
  { t: "Secure records", d: "Sensitive results handled with care and kept organized for audits and reviews." },
  { t: "Simple administration", d: "One partner for testing, consortium management and screening, instead of five vendors." },
];

export function WhyOpal() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 md:py-32" aria-labelledby="why-heading">
      <div className="container-x">
        <h2 id="why-heading" className="font-display max-w-[22ch] text-[clamp(2rem,4vw,3.2rem)] font-[720] leading-[1.03] tracking-[-0.025em] text-ink-950">
          Built for the way employers actually work.
        </h2>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 80} className="relative border-t border-slate-300 pt-6">
              <span className="absolute -top-px left-0 h-px w-14 bg-[image:var(--opal-gradient)]" aria-hidden />
              <FacetGlyph index={i} />
              <h3 className="mt-5 text-[1.12rem] font-semibold text-ink-950">{p.t}</h3>
              <p className="mt-2 max-w-[38ch] text-[0.97rem] leading-relaxed text-slate-650">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Small glyphs cut from the shield geometry, one per point. */
function FacetGlyph({ index }: { index: number }) {
  const paths = [
    "M12 2 21 7v7c0 4-4 7-9 9-5-2-9-5-9-9V7Z", // full shield
    "M12 2 21 7v7c0 4-4 7-9 9", // half shield
    "M3 7 12 2l9 5M12 8l4 4-4 6-4-6Z", // crown + gem
    "M12 2 21 7v7c0 4-4 7-9 9-5-2-9-5-9-9V7ZM12 9l3 4-3 4-3-4Z",
    "M6 4h12v8c0 3-3 6-6 7-3-1-6-4-6-7Z",
    "M12 3l4 9-4 9-4-9Z",
  ];
  return (
    <svg viewBox="0 0 24 24" className="size-7 text-ink-800" aria-hidden>
      <path d={paths[index % paths.length]} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
