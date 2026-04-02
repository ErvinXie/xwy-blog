import Link from "next/link";
import { getRecentPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { personalInfo } from "@/data/personal-info";
import { externalLinks } from "@/data/external-links";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default async function HomePage() {
  const recentPosts = await getRecentPosts(5);

  return (
    <>
      {/* 首屏 */}
      <section className="flex min-h-screen items-center justify-center px-6 py-16 relative">
        {/* 顶部竹节线 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-bamboo to-transparent" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start justify-center">
          {/* 竖排区域 */}
          <div className="flex gap-6 items-start">
            <div
              className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-text tracking-[0.3em] leading-[1.8]"
              style={{ writingMode: "vertical-rl" }}
            >
              <span className="text-bamboo-dark">謝</span>威宇
            </div>
            <div
              className="font-serif text-lg text-text-muted tracking-[0.5em] leading-[2.5]"
              style={{ writingMode: "vertical-rl" }}
            >
              「行至水窮處
              <br />
              坐看雲起時」
            </div>
          </div>

          {/* 横排补充 */}
          <div className="max-w-[300px] md:self-end md:pb-8 text-center md:text-left">
            <p className="text-sm text-text-secondary leading-8">
              {personalInfo.bio}
            </p>
            <nav className="mt-8 flex flex-col gap-3">
              <Link
                href="#writing"
                className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark hover:translate-x-1"
              >
                <span className="text-bamboo-light">—</span> 阅读文章
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark hover:translate-x-1"
              >
                <span className="text-bamboo-light">—</span> 浏览项目
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark hover:translate-x-1"
              >
                <span className="text-bamboo-light">—</span> 了解更多
              </Link>
              <Link
                href="#links"
                className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark hover:translate-x-1"
              >
                <span className="text-bamboo-light">—</span> 友情链接
              </Link>
            </nav>
          </div>
        </div>
      </section>

      <div className="bamboo-divider">
        <div className="line" />
        <div className="node" />
        <div className="line" />
      </div>

      {/* 文章 */}
      <section id="writing" className="mx-auto max-w-[900px] px-6 py-12">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-10">
            <h2
              className="font-serif text-xl font-semibold text-text tracking-[0.3em]"
              style={{ writingMode: "vertical-rl" }}
            >
              文章
            </h2>
            <span className="text-xs text-text-light tracking-widest border-l-2 border-bamboo-light pl-3">
              WRITING
            </span>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {recentPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-8 py-8 border-l-2 border-border ml-6 md:ml-12 pl-6 relative transition-all hover:bg-bamboo/[0.03] hover:border-l-bamboo"
              >
                <div className="absolute left-[-5px] top-9 w-2 h-2 rounded-full bg-bg border-2 border-bamboo-light transition-all group-hover:bg-bamboo group-hover:border-bamboo" />
                <div className="text-sm text-text-light font-serif pt-0.5">
                  {formatDate(post.date).slice(5)}
                  <span className="block text-xs mt-0.5 tracking-wider">
                    {formatDate(post.date).slice(0, 5)}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text transition-colors group-hover:text-bamboo-dark">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted leading-7">
                    {post.description}
                  </p>
                  <div className="flex gap-2 mt-2">
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
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8 ml-6 md:ml-12 pl-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark"
            >
              <span className="text-bamboo-light">—</span> 查看全部文章
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <div className="bamboo-divider">
        <div className="line" />
        <div className="node" />
        <div className="line" />
      </div>

      {/* 项目 */}
      <section id="projects" className="mx-auto max-w-[900px] px-6 py-12">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-10">
            <h2
              className="font-serif text-xl font-semibold text-text tracking-[0.3em]"
              style={{ writingMode: "vertical-rl" }}
            >
              造物
            </h2>
            <span className="text-xs text-text-light tracking-widest border-l-2 border-bamboo-light pl-3">
              PROJECTS
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {[
            {
              num: "壹",
              name: "KTransformers",
              desc: "大模型推理优化框架，主要维护者",
              tech: ["Python", "CUDA", "LLM"],
            },
            {
              num: "贰",
              name: "VertexSurge",
              desc: "面向十亿级边图的变长图模式匹配引擎",
              tech: ["C++", "Graph", "Pattern Matching"],
            },
          ].map((project, i) => (
            <ScrollReveal key={project.num} delay={i * 80}>
              <div className="group bg-bg-card p-8 transition-all hover:bg-bamboo/[0.04] cursor-pointer relative">
                <div className="absolute top-6 left-0 w-[3px] h-0 bg-bamboo transition-all group-hover:h-[calc(100%-3rem)]" />
                <div className="font-serif text-xs text-text-light mb-3 tracking-wider">
                  {project.num}
                </div>
                <h3 className="font-serif text-lg font-semibold text-text mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-text-muted leading-7">
                  {project.desc}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
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
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-text-muted tracking-wider transition-all hover:text-bamboo-dark"
            >
              <span className="text-bamboo-light">—</span> 查看全部项目
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <div className="bamboo-divider">
        <div className="line" />
        <div className="node" />
        <div className="line" />
      </div>

      {/* 友情链接 */}
      <section id="links" className="mx-auto max-w-[900px] px-6 py-12">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-10">
            <h2
              className="font-serif text-xl font-semibold text-text tracking-[0.3em]"
              style={{ writingMode: "vertical-rl" }}
            >
              链接
            </h2>
            <span className="text-xs text-text-light tracking-widest border-l-2 border-bamboo-light pl-3">
              LINKS
            </span>
          </div>
        </ScrollReveal>

        <div className="flex flex-col border border-border divide-y divide-border">
          {externalLinks.map((link, i) => (
            <ScrollReveal key={link.url} delay={i * 70}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 gap-4 bg-bg-card px-6 py-6 transition-all hover:bg-bamboo/[0.04] md:grid-cols-[96px_1fr_auto] md:items-center md:gap-8 md:px-8"
              >
                <div className="font-serif text-xs text-text-light tracking-[0.3em] md:pt-0.5">
                  {link.label}
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-semibold text-text transition-colors group-hover:text-bamboo-dark">
                    {link.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted leading-7">{link.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs text-text-light tracking-wider transition-all group-hover:text-bamboo-dark md:justify-self-end">
                  <span className="text-bamboo-light">—</span> 打开主页
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 底部 */}
      <footer className="py-24 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-seal rounded font-serif text-sm text-seal rotate-2 mb-6">
          谢
        </div>
        <p className="font-serif text-lg text-text-muted tracking-[0.5em] leading-9">
          偶然值林叟
          <br />
          談笑無還期
        </p>
        <p className="mt-4 font-serif text-xs text-text-light tracking-[0.3em]">
          王維《終南別業》
        </p>
        <p className="mt-6 text-xs text-text-light/40">
          © {new Date().getFullYear()} 謝威宇
        </p>
      </footer>
    </>
  );
}
