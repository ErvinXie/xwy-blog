"use client";

import { useState, useMemo } from "react";
import { Post } from "@/types/post";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  tags: string[];
}

export default function PostList({ posts, tags }: PostListProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesTag = !activeTag || post.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, search, activeTag]);

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="搜索文章..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-border bg-bg-card py-2.5 px-4 text-sm text-text placeholder:text-text-light focus:border-bamboo focus:outline-none rounded-none"
        />
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1 text-xs border transition-colors rounded-none ${
            activeTag === null
              ? "border-bamboo-dark text-bamboo-dark bg-bamboo/[0.06]"
              : "border-border text-text-muted hover:text-text hover:border-bamboo-light"
          }`}
        >
          全部
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-3 py-1 text-xs border transition-colors rounded-none ${
              activeTag === tag
                ? "border-bamboo-dark text-bamboo-dark bg-bamboo/[0.06]"
                : "border-border text-text-muted hover:text-text hover:border-bamboo-light"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div className="mt-8 flex flex-col">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-text-muted font-serif">
          没有找到匹配的文章
        </p>
      )}
    </div>
  );
}
