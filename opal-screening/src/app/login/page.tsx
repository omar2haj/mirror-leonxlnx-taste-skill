import type { Metadata } from "next";
import Link from "next/link";
import { ShieldMark } from "@/components/ShieldMark";
import { buttonClass } from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Login",
  description: "Sign in to the Opal Screening customer portal.",
  alternates: { canonical: "/login" },
  robots: { index: false },
};

export default function Login() {
  return (
    <section className="surface-dark relative isolate flex min-h-svh items-center overflow-hidden pt-[var(--header-h)]">
      <div className="facet-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="container-x py-16">
        <div className="facet facet-lg mx-auto max-w-[460px] bg-paper p-8 text-ink-950 sm:p-10">
          <ShieldMark className="h-12 w-auto" />
          <h1 className="font-display mt-6 text-[1.8rem] font-[720] tracking-[-0.02em]">Customer portal</h1>
          {site.portalUrl ? (
            <>
              <p className="mt-3 text-slate-650">Continue to the secure Opal portal to manage your program.</p>
              <a href={site.portalUrl} className={buttonClass("primary", "mt-8 w-full h-12!")}>Continue to portal</a>
            </>
          ) : (
            <>
              <p className="mt-3 leading-relaxed text-slate-650">
                The Opal customer portal is launching soon. Until then, our team manages your account directly.
              </p>
              <div className="mt-8 grid gap-3">
                <Link href="/contact" className={buttonClass("primary", "h-12!")}>Contact support</Link>
                <Link href="/get-started" className={buttonClass("secondary", "h-12!")}>New customer? Get Started</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
