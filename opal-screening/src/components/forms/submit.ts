export type SubmitState = "idle" | "sending" | "sent" | "unconfigured" | "error";

export async function submitLead(payload: Record<string, unknown>): Promise<SubmitState> {
  try {
    const res = await fetch("/api/lead", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    if (res.ok) return "sent";
    if (res.status === 503) return "unconfigured";
    return "error";
  } catch {
    return "error";
  }
}
