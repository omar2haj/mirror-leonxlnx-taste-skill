import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { resourceLinks } from "@/data/nav";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Resources | FMCSA Compliance Guide, Drug Testing FAQ & Blog",
  description: "Plain-language guides and answers on DOT drug testing, FMCSA compliance, the Clearinghouse and workplace screening.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const [guide, ...rest] = resourceLinks;
  return (
    <>
      <PageHero crumbs={[{ label: "Resources", href: "/resources" }]} title="Know the rules. Skip the jargon." lead="Clear explanations of DOT and workplace screening requirements, written for the people who have to follow them." />
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x grid gap-3 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <Link href={guide.href} className="facet facet-lg surface-dark group/btn relative flex h-full min-h-[340px] flex-col overflow-hidden p-8 sm:p-10">
              <div className="facet-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
              <span className="relative text-[0.8rem] font-semibold text-opal-300">Guide</span>
              <h2 className="font-display relative mt-auto text-[clamp(1.8rem,3.4vw,2.6rem)] font-[720] leading-[1.05] tracking-[-0.02em] text-paper">{guide.label}</h2>
              <p className="relative mt-3 max-w-[44ch] text-slate-300">{guide.description}</p>
              <span className="relative mt-6 inline-flex items-center gap-2 font-semibold text-opal-300">Read the guide <Arrow /></span>
            </Link>
          </Reveal>
          <ul className="grid gap-3">
            {rest.map((r, i) => (
              <Reveal as="li" key={r.href} delay={i * 70}>
                <Link href={r.href} className="facet group/btn flex h-full items-center justify-between gap-6 bg-paper p-6 ring-1 ring-inset ring-slate-200 hover:bg-white sm:p-7">
                  <span>
                    <span className="font-display block text-[1.2rem] font-[660] text-ink-950">{r.label}</span>
                    <span className="mt-1 block text-[0.94rem] text-slate-650">{r.description}</span>
                  </span>
                  <Arrow />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="container-x mt-20">
          <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-[700] tracking-[-0.02em] text-ink-950">Latest from the blog</h2>
          <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/resources/blog/${p.slug}`} className="group/btn grid gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-8">
                  <span className="text-[0.82rem] font-semibold text-opal-700">{p.category}</span>
                  <span>
                    <span className="block text-[1.08rem] font-semibold text-ink-950 group-hover/btn:text-blue-650">{p.title}</span>
                    <span className="mt-1 block text-[0.94rem] text-slate-650">{p.description}</span>
                  </span>
                  <span className="text-[0.84rem] text-slate-550">{p.readMinutes} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
