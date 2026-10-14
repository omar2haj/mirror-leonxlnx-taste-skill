import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { ShieldMark } from "@/components/ShieldMark";

export default function NotFound() {
  return (
    <section className="surface-dark relative isolate flex min-h-[80svh] items-center overflow-hidden pt-[var(--header-h)]">
      <div className="facet-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="container-x py-20">
        <ShieldMark tone="opal" className="h-16 w-auto" />
        <h1 className="font-display mt-8 text-[clamp(2.2rem,5vw,3.6rem)] font-[730] tracking-[-0.028em] text-paper">This page didn&apos;t pass screening.</h1>
        <p className="mt-4 max-w-[46ch] text-slate-300">The page you are looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className={buttonClass("light")}>Back to home</Link>
          <Link href="/services" className={buttonClass("ghost-dark")}>Browse services</Link>
        </div>
      </div>
    </section>
  );
}
