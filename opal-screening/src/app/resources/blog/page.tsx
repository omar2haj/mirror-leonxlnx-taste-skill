import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Button";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog | DOT Drug Testing & Compliance Notes",
  description: "Practical notes on FMCSA compliance, DOT drug testing, the Clearinghouse and workplace screening from Opal Screening.",
  alternates: { canonical: "/resources/blog" },
};

const fmt = (d: string) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

export default function Blog() {
  return (
    <>
      <PageHero crumbs={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blog" }]} title="Compliance, explained" lead="Short, practical notes on the rules that matter." />
      <section className="bg-mist py-16 md:py-24">
        <ul className="container-x grid gap-3 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/resources/blog/${p.slug}`} className="facet group/btn flex h-full flex-col bg-paper p-7 ring-1 ring-inset ring-slate-200 hover:bg-white">
                <span className="text-[0.8rem] font-semibold text-opal-700">{p.category}</span>
                <h2 className="font-display mt-3 text-[1.3rem] font-[670] leading-tight tracking-[-0.01em] text-ink-950">{p.title}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-650">{p.description}</p>
                <span className="mt-auto flex items-center justify-between pt-8 text-[0.84rem] text-slate-550">
                  <time dateTime={p.date}>{fmt(p.date)}</time>
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
