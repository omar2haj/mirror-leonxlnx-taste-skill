import Link from "next/link";
import { PageHero } from "./PageHero";
import { Button, Arrow } from "./Button";
import { FaqList } from "./FaqList";
import { StatusBadge } from "./StatusBadge";
import { CtaBand } from "./home/CtaBand";
import { Reveal } from "./Reveal";
import { JsonLd } from "./JsonLd";
import { getService } from "@/data/services";
import { topics, topicHref, type Topic } from "@/data/topics";
import { site } from "@/data/site";

const sectionMeta = {
  "dot-fmcsa": { label: "DOT & FMCSA", href: "/dot-fmcsa" },
  employers: { label: "Employer Screening", href: "/employers" },
};

const extraLabels: Record<string, string> = {
  "/pricing": "Pricing",
  "/get-started": "Get Started",
  "/resources/fmcsa-compliance-guide": "FMCSA Compliance Guide",
  "/resources/employer-faq": "Employer FAQ",
};

function relatedLabel(href: string) {
  const t = topics.find((x) => topicHref(x) === href);
  return t ? { label: t.navLabel, blurb: t.navBlurb } : { label: extraLabels[href] ?? href, blurb: "" };
}

export function TopicPage({ topic }: { topic: Topic }) {
  const service = topic.service ? getService(topic.service) : undefined;
  const soon = service?.status === "coming-soon";
  const section = sectionMeta[topic.section];
  const startHref = `/get-started?interest=${encodeURIComponent(topic.slug)}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: topic.title,
          description: topic.description,
          serviceType: topic.navLabel,
          areaServed: { "@type": "Country", name: "United States" },
          provider: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
      <PageHero
        crumbs={[section, { label: topic.navLabel, href: topicHref(topic) }]}
        title={topic.title}
        lead={topic.lead}
        badge={soon ? <StatusBadge status="coming-soon" dark /> : undefined}
      >
        <Button href={startHref} variant="light" arrow className="h-12 px-6">
          {soon ? "Join the waitlist" : "Get Started"}
        </Button>
        <Button href="/contact" variant="ghost-dark" className="h-12 px-6">
          Talk to a Screening Specialist
        </Button>
      </PageHero>

      {/* Highlights */}
      <section className="bg-paper">
        <div className="container-x">
          <ul className={`grid divide-y divide-slate-200 border-b border-slate-200 sm:divide-y-0 ${topic.highlights.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"} sm:divide-x`}>
            {topic.highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 70} className="py-8 sm:px-6 sm:py-10 first:sm:pl-0">
                <span className="font-mono text-[0.72rem] text-opal-700">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-[1.06rem] font-semibold text-ink-950">{h.title}</h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-650">{h.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Steps */}
      {topic.steps && (
        <section className="bg-paper pt-16 md:pt-20">
          <div className="container-x">
            <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-[700] tracking-[-0.02em] text-ink-950">How it works</h2>
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {topic.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 70} className="facet relative bg-mist p-6 ring-1 ring-inset ring-slate-200">
                  <span className="font-wide text-[2rem] font-[800] leading-none text-transparent [-webkit-text-stroke:1px_var(--color-opal-600)]">{i + 1}</span>
                  <h3 className="mt-5 text-[1.02rem] font-semibold text-ink-950">{s.title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-slate-650">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Body + aside */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
          <div className="prose-opal max-w-[68ch]">
            {topic.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <aside className="lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:self-start">
            <div className="facet surface-dark relative overflow-hidden p-7">
              <div className="facet-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
              <p className="relative font-display text-[1.25rem] font-[680] leading-tight text-paper">
                {soon ? `Be first to know when ${topic.navLabel.toLowerCase()} launches.` : `Ready to set up ${topic.navLabel.toLowerCase()}?`}
              </p>
              <p className="relative mt-3 text-[0.92rem] leading-relaxed text-slate-300">
                {soon ? "Join the waitlist and we'll reach out as soon as it's live." : "Tell us about your company and a specialist will follow up with next steps."}
              </p>
              <div className="relative mt-6 flex flex-col gap-2.5">
                <Button href={startHref} variant="light" arrow>
                  {soon ? "Join the waitlist" : "Get Started"}
                </Button>
                <Button href="/pricing" variant="ghost-dark">
                  See pricing structure
                </Button>
              </div>
            </div>
            <nav aria-label="Related" className="mt-8">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-slate-550">Related</p>
              <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
                {topic.related.map((href) => {
                  const r = relatedLabel(href);
                  return (
                    <li key={href}>
                      <Link href={href} className="group/btn flex items-center justify-between gap-4 py-3.5 text-[0.95rem] font-medium text-ink-900 hover:text-blue-650">
                        {r.label}
                        <Arrow />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      {topic.faqs.length > 0 && (
        <section className="bg-mist py-16 md:py-24">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-[700] leading-[1.08] tracking-[-0.02em] text-ink-950">
              Common questions
            </h2>
            <FaqList items={topic.faqs} />
          </div>
        </section>
      )}

      <div className="bg-mist pb-4">
        <CtaBand />
      </div>
    </>
  );
}
