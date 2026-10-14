import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getPost, posts, type PostBlock } from "@/data/posts";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/resources/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, publishedTime: p.date },
  };
}

function renderBlocks(blocks: PostBlock[]) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) out.push(<ul key={`ul-${out.length}`}>{list.map((t) => <li key={t}>{t}</li>)}</ul>);
    list = [];
  };
  blocks.forEach((b, i) => {
    if (b.type === "li") return void list.push(b.text);
    flush();
    out.push(b.type === "h2" ? <h2 key={i}>{b.text}</h2> : <p key={i}>{b.text}</p>);
  });
  flush();
  return out;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.description, datePublished: p.date, author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name } }} />
      <PageHero crumbs={[{ label: "Resources", href: "/resources" }, { label: "Blog", href: "/resources/blog" }, { label: p.title, href: `/resources/blog/${p.slug}` }]} title={p.title} lead={p.description} />
      <section className="bg-paper py-16 md:py-24">
        <article className="container-x">
          <p className="mb-10 text-[0.86rem] text-slate-550">
            <span className="font-semibold text-opal-700">{p.category}</span> · {p.readMinutes} min read
          </p>
          <div className="prose-opal max-w-[68ch]">{renderBlocks(p.body)}</div>
          <p className="mt-12 max-w-[68ch] border-t border-slate-200 pt-6 text-[0.86rem] text-slate-550">This article is general information, not legal advice. Check current FMCSA and DOT regulations for your situation.</p>
        </article>
      </section>
      <div className="bg-mist pb-4 pt-10"><CtaBand /></div>
    </>
  );
}
