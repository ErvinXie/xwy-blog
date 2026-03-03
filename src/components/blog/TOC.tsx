"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3")
    );

    const items = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: Number(el.tagName[1]),
    }));

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block">
      <div className="sticky top-24">
        <h4 className="mb-3 text-xs font-semibold tracking-[0.2em] text-text-muted">
          目录
        </h4>
        <ul className="space-y-2 border-l border-border">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block border-l-2 py-1 text-sm transition-colors",
                  heading.level === 2 ? "pl-4" : "pl-8",
                  activeId === heading.id
                    ? "border-bamboo font-medium text-bamboo-dark"
                    : "border-transparent text-text-muted hover:text-text-secondary"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
