import { NextResponse } from "next/server";

/**
 * Lead intake for Get Started and Contact forms.
 *
 * Delivery is intentionally not hard-wired. Set LEAD_WEBHOOK_URL in Vercel
 * (e.g. a CRM, Zapier/Make, Slack or email-service webhook) and each
 * submission is forwarded there as JSON. Until it is set, the endpoint
 * returns 503 and the form shows a fallback contact message, so no
 * submission is silently dropped.
 */
const MAX = 4000;

function clean(v: unknown) {
  return typeof v === "string" ? v.trim().slice(0, MAX) : Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, 20) : undefined;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (typeof body.company_website === "string" && body.company_website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const lead = Object.fromEntries(
    ["form", "audience", "company", "usdot", "size", "state", "services", "name", "email", "phone", "message"].map((k) => [k, clean(body[k])]),
  );

  const email = typeof lead.email === "string" ? lead.email : "";
  if (!lead.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (!hook) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString(), source: "opalscreening.com" }),
    });
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
