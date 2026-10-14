import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FaqGroups } from "@/components/FaqGroups";
import { CtaBand } from "@/components/home/CtaBand";
import { employerFaq } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Employer FAQ | Setting Up a Drug Testing Program",
  description: "Answers for employers on starting and running DOT and workplace drug testing programs: DERs, policies, random selection, recordkeeping and working with Opal.",
  alternates: { canonical: "/resources/employer-faq" },
};

export default function EmployerFaq() {
  return (
    <>
      <PageHero crumbs={[{ label: "Resources", href: "/resources" }, { label: "Employer FAQ", href: "/resources/employer-faq" }]} title="Employer FAQ" lead="Setting up, running and maintaining a screening program." />
      <FaqGroups groups={employerFaq} />
      <div className="bg-mist pb-4"><CtaBand /></div>
    </>
  );
}
