import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { compileMdxContent } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import TOC from "@/components/blog/TOC";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const content = await compileMdxContent(post.content);

  return (
    <div className="mx-auto max-w-[900px] px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark"
      >
        <span className="text-bamboo-light">—</span> 返回文章列表
      </Link>

      <article className="mt-12">
        <header className="mb-12 border-b border-border pb-10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-bamboo border border-border px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-serif text-2xl font-bold text-text md:text-3xl leading-relaxed">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-xs text-text-muted tracking-wider">
            <span>{formatDate(post.date)}</span>
            <span className="text-border">|</span>
            <span>{post.readingTime} 分钟阅读</span>
          </div>
        </header>

        <div className="flex gap-12">
          <div className="prose prose-lg min-w-0 max-w-none flex-1 font-serif">
            {content}
          </div>
          <TOC />
        </div>
      </article>
    </div>
  );
}
