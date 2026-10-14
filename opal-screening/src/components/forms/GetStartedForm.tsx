"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Truck, Path, Buildings, IdentificationBadge, Check } from "@phosphor-icons/react";
import { Field, Input, Select, Textarea } from "./Field";
import { submitLead, type SubmitState } from "./submit";
import { FormNotice } from "./FormNotice";
import type { Service } from "@/data/services";

const audiences = [
  { id: "owner-operator", label: "Owner-operator", sub: "I drive under my own authority", icon: Truck, dot: true },
  { id: "fleet", label: "Motor carrier / fleet", sub: "We employ CDL drivers", icon: Path, dot: true },
  { id: "employer", label: "Employer", sub: "Workplace screening program", icon: Buildings, dot: false },
  { id: "staffing", label: "Staffing agency", sub: "Screening for placements", icon: IdentificationBadge, dot: false },
] as const;

// Map ?interest=<topic slug> to a service so the right box is pre-checked.
const interestToService: Record<string, string> = {
  "ctpa-services": "ctpa",
  "random-consortium": "ctpa",
  "owner-operators": "ctpa",
  fleets: "ctpa",
  "fmcsa-clearinghouse": "clearinghouse",
  "non-dot-drug-testing": "non-dot",
  "alcohol-testing": "non-dot",
  "background-screening": "background",
  "occupational-health": "occupational-health",
};

const steps = ["About you", "Your company", "Services", "Contact"];

