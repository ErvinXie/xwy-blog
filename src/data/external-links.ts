export interface ExternalLink {
  name: string;
  url: string;
  label: string;
  description: string;
}

export const externalLinks: ExternalLink[] = [
  {
    name: "MADSYS",
    url: "https://madsys.cs.tsinghua.edu.cn/",
    label: "实验室",
    description: "我所在实验室的主页。",
  },
  {
    name: "Approaching AI",
    url: "https://approaching-ai.com/",
    label: "公司",
    description: "我所在公司的主页。",
  },
  {
    name: "KTransformers",
    url: "https://ktransformers.net/en",
    label: "项目",
    description: "KTransformers 项目主页。",
  },
  {
    name: "AIMAServer",
    url: "https://aimaserver.com/",
    label: "新项目",
    description: "AIMAServer 项目主页。",
  },
  {
    name: "关嘉伟",
    url: "https://guanjiawei.ai/",
    label: "同事",
    description: "公司 AIMA 项目的同事个人主页。",
  },
];
