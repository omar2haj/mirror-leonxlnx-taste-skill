import type { ServiceStatus } from "@/data/services";

export function StatusBadge({ status, dark = false }: { status: ServiceStatus; dark?: boolean }) {
  if (status !== "coming-soon") return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide ${
        dark ? "bg-[oklch(1_0_0/0.08)] text-opal-300" : "bg-slate-150 text-slate-650"
      }`}
    >
      <span className="size-1.5 rotate-45 bg-opal-500" aria-hidden />
      Launching soon
    </span>
  );
}