export function GetStartedForm({ services }: { services: Pick<Service, "key" | "name" | "status">[] }) {
  const params = useSearchParams();
  const initialAudience = audiences.find((a) => a.id === params.get("audience"))?.id ?? "";
  const interest = params.get("interest") ?? "";
  const initialService = interestToService[interest] ?? (interest.includes("test") ? "dot-testing" : "");

  const [step, setStep] = useState(initialAudience ? 1 : 0);
  const [state, setState] = useState<SubmitState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [data, setData] = useState({
    audience: initialAudience as string,
    company: "",
    usdot: "",
    size: "",
    state: "",
    services: initialService ? [initialService] : ([] as string[]),
    name: "",
    email: "",
    phone: "",
    message: "",
    company_website: "",
  });
  const set = (k: keyof typeof data, v: string | string[]) => setData((d) => ({ ...d, [k]: v }));
  const isDot = useMemo(() => audiences.find((a) => a.id === data.audience)?.dot ?? false, [data.audience]);

  function validate(s: number) {
    const e: Record<string, string> = {};
    if (s === 0 && !data.audience) e.audience = "Choose the option that fits best.";
    if (s === 1) {
      if (!data.company.trim()) e.company = "Enter your company name.";
      if (!data.size) e.size = "Choose a range.";
    }
    if (s === 3) {
      if (!data.name.trim()) e.name = "Enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email address.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function next(e: React.FormEvent) {
    e.preventDefault();
    if (!validate(step)) return;
    if (step < steps.length - 1) return setStep(step + 1);
    setState("sending");
    setState(await submitLead({ form: "get-started", ...data }));
  }

  if (state === "sent") {
    return (
      <div className="animate-rise py-6 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-[oklch(0.95_0.05_170)] text-[oklch(0.42_0.09_170)]">
          <Check className="size-6" weight="bold" aria-hidden />
        </span>
        <h2 className="font-display mt-6 text-[1.7rem] font-[700] text-ink-950">You&apos;re on our list.</h2>
        <p className="mx-auto mt-3 max-w-[40ch] text-slate-650">A screening specialist will follow up with next steps.</p>
        <Link href="/" className="mt-8 inline-block font-semibold text-blue-650">Back to home</Link>
      </div>
    );
  }

  return (
    <form onSubmit={next} noValidate>
      {/* progress */}
      <ol className="mb-10 grid grid-cols-4 gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined}>
            <span className={`block h-1 rounded-full transition-colors duration-500 ${i <= step ? "bg-[image:var(--opal-gradient)]" : "bg-slate-200"}`} />
            <span className={`mt-2 hidden text-[0.78rem] font-medium sm:block ${i === step ? "text-ink-950" : "text-slate-550"}`}>{s}</span>
          </li>
        ))}
      </ol>
      <p className="sr-only" aria-live="polite">Step {step + 1} of {steps.length}: {steps[step]}</p>

      <div key={step} className="animate-rise">
        {step === 0 && (
          <fieldset>
            <legend className="font-display text-[1.5rem] font-[700] text-ink-950">Which best describes you?</legend>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {audiences.map((a) => {
                const I = a.icon;
                const on = data.audience === a.id;
                return (
                  <label key={a.id} className={`facet facet-sm flex cursor-pointer items-start gap-4 p-5 transition-colors ${on ? "bg-ink-950 text-paper" : "bg-paper ring-1 ring-inset ring-slate-200 hover:bg-mist"}`}>
                    <input type="radio" name="audience" value={a.id} checked={on} onChange={() => set("audience", a.id)} className="sr-only" />
                    <I className={`mt-0.5 size-6 shrink-0 ${on ? "text-opal-400" : "text-ink-700"}`} weight="light" aria-hidden />
                    <span>
                      <span className="block font-semibold">{a.label}</span>
                      <span className={`mt-0.5 block text-[0.86rem] ${on ? "text-slate-300" : "text-slate-650"}`}>{a.sub}</span>
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.audience && <p className="mt-3 text-[0.84rem] font-medium text-[oklch(0.5_0.18_25)]">{errors.audience}</p>}
          </fieldset>
        )}

        {step === 1 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <h2 className="font-display text-[1.5rem] font-[700] text-ink-950 sm:col-span-2">Tell us about your company</h2>
            <div className="sm:col-span-2">
              <Field id="company" label="Company name" error={errors.company}>
                <Input id="company" autoComplete="organization" value={data.company} onChange={(e) => set("company", e.target.value)} aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} />
              </Field>
            </div>
            {isDot && (
              <Field id="usdot" label="USDOT number (optional)" hint="Leave blank if your authority is pending.">
                <Input id="usdot" inputMode="numeric" value={data.usdot} onChange={(e) => set("usdot", e.target.value)} aria-describedby="usdot-hint" />
              </Field>
            )}
            <Field id="size" label={isDot ? "Number of CDL drivers" : "Number of employees to screen"} error={errors.size}>
              <Select id="size" value={data.size} onChange={(e) => set("size", e.target.value)} aria-invalid={!!errors.size}>
                <option value="">Select a range</option>
                {(data.audience === "owner-operator" ? ["Just me", "2 to 5"] : ["1 to 10", "11 to 50", "51 to 250", "250+"]).map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </Select>
            </Field>
            <Field id="state" label="Primary state (optional)">
              <Input id="state" autoComplete="address-level1" value={data.state} onChange={(e) => set("state", e.target.value)} />
            </Field>
          </div>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-display text-[1.5rem] font-[700] text-ink-950">What do you need?</legend>
            <p className="mt-2 text-[0.94rem] text-slate-650">Choose any that apply. You can change this later.</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {services.map((s) => {
                const on = data.services.includes(s.key);
                return (
                  <label key={s.key} className={`flex cursor-pointer items-center gap-3 rounded-[6px] px-4 py-3.5 ring-1 ring-inset transition-colors ${on ? "bg-mist ring-ink-700" : "bg-paper ring-slate-200 hover:bg-mist"}`}>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => set("services", on ? data.services.filter((x) => x !== s.key) : [...data.services, s.key])}
                      className="size-4 accent-[var(--color-ink-950)]"
                    />
                    <span className="text-[0.94rem] font-medium text-ink-900">{s.name}</span>
                    {s.status === "coming-soon" && <span className="ml-auto text-[0.72rem] font-semibold text-slate-550">Waitlist</span>}
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <div className="grid gap-5 sm:grid-cols-2">
            <h2 className="font-display text-[1.5rem] font-[700] text-ink-950 sm:col-span-2">How do we reach you?</h2>
            <Field id="name" label="Full name" error={errors.name}>
              <Input id="name" autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} />
            </Field>
            <Field id="email" label="Work email" error={errors.email}>
              <Input id="email" type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} />
            </Field>
            <Field id="phone" label="Phone (optional)">
              <Input id="phone" type="tel" autoComplete="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
            </Field>
            <div className="sm:col-span-2">
              <Field id="message" label="Anything we should know? (optional)">
                <Textarea id="message" value={data.message} onChange={(e) => set("message", e.target.value)} />
              </Field>
            </div>
            <div className="hidden" aria-hidden>
              <label htmlFor="company_website">Website</label>
              <input id="company_website" tabIndex={-1} autoComplete="off" value={data.company_website} onChange={(e) => set("company_website", e.target.value)} />
            </div>
          </div>
        )}
      </div>

      <FormNotice state={state} />

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
        {step > 0 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="text-[0.94rem] font-semibold text-slate-650 hover:text-ink-950">
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex h-12 items-center gap-2 rounded-[6px] bg-ink-950 px-6 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-ink-800 active:translate-y-px disabled:opacity-60"
        >
          {step < steps.length - 1 ? "Continue" : state === "sending" ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
