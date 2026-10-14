import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Audiences } from "@/components/home/Audiences";
import { ServicesBento } from "@/components/home/ServicesBento";
import { FmcsaProgram } from "@/components/home/FmcsaProgram";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyOpal } from "@/components/home/WhyOpal";
import { PortalPreview } from "@/components/home/PortalPreview";
import { CtaBand } from "@/components/home/CtaBand";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { audiences } from "@/data/audiences";
import { visibleServices } from "@/data/services";
import { membershipPlans } from "@/data/pricing";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "Opal Screening | DOT Drug Testing, C/TPA & Workplace Screening" },
  description:
    "DOT drug and alcohol testing, FMCSA random consortium and C/TPA services, Clearinghouse support and workplace drug screening for employers nationwide.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: `${site.url}/icon.svg`,
          description: site.description,
          areaServed: "US",
          ...(site.contact.email ? { email: site.contact.email } : {}),
        }}
      />
      <Hero />

      <section className="bg-mist pb-20 pt-24 md:pb-24 md:pt-28" aria-labelledby="who-heading">
        <div className="container-x">
          <h2 id="who-heading" className="font-display max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)] font-[720] leading-[1.03] tracking-[-0.025em] text-ink-950">
            Who we help
          </h2>
          <p className="mt-4 max-w-[52ch] text-[1.04rem] leading-relaxed text-slate-650">Pick your path. Each one is built around what your operation is required to do.</p>
          <div className="mt-12">
            <Audiences audiences={audiences} />
          </div>
        </div>
      </section>

      <section className="bg-mist pb-24 md:pb-32" aria-labelledby="services-heading">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 border-t border-slate-200 pt-16 md:flex-row md:items-end md:pt-20">
            <h2 id="services-heading" className="font-display max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)] font-[720] leading-[1.03] tracking-[-0.025em] text-ink-950">
              One partner for every screening need.
            </h2>
            <Button href="/services" variant="secondary" arrow>
              All services
            </Button>
          </div>
          <div className="mt-12">
            <ServicesBento services={visibleServices} />
          </div>
        </div>
      </section>

      <FmcsaProgram plans={membershipPlans} />
      <HowItWorks />
      <WhyOpal />

      <section className="overflow-hidden bg-paper py-24 md:py-32" aria-labelledby="portal-heading">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="min-w-0">
            <h2 id="portal-heading" className="font-display text-[clamp(2rem,3.6vw,2.9rem)] font-[720] leading-[1.03] tracking-[-0.025em] text-ink-950">
              Your whole program, one screen.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[1.04rem] leading-relaxed text-slate-650">
              The Opal portal is in development. It will bring rosters, random selections, orders, results and documents into a single view built for busy employers.
            </p>
            <p className="mt-6 text-[0.86rem] text-slate-550">Preview shown with sample data.</p>
          </div>
          <PortalPreview />
        </div>
      </section>

      <div className="bg-mist pt-6 md:pt-10">
        <CtaBand />
      </div>
    </>
  );
}
