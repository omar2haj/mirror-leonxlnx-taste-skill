import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FaqGroups } from "@/components/FaqGroups";
import { CtaBand } from "@/components/home/CtaBand";
import { drugTestingFaq } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Drug Testing FAQ | DOT & Workplace Drug Tests Explained",
  description: "Answers to common questions about DOT and non-DOT drug tests: what is tested, collection procedures, results timing, dilute specimens and MRO review.",
  alternates: { canonical: "/resources/drug-testing-faq" },
};

export default function DrugTestingFaq() {
  return (
    <>
      <PageHero crumbs={[{ label: "Resources", href: "/resources" }, { label: "Drug Testing FAQ", href: "/resources/drug-testing-faq" }]} title="Drug testing FAQ" lead="What to expect before, during and after a drug test." />
      <FaqGroups groups={drugTestingFaq} />
      <div className="bg-mist pb-4"><CtaBand /></div>
    </>
  );
}
