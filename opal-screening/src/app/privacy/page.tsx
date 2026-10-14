import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

// TODO: replace with counsel-approved Privacy Policy before launch.
export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="bg-paper py-16 md:py-24">
        <div className="container-x prose-opal max-w-[68ch]">
          <p>Our Privacy Policy is being finalized and will be published here before launch.</p>
          {site.contact.email && (
            <p>
              Questions in the meantime? Email <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
