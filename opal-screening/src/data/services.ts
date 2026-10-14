/**
 * Core service catalogue.
 *
 * status controls how a service appears everywhere on the site:
 *   "available"   shown normally with a Get Started path
 *   "coming-soon" shown with a "Launching soon" badge and a waitlist CTA
 *   "hidden"      removed from navigation, cards and the sitemap; its pages return 404
 *
 * Flip a status here when the operational backend for that service is ready.
 */
export type ServiceStatus = "available" | "coming-soon" | "hidden";

export type ServiceKey =
  | "dot-testing"
  | "ctpa"
  | "clearinghouse"
  | "non-dot"
  | "occupational-health"
  | "background"
  | "driver-compliance";

export type Service = {
  key: ServiceKey;
  name: string;
  summary: string;
  includes: string[];
  href: string;
  status: ServiceStatus;
  icon: "flask" | "users" | "database" | "sliders" | "stethoscope" | "fingerprint" | "steering";
};

export const services: Service[] = [
  {
    key: "dot-testing",
    name: "DOT Drug & Alcohol Testing",
    summary:
      "Every test type the regulations call for, collected and reviewed under 49 CFR Part 40.",
    includes: ["Pre-employment", "Random", "Post-accident", "Reasonable suspicion", "Return-to-duty", "Follow-up"],
    href: "/dot-fmcsa/dot-drug-testing",
    status: "available",
    icon: "flask",
  },
  {
    key: "ctpa",
    name: "C/TPA & Random Consortium",
    summary:
      "We administer your random pool: selections, notifications, records and day-to-day program support.",
    includes: ["Random pool administration", "Selections & notifications", "Record management", "Employer support"],
    href: "/dot-fmcsa/ctpa-services",
    status: "available",
    icon: "users",
  },
  {
    key: "clearinghouse",
    name: "FMCSA Clearinghouse",
    summary:
      "C/TPA designation, employer setup help, query support and guidance on what to report and when.",
    includes: ["C/TPA designation", "Employer setup", "Query support", "Compliance guidance"],
    href: "/dot-fmcsa/fmcsa-clearinghouse",
    status: "available",
    icon: "database",
  },
  {
    key: "non-dot",
    name: "Non-DOT Drug Testing",
    summary:
      "Workplace testing programs built around your policy, with panels you choose.",
    includes: ["Custom panels", "Urine & instant options", "Policy-aligned programs", "Random programs"],
    href: "/employers/non-dot-drug-testing",
    status: "available",
    icon: "sliders",
  },
  {
    key: "occupational-health",
    name: "Occupational Health",
    summary:
      "DOT physicals, employer physicals, TB testing, vaccinations, fit testing and more, where available.",
    includes: ["DOT physicals", "Employer physicals", "TB testing", "Respirator fit testing"],
    href: "/employers/occupational-health",
    status: "coming-soon",
    icon: "stethoscope",
  },
  {
    key: "background",
    name: "Background Screening",
    summary:
      "Employment background checks delivered through a consumer-reporting workflow built for compliance.",
    includes: ["Criminal searches", "Employment verification", "Education verification", "Adverse action support"],
    href: "/employers/background-screening",
    status: "coming-soon",
    icon: "fingerprint",
  },
  {
    key: "driver-compliance",
    name: "Driver Compliance",
    summary:
      "Driver qualification files, MVRs, PSP reports and onboarding support for motor carriers.",
    includes: ["DQ file management", "MVRs", "PSP reports", "Driver onboarding"],
    href: "/dot-fmcsa/fleets",
    status: "coming-soon",
    icon: "steering",
  },
];

export const visibleServices = services.filter((s) => s.status !== "hidden");

export function getService(key: ServiceKey) {
  return services.find((s) => s.key === key);
}

export function isServiceVisible(key?: ServiceKey) {
  if (!key) return true;
  return getService(key)?.status !== "hidden";
}
