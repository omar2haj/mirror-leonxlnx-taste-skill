"use client";

import { useState } from "react";
import { Check } from "@phosphor-icons/react";
import { Field, Input, Select, Textarea } from "./Field";
import { submitLead, type SubmitState } from "./submit";
import { FormNotice } from "./FormNotice";

const topics = ["DOT / FMCSA program", "Random consortium", "Clearinghouse", "Workplace drug testing", "Background screening", "Occupational health", "Something else"];

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!fd.name?.trim()) errs.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fd.email ?? "")) errs.email = "Enter a valid email address.";
    if (!fd.message?.trim()) errs.message = "Tell us how we can help.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setState("sending");
    setState(await submitLead({ form: "contact", ...fd }));
  }

  if (state === "sent") {
    return (
      <div className="animate-rise py-10">
        <span className="grid size-12 place-items-center rounded-full bg-[oklch(0.95_0.05_170)] text-[oklch(0.42_0.09_170)]">
          <Check className="size-5" weight="bold" aria-hidden />
        </span>
        <h2 className="font-display mt-5 text-[1.6rem] font-[700] text-ink-950">Message received.</h2>
        <p className="mt-2 text-slate-650">A screening specialist will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="c-name" label="Full name" error={errors.name}>
        <Input id="c-name" name="name" autoComplete="name" aria-invalid={!!errors.name} />
      </Field>
      <Field id="c-email" label="Work email" error={errors.email}>
        <Input id="c-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />
      </Field>
      <Field id="c-company" label="Company (optional)">
        <Input id="c-company" name="company" autoComplete="organization" />
      </Field>
      <Field id="c-phone" label="Phone (optional)">
        <Input id="c-phone" name="phone" type="tel" autoComplete="tel" />
      </Field>
      <div className="sm:col-span-2">
        <Field id="c-topic" label="Topic">
          <Select id="c-topic" name="audience" defaultValue={topics[0]}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </Select>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="c-message" label="How can we help?" error={errors.message}>
          <Textarea id="c-message" name="message" aria-invalid={!!errors.message} />
        </Field>
      </div>
      <div className="hidden" aria-hidden>
        <label htmlFor="c-web">Website</label>
        <input id="c-web" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="sm:col-span-2">
        <FormNotice state={state} />
        <button type="submit" disabled={state === "sending"} className="mt-2 inline-flex h-12 items-center rounded-[6px] bg-ink-950 px-6 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-ink-800 active:translate-y-px disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
