import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact a Screening Specialist",
  description: "Talk to an Opal Screening specialist about DOT drug testing, C/TPA services, random consortium membership or workplace screening.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const c = site.contact;
  return (
    <>
      <PageHero crumbs={[{ label: "Contact", href: "/contact" }]} title="Talk to a screening specialist." lead="Questions about a program, a test or a compliance requirement? Send us a note and a real person will get back to you." />
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div className="facet facet-lg bg-paper p-6 ring-1 ring-inset ring-slate-200 sm:p-10">
            <ContactForm />
          </div>
          <aside className="space-y-8">
            {c.email && (
              <div className="border-t border-slate-300 pt-5">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-slate-550">Email</p>
                <a href={`mailto:${c.email}`} className="mt-2 block text-[1.1rem] font-semibold text-ink-950 hover:text-blue-650">{c.email}</a>
              </div>
            )}
            {c.phone && (
              <div className="border-t border-slate-300 pt-5">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-slate-550">Phone</p>
                <a href={`tel:${c.phone.replace(/[^\d+]/g, "")}`} className="mt-2 block text-[1.1rem] font-semibold text-ink-950">{c.phone}</a>
              </div>
            )}
            {c.hours && (
              <div className="border-t border-slate-300 pt-5">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-slate-550">Hours</p>
                <p className="mt-2 text-[1rem] text-ink-900">{c.hours}</p>
              </div>
            )}
            <div className="border-t border-slate-300 pt-5">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-slate-550">Post-accident?</p>
              <p className="mt-2 text-[0.96rem] leading-relaxed text-ink-800">Testing windows are short. Follow your company&apos;s post-accident procedure and contact your DER right away.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
