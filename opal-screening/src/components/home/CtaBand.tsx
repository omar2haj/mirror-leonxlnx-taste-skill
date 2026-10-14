import { Button } from "../Button";
import { ShieldMark } from "../ShieldMark";

export function CtaBand({
  title = "Screening shouldn't slow your business down.",
  sub = "Let Opal manage the process.",
  secondary = { label: "Talk to Us", href: "/contact" },
}: {
  title?: string;
  sub?: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-mist px-[var(--gutter)] pb-6 pt-2 md:pb-10">
      <div className="facet facet-lg surface-dark relative isolate mx-auto max-w-[1320px] overflow-hidden">
        <div className="facet-grid pointer-events-none absolute inset-0 -z-10 opacity-80" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 right-[8%] -z-10 size-[520px] rounded-full bg-opal-600/25 blur-3xl" aria-hidden />
        <div className="grid items-center gap-10 px-6 py-16 sm:px-12 md:grid-cols-[1fr_auto] md:py-20 lg:px-20">
          <div>
            <h2 className="font-display max-w-[20ch] text-[clamp(1.9rem,4vw,3.25rem)] font-[720] leading-[1.04] tracking-[-0.025em] text-paper">{title}</h2>
            <p className="mt-4 text-[clamp(1.05rem,1.6vw,1.3rem)] text-opal-300">{sub}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-started" variant="light" arrow className="h-12 px-6">
                Get Started
              </Button>
              <Button href={secondary.href} variant="ghost-dark" className="h-12 px-6">
                {secondary.label}
              </Button>
            </div>
          </div>
          <ShieldMark tone="opal" className="hidden w-[180px] opacity-95 drop-shadow-[0_20px_50px_oklch(0.6_0.12_220/0.5)] md:block lg:w-[220px]" />
        </div>
      </div>
    </section>
  );
}
