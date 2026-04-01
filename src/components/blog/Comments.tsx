"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
};

const isConfigured = Object.values(giscusConfig).every(Boolean);

function resolveTheme() {
  const configuredTheme = process.env.NEXT_PUBLIC_GISCUS_THEME;

  if (
    configuredTheme &&
    configuredTheme !== "preferred_color_scheme" &&
    configuredTheme !== "light"
  ) {
    return configuredTheme;
  }

  if (typeof window !== "undefined") {
    return `${window.location.origin}/giscus-bamboo.css`;
  }

  return "light";
}

export default function Comments() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isConfigured || !containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", giscusConfig.repo!);
    script.setAttribute("data-repo-id", giscusConfig.repoId!);
    script.setAttribute("data-category", giscusConfig.category!);
    script.setAttribute("data-category-id", giscusConfig.categoryId!);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", resolveTheme());
    script.setAttribute("data-lang", "zh-CN");
    script.setAttribute("loading", "lazy");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [pathname]);

  if (!isConfigured) {
    if (process.env.NODE_ENV === "development") {
      return (
        <section className="mt-16 border-t border-border pt-10">
          <div className="rounded-[1.5rem] border border-border bg-bg-card px-6 py-6 md:px-8">
            <h2 className="font-serif text-xl font-bold text-text">评论</h2>
            <p className="mt-3 text-sm text-text-muted">
              尚未配置 giscus。请在 `.env.local` 中设置
              `NEXT_PUBLIC_GISCUS_REPO`、`NEXT_PUBLIC_GISCUS_REPO_ID`、
              `NEXT_PUBLIC_GISCUS_CATEGORY`、`NEXT_PUBLIC_GISCUS_CATEGORY_ID`。
            </p>
          </div>
        </section>
      );
    }

    return null;
  }

  return (
    <section className="mt-16 border-t border-border pt-10">
      <div className="comments-shell rounded-[1.5rem] border border-border bg-bg-card px-6 py-6 shadow-[0_12px_32px_rgba(58,90,50,0.06)] md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.28em] text-bamboo-light">DISCUSSIONS</p>
            <h2 className="mt-2 font-serif text-xl font-bold text-text">评论</h2>
            <p className="mt-2 text-sm text-text-muted">
              使用 GitHub 账号参与讨论，评论将同步到 GitHub Discussions。
            </p>
          </div>
        </div>
        <div ref={containerRef} className="comments-embed mt-6 min-h-40" />
      </div>
    </section>
  );
}
