import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";
import PostList from "@/components/blog/PostList";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "文章",
  description: "技术思考与生活随笔",
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return (
    <div className="mx-auto max-w-[900px] px-6 py-16">
      <ScrollReveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark"
        >
          <span className="text-bamboo-light">—</span> 返回
        </Link>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex items-center gap-4 mt-12 mb-10">
          <h1
            className="font-serif text-2xl font-semibold text-text tracking-[0.3em]"
            style={{ writingMode: "vertical-rl" }}
          >
            文章
          </h1>
          <div className="border-l-2 border-bamboo-light pl-3">
            <span className="text-xs text-text-light tracking-widest">WRITING</span>
            <p className="mt-2 text-sm text-text-secondary leading-7">
              记录技术探索与生活感悟，<br />每一篇都是一段思考的旅程。
            </p>
          </div>
        </div>
      </ScrollReveal>

      <PostList posts={posts} tags={tags} />
    </div>
  );
}
