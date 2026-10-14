import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { topics, topicHref } from "@/data/topics";
import { isServiceVisible } from "@/data/services";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    ["", 1],
    ["/dot-fmcsa", 0.9],
    ["/employers", 0.9],
    ["/services", 0.8],
    ["/pricing", 0.8],
    ["/get-started", 0.8],
    ["/resources", 0.6],
    ["/resources/fmcsa-compliance-guide", 0.7],
    ["/resources/drug-testing-faq", 0.6],
    ["/resources/employer-faq", 0.6],
    ["/resources/blog", 0.5],
    ["/about", 0.5],
    ["/contact", 0.6],
  ] as const;
  return [
    ...staticPaths.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified: now, priority })),
    ...topics.filter((t) => isServiceVisible(t.service)).map((t) => ({ url: `${site.url}${topicHref(t)}`, lastModified: now, priority: 0.8 })),
    ...posts.map((p) => ({ url: `${site.url}/resources/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.5 })),
  ];
}
