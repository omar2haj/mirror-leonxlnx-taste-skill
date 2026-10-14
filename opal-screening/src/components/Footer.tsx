import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/data/site";
import { topicsIn, topicHref } from "@/data/topics";
import { isServiceVisible } from "@/data/services";
import { resourceLinks } from "@/data/nav";

export function Footer() {
  const dot = topicsIn("dot-fmcsa").filter((t) => isServiceVisible(t.service));
  const emp = topicsIn("employers").filter((t) => isServiceVisible(t.service));
  const cols = [
    { heading: "DOT & FMCSA", links: dot.slice(0, 8).map((t) => ({ label: t.navLabel, href: topicHref(t) })).concat([{ label: "All DOT & FMCSA", href: "/dot-fmcsa" }]) },
    { heading: "Employers", links: emp.map((t) => ({ label: t.navLabel, href: topicHref(t) })).concat([{ label: "All employer screening", href: "/employers" }]) },
    { heading: "Resources", links: resourceLinks.map(({ label, href }) => ({ label, href })) },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
        { label: "Login", href: "/login" },
        { label: "Get Started", href: "/get-started" },
      ],
    },
  ];
  return (
    <footer className="surface-dark relative overflow-hidden">
      <div className="lumen-line" />
      <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_2fr]">
        <div className="max-w-sm">
          <Logo tone="opal" />
          <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-400">{site.description}</p>
          <dl className="mt-6 space-y-1.5 text-[0.9rem]">
            {site.contact.email && (
              <div>
                <dt className="sr-only">Email</dt>
                <dd><a className="text-slate-200 hover:text-opal-300" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></dd>
              </div>
            )}
            {site.contact.phone && (
              <div>
                <dt className="sr-only">Phone</dt>
                <dd><a className="text-slate-200 hover:text-opal-300" href={`tel:${site.contact.phone.replace(/[^\d+]/g, "")}`}>{site.contact.phone}</a></dd>
              </div>
            )}
            {site.contact.hours && <dd className="text-slate-550">{site.contact.hours}</dd>}
          </dl>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.heading}>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-slate-550">{c.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.9rem] text-slate-300 transition-colors hover:text-paper">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[oklch(1_0_0/0.08)]">
        <div className="container-x flex flex-col gap-4 py-6 text-[0.8rem] text-slate-550 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Opal Screening is an independent service provider and is not affiliated with or endorsed by the U.S. Department of Transportation or FMCSA.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-slate-200">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
