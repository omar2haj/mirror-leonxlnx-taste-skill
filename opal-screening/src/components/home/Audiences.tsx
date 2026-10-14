"use client";

import { useState } from "react";
import { Truck, Path, Buildings, IdentificationBadge } from "@phosphor-icons/react";
import { Button } from "../Button";
import type { Audience } from "@/data/audiences";

const icons = { "owner-operator": Truck, fleet: Path, employer: Buildings, staffing: IdentificationBadge } as const;

export function Audiences({ audiences }: { audiences: Audience[] }) {
  const [active, setActive] = useState(audiences[0].id);
  const current = audiences.find((a) => a.id === active)!;

  return (
    <div>
      <div role="tablist" aria-label="Who we help" className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {audiences.map((a) => {
          const Icon = icons[a.id as keyof typeof icons] ?? Buildings;
          const selected = a.id === active;
          return (
            <button
              key={a.id}
              role="tab"
              id={`tab-${a.id}`}
              aria-selected={selected}
              aria-controls={`panel-${a.id}`}
              onClick={() => setActive(a.id)}
              className={`facet group relative flex min-h-[132px] flex-col justify-between p-4 text-left transition-[background-color,color,transform] duration-300 ease-out-quart active:scale-[0.99] sm:p-5 ${
                selected ? "bg-ink-950 text-paper" : "bg-paper text-ink-950 ring-1 ring-inset ring-slate-200 hover:bg-white"
              }`}
            >
              <Icon className={`size-7 ${selected ? "text-opal-400" : "text-ink-700"}`} weight="light" aria-hidden />
              <span className="mt-6 block font-display text-[0.98rem] font-[650] leading-tight tracking-[-0.01em] sm:text-[1.08rem]">{a.name}</span>
              <span className={`absolute right-4 top-4 size-2 rotate-45 transition-colors ${selected ? "bg-opal-400" : "bg-slate-300 group-hover:bg-slate-400"}`} aria-hidden />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        key={current.id}
        className="animate-rise mt-3 grid gap-8 rounded-[4px] bg-paper p-6 ring-1 ring-inset ring-slate-200 sm:p-8 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-12 md:p-10"
      >
        <div>
          <p className="font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-[650] leading-[1.15] tracking-[-0.015em] text-ink-950">{current.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={current.primary.href} arrow>
              {current.primary.label}
            </Button>
            <Button href={current.secondary.href} variant="secondary">
              {current.secondary.label}
            </Button>
          </div>
        </div>
        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {current.needs.map((n) => (
            <li key={n} className="flex items-start gap-3 border-t border-slate-200 pt-3 text-[0.95rem] text-ink-800">
              <span className="mt-[0.45rem] size-1.5 shrink-0 rotate-45 bg-opal-600" aria-hidden />
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
