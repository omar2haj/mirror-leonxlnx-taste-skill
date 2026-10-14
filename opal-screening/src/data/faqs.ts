export type Faq = { q: string; a: string };

export const drugTestingFaq: { group: string; items: Faq[] }[] = [
  {
    group: "The basics",
    items: [
      { q: "What is the difference between a DOT and a non-DOT drug test?", a: "A DOT test is required by federal regulation for safety-sensitive transportation employees and follows 49 CFR Part 40, with a fixed panel and federal forms. A non-DOT test is conducted under an employer's own policy, with a panel the employer chooses." },
      { q: "What does a DOT drug test screen for?", a: "Marijuana, cocaine, amphetamines and methamphetamine, opioids, and phencyclidine (PCP). The panel is set by regulation." },
      { q: "How long do results take?", a: "Negative results are often available within one to three business days after collection. Results that need laboratory confirmation or Medical Review Officer follow-up take longer." },
      { q: "What is a Medical Review Officer?", a: "A licensed physician who reviews laboratory results, speaks with the donor about any legitimate medical explanation, and verifies the final result before it is reported to the employer." },
    ],
  },
  {
    group: "At the collection site",
    items: [
      { q: "What should a donor bring?", a: "A government-issued photo ID and any paperwork or donor pass provided with the order." },
      { q: "What happens if a donor cannot provide enough specimen?", a: "DOT procedures allow up to three hours and up to 40 ounces of fluid to provide a sufficient specimen. If the donor still cannot, a medical evaluation follows." },
      { q: "What counts as a refusal?", a: "Examples include failing to appear within a reasonable time, leaving before the test is complete, failing to cooperate, or adulterating or substituting a specimen. Under DOT rules, a refusal carries the same consequences as a positive test." },
    ],
  },
  {
    group: "Results",
    items: [
      { q: "What is a dilute result?", a: "A specimen with unusually low creatinine and specific gravity. Depending on the values and the employer's policy, a recollection may be required." },
      { q: "Can prescription medication cause a positive?", a: "Some can. The Medical Review Officer contacts the donor to verify any legitimate prescription before reporting a result. Marijuana remains prohibited under DOT rules regardless of state law." },
    ],
  },
];

export const employerFaq: { group: string; items: Faq[] }[] = [
  {
    group: "Getting set up",
    items: [
      { q: "How do I start a DOT drug and alcohol program?", a: "Adopt a written policy, designate an employer representative (DER), enroll covered drivers in a random pool, register in the FMCSA Clearinghouse, and make sure supervisors are trained for reasonable suspicion. Opal can help with each step." },
      { q: "What is a DER?", a: "The Designated Employer Representative is the person authorized to receive test results, remove employees from safety-sensitive duty and make program decisions for the company." },
      { q: "Do I need a written policy?", a: "Yes for DOT programs, and strongly recommended for non-DOT programs. Your policy explains who is tested, when, and what happens after a violation." },
    ],
  },
  {
    group: "Running the program",
    items: [
      { q: "How are random selections made?", a: "Through a scientifically valid method where every covered employee has an equal chance of selection in each draw. Selections are unannounced and spread throughout the year." },
      { q: "What records do I need to keep?", a: "Record retention periods vary by document, from one year for negative results up to five years for violations and program summaries. We keep program records organized and available on request." },
      { q: "Can I test non-DOT employees under my DOT program?", a: "No. Employees not covered by DOT rules must be tested under a separate non-DOT program with separate paperwork." },
    ],
  },
  {
    group: "Working with Opal",
    items: [
      { q: "Do you have collection sites near my employees?", a: "We coordinate testing through a nationwide network of third-party collection sites. We'll confirm site options near your locations during setup." },
      { q: "How is pricing structured?", a: "Programs combine an annual C/TPA or consortium membership with tests and services ordered as needed. Contact us for current pricing." },
    ],
  },
];
