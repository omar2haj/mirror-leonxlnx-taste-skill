"use client";

import { useState } from "react";
import {
  UsersThree,
  Shuffle,
  PlusCircle,
  HourglassMedium,
  CheckCircle,
  FileText,
  ListChecks,
  type Icon,
} from "@phosphor-icons/react";

/**
 * Visual preview of the planned customer portal.
 * Everything here is static sample data; no backend is connected.
 */
type View = { id: string; label: string; icon: Icon };
const views: View[] = [
  { id: "people", label: "Employees / Drivers", icon: UsersThree },
  { id: "pool", label: "Random Pool", icon: Shuffle },
  { id: "order", label: "Order Test", icon: PlusCircle },
  { id: "pending", label: "Pending Tests", icon: HourglassMedium },
  { id: "results", label: "Results", icon: CheckCircle },
  { id: "docs", label: "Documents", icon: FileText },
  { id: "tasks", label: "Compliance Tasks", icon: ListChecks },
];

const people = [
  { n: "R. Delgado", r: "CDL Driver", s: "In random pool", t: "Pre-employment · Negative" },
  { n: "T. Okafor", r: "CDL Driver", s: "In random pool", t: "Random · Negative" },
  { n: "J. Brennan", r: "Dispatcher", s: "Non-DOT", t: "Pre-employment · Negative" },
  { n: "S. Patel", r: "CDL Driver", s: "Onboarding", t: "Pre-employment · Ordered" },
];

