import type { ServiceKey } from "./services";

/**
 * Content for every DOT & FMCSA and Employer Screening page.
 * Each entry renders through the same template (src/components/TopicPage.tsx),
 * so adding a page is a matter of adding an object here.
 *
 * Regulatory statements reference 49 CFR Part 40 (DOT testing procedures)
 * and 49 CFR Part 382 (FMCSA drug and alcohol rules). Review with counsel
 * or your compliance lead before publishing changes to these sections.
 */
export type TopicSection = "dot-fmcsa" | "employers";

export type Topic = {
  slug: string;
  section: TopicSection;
  service?: ServiceKey;
  navLabel: string;
  navBlurb: string;
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  highlights: { title: string; body: string }[];
  steps?: { title: string; body: string }[];
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const topics: Topic[] = [
  /* ───────────────────────────── DOT & FMCSA ───────────────────────────── */
  {
    slug: "ctpa-services",
    section: "dot-fmcsa",
    service: "ctpa",
    navLabel: "C/TPA Services",
    navBlurb: "We run your DOT testing program day to day.",
    title: "C/TPA services for DOT-regulated employers",
    seoTitle: "C/TPA Services | DOT Consortium & Third-Party Administrator",
    description:
      "Opal Screening acts as your Consortium/Third-Party Administrator: random pool management, test coordination, MRO-reviewed results, Clearinghouse support and audit-ready records.",
    lead:
      "A Consortium/Third-Party Administrator handles the moving parts of a DOT drug and alcohol program for you. Opal manages the pool, coordinates every test and keeps the paperwork in order, so you can stay focused on running your business.",
    highlights: [
      { title: "Program administration", body: "Enrollment, driver rosters, random selections and notifications handled by our team." },
      { title: "Test coordination", body: "We schedule collections, track open orders and follow up until results are final." },
      { title: "Clearinghouse support", body: "We can be designated as your C/TPA and help with queries and required reporting." },
      { title: "Records you can produce", body: "Selection lists, results and program documents organized for audits and safety reviews." },
    ],
    sections: [
      {
        heading: "What a C/TPA does",
        body: [
          "Under 49 CFR Part 40, a C/TPA is a service agent that provides or coordinates drug and alcohol testing services for DOT-regulated employers. Employers stay responsible for their own compliance, and a C/TPA gives them the infrastructure to meet it.",
          "For owner-operators, a C/TPA is essential: FMCSA requires a self-employed CDL driver to be in a random testing pool with other drivers, which in practice means joining a consortium.",
        ],
        bullets: [
          "Random pool administration and scientifically valid selections",
          "Selection notices to your designated employer representative (DER)",
          "Coordination with collection sites, laboratories and the Medical Review Officer",
          "Annual summaries and program records on request",
          "Guidance on policy, supervisor training and return-to-duty steps",
        ],
      },
      {
        heading: "Who we work with",
        body: [
          "Owner-operators who need a consortium, small fleets that want a program run for them, and larger carriers that prefer to keep testing administration off their internal team's plate.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a C/TPA?", a: "Owner-operators with no other drivers effectively do, because FMCSA requires them to be in a random pool with at least one other driver. Fleets can run their own pool, but many use a C/TPA to reduce administrative risk." },
      { q: "Does using a C/TPA transfer my compliance responsibility?", a: "No. The employer remains responsible for compliance. A C/TPA provides the services and records that make compliance practical." },
      { q: "Can you be my designated C/TPA in the FMCSA Clearinghouse?", a: "Yes. Once you are enrolled, you designate Opal in your Clearinghouse account and we can support queries and reporting on your behalf where the rules allow." },
    ],
    related: ["/dot-fmcsa/random-consortium", "/dot-fmcsa/fmcsa-clearinghouse", "/dot-fmcsa/owner-operators"],
  },
  {
    slug: "random-consortium",
    section: "dot-fmcsa",
    service: "ctpa",
    navLabel: "Random Consortium",
    navBlurb: "Join a managed FMCSA random testing pool.",
    title: "FMCSA random drug testing consortium",
    seoTitle: "FMCSA Random Drug Testing Consortium | Opal Screening",
    description:
      "Join Opal's FMCSA random testing consortium. Scientifically valid selections, unannounced notifications spread through the year and documentation that holds up in an audit.",
    lead:
      "Random testing is the backbone of every FMCSA program. Opal places your drivers in a managed pool, makes selections that meet the federal minimum rates and keeps a clean record of every draw.",
    highlights: [
      { title: "Meets federal rates", body: "Selections are sized to FMCSA's annual minimum random testing rates for drugs and alcohol." },
      { title: "Fair, documented draws", body: "Every covered driver has an equal chance of selection in each draw, and each draw is recorded." },
      { title: "Spread through the year", body: "Unannounced selections throughout the calendar year so testing stays unpredictable." },
    ],
    steps: [
      { title: "Enroll", body: "Add your company and covered drivers." },
      { title: "Selection", body: "Drivers are chosen in scheduled, random draws." },
      { title: "Notification", body: "Your DER is notified and the driver proceeds to collection immediately." },
      { title: "Results", body: "MRO-verified results are reported and recorded." },
    ],
    sections: [
      {
        heading: "How random testing works",
        body: [
          "FMCSA sets minimum annual random testing rates for drug and alcohol testing each calendar year. A consortium combines drivers from many employers into one pool so selections are statistically sound even for one-truck operations.",
          "Once a driver is notified of a selection, they must proceed to the collection site immediately. Opal helps your DER handle the notification and track the test until results are final.",
        ],
        bullets: [
          "Pool updates as you add or remove drivers",
          "Selection history kept for your records",
          "Support when a selected driver is unavailable for a legitimate reason",
        ],
      },
    ],
    faqs: [
      { q: "What are the current FMCSA random testing rates?", a: "FMCSA publishes the minimum annual rates each year in the Federal Register. We size every selection to the rate in effect and can confirm the current figures when you enroll." },
      { q: "Can an owner-operator test themselves randomly?", a: "No. A self-employed driver must be in a pool with other drivers, which is why owner-operators join a consortium." },
      { q: "What happens if I add a driver mid-year?", a: "They join the pool as soon as they are added and are eligible for the next selection. A negative pre-employment test is required before they perform safety-sensitive functions." },
    ],
    related: ["/dot-fmcsa/ctpa-services", "/dot-fmcsa/dot-drug-testing", "/dot-fmcsa/dot-alcohol-testing"],
  },
  {
    slug: "dot-drug-testing",
    section: "dot-fmcsa",
    service: "dot-testing",
    navLabel: "DOT Drug Testing",
    navBlurb: "Federally regulated 5-panel urine testing.",
    title: "DOT drug testing",
    seoTitle: "DOT Drug Testing | 5-Panel Testing Under 49 CFR Part 40",
    description:
      "DOT drug testing for FMCSA-regulated drivers and other covered employees: chain-of-custody collection, certified laboratory analysis and Medical Review Officer verification.",
    lead:
      "DOT drug tests follow a fixed federal procedure from collection to result. Opal coordinates each step so the result you receive is defensible and on file.",
    highlights: [
      { title: "Federal 5-panel", body: "Marijuana, cocaine, amphetamines and methamphetamine, opioids, and PCP." },
      { title: "Chain of custody", body: "Collected by a qualified collector on the Federal Custody and Control Form." },
      { title: "MRO verified", body: "Laboratory results are reviewed by a Medical Review Officer before they reach you." },
    ],
    sections: [
      {
        heading: "When DOT drug tests are required",
        body: ["FMCSA rules call for drug testing in six situations. Opal supports all of them."],
        bullets: [
          "Pre-employment, before a driver performs safety-sensitive functions",
          "Random, through a managed selection pool",
          "Post-accident, when an accident meets the federal criteria",
          "Reasonable suspicion, based on a trained supervisor's observations",
          "Return-to-duty, after a violation and a SAP evaluation",
          "Follow-up, on the schedule set by the Substance Abuse Professional",
        ],
      },
      {
        heading: "What the test covers",
        body: [
          "The DOT panel is set by regulation and cannot be expanded for a DOT test. If you want broader screening for company policy, it must be done as a separate non-DOT test on separate paperwork.",
        ],
      },
    ],
    faqs: [
      { q: "Who must take DOT drug tests under FMCSA rules?", a: "Drivers who operate commercial motor vehicles requiring a CDL in interstate or intrastate commerce are subject to FMCSA testing under 49 CFR Part 382." },
      { q: "Can I add drugs to a DOT test?", a: "No. The DOT panel is fixed. Additional substances require a separate non-DOT test." },
      { q: "Who receives the result?", a: "The Medical Review Officer reports verified results to the employer's designated employer representative, and to the C/TPA where the employer has authorized it." },
    ],
    related: ["/dot-fmcsa/pre-employment-testing", "/dot-fmcsa/random-consortium", "/dot-fmcsa/dot-alcohol-testing"],
  },
  {
    slug: "dot-alcohol-testing",
    section: "dot-fmcsa",
    service: "dot-testing",
    navLabel: "DOT Alcohol Testing",
    navBlurb: "Breath and saliva screening by certified technicians.",
    title: "DOT alcohol testing",
    seoTitle: "DOT Alcohol Testing | Breath Alcohol Testing for CDL Drivers",
    description:
      "DOT alcohol testing performed by qualified Breath Alcohol Technicians and Screening Test Technicians using approved devices, with confirmation testing when required.",
    lead:
      "DOT alcohol tests are performed by trained technicians on approved devices, and any screening result at or above 0.02 is confirmed on an evidential breath testing device.",
    highlights: [
      { title: "Approved devices", body: "Screening on approved breath or saliva devices; confirmation on an evidential breath tester." },
      { title: "Qualified technicians", body: "Tests are conducted by certified BATs and STTs." },
      { title: "Clear outcomes", body: "Results are documented on the DOT Alcohol Testing Form and sent to your DER." },
    ],
    sections: [
      {
        heading: "Understanding results",
        body: ["FMCSA rules set two thresholds that employers need to know."],
        bullets: [
          "0.04 or greater is a violation. The driver is removed from safety-sensitive functions and must complete the return-to-duty process.",
          "0.02 to 0.039 is not a violation, but the driver may not perform safety-sensitive functions for at least 24 hours.",
        ],
      },
      {
        heading: "When alcohol tests apply",
        body: [
          "Alcohol testing applies to random, post-accident, reasonable suspicion, return-to-duty and follow-up situations. Pre-employment alcohol testing is permitted under FMCSA rules but not required.",
        ],
      },
    ],
    faqs: [
      { q: "Is pre-employment alcohol testing required by FMCSA?", a: "No. It is optional, but if you choose to do it, it must be applied uniformly and follow Part 40 procedures." },
      { q: "How long after an accident must an alcohol test happen?", a: "It should be administered within two hours. If it is not, the reason must be documented, and attempts stop after eight hours." },
    ],
    related: ["/dot-fmcsa/dot-drug-testing", "/dot-fmcsa/post-accident-testing", "/dot-fmcsa/reasonable-suspicion-testing"],
  },
  {
    slug: "pre-employment-testing",
    section: "dot-fmcsa",
    service: "dot-testing",
    navLabel: "Pre-Employment Testing",
    navBlurb: "Clear new drivers before day one.",
    title: "DOT pre-employment drug testing",
    seoTitle: "DOT Pre-Employment Drug Testing for CDL Drivers | Opal Screening",
    description:
      "Order DOT pre-employment drug tests for new CDL drivers, with fast scheduling, MRO-verified results and help with the Clearinghouse pre-employment query.",
    lead:
      "A new driver cannot perform safety-sensitive functions until you have a verified negative pre-employment drug test result. Opal makes ordering one straightforward.",
    highlights: [
      { title: "Fast ordering", body: "Send the driver collection instructions as soon as you extend an offer." },
      { title: "Clearinghouse ready", body: "Pair the test with a full pre-employment Clearinghouse query." },
      { title: "Onboarding support", body: "Guidance on previous-employer testing history and required documents." },
    ],
    sections: [
      {
        heading: "Pre-employment checklist",
        body: ["Before a new CDL driver operates a commercial motor vehicle for you:"],
        bullets: [
          "Receive a verified negative DOT pre-employment drug test result",
          "Run a full pre-employment query in the FMCSA Drug & Alcohol Clearinghouse",
          "Request the driver's DOT drug and alcohol testing history from prior employers",
          "Add the driver to your random testing pool",
        ],
      },
    ],
    faqs: [
      { q: "Can a driver start before the result comes back?", a: "No. Under FMCSA rules the employer must receive a verified negative result before the driver performs safety-sensitive functions." },
      { q: "Is there ever an exception?", a: "FMCSA allows an exception in limited circumstances, such as recent participation in a compliant program with no violations. We can walk you through whether it applies." },
    ],
    related: ["/dot-fmcsa/fmcsa-clearinghouse", "/dot-fmcsa/random-consortium", "/dot-fmcsa/fleets"],
  },
  {
    slug: "post-accident-testing",
    section: "dot-fmcsa",
    service: "dot-testing",
    navLabel: "Post-Accident Testing",
    navBlurb: "Know when testing is required and act fast.",
    title: "DOT post-accident testing",
    seoTitle: "DOT Post-Accident Drug & Alcohol Testing | FMCSA Requirements",
    description:
      "Understand when FMCSA requires post-accident drug and alcohol testing, the time limits involved, and how Opal helps you get a driver tested quickly.",
    lead:
      "After a qualifying accident, the testing clock starts immediately. Opal helps you decide whether a test is required and get the driver to a collection site in time.",
    highlights: [
      { title: "Alcohol: 2 to 8 hours", body: "Test within two hours; document any delay; stop attempting after eight hours." },
      { title: "Drugs: within 32 hours", body: "The drug test must be collected within 32 hours of the accident." },
      { title: "Decision support", body: "We help you apply the federal criteria to the facts of the accident." },
    ],
    sections: [
      {
        heading: "When FMCSA requires a post-accident test",
        body: ["Testing is required for the driver when an accident involves:"],
        bullets: [
          "A fatality, in every case",
          "Bodily injury with immediate medical treatment away from the scene, and the driver receives a citation",
          "Disabling damage to any vehicle requiring it to be towed, and the driver receives a citation",
        ],
      },
      {
        heading: "Build a plan before you need it",
        body: [
          "Drivers should carry post-accident instructions and know who to call. Opal can help you put a simple procedure in place so the right test happens within the required window.",
        ],
      },
    ],
    faqs: [
      { q: "Can the driver drink alcohol after an accident?", a: "A driver required to take a post-accident alcohol test may not use alcohol for eight hours following the accident or until tested, whichever comes first." },
      { q: "Will a police test count?", a: "In limited circumstances, tests conducted by law enforcement under their own authority may be used if the results are obtained by the employer. We can help you assess this." },
    ],
    related: ["/dot-fmcsa/dot-alcohol-testing", "/dot-fmcsa/dot-drug-testing", "/resources/fmcsa-compliance-guide"],
  },
  {
    slug: "reasonable-suspicion-testing",
    section: "dot-fmcsa",
    service: "dot-testing",
    navLabel: "Reasonable Suspicion",
    navBlurb: "Testing based on trained supervisor observation.",
    title: "DOT reasonable suspicion testing",
    seoTitle: "DOT Reasonable Suspicion Testing & Supervisor Requirements",
    description:
      "DOT reasonable suspicion drug and alcohol testing, supervisor training requirements and documentation, coordinated by Opal Screening.",
    lead:
      "Reasonable suspicion testing protects everyone on the road, and it has to be done correctly. Opal helps supervisors document observations and get the driver tested.",
    highlights: [
      { title: "Trained supervisors", body: "FMCSA requires at least 60 minutes of drug training and 60 minutes of alcohol training." },
      { title: "Specific observations", body: "Based on appearance, behavior, speech or body odor observed at the time." },
      { title: "Documented promptly", body: "Observations are written down and signed within 24 hours or before results are released." },
    ],
    sections: [
      {
        heading: "Making the call",
        body: [
          "A reasonable suspicion determination must be based on specific, contemporaneous and articulable observations by a trained supervisor or company official. The supervisor who makes the determination should not conduct the alcohol test.",
        ],
      },
    ],
    faqs: [
      { q: "Do supervisors need training?", a: "Yes. Supervisors who make reasonable suspicion determinations for FMCSA-regulated drivers need at least one hour of training on alcohol misuse and one hour on controlled substance use." },
      { q: "Can one person's report trigger a test?", a: "The determination must come from the trained supervisor's own observations. Third-party reports can prompt a supervisor to observe the driver." },
    ],
    related: ["/dot-fmcsa/dot-alcohol-testing", "/dot-fmcsa/return-to-duty-follow-up", "/resources/employer-faq"],
  },
  {
    slug: "return-to-duty-follow-up",
    section: "dot-fmcsa",
    service: "dot-testing",
    navLabel: "Return-to-Duty / Follow-Up",
    navBlurb: "Directly observed testing after a violation.",
    title: "Return-to-duty and follow-up testing",
    seoTitle: "DOT Return-to-Duty & Follow-Up Testing | SAP Process Support",
    description:
      "Return-to-duty and follow-up drug and alcohol testing for drivers completing the DOT Substance Abuse Professional process, with scheduling handled by Opal.",
    lead:
      "After a violation, a driver can only return to safety-sensitive work through the Substance Abuse Professional process. Opal coordinates the directly observed tests that follow.",
    highlights: [
      { title: "Directly observed", body: "Return-to-duty and follow-up collections are directly observed." },
      { title: "At least 6 tests", body: "A minimum of six unannounced follow-up tests in the first 12 months." },
      { title: "Up to 60 months", body: "The SAP may set a follow-up plan that lasts as long as five years." },
    ],
    steps: [
      { title: "Removal", body: "The driver is removed from safety-sensitive functions." },
      { title: "SAP evaluation", body: "A DOT-qualified SAP evaluates and recommends education or treatment." },
      { title: "Return-to-duty test", body: "A negative, directly observed test is required before returning." },
      { title: "Follow-up", body: "Unannounced testing on the SAP's schedule." },
    ],
    sections: [
      {
        heading: "Follow-up plans travel with the driver",
        body: [
          "A follow-up testing plan stays in effect if the driver changes employers. The new employer becomes responsible for completing it, which is one reason the Clearinghouse query matters at hiring.",
        ],
      },
    ],
    faqs: [
      { q: "Does Opal provide SAP services?", a: "We coordinate testing around the SAP process and can help you locate a DOT-qualified Substance Abuse Professional." },
      { q: "Who schedules follow-up tests?", a: "The employer is responsible. As your C/TPA, Opal can manage the schedule so tests stay unannounced and on plan." },
    ],
    related: ["/dot-fmcsa/fmcsa-clearinghouse", "/dot-fmcsa/reasonable-suspicion-testing", "/dot-fmcsa/ctpa-services"],
  },
  {
    slug: "fmcsa-clearinghouse",
    section: "dot-fmcsa",
    service: "clearinghouse",
    navLabel: "FMCSA Clearinghouse",
    navBlurb: "Designation, queries and reporting support.",
    title: "FMCSA Drug & Alcohol Clearinghouse support",
    seoTitle: "FMCSA Clearinghouse C/TPA Support | Queries & Reporting",
    description:
      "Get help with the FMCSA Drug & Alcohol Clearinghouse: employer registration, C/TPA designation, pre-employment and annual queries, and required reporting.",
    lead:
      "The Clearinghouse is a federal database of CDL drug and alcohol program violations. Opal helps you register, designate us as your C/TPA and stay on top of queries.",
    highlights: [
      { title: "Registration help", body: "We walk you through employer setup and C/TPA designation." },
      { title: "Queries on time", body: "Full queries before hiring and at least annual queries for every driver." },
      { title: "Reporting support", body: "Guidance on what employers report and when." },
    ],
    sections: [
      {
        heading: "Employer Clearinghouse duties",
        body: [],
        bullets: [
          "Run a full query, with the driver's electronic consent, before hiring a CDL driver",
          "Run a query at least once a year for every CDL driver you employ",
          "Report violations the rules require employers to report, such as refusals and actual knowledge",
          "Owner-operators must designate a C/TPA to report on their behalf",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Violations stay in the Clearinghouse until the driver completes the return-to-duty process and any follow-up plan, and for at least five years. A driver in prohibited status may not perform safety-sensitive functions and may lose commercial driving privileges on their license until return-to-duty is complete.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between a full and a limited query?", a: "A full query shows the details of any violations and requires the driver's electronic consent in the Clearinghouse. A limited query only shows whether information exists and uses a general written consent. If a limited query returns information, a full query must follow within 24 hours." },
      { q: "Do I pay FMCSA for queries?", a: "FMCSA sells query plans directly through the Clearinghouse. Opal's support covers setup and administration; query plan fees are paid to FMCSA." },
    ],
    related: ["/dot-fmcsa/pre-employment-testing", "/dot-fmcsa/owner-operators", "/dot-fmcsa/ctpa-services"],
  },
  {
    slug: "owner-operators",
    section: "dot-fmcsa",
    service: "ctpa",
    navLabel: "Owner-Operators",
    navBlurb: "Everything a one-truck operation needs.",
    title: "Drug testing for owner-operators",
    seoTitle: "Owner-Operator Drug Testing Consortium | DOT Compliance",
    description:
      "DOT drug testing consortium membership for owner-operators: random pool enrollment, pre-employment testing, Clearinghouse C/TPA designation and records you can show an auditor.",
    lead:
      "When you are the company and the driver, your drug and alcohol program still has to meet FMCSA rules. Opal gives you a compliant program without the administrative weight.",
    highlights: [
      { title: "Consortium enrollment", body: "Join a managed random pool, which self-employed drivers are required to do." },
      { title: "C/TPA designation", body: "Designate Opal in the Clearinghouse so required reporting is covered." },
      { title: "Audit-ready records", body: "Your enrollment, selection history and results in one place." },
    ],
    steps: [
      { title: "Enroll", body: "Tell us about your authority and operation." },
      { title: "Pre-employment test", body: "Take your own DOT pre-employment test." },
      { title: "Designate Opal", body: "Name Opal as your C/TPA in the Clearinghouse." },
      { title: "Stay ready", body: "We handle random selections and keep your records." },
    ],
    sections: [
      {
        heading: "Built for new authorities",
        body: [
          "Drug and alcohol program requirements are part of what FMCSA reviews during a new entrant safety audit. Getting your program in place early means one less thing to scramble for.",
        ],
      },
    ],
    faqs: [
      { q: "I'm the only driver. Do I really need a consortium?", a: "Yes. A self-employed CDL driver must belong to a random testing pool that includes other drivers, which a consortium provides." },
      { q: "Can I enroll before my authority is active?", a: "Yes. Many owner-operators set up their program while their authority is pending so they are ready on day one." },
    ],
    related: ["/dot-fmcsa/random-consortium", "/dot-fmcsa/fmcsa-clearinghouse", "/pricing"],
  },
  {
    slug: "fleets",
    section: "dot-fmcsa",
    service: "ctpa",
    navLabel: "Fleets",
    navBlurb: "Program management for motor carriers.",
    title: "DOT compliance for motor carriers and fleets",
    seoTitle: "Fleet Drug Testing & Driver Compliance | Motor Carriers",
    description:
      "DOT drug and alcohol program management for small and growing fleets: random pool administration, testing across your operating area, Clearinghouse support and driver onboarding.",
    lead:
      "As your fleet grows, so does the paperwork. Opal manages your testing program across every driver and location, and keeps your records ready for review.",
    highlights: [
      { title: "One program, every driver", body: "Pool management and test tracking across your entire roster." },
      { title: "Nationwide collections", body: "Send drivers to a collection site near their route or home terminal." },
      { title: "Onboarding support", body: "Pre-employment testing and Clearinghouse queries for new hires." },
      { title: "Driver files (soon)", body: "DQ file management, MVRs and PSP reports are in development." },
    ],
    sections: [
      {
        heading: "Driver qualification, coming next",
        body: [
          "Alongside testing, carriers must maintain driver qualification files under 49 CFR Part 391. We are building DQ file management, MVR ordering and PSP reports into the Opal platform. Join the waitlist to hear when they launch.",
        ],
      },
    ],
    faqs: [
      { q: "Can I keep my own random pool?", a: "Yes. Some carriers run their own pool and use Opal for collections and administration. We'll help you choose the structure that fits." },
      { q: "Do you support multiple terminals?", a: "Yes. Drivers can be grouped by location so each manager sees what they need." },
    ],
    related: ["/dot-fmcsa/ctpa-services", "/dot-fmcsa/pre-employment-testing", "/pricing"],
  },

  /* ─────────────────────────── EMPLOYER SCREENING ─────────────────────────── */
  {
    slug: "non-dot-drug-testing",
    section: "employers",
    service: "non-dot",
    navLabel: "Non-DOT Drug Testing",
    navBlurb: "Workplace testing built around your policy.",
    title: "Non-DOT workplace drug testing",
    seoTitle: "Workplace Drug Testing & Employer Drug Screening | Opal",
    description:
      "Non-DOT workplace drug testing for employers: customizable panels, pre-employment, random and post-incident programs, and MRO review.",
    lead:
      "Outside DOT rules, you decide what your program tests for and when. Opal helps you design a workplace testing program that fits your policy, your workforce and applicable state laws.",
    highlights: [
      { title: "Your panel, your choice", body: "Choose from standard and expanded panels, including fentanyl." },
      { title: "Flexible specimens", body: "Lab-based urine, plus other specimen types where permitted." },
      { title: "MRO review", body: "Positive lab results reviewed by a Medical Review Officer." },
    ],
    sections: [
      {
        heading: "Common program types",
        body: [],
        bullets: [
          "Pre-employment screening for new hires",
          "Random testing programs for policy compliance",
          "Post-incident and reasonable suspicion testing",
          "Return-to-work testing",
        ],
      },
      {
        heading: "State laws matter",
        body: [
          "Workplace testing rules vary by state, including rules about marijuana, notice and instant testing. We'll point out the questions to raise with your counsel as you set policy.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use the same program for DOT and non-DOT employees?", a: "You can work with one provider for both, but DOT and non-DOT tests must be kept separate, with separate forms and panels." },
      { q: "What panel should I choose?", a: "It depends on your industry, policy and state requirements. Many employers start with a 5- or 10-panel test and add specific substances as needed." },
    ],
    related: ["/employers/alcohol-testing", "/employers/background-screening", "/resources/employer-faq"],
  },
  {
    slug: "alcohol-testing",
    section: "employers",
    service: "non-dot",
    navLabel: "Alcohol Testing",
    navBlurb: "Breath and saliva alcohol testing.",
    title: "Workplace alcohol testing",
    seoTitle: "Workplace Alcohol Testing for Employers | Opal Screening",
    description:
      "Breath and saliva alcohol testing for non-DOT workplace programs, including reasonable suspicion and post-incident testing.",
    lead:
      "Alcohol testing gives employers a clear, immediate answer when safety is in question. Opal coordinates breath and saliva testing for workplace programs.",
    highlights: [
      { title: "Breath testing", body: "Evidential breath testing for clear, documented results." },
      { title: "Saliva screening", body: "Quick screening where your policy allows." },
      { title: "Policy aligned", body: "Thresholds and actions set by your written policy." },
    ],
    sections: [
      {
        heading: "When employers test for alcohol",
        body: [],
        bullets: ["Reasonable suspicion", "Post-incident", "Random programs", "Return-to-work and follow-up"],
      },
    ],
    faqs: [
      { q: "Is a DOT alcohol test different?", a: "Yes. DOT alcohol tests follow 49 CFR Part 40 procedures and federal thresholds. Workplace alcohol tests follow your policy and applicable state law." },
    ],
    related: ["/employers/non-dot-drug-testing", "/dot-fmcsa/dot-alcohol-testing", "/resources/employer-faq"],
  },
  {
    slug: "background-screening",
    section: "employers",
    service: "background",
    navLabel: "Background Screening",
    navBlurb: "Employment background checks.",
    title: "Employment background screening",
    seoTitle: "Employment Background Checks & Screening | Opal Screening",
    description:
      "Employment background screening for employers: criminal record searches, employment and education verification and a compliant adverse action workflow.",
    lead:
      "Hiring decisions are better with the full picture. Opal is building background screening into the same platform you use for testing.",
    highlights: [
      { title: "Criminal searches", body: "County, state and national record searches." },
      { title: "Verifications", body: "Employment and education history." },
      { title: "FCRA workflow", body: "Disclosure, authorization and adverse action steps built in." },
    ],
    sections: [
      {
        heading: "Compliance first",
        body: [
          "Employment background checks are consumer reports under the Fair Credit Reporting Act. Our workflow is designed around the required disclosure, authorization and adverse action steps, plus state and local requirements.",
        ],
      },
    ],
    faqs: [
      { q: "When will background screening be available?", a: "We are finalizing this service now. Join the waitlist and we'll let you know as soon as it launches." },
    ],
    related: ["/employers/non-dot-drug-testing", "/employers/occupational-health", "/get-started"],
  },
  {
    slug: "occupational-health",
    section: "employers",
    service: "occupational-health",
    navLabel: "Occupational Health",
    navBlurb: "Physicals, TB testing, fit testing and more.",
    title: "Occupational health services",
    seoTitle: "DOT Physicals & Occupational Health Services | Opal Screening",
    description:
      "Occupational health services through Opal: DOT physicals, employer physicals, TB testing, vaccinations and respirator fit testing, where available.",
    lead:
      "From DOT physicals to respirator fit testing, Opal is bringing occupational health services into the same place you manage screening.",
    highlights: [
      { title: "DOT physicals", body: "Exams by certified medical examiners listed on the National Registry." },
      { title: "Employer physicals", body: "Pre-placement and job-specific exams." },
      { title: "TB, vaccines, fit testing", body: "Common workplace health requirements, where available." },
    ],
    sections: [
      {
        heading: "Availability",
        body: [
          "Occupational health services depend on clinic availability in each area. We'll confirm what's offered near your employees when you place an order.",
        ],
      },
    ],
    faqs: [
      { q: "Who can perform a DOT physical?", a: "Only a medical examiner certified and listed on FMCSA's National Registry of Certified Medical Examiners." },
      { q: "When will these services be available?", a: "We are finalizing our network now. Join the waitlist for launch updates." },
    ],
    related: ["/employers/non-dot-drug-testing", "/dot-fmcsa/fleets", "/get-started"],
  },
];

export function getTopic(section: TopicSection, slug: string) {
  return topics.find((t) => t.section === section && t.slug === slug);
}

export function topicsIn(section: TopicSection) {
  return topics.filter((t) => t.section === section);
}

export const topicHref = (t: Topic) => `/${t.section}/${t.slug}`;
