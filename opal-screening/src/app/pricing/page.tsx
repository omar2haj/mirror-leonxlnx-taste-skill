import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { FaqList } from "@/components/FaqList";
import { StatusBadge } from "@/components/StatusBadge";
import { CtaBand } from "@/components/home/CtaBand";
import { membershipPlans, alaCarte, formatPrice } from "@/data/pricing";
import { getService, isServiceVisible } from "@/data/services";

export const metadata: Metadata = {
  title: "Pricing | C/TPA Consortium Membership & DOT Testing",
  description:
    "How Opal Screening pricing works: an annual C/TPA and random consortium membership, plus DOT drug tests, alcohol tests, Clearinghouse services and screening ordered as needed.",
  alternates: { canonical: "/pricing" },
};

const faqs = [
  { q: "Why isn't pricing listed yet?", a: "We are finalizing our launch pricing. Contact us and a specialist will share current rates for your operation." },
  { q: "What is included in a membership?", a: "Membership covers C/TPA program administration and random consortium enrollment. Individual tests and services are ordered separately as you need them." },
  { q: "Are FMCSA Clearinghouse query fees included?", a: "Query plans are purchased from FMCSA directly. Opal's Clearinghouse services cover setup, designation and administration support." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Pricing", href: "/pricing" }]}
        title="Simple structure. No surprises."
        lead="An annual C/TPA and consortium membership keeps your program running. Tests and services are ordered individually, only when you need them."
      />

      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-[700] tracking-[-0.02em] text-ink-950">C/TPA &amp; consortium membership</h2>
          <div className="mt-10 grid gap-3 lg:grid-cols-3">
            {membershipPlans.map((p) => {
              const price = formatPrice(p.price, p.period);
              return (
                <article
                  key={p.id}
                  className={`facet facet-lg flex flex-col p-7 sm:p-8 ${p.featured ? "surface-dark" : "bg-paper ring-1 ring-inset ring-slate-200"}`}
                >
                  <div className="flex items-center justify-between">
                    <p className={`text-[0.84rem] font-medium ${p.featured ? "text-slate-400" : "text-slate-550"}`}>{p.drivers}</p>
                    {p.featured && <span className="rounded-full bg-opal-400/15 px-2.5 py-1 text-[0.7rem] font-semibold text-opal-300">Most common</span>}
                  </div>
                  <h3 className={`font-display mt-3 text-[1.6rem] font-[690] tracking-[-0.015em] ${p.featured ? "text-paper" : "text-ink-950"}`}>{p.name}</h3>
                  <p className={`mt-1 text-[0.94rem] ${p.featured ? "text-slate-400" : "text-slate-650"}`}>{p.audience}</p>
                  <div className={`mt-6 border-y py-5 ${p.featured ? "border-[oklch(1_0_0/0.1)]" : "border-slate-200"}`}>
                    {price ? (
                      <p className={`font-display text-[2.2rem] font-[720] ${p.featured ? "text-paper" : "text-ink-950"}`}>{price}</p>
                    ) : (
                      <p className={`text-[1.02rem] font-semibold ${p.featured ? "text-opal-300" : "text-ink-900"}`}>Contact us for pricing</p>
                    )}
                  </div>
                  <ul className="mt-6 space-y-3">
                    {p.includes.map((x) => (
                      <li key={x} className={`flex gap-3 text-[0.94rem] ${p.featured ? "text-slate-200" : "text-ink-800"}`}>
                        <svg viewBox="0 0 16 16" className={`mt-1 size-3.5 shrink-0 ${p.featured ? "text-opal-400" : "text-opal-600"}`} aria-hidden>
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <Button href={p.cta.href} variant={p.featured ? "light" : "primary"} arrow>{p.cta.label}</Button>
                    <Button href="/contact" variant={p.featured ? "ghost-dark" : "secondary"}>Contact Us</Button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-24 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-[700] leading-[1.08] tracking-[-0.02em] text-ink-950">Ordered as you need them</h2>
              <p className="mt-4 max-w-[40ch] text-[1rem] leading-relaxed text-slate-650">Add tests and services to any membership, or order them on their own.</p>
            </div>
            <div className="facet overflow-hidden bg-paper ring-1 ring-inset ring-slate-200">
              <table className="w-full text-left">
                <caption className="sr-only">Individually ordered services</caption>
                <thead>
                  <tr className="border-b border-slate-200 text-[0.75rem] uppercase tracking-[0.12em] text-slate-550">
                    <th scope="col" className="px-5 py-4 font-semibold sm:px-7">Service</th>
                    <th scope="col" className="px-5 py-4 text-right font-semibold sm:px-7">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150">
                  {alaCarte.filter((i) => isServiceVisible(i.service)).map((item) => {
                    const price = formatPrice(item.price);
                    const status = getService(item.service)?.status;
                    return (
                      <tr key={item.id}>
                        <td className="px-5 py-5 sm:px-7">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="font-semibold text-ink-950">{item.name}</span>
                            {status && <StatusBadge status={status} />}
                          </div>
                          <p className="mt-0.5 text-[0.88rem] text-slate-650">{item.detail}</p>
                        </td>
                        <td className="whitespace-nowrap px-5 py-5 text-right sm:px-7">
                          {price ? (
                            <span className="font-semibold text-ink-950">{price}<span className="ml-1 text-[0.8rem] font-normal text-slate-550">{item.unit}</span></span>
                          ) : (
                            <a href="/contact" className="text-[0.9rem] font-semibold text-blue-650 hover:underline">Contact us</a>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-24 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-[700] leading-[1.08] tracking-[-0.02em] text-ink-950">Pricing questions</h2>
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
      <div className="bg-mist pb-4"><CtaBand /></div>
    </>
  );
}
