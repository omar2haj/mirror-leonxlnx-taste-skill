import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

// TODO: replace with counsel-approved Terms of Use before launch.
export default function Page() {
  return (
    <>
      <PageHero title="Terms of Use" />
      <section className="bg-paper py-16 md:py-24">
        <div className="container-x prose-opal max-w-[68ch]">
          <p>Our Terms of Use is being finalized and will be published here before launch.</p>
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
