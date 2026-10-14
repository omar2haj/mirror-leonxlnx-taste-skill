import { site } from "@/data/site";
import type { SubmitState } from "./submit";

export function FormNotice({ state }: { state: SubmitState }) {
  if (state !== "unconfigured" && state !== "error") return null;
  const email = site.contact.email;
  return (
    <div role="alert" className="mt-6 rounded-[6px] bg-[oklch(0.97_0.03_85)] px-4 py-3 text-[0.9rem] text-[oklch(0.38_0.08_70)] ring-1 ring-inset ring-[oklch(0.88_0.07_85)]">
      {state === "unconfigured"
        ? "Online submissions are not connected yet."
        : "Something went wrong sending your details."}{" "}
      {email ? (
        <>
          Please email us at{" "}
          <a className="font-semibold underline" href={`mailto:${email}`}>{email}</a>
          {site.contact.phone ? <> or call {site.contact.phone}</> : null}.
        </>
      ) : (
        "Please try again shortly."
      )}
    </div>
  );
}
