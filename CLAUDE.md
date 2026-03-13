# xwy-blog

谢威宇的个人博客，Next.js 项目，部署在 Vercel（xwy-blog.vercel.app / www.xieweiyu.me）。

## 项目结构

- `src/` — Next.js 应用代码
- `daily-notes/` — agent 工作日志（append-only）
- `doc/` — 项目知识快照
- `handoff/` — agent 间任务交接文件
- `meta-agent/` — agent 工作方法论（git submodule）

## Meta Agent Guidelines

Read and follow the guidelines in `meta-agent/CLAUDE.md`. Detailed methodology is in `meta-agent/doc/methodology.md`.

Periodically (e.g., daily or weekly) check if meta-agent has updates:
```bash
git submodule update --remote meta-agent
```
If there are changes, commit the update.
