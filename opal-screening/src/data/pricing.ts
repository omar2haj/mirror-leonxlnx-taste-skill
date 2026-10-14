import type { ServiceKey } from "./services";

/**
 * Pricing data. Prices are intentionally null until approved.
 *
 * To publish a price, set `price` to a number (USD) and, for plans,
 * set `period` (e.g. "year" or "month"). Anything left null renders
 * as "Contact us" with a Get Started call to action.
 */
export type Plan = {
  id: string;
  name: string;
  audience: string;
  drivers: string;
  price: number | null;
  period: "year" | "month" | null;
  includes: string[];
  featured?: boolean;
  cta: { label: string; href: string };
};

export const membershipPlans: Plan[] = [
  {
    id: "owner-operator",
    name: "Owner-Operator",
    audience: "Self-employed CDL drivers",
    drivers: "1 driver",
    price: null,
    period: null,
    includes: [
      "Random consortium enrollment",
      "C/TPA program administration",
      "Clearinghouse C/TPA designation support",
      "Selection history and program records",
      "Enrollment certificate",
    ],
    cta: { label: "Get Started", href: "/get-started?audience=owner-operator" },
  },
  {
    id: "small-fleet",
    name: "Small Fleet",
    audience: "Growing motor carriers",
    drivers: "2 to 10 drivers",
    price: null,
    period: null,
    featured: true,
    includes: [
      "Everything in Owner-Operator",
      "Driver roster management",
      "DER notifications and test tracking",
      "Supervisor resources",
      "Priority human support",
    ],
    cta: { label: "Get Started", href: "/get-started?audience=fleet" },
  },
  {
    id: "growing-fleet",
    name: "Growing Fleet",
    audience: "Established carriers",
    drivers: "11+ drivers",
    price: null,
    period: null,
    includes: [
      "Everything in Small Fleet",
      "Multi-location driver groups",
      "Dedicated account contact",
      "Program reviews and annual summaries",
      "Volume testing rates",
    ],
    cta: { label: "Get Started", href: "/get-started?audience=fleet" },
  },
];

export type AlaCarteItem = {
  id: string;
  name: string;
  detail: string;
  price: number | null;
  unit: string;
  service: ServiceKey;
};

export const alaCarte: AlaCarteItem[] = [
  { id: "dot-drug", name: "DOT Drug Test", detail: "5-panel urine, MRO review", price: null, unit: "per test", service: "dot-testing" },
  { id: "dot-alcohol", name: "DOT Alcohol Test", detail: "Breath alcohol, BAT/STT", price: null, unit: "per test", service: "dot-testing" },
  { id: "clearinghouse", name: "Clearinghouse Services", detail: "Setup, designation and query support", price: null, unit: "per driver", service: "clearinghouse" },
  { id: "mvr", name: "MVR / Driver Screening", detail: "Motor vehicle records and PSP", price: null, unit: "per report", service: "driver-compliance" },
  { id: "non-dot", name: "Non-DOT Drug Test", detail: "Custom panel, MRO review", price: null, unit: "per test", service: "non-dot" },
  { id: "occ-health", name: "Occupational Health", detail: "Physicals, TB testing, fit testing", price: null, unit: "per service", service: "occupational-health" },
];

export function formatPrice(price: number | null, period?: string | null) {
  if (price === null) return null;
  const amount = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: price % 1 ? 2 : 0 }).format(price);
  return period ? `${amount}/${period}` : amount;
}
