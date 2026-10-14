import Link from "next/link";
import type { Service } from "@/data/services";
import { ServiceIcon } from "../Icon";
import { StatusBadge } from "../StatusBadge";
import { Arrow } from "../Button";
import { Reveal } from "../Reveal";

/**
 * Asymmetric bento. Layout is keyed to position so the grid always has
 * exactly as many cells as visible services (hidden services drop out
 * and the remaining cells re-flow).
 */
const layout = [
  "md:col-span-4 md:row-span-2", // lead cell
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];

export function ServicesBento({ services }: { services: Service[] }) {
  return (
    <div className="grid auto-rows-[minmax(190px,auto)] gap-3 md:grid-cols-6">
      {services.map((s, i) => {
        const lead = i === 0;
        const tinted = i === 1;
        return (
          <Reveal key={s.key} delay={i * 60} className={`${layout[i] ?? "md:col-span-2"}`}>
            <Link
              href={s.href}
              className={`facet group relative flex h-full flex-col overflow-hidden p-6 transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-0.5 sm:p-7 ${
                lead
                  ? "surface-dark facet-lg"
                  : tinted
                    ? "bg-[linear-gradient(160deg,oklch(0.93_0.04_215),oklch(0.97_0.015_240))] text-ink-950"
                    : "bg-paper text-ink-950 ring-1 ring-inset ring-slate-200"
              }`}
            >
              {lead && (
                <>
                  <div className="facet-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
                  <div className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full bg-opal-600/25 blur-3xl" aria-hidden />
                </>
              )}
              <div className="relative flex items-start justify-between gap-4">
                <ServiceIcon name={s.icon} className={`size-8 ${lead ? "text-opal-400" : "text-ink-700"}`} />
                <StatusBadge status={s.status} dark={lead} />
              </div>
              <div className="relative mt-auto pt-10">
                <h3 className={`font-display font-[650] leading-[1.1] tracking-[-0.015em] ${lead ? "text-[clamp(1.6rem,2.6vw,2.2rem)] text-paper" : "text-[1.2rem]"}`}>{s.name}</h3>
                <p className={`mt-3 max-w-[46ch] text-[0.94rem] leading-relaxed ${lead ? "text-slate-300" : "text-slate-650"}`}>{s.summary}</p>
                {lead && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.includes.map((x) => (
                      <li key={x} className="rounded-full border border-[oklch(1_0_0/0.14)] px-3 py-1 text-[0.8rem] text-slate-200">
                        {x}
                      </li>
                    ))}
                  </ul>
                )}
                <span className={`group/btn mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold ${lead ? "text-opal-300" : "text-blue-650"}`}>
                  {s.status === "coming-soon" ? "Join the waitlist" : "Learn more"}
                  <Arrow />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
