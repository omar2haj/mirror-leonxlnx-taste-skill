import type { NavGroup, NavLink } from "./site";
import { topicsIn, topicHref } from "./topics";
import { isServiceVisible, visibleServices } from "./services";

const dot = topicsIn("dot-fmcsa").filter((t) => isServiceVisible(t.service));
const emp = topicsIn("employers").filter((t) => isServiceVisible(t.service));
const toLink = (t: (typeof dot)[number]): NavLink => ({ label: t.navLabel, href: topicHref(t), description: t.navBlurb });

const programSlugs = ["ctpa-services", "random-consortium", "fmcsa-clearinghouse"];
const audienceSlugs = ["owner-operators", "fleets"];

export const resourceLinks: NavLink[] = [
  { label: "FMCSA Compliance Guide", href: "/resources/fmcsa-compliance-guide", description: "The essentials of a DOT drug and alcohol program." },
  { label: "Drug Testing FAQ", href: "/resources/drug-testing-faq", description: "Collections, results and what to expect." },
  { label: "Employer FAQ", href: "/resources/employer-faq", description: "Setting up and running a program." },
  { label: "Blog", href: "/resources/blog", description: "Practical compliance notes." },
];

export const mainNav: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "All services",
        links: visibleServices.map((s) => ({ label: s.name, href: s.href })),
      },
      {
        heading: "Plans",
        links: [
          { label: "Pricing", href: "/pricing", description: "Membership plus services as needed." },
          { label: "Service overview", href: "/services", description: "Everything Opal offers, in one place." },
        ],
      },
    ],
  },
  {
    label: "DOT & FMCSA",
    href: "/dot-fmcsa",
    columns: [
      { heading: "Programs", links: dot.filter((t) => programSlugs.includes(t.slug) || audienceSlugs.includes(t.slug)).map(toLink) },
      { heading: "Testing", links: dot.filter((t) => !programSlugs.includes(t.slug) && !audienceSlugs.includes(t.slug)).map((t) => ({ label: t.navLabel, href: topicHref(t) })) },
    ],
  },
  {
    label: "Employers",
    href: "/employers",
    columns: [{ heading: "Employer screening", links: emp.map(toLink) }],
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [{ heading: "Learn", links: resourceLinks }],
  },
];

export const simpleNav: NavLink[] = [{ label: "About", href: "/about" }];
