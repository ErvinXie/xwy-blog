import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/data/personal-info";
import { experiences, skills, awards } from "@/data/experience";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "关于",
  description: `了解 ${personalInfo.chineseName}`,
};

export default function AboutPage() {
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
            关于
          </h1>
          <div className="border-l-2 border-bamboo-light pl-3">
            <span className="text-xs text-text-light tracking-widest">ABOUT</span>
            <p className="mt-2 text-sm text-text-secondary leading-8">
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="bamboo-divider">
        <div className="line" />
        <div className="node" />
        <div className="line" />
      </div>

      {/* 经历 */}
      <section className="py-8">
        <ScrollReveal>
          <h2 className="font-serif text-lg font-semibold text-text mb-8 tracking-wider">
            经历
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 80}>
              <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-8 py-6 border-l-2 border-border ml-4 pl-6 relative group transition-all hover:border-l-bamboo">
                <div className="absolute left-[-5px] top-7 w-2 h-2 rounded-full bg-bg border-2 border-bamboo-light transition-all group-hover:bg-bamboo group-hover:border-bamboo" />
                <div className="text-xs text-text-light font-serif pt-0.5 tracking-wider">
                  {exp.period}
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-text">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-0.5">
                    {exp.organizationUrl ? (
                      <a href={exp.organizationUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-bamboo/30 underline-offset-2 transition-colors hover:text-bamboo-dark">
                        {exp.organization}
                      </a>
                    ) : exp.organization}
                  </p>
                  <p className="text-sm text-text-secondary mt-2 leading-7">
                    {exp.description}
                  </p>
                  {exp.skills && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs text-bamboo border border-border px-2 py-0.5 rounded-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="bamboo-divider">
        <div className="line" />
        <div className="node" />
        <div className="line" />
      </div>

      {/* 发表 */}
      <section className="py-8">
        <ScrollReveal>
          <div className="flex items-baseline gap-3 mb-8">
            <h2 className="font-serif text-lg font-semibold text-text tracking-wider">
              发表
            </h2>
            <a
              href="https://scholar.google.com/citations?user=DCH2LwEAAAAJ&hl=zh-CN&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted tracking-wider underline decoration-bamboo/30 underline-offset-2 hover:text-bamboo-dark transition-colors"
            >
              Google Scholar
            </a>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {publications.map((pub, i) => (
            <ScrollReveal key={pub.title} delay={i * 60}>
              <div className="py-5 border-b border-border group">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-text-light font-serif shrink-0">{pub.year}</span>
                  <h3 className="font-serif text-sm font-semibold text-text leading-6">
                    {pub.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-xs text-text-muted leading-5 ml-[calc(2ch+0.75rem)]">
                  {pub.authors}
                </p>
                <p className="mt-0.5 text-xs text-text-light italic ml-[calc(2ch+0.75rem)]">
                  {pub.venue}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="bamboo-divider">
        <div className="line" />
        <div className="node" />
        <div className="line" />
      </div>

      {/* 奖项 */}
      <section className="py-8">
        <ScrollReveal>
          <h2 className="font-serif text-lg font-semibold text-text mb-8 tracking-wider">
            奖项
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {awards.map((award, i) => (
            <ScrollReveal key={award.title} delay={i * 50}>
              <div className="flex items-baseline gap-4 py-2.5 border-b border-border">
                <span className="text-xs text-text-light font-serif shrink-0">{award.year}</span>
                <span className="text-sm text-text-secondary">{award.title}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="bamboo-divider">
        <div className="line" />
        <div className="node" />
        <div className="line" />
      </div>

      {/* 技能 */}
      <section className="py-8">
        <ScrollReveal>
          <h2 className="font-serif text-lg font-semibold text-text mb-8 tracking-wider">
            技能
          </h2>
        </ScrollReveal>

        <div className="max-w-lg flex flex-col gap-4">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 60}>
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-secondary w-32 shrink-0 font-serif">
                  {skill.name}
                </span>
                <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-bamboo rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
