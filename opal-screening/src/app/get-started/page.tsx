import type { Metadata } from "next";
import { Suspense } from "react";
import { GetStartedForm } from "@/components/forms/GetStartedForm";
import { ShieldMark } from "@/components/ShieldMark";
import { visibleServices } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Set up DOT drug testing, random consortium membership or a workplace screening program with Opal Screening.",
  alternates: { canonical: "/get-started" },
};

export default function GetStarted() {
  const services = visibleServices.map(({ key, name, status }) => ({ key, name, status }));
  return (
    <section className="relative min-h-svh bg-mist pt-[var(--header-h)]">
      <div className="surface-dark absolute inset-x-0 top-0 h-[360px]" aria-hidden>
        <div className="facet-grid absolute inset-0" />
      </div>
      <div className="container-x relative grid gap-10 pb-20 pt-10 md:pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="text-paper lg:pt-6">
          <h1 className="font-display text-[clamp(2.2rem,4.6vw,3.5rem)] font-[730] leading-[1.02] tracking-[-0.028em]">Let&apos;s set up your program.</h1>
          <p className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-slate-300">Answer a few quick questions. A screening specialist will follow up with the right plan for your operation.</p>
          <div className="mt-10 hidden lg:block">
            <ShieldMark tone="opal" className="w-40 opacity-90" />
          </div>
          <ul className="mt-10 hidden space-y-3 text-[0.94rem] text-ink-800 lg:mt-12 lg:block">
            {["No commitment to submit", "Takes about two minutes", site.contact.email ? `Prefer email? ${site.contact.email}` : null].filter(Boolean).map((t) => (
              <li key={t} className="flex items-center gap-3"><span className="size-1.5 rotate-45 bg-opal-600" aria-hidden />{t}</li>
            ))}
          </ul>
        </div>
        <div className="facet facet-lg bg-paper p-6 ring-1 ring-inset ring-slate-200 sm:p-10">
          <Suspense fallback={<div className="h-[420px]" />}>
            <GetStartedForm services={services} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
