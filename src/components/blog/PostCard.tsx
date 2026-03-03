import Link from "next/link";
import { Post } from "@/types/post";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-8 py-6 border-b border-border transition-all hover:pl-2"
    >
      <div className="text-sm text-text-light font-serif pt-0.5">
        {formatDate(post.date).slice(5)}
        <span className="block text-xs mt-0.5 tracking-wider">
          {formatDate(post.date).slice(0, 5)}
        </span>
      </div>
      <div>
        <h3 className="font-serif text-base font-semibold text-text transition-colors group-hover:text-bamboo-dark">
          {post.title}
        </h3>
        <p className="mt-1 text-sm text-text-muted leading-7 line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs text-text-light">{post.readingTime} 分钟</span>
          <div className="flex gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-bamboo border border-border px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
