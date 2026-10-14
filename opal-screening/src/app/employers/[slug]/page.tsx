import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPage } from "@/components/TopicPage";
import { getTopic, topicsIn } from "@/data/topics";
import { isServiceVisible } from "@/data/services";

const SECTION = "employers" as const;

export function generateStaticParams() {
  return topicsIn(SECTION).filter((t) => isServiceVisible(t.service)).map((t) => ({ slug: t.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = getTopic(SECTION, (await params).slug);
  if (!t) return {};
  return {
    title: { absolute: t.seoTitle },
    description: t.description,
    alternates: { canonical: `/${SECTION}/${t.slug}` },
    openGraph: { title: t.seoTitle, description: t.description, url: `/${SECTION}/${t.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTopic(SECTION, (await params).slug);
  if (!t || !isServiceVisible(t.service)) notFound();
  return <TopicPage topic={t} />;
}
