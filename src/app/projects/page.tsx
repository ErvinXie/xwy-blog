import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "造物",
  description: "技术项目与作品集",
};

const projects = [
  {
    num: "壹",
    name: "KTransformers",
    desc: "大模型推理优化框架，作为主要维护者参与开发。专注于 Transformer 模型的高效推理与部署优化，支持多种硬件后端加速。",
    tech: ["Python", "CUDA", "C++", "LLM", "Inference"],
    link: "https://ktransformers.net/zh",
  },
  {
    num: "贰",
    name: "VertexSurge",
    desc: "高性能图处理系统，专注于十亿级边规模图上的变长图模式匹配。支持 LDBC 社交网络基准数据导入与大规模查询优化。",
    tech: ["C++", "CMake", "Graph Processing", "Pattern Matching"],
    link: "https://github.com/madsys-dev/VertexSurge",
  },
];

export default function ProjectsPage() {
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
            造物
          </h1>
          <div className="border-l-2 border-bamboo-light pl-3">
            <span className="text-xs text-text-light tracking-widest">PROJECTS</span>
            <p className="mt-2 text-sm text-text-secondary leading-7">
              技术探索的产物，<br />每一个都承载着不同阶段的思考。
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-px bg-border border border-border">
        {projects.map((project, i) => (
          <ScrollReveal key={project.num} delay={i * 80}>
            <div className="group bg-bg-card p-8 md:p-10 transition-all hover:bg-bamboo/[0.04] relative">
              <div className="absolute top-8 left-0 w-[3px] h-0 bg-bamboo transition-all group-hover:h-[calc(100%-4rem)]" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-serif text-xs text-text-light mb-3 tracking-wider">
                    {project.num}
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-text mb-3">
                    {project.name}
                  </h2>
                  <p className="text-sm text-text-muted leading-8 max-w-lg">
                    {project.desc}
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-bamboo border border-border px-2 py-0.5 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    className="shrink-0 text-xs text-text-muted border border-border px-3 py-1.5 transition-all hover:border-bamboo hover:text-bamboo-dark"
                  >
                    查看
                  </Link>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
