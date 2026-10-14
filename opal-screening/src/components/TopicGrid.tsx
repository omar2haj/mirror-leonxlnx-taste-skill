import Link from "next/link";
import { Arrow } from "./Button";
import { Reveal } from "./Reveal";
import { StatusBadge } from "./StatusBadge";
import { getService } from "@/data/services";
import { topicHref, type Topic } from "@/data/topics";

export function TopicGrid({ items, columns = 3 }: { items: Topic[]; columns?: 2 | 3 }) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((t, i) => {
        const status = t.service ? getService(t.service)?.status : undefined;
        return (
          <Reveal as="li" key={t.slug} delay={(i % 3) * 60}>
            <Link href={topicHref(t)} className="facet group/btn flex h-full flex-col bg-paper p-6 ring-1 ring-inset ring-slate-200 transition-[background-color,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:bg-white sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[1.15rem] font-[650] leading-tight tracking-[-0.01em] text-ink-950">{t.navLabel}</h3>
                {status && <StatusBadge status={status} />}
              </div>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-slate-650">{t.navBlurb}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.86rem] font-semibold text-blue-650">
                Learn more <Arrow />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
