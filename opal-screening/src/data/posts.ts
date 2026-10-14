/**
 * Blog posts. Body uses simple blocks so posts can later move to a CMS
 * without changing the page template.
 */
export type PostBlock = { type: "p" | "h2" | "li"; text: string };
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  category: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "owner-operator-drug-testing-checklist",
    title: "The owner-operator drug testing checklist",
    description: "What a one-truck operation needs in place to run a compliant FMCSA drug and alcohol program.",
    date: "2026-10-14",
    readMinutes: 4,
    category: "FMCSA",
    body: [
      { type: "p", text: "Getting your own authority means you are the employer and the driver at the same time. FMCSA's drug and alcohol rules apply to you in both roles, and the good news is that the list of requirements is short and predictable." },
      { type: "h2", text: "1. Join a random testing consortium" },
      { type: "p", text: "A self-employed driver cannot run a random pool of one. FMCSA requires you to be in a pool with other drivers, which is exactly what a consortium managed by a C/TPA provides." },
      { type: "h2", text: "2. Take a pre-employment test" },
      { type: "p", text: "Before you perform safety-sensitive functions under your own authority, you need a verified negative DOT pre-employment drug test." },
      { type: "h2", text: "3. Register in the Clearinghouse and designate a C/TPA" },
      { type: "p", text: "Owner-operators register as employers in the FMCSA Drug & Alcohol Clearinghouse and must designate a C/TPA. Your C/TPA can then support required queries and reporting." },
      { type: "h2", text: "4. Keep your records together" },
      { type: "p", text: "Keep your consortium enrollment, policy, test results and Clearinghouse records where you can find them. They are part of what a safety auditor reviews." },
      { type: "li", text: "Consortium enrollment confirmation" },
      { type: "li", text: "Written drug and alcohol policy" },
      { type: "li", text: "Pre-employment test result" },
      { type: "li", text: "Clearinghouse registration and C/TPA designation" },
    ],
  },
  {
    slug: "full-vs-limited-clearinghouse-queries",
    title: "Full vs. limited Clearinghouse queries, explained",
    description: "When each query type is required, how driver consent works, and what to do when a limited query returns information.",
    date: "2026-10-14",
    readMinutes: 3,
    category: "Clearinghouse",
    body: [
      { type: "p", text: "The FMCSA Drug & Alcohol Clearinghouse offers two kinds of employer queries. Knowing which one to use, and when, keeps you compliant and avoids surprises at hiring." },
      { type: "h2", text: "Full query" },
      { type: "p", text: "A full query shows the details of any drug and alcohol program violations in a driver's record. It requires the driver's specific electronic consent inside the Clearinghouse, and it is required before you hire a CDL driver." },
      { type: "h2", text: "Limited query" },
      { type: "p", text: "A limited query only tells you whether information exists. It uses a general written consent that can cover multiple years, and it satisfies the requirement to query each employed driver at least once a year." },
      { type: "h2", text: "When a limited query returns information" },
      { type: "p", text: "You must run a full query within 24 hours. If the driver does not provide electronic consent, they may not perform safety-sensitive functions until the full query is completed." },
    ],
  },
  {
    slug: "post-accident-testing-time-limits",
    title: "Post-accident testing: the time limits that matter",
    description: "The two-hour, eight-hour and 32-hour windows for FMCSA post-accident testing, and how to prepare your drivers.",
    date: "2026-10-14",
    readMinutes: 3,
    category: "Testing",
    body: [
      { type: "p", text: "Post-accident testing is where good programs prove themselves. The rules give you narrow windows, and the best time to plan for them is before anything happens." },
      { type: "h2", text: "Alcohol: two hours, then eight" },
      { type: "p", text: "A required post-accident alcohol test should be administered within two hours. If it is not, document why. If it still has not happened within eight hours, stop attempting and document the reasons." },
      { type: "h2", text: "Drugs: 32 hours" },
      { type: "p", text: "A required post-accident drug test must be collected within 32 hours. After that, document why the test was not performed." },
      { type: "h2", text: "Give drivers a plan" },
      { type: "p", text: "Put post-accident instructions in every cab: who to call, what qualifies, and where to go. A simple card prevents most missed tests." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
