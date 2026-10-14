"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { buttonClass } from "./Button";
import type { NavGroup } from "@/data/site";

type Props = { nav: NavGroup[]; simple: { label: string; href: string }[] };

export function Header({ nav, simple }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const light = scrolled || mobile;
  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out-quart ${
        mobile
          ? "bg-paper shadow-[0_1px_0_0_var(--color-slate-200)]"
          : light
            ? "bg-paper/85 shadow-[0_1px_0_0_var(--color-slate-200)] backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-paper focus:px-3 focus:py-2 focus:text-ink-950">
        Skip to content
      </a>
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo tone={light ? "ink" : "opal"} />

        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((group) => (
              <li key={group.label} className="relative" onMouseEnter={() => enter(group.label)} onMouseLeave={leave}>
                <button
                  type="button"
                  aria-expanded={open === group.label}
                  aria-controls={`menu-${group.label}`}
                  onClick={() => setOpen((v) => (v === group.label ? null : group.label))}
                  className={`flex h-10 items-center gap-1.5 rounded-md px-3 text-[0.9rem] font-medium transition-colors ${
                    light ? "text-ink-800 hover:text-ink-950" : "text-slate-200 hover:text-paper"
                  } ${isActive(group.href) ? (light ? "text-ink-950" : "text-paper") : ""}`}
                >
                  {group.label}
                  <svg viewBox="0 0 10 6" className={`h-1.5 w-2.5 transition-transform duration-300 ${open === group.label ? "rotate-180" : ""}`} aria-hidden>
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <MegaPanel group={group} open={open === group.label} />
              </li>
            ))}
            {simple.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`flex h-10 items-center rounded-md px-3 text-[0.9rem] font-medium transition-colors ${
                    light ? "text-ink-800 hover:text-ink-950" : "text-slate-200 hover:text-paper"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/login"
            className={`h-10 rounded-md px-3 text-[0.9rem] font-medium leading-10 transition-colors ${
              light ? "text-ink-800 hover:text-ink-950" : "text-slate-200 hover:text-paper"
            }`}
          >
            Login
          </Link>
          <Link href="/get-started" className={buttonClass(light ? "primary" : "light", "h-10! px-4!")}>
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className={`relative -mr-2 grid size-11 place-items-center rounded-md lg:hidden ${light ? "text-ink-950" : "text-paper"}`}
          aria-expanded={mobile}
          aria-controls="mobile-menu"
          aria-label={mobile ? "Close menu" : "Open menu"}
          onClick={() => setMobile((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ${mobile ? "translate-y-[5.25px] rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ${mobile ? "-translate-y-[5.25px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
    </header>
    {/* Sibling of <header>: its backdrop-filter would otherwise trap this fixed panel */}
    <MobileMenu nav={nav} simple={simple} open={mobile} />
    </>
  );
}

function MegaPanel({ group, open }: { group: NavGroup; open: boolean }) {
  const wide = group.columns.length > 1;
  return (
    <div
      id={`menu-${group.label}`}
      className={`absolute left-1/2 top-full pt-3 drop-shadow-[0_18px_40px_oklch(0.15_0.035_262/0.22)] transition-[opacity,transform] duration-300 ease-out-quart ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      } ${wide ? "w-[640px] -translate-x-[40%]" : "w-[380px] -translate-x-1/2"}`}
    >
      <div className="facet facet-border">
        <div className="facet-inner grid gap-6 bg-paper p-5" style={{ gridTemplateColumns: `repeat(${group.columns.length}, minmax(0,1fr))` }}>
          {group.columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-2 px-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-550">{col.heading}</p>
              <ul className="space-y-0.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group/item block rounded-md px-2 py-2 transition-colors hover:bg-slate-100">
                      <span className="flex items-center gap-2 text-[0.9rem] font-medium text-ink-950">
                        {l.label}
                      </span>
                      {l.description && <span className="mt-0.5 block text-[0.8rem] leading-snug text-slate-650">{l.description}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ nav, simple, open }: Props & { open: boolean }) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-paper transition-[opacity,visibility] duration-300 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="container-x flex min-h-full flex-col pb-8 pt-2">
        <ul className="divide-y divide-slate-200 border-b border-slate-200">
          {nav.map((group) => (
            <li key={group.label}>
              <details className="group/d">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[1.05rem] font-semibold text-ink-950 [&::-webkit-details-marker]:hidden">
                  {group.label}
                  <span className="relative size-3" aria-hidden>
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-3 bg-ink-950" />
                    <span className="absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-ink-950 transition-transform duration-300 group-open/d:rotate-90 group-open/d:opacity-0" />
                  </span>
                </summary>
                <div className="pb-4">
                  {group.columns.map((col) => (
                    <div key={col.heading} className="mb-3 last:mb-0">
                      <p className="py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-slate-550">{col.heading}</p>
                      <ul>
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} className="block py-2 text-[0.98rem] text-ink-800 active:text-blue-650">
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link href={group.href} className="mt-1 inline-block py-2 text-[0.9rem] font-semibold text-blue-650">
                    View all {group.label}
                  </Link>
                </div>
              </details>
            </li>
          ))}
          {simple.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block py-4 text-[1.05rem] font-semibold text-ink-950">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
          <Link href="/login" className={buttonClass("secondary", "h-12!")}>
            Login
          </Link>
          <Link href="/get-started" className={buttonClass("primary", "h-12!")}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