function Chip({ tone, children }: { tone: "ok" | "wait" | "info" | "muted"; children: React.ReactNode }) {
  const c = {
    ok: "bg-[oklch(0.95_0.05_170)] text-[oklch(0.42_0.09_170)]",
    wait: "bg-[oklch(0.96_0.05_85)] text-[oklch(0.45_0.09_70)]",
    info: "bg-[oklch(0.95_0.03_230)] text-blue-650",
    muted: "bg-slate-150 text-slate-650",
  }[tone];
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.7rem] font-semibold ${c}`}>{children}</span>;
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between gap-4 border-t border-slate-150 py-3 first:border-t-0">{children}</div>;
}

function Panel({ id }: { id: string }) {
  switch (id) {
    case "people":
      return (
        <div>
          {people.map((p) => (
            <Row key={p.n}>
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-150 text-[0.72rem] font-semibold text-ink-800">
                  {p.n.split(" ").map((x) => x[0]).join("")}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[0.86rem] font-semibold text-ink-950">{p.n}</p>
                  <p className="truncate text-[0.76rem] text-slate-550">{p.r} · {p.t}</p>
                </div>
              </div>
              <Chip tone={p.s === "Onboarding" ? "wait" : p.s === "Non-DOT" ? "muted" : "info"}>{p.s}</Chip>
            </Row>
          ))}
        </div>
      );
    case "pool":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <Stat label="Pool type" value="FMCSA consortium" />
          <Stat label="Next selection" value="Scheduled" />
          <div className="sm:col-span-2">
            <p className="mb-1 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-slate-550">Recent selections</p>
            <Row><span className="text-[0.86rem] text-ink-900">T. Okafor · Drug</span><Chip tone="ok">Completed</Chip></Row>
            <Row><span className="text-[0.86rem] text-ink-900">R. Delgado · Alcohol</span><Chip tone="ok">Completed</Chip></Row>
          </div>
        </div>
      );
    case "order":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Employee" value="S. Patel" />
          <Field label="Reason" value="Pre-employment" />
          <Field label="Test" value="DOT 5-panel urine" />
          <Field label="Collection site" value="Nearest to ZIP 30303" />
          <div className="sm:col-span-2">
            <span className="inline-flex h-9 items-center rounded-[6px] bg-ink-950 px-4 text-[0.82rem] font-semibold text-paper">Send instructions</span>
          </div>
        </div>
      );
    case "pending":
      return (
        <div>
          <Row><span className="text-[0.86rem] text-ink-900">S. Patel · Pre-employment</span><Chip tone="wait">Instructions sent</Chip></Row>
          <Row><span className="text-[0.86rem] text-ink-900">K. Nguyen · Random</span><Chip tone="info">At laboratory</Chip></Row>
          <Row><span className="text-[0.86rem] text-ink-900">M. Alvarez · Follow-up</span><Chip tone="info">MRO review</Chip></Row>
        </div>
      );
    case "results":
      return (
        <div>
          <Row><span className="text-[0.86rem] text-ink-900">T. Okafor · Random drug</span><Chip tone="ok">Negative</Chip></Row>
          <Row><span className="text-[0.86rem] text-ink-900">R. Delgado · Random alcohol</span><Chip tone="ok">Negative</Chip></Row>
          <Row><span className="text-[0.86rem] text-ink-900">J. Brennan · Pre-employment</span><Chip tone="ok">Negative</Chip></Row>
        </div>
      );
    case "docs":
      return (
        <div>
          {["Drug & alcohol policy", "Consortium enrollment certificate", "Supervisor training records", "Annual program summary"].map((d) => (
            <Row key={d}>
              <span className="flex items-center gap-2.5 text-[0.86rem] text-ink-900">
                <FileText className="size-4 text-slate-550" aria-hidden />
                {d}
              </span>
              <span className="text-[0.76rem] font-semibold text-blue-650">View</span>
            </Row>
          ))}
        </div>
      );
    default:
      return (
        <div>
          {[
            { t: "Annual Clearinghouse queries", s: "Due this quarter", tone: "wait" as const },
            { t: "Pre-employment test for S. Patel", s: "Open", tone: "info" as const },
            { t: "Reasonable suspicion training", s: "Complete", tone: "ok" as const },
          ].map((x) => (
            <Row key={x.t}>
              <span className="text-[0.86rem] text-ink-900">{x.t}</span>
              <Chip tone={x.tone}>{x.s}</Chip>
            </Row>
          ))}
        </div>
      );
  }
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[4px] bg-mist p-3 ring-1 ring-inset ring-slate-150">
      <p className="text-[0.72rem] text-slate-550">{label}</p>
      <p className="mt-1 text-[0.9rem] font-semibold text-ink-950">{value}</p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-[0.72rem] font-medium text-slate-650">{label}</p>
      <div className="flex h-9 items-center justify-between rounded-[6px] bg-paper px-3 text-[0.84rem] text-ink-900 ring-1 ring-inset ring-slate-200">
        {value}
        <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 text-slate-400" aria-hidden><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
      </div>
    </div>
  );
}

export function PortalPreview() {
  const [active, setActive] = useState("people");
  const view = views.find((v) => v.id === active)!;
  return (
    <div className="relative min-w-0 drop-shadow-[0_30px_50px_oklch(0.15_0.035_262/0.28)]">
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-12 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.8_0.13_210/0.22),transparent_65%)]" aria-hidden />
      <div className="facet facet-lg overflow-hidden bg-paper">
        <div className="grid md:grid-cols-[230px_minmax(0,1fr)]">
          <aside className="surface-dark min-w-0 p-3 md:p-4">
            <div className="hidden items-center gap-2 px-2 pb-5 pt-1 md:flex">
              <span className="size-2 rotate-45 bg-opal-400" aria-hidden />
              <span className="text-[0.82rem] font-semibold text-paper">Opal Portal</span>
            </div>
            <div role="tablist" aria-label="Portal sections" className="-mx-1 flex gap-1 overflow-x-auto pb-1 md:mx-0 md:flex-col md:overflow-visible md:pb-0">
              {views.map((v) => {
                const I = v.icon;
                const on = v.id === active;
                return (
                  <button
                    key={v.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(v.id)}
                    className={`flex shrink-0 items-center gap-2.5 rounded-[6px] px-3 py-2 text-left text-[0.82rem] font-medium transition-colors ${
                      on ? "bg-[oklch(1_0_0/0.09)] text-paper" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <I className={`size-4 ${on ? "text-opal-400" : ""}`} weight={on ? "fill" : "regular"} aria-hidden />
                    {v.label}
                  </button>
                );
              })}
            </div>
          </aside>
          <div className="min-h-[340px] min-w-0 p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="font-display text-[1.15rem] font-[650] tracking-[-0.01em] text-ink-950">{view.label}</h3>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-slate-550">Sample data</span>
            </div>
            <div key={active} className="animate-rise">
              <Panel id={active} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
