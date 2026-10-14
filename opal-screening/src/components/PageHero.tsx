import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";
import { site } from "@/data/site";

export type Crumb = { label: string; href: string };

export function PageHero({
  crumbs = [],
  title,
  lead,
  children,
  aside,
  badge,
}: {
  crumbs?: Crumb[];
  title: string;
  lead?: string;
  children?: ReactNode;
  aside?: ReactNode;
  badge?: ReactNode;
}) {
  const all = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section className="surface-dark relative isolate overflow-hidden pt-[var(--header-h)]">
      {crumbs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: `${site.url}${c.href === "/" ? "" : c.href}` })),
          }}
        />
      )}
      <div className="facet-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="pointer-events-none absolute -right-40 -top-20 -z-10 size-[640px] rounded-full bg-opal-600/20 blur-3xl" aria-hidden />
      <HeroShieldLines />
      <div className={`container-x grid gap-10 pb-16 pt-10 md:pb-20 md:pt-14 ${aside ? "lg:grid-cols-[1.2fr_0.8fr] lg:items-end" : ""}`}>
        <div className="min-w-0 max-w-3xl">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.82rem] text-slate-400">
                {all.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-2">
                    {i > 0 && <span className="size-1 rotate-45 bg-slate-550" aria-hidden />}
                    {i === all.length - 1 ? (
                      <span aria-current="page" className="text-slate-200">{c.label}</span>
                    ) : (
                      <Link href={c.href} className="hover:text-paper">{c.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {badge && <div className="mb-5">{badge}</div>}
          <h1 className="font-display animate-rise text-[clamp(2.2rem,5vw,3.9rem)] font-[730] leading-[1.02] tracking-[-0.028em] text-paper">{title}</h1>
          {lead && <p className="animate-rise mt-6 max-w-[60ch] text-[clamp(1.02rem,1.3vw,1.15rem)] leading-relaxed text-slate-300 [animation-delay:100ms]">{lead}</p>}
          {children && <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:180ms]">{children}</div>}
        </div>
        {aside && <div className="min-w-0">{aside}</div>}
      </div>
      <div className="lumen-line" />
    </section>
  );
}

function HeroShieldLines() {
  return (
    <svg viewBox="0 0 200 240" className="pointer-events-none absolute -bottom-40 right-[-6%] -z-10 hidden w-[520px] opacity-[0.14] md:block" aria-hidden>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d="M100 6 182 50v82c0 48-36 82-82 102-46-20-82-54-82-102V50Z"
          fill="none"
          stroke="oklch(0.88 0.1 205)"
          strokeWidth={0.5}
          transform={`translate(100 120) scale(${1 - i * 0.2}) translate(-100 -120)`}
        />
      ))}
    </svg>
  );
}
