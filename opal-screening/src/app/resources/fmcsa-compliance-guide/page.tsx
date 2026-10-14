import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "FMCSA Drug & Alcohol Compliance Guide for Carriers",
  description:
    "A plain-language guide to FMCSA drug and alcohol testing: who is covered, the six test types, random testing, the Clearinghouse, supervisor training, recordkeeping and return-to-duty.",
  alternates: { canonical: "/resources/fmcsa-compliance-guide" },
};

const toc = [
  ["covered", "Who is covered"],
  ["building-blocks", "The building blocks of a program"],
  ["prohibited", "Prohibited conduct"],
  ["test-types", "The six DOT test types"],
  ["random", "Random testing"],
  ["clearinghouse", "The Drug & Alcohol Clearinghouse"],
  ["training", "Supervisor training and driver education"],
  ["records", "Recordkeeping"],
  ["violations", "After a violation"],
] as const;

export default function Guide() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "FMCSA Drug & Alcohol Compliance Guide", author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name } }} />
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "FMCSA Compliance Guide", href: "/resources/fmcsa-compliance-guide" }]}
        title="FMCSA drug & alcohol compliance guide"
        lead="What a motor carrier or owner-operator needs in place to meet FMCSA's drug and alcohol testing rules, in plain language."
      />
      <section className="bg-paper py-16 md:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="On this page" className="lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:self-start">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-slate-550">On this page</p>
            <ol className="mt-4 space-y-2.5 border-l border-slate-200">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px block border-l border-transparent pl-4 text-[0.9rem] text-slate-650 hover:border-opal-600 hover:text-ink-950">{label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="prose-opal max-w-[70ch]">
            <p className="text-[1.15rem] text-ink-800">
              FMCSA&apos;s drug and alcohol rules live in <strong>49 CFR Part 382</strong>, and the testing procedures every DOT agency follows are in <strong>49 CFR Part 40</strong>. This guide summarizes the essentials. It is not legal advice; always check the current regulations at FMCSA and the Office of Drug and Alcohol Policy and Compliance.
            </p>

            <h2 id="covered">Who is covered</h2>
            <p>Part 382 applies to employers and drivers who operate commercial motor vehicles that require a commercial driver&apos;s license, in interstate or intrastate commerce. Generally that includes vehicles that:</p>
            <ul>
              <li>Have a gross combination or gross vehicle weight rating of 26,001 pounds or more</li>
              <li>Are designed to transport 16 or more passengers, including the driver</li>
              <li>Transport hazardous materials in quantities that require placarding</li>
            </ul>
            <p>An owner-operator who employs themselves is both the employer and the driver, and must meet the employer obligations too.</p>

            <h2 id="building-blocks">The building blocks of a program</h2>
            <ul>
              <li><strong>A written policy</strong> that explains testing, prohibited conduct and consequences, distributed to every driver.</li>
              <li><strong>A Designated Employer Representative (DER)</strong> who receives results and can remove drivers from safety-sensitive functions.</li>
              <li><strong>A random testing program</strong>, run in-house or through a consortium managed by a C/TPA. Owner-operators must use a consortium.</li>
              <li><strong>Qualified service agents</strong>: collectors, HHS-certified laboratories, a Medical Review Officer, alcohol technicians and access to a Substance Abuse Professional.</li>
              <li><strong>Clearinghouse registration</strong> and the queries and reporting that go with it.</li>
            </ul>

            <h2 id="prohibited">Prohibited conduct</h2>
            <p>Drivers may not perform safety-sensitive functions while:</p>
            <ul>
              <li>Having an alcohol concentration of 0.04 or greater, or using alcohol while on duty</li>
              <li>Within four hours of using alcohol</li>
              <li>Using a controlled substance, except as prescribed and with a physician&apos;s advice that it will not affect safe operation (marijuana is not permitted under DOT rules)</li>
              <li>After refusing a required test</li>
            </ul>
            <p>A driver with an alcohol result of 0.02 to 0.039 must be removed from safety-sensitive functions for at least 24 hours.</p>

            <h2 id="test-types">The six DOT test types</h2>
            <h3>Pre-employment</h3>
            <p>A verified negative drug test result is required before a driver first performs safety-sensitive functions. Pre-employment alcohol testing is optional.</p>
            <h3>Random</h3>
            <p>Unannounced tests using a scientifically valid selection method, spread reasonably throughout the year.</p>
            <h3>Post-accident</h3>
            <p>Required after an accident involving a fatality, or involving injury treated away from the scene or disabling vehicle damage when the driver receives a citation. Alcohol tests should be done within two hours and are not attempted after eight; drug tests within 32 hours.</p>
            <h3>Reasonable suspicion</h3>
            <p>Based on specific, contemporaneous observations by a trained supervisor about the driver&apos;s appearance, behavior, speech or body odor.</p>
            <h3>Return-to-duty</h3>
            <p>A directly observed test after a violation, once the Substance Abuse Professional has determined the driver has followed their recommendations.</p>
            <h3>Follow-up</h3>
            <p>At least six unannounced, directly observed tests in the first 12 months after return to duty, and up to 60 months as directed by the SAP.</p>

            <h2 id="random">Random testing</h2>
            <p>FMCSA sets minimum annual random testing rates for drugs and alcohol and publishes them each year. Every driver in the pool must have an equal chance of selection in each draw, and a selected driver must proceed to the collection site immediately after notification. Consortiums make this practical for small carriers by combining drivers from many employers into one pool.</p>

            <h2 id="clearinghouse">The Drug & Alcohol Clearinghouse</h2>
            <p>The Clearinghouse is FMCSA&apos;s database of CDL drug and alcohol program violations. Employers must:</p>
            <ul>
              <li>Run a full query, with the driver&apos;s electronic consent, before hiring a CDL driver</li>
              <li>Query every employed CDL driver at least once a year</li>
              <li>Report the violations employers are responsible for, such as refusals and actual knowledge of prohibited use</li>
            </ul>
            <p>Owner-operators must designate a C/TPA in the Clearinghouse. Drivers in prohibited status cannot perform safety-sensitive functions until they complete the return-to-duty process.</p>

            <h2 id="training">Supervisor training and driver education</h2>
            <p>Supervisors who may make reasonable suspicion determinations need at least 60 minutes of training on alcohol misuse and 60 minutes on controlled substance use. Employers must also give drivers educational materials explaining the requirements and the company&apos;s policy.</p>

            <h2 id="records">Recordkeeping</h2>
            <p>Retention periods depend on the record. In summary:</p>
            <ul>
              <li><strong>Five years:</strong> alcohol results of 0.02 or greater, verified positive drug results, refusals, SAP evaluations and referrals, and annual calendar-year summaries</li>
              <li><strong>Two years:</strong> records related to the collection process</li>
              <li><strong>One year:</strong> negative and canceled drug results and alcohol results below 0.02</li>
              <li><strong>Training records:</strong> while the person performs the trained function, plus two years</li>
            </ul>

            <h2 id="violations">After a violation</h2>
            <p>A driver who violates the rules must be removed from safety-sensitive functions immediately and given a list of DOT-qualified Substance Abuse Professionals. Before returning, the driver must complete the SAP&apos;s recommended education or treatment and pass a directly observed return-to-duty test. Follow-up testing then continues on the SAP&apos;s schedule, even if the driver changes employers.</p>
          </article>
        </div>
      </section>
      <div className="bg-mist pb-4 pt-10"><CtaBand title="Want this handled for you?" sub="Opal can run your FMCSA program as your C/TPA." /></div>
    </>
  );
}
