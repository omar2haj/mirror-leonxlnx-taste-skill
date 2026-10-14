import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "ghost-dark" | "text";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink-950 text-paper hover:bg-ink-800 shadow-[0_1px_0_0_oklch(1_0_0/0.08)_inset,0_8px_24px_-12px_oklch(0.15_0.035_262/0.6)]",
  secondary: "bg-paper text-ink-950 ring-1 ring-inset ring-slate-300 hover:ring-ink-700",
  light: "bg-paper text-ink-950 hover:bg-white shadow-[0_0_0_1px_oklch(1_0_0/0.4),0_10px_30px_-10px_oklch(0.8_0.13_210/0.45)]",
  "ghost-dark": "text-paper ring-1 ring-inset ring-[oklch(1_0_0/0.22)] hover:ring-opal-400 hover:bg-[oklch(1_0_0/0.04)]",
  text: "text-ink-950 hover:text-blue-650 px-0! h-auto!",
};

const base =
  "group/btn relative inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] px-5 text-[0.94rem] font-semibold tracking-[-0.005em] transition-[background-color,box-shadow,color,transform] duration-300 ease-out-quart active:translate-y-px";

export function Button({
  href,
  variant = "primary",
  children,
  arrow = false,
  className = "",
  ...rest
}: { href: string; variant?: Variant; children: ReactNode; arrow?: boolean; className?: string } & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5 transition-transform duration-300 ease-out-quart group-hover/btn:translate-x-0.5" aria-hidden>
      <path d="M3 8h9M8.5 4 12.5 8l-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const buttonClass = (variant: Variant = "primary", extra = "") => `${base} ${styles[variant]} ${extra}`;
