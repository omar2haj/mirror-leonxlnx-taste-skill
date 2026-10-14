import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const control =
  "w-full rounded-[6px] bg-paper px-3.5 text-[0.98rem] text-ink-950 ring-1 ring-inset ring-slate-300 transition-shadow placeholder:text-slate-550 focus:outline-none focus:ring-2 focus:ring-opal-600 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[oklch(0.55_0.18_25)]";

export function Field({ label, hint, error, id, children }: { label: string; hint?: string; error?: string; id: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.88rem] font-semibold text-ink-900">
        {label}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="text-[0.82rem] text-slate-650">{hint}</p>}
      {error && <p id={`${id}-error`} className="text-[0.82rem] font-medium text-[oklch(0.5_0.18_25)]">{error}</p>}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${control} h-12 ${props.className ?? ""}`} />;
}
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${control} h-12 appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%2364718a' stroke-width='1.5'/%3E%3C/svg%3E")] bg-[length:10px_6px] bg-[right_14px_center] bg-no-repeat pr-10 ${props.className ?? ""}`} />;
}
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${control} min-h-[120px] py-3 ${props.className ?? ""}`} />;
}
