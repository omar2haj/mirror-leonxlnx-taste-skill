import Link from "next/link";
import { ShieldMark } from "./ShieldMark";

export function Logo({ tone = "ink", className = "" }: { tone?: "ink" | "opal"; className?: string }) {
  const dark = tone === "opal";
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Opal Screening home">
      <ShieldMark tone={tone} className="h-9 w-auto transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className={`font-wide text-[1.32rem] font-[800] tracking-[-0.01em] ${dark ? "text-paper" : "text-ink-950"}`}>OPAL</span>
        <span className={`font-wide mt-[3px] text-[0.56rem] font-[700] tracking-[0.34em] ${dark ? "text-slate-400" : "text-slate-650"}`}>SCREENING</span>
      </span>
    </Link>
  );
}
