import { Button } from "../Button";
import { ShieldMark } from "../ShieldMark";

export function Hero() {
  return (
    <section className="surface-dark relative isolate overflow-hidden pt-[var(--header-h)]">
      <div className="facet-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute -right-[10%] top-[8%] -z-10 aspect-square w-[min(900px,110vw)] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.6 0.14 225 / 0.35), transparent 62%)" }}
        aria-hidden
      />
      <div className="container-x grid items-center gap-10 pb-16 pt-12 md:pb-24 md:pt-16 lg:min-h-[min(780px,calc(100svh-var(--header-h)))] lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pt-10">
        <div className="relative z-10 max-w-[720px]">
          <h1 className="font-display animate-rise text-[clamp(2.5rem,5.6vw,4.35rem)] font-[750] leading-[0.98] tracking-[-0.03em] text-paper">
            Workplace Screening.
            <span className="block text-opal-300">Done Right.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-[34rem] text-[clamp(1.04rem,1.4vw,1.2rem)] leading-relaxed text-slate-300 [animation-delay:120ms]">
            Nationwide drug and alcohol testing, DOT compliance, C/TPA administration and occupational-health services, managed from one trusted partner.
          </p>
          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:220ms]">
            <Button href="/get-started" variant="light" arrow className="h-12 px-6">
              Get Started
            </Button>
            <Button href="/contact" variant="ghost-dark" className="h-12 px-6">
              Talk to a Screening Specialist
            </Button>
          </div>
          <ul className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.84rem] text-slate-400 [animation-delay:320ms]">
            {["DOT & Non-DOT Testing", "Nationwide Collection Network", "Employer Compliance"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="size-1.5 rotate-45 bg-opal-500/80" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </div>
      <div className="lumen-line" />
    </section>
  );
}

function HeroVisual() {
  const chips = [
    { label: "Chain of custody", pos: "left-[2%] top-[22%] sm:left-[4%]", delay: "400ms" },
    { label: "MRO verified", pos: "right-[0%] top-[48%] sm:right-[2%]", delay: "550ms" },
    { label: "Clearinghouse ready", pos: "left-[8%] bottom-[12%] sm:left-[12%]", delay: "700ms" },
  ];
  return (
    <div className="relative mx-auto aspect-[1/1] w-full max-w-[520px] lg:max-w-none" aria-hidden>
      {/* concentric shield outlines: the brand device at scale */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="hero-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.88 0.1 205)" stopOpacity=".55" />
            <stop offset="1" stopColor="oklch(0.6 0.14 240)" stopOpacity=".05" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((i) => {
          const s = 1 + i * 0.28;
          return (
            <path
              key={i}
              d="M100 6 182 50v82c0 48-36 82-82 102-46-20-82-54-82-102V50Z"
              fill="none"
              stroke="url(#hero-stroke)"
              strokeWidth={1 / s}
              transform={`translate(200 ${200 - 2}) scale(${s * 1.12}) translate(-100 -120)`}
              opacity={1 - i * 0.28}
            />
          );
        })}
        <g stroke="oklch(0.8 0.13 210 / 0.25)" strokeWidth="1">
          <line x1="0" y1="200" x2="70" y2="200" />
          <line x1="330" y1="200" x2="400" y2="200" />
        </g>
      </svg>
      <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[12%] rounded-full bg-opal-500/30 blur-[60px]" />
        <ShieldMark tone="opal" className="animate-rise relative w-full drop-shadow-[0_30px_60px_oklch(0.15_0.035_262/0.8)] [animation-delay:150ms]" />
      </div>
      {chips.map((c) => (
        <div
          key={c.label}
          className={`animate-rise absolute ${c.pos} flex items-center gap-2 rounded-full border border-[oklch(1_0_0/0.12)] bg-[oklch(0.19_0.045_262/0.7)] px-3.5 py-2 text-[0.78rem] font-medium text-slate-200 shadow-[0_10px_30px_-10px_oklch(0.1_0.03_262/0.8)] backdrop-blur-md`}
          style={{ animationDelay: c.delay }}
        >
          <svg viewBox="0 0 16 16" className="size-3.5 text-opal-400">
            <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {c.label}
        </div>
      ))}
    </div>
  );
}
