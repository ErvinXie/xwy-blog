import type { Metadata } from "next";
import Link from "next/link";
import ChatInterface from "@/components/agent/ChatInterface";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "数字分身",
  description: "和谢威宇的 AI 数字分身聊聊天",
};

export default function AgentPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
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
            问答
          </h1>
          <div className="border-l-2 border-bamboo-light pl-3">
            <span className="text-xs text-text-light tracking-widest">AI AGENT</span>
            <p className="mt-2 text-sm text-text-secondary leading-7">
              基于 AI 的数字分身，了解我的技术背景和兴趣。<br />
              你可以和它聊聊技术、阅读、生活。
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-4">
        <ChatInterface />
      </div>
    </div>
  );
}
