/**
 * Company-wide settings. Edit here; every page reads from this file.
 *
 * Anything marked TODO must be confirmed before launch. Fields set to
 * null are hidden automatically wherever they would appear.
 */
export const site = {
  name: "Opal Screening",
  shortName: "Opal",
  // TODO: confirm the production domain before launch (used for canonical URLs, sitemap and Open Graph).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.opalscreening.com",
  tagline: "DOT Drug & Alcohol Testing | Occupational Health",
  description:
    "Nationwide drug and alcohol testing, DOT compliance, C/TPA administration and occupational-health services, managed from one trusted partner.",
  contact: {
    // TODO: replace with the real inbox before launch.
    email: "info@opalscreening.com" as string | null,
    // TODO: add the support line when it is live, e.g. "(800) 555-0100". null hides it.
    phone: null as string | null,
    hours: "Monday to Friday, 8am to 6pm ET" as string | null,
  },
  // The customer portal is not live yet. Set to a URL to make Login link out.
  portalUrl: null as string | null,
  social: {
    linkedin: null as string | null,
  },
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href: string; columns: { heading: string; links: NavLink[] }[] };
