/** "Who we help" paths on the homepage. */
export type Audience = {
  id: string;
  name: string;
  tagline: string;
  needs: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const audiences: Audience[] = [
  {
    id: "owner-operator",
    name: "Owner-Operators",
    tagline: "A compliant DOT program when you are the company and the driver.",
    needs: ["Random consortium membership", "Pre-employment testing", "Clearinghouse C/TPA designation", "Audit-ready records"],
    primary: { label: "Get Started", href: "/get-started?audience=owner-operator" },
    secondary: { label: "Owner-operator program", href: "/dot-fmcsa/owner-operators" },
  },
  {
    id: "fleet",
    name: "Motor Carriers & Fleets",
    tagline: "One managed program across every driver, terminal and route.",
    needs: ["C/TPA administration", "Random pool management", "Post-accident support", "Driver onboarding"],
    primary: { label: "Get Started", href: "/get-started?audience=fleet" },
    secondary: { label: "Fleet programs", href: "/dot-fmcsa/fleets" },
  },
  {
    id: "employer",
    name: "Employers",
    tagline: "Workplace screening that matches your policy and your state.",
    needs: ["Non-DOT drug testing", "Alcohol testing", "Background screening", "Occupational health"],
    primary: { label: "Get Started", href: "/get-started?audience=employer" },
    secondary: { label: "Employer screening", href: "/employers" },
  },
  {
    id: "staffing",
    name: "Staffing Agencies",
    tagline: "Fast, repeatable screening for high-volume placement.",
    needs: ["Pre-placement drug testing", "Client-specific panels", "Nationwide collection access", "Background screening"],
    primary: { label: "Get Started", href: "/get-started?audience=staffing" },
    secondary: { label: "Non-DOT testing", href: "/employers/non-dot-drug-testing" },
  },
];
