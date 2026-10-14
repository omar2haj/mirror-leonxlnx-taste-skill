import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Button, Arrow } from "@/components/Button";
import { ServiceIcon } from "@/components/Icon";
import { StatusBadge } from "@/components/StatusBadge";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { visibleServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Screening Services | DOT Testing, C/TPA, Clearinghouse & More",
  description:
    "Every Opal Screening service in one place: DOT drug and alcohol testing, C/TPA and random consortium, FMCSA Clearinghouse, non-DOT testing, occupational health, background screening and driver compliance.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }]}
        title="Every screening service, one partner."
        lead="Testing, program administration and compliance support that work together, so you are not stitching vendors together on your own."
      >
        <Button href="/get-started" variant="light" arrow className="h-12 px-6">Get Started</Button>
        <Button href="/pricing" variant="ghost-dark" className="h-12 px-6">Pricing structure</Button>
      </PageHero>
      <section className="bg-paper py-12 md:py-20">
        <div className="container-x">
          <ul className="divide-y divide-slate-200">
            {visibleServices.map((s, i) => (
              <Reveal as="li" key={s.key} delay={40}>
                <div className="grid gap-6 py-10 md:grid-cols-[64px_1fr_1fr_auto] md:items-start md:gap-10">
                  <span className="facet facet-sm grid size-14 place-items-center bg-mist ring-1 ring-inset ring-slate-200">
                    <ServiceIcon name={s.icon} className="size-7 text-ink-800" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-[1.4rem] font-[680] tracking-[-0.015em] text-ink-950">{s.name}</h2>
                      <StatusBadge status={s.status} />
                    </div>
                    <p className="mt-2 max-w-[48ch] text-[0.98rem] leading-relaxed text-slate-650">{s.summary}</p>
                  </div>
                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {s.includes.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-[0.92rem] text-ink-800">
                        <span className="mt-[0.5rem] size-1.5 shrink-0 rotate-45 bg-opal-600" aria-hidden />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="group/btn inline-flex items-center gap-2 whitespace-nowrap text-[0.9rem] font-semibold text-blue-650 md:pt-1">
                    {s.status === "coming-soon" ? "Details & waitlist" : "Learn more"} <Arrow />
                  </Link>
                </div>
                <span className="sr-only">{i + 1}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <div className="bg-mist pb-4 pt-10"><CtaBand /></div>
    </>
  );
}
