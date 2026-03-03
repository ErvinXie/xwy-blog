export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  description: string;
  skills?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "work-1",
    type: "work",
    title: "引擎架构师",
    organization: "趋境科技（早期核心员工）",
    organizationUrl: "https://approaching-ai.com/",
    period: "2024.05 - 至今",
    description: "负责推理引擎架构设计与开发，主导 KTransformers 开源项目及昇腾集群相关开发。",
    skills: ["LLM Inference", "C++", "CUDA", "系统架构"],
  },
  {
    id: "edu-2",
    type: "education",
    title: "计算机科学与技术（博士）",
    organization: "清华大学 计算机系 高性能所",
    period: "2021 - 至今",
    description: "在 MADSYS 实验室主攻系统方向，师从武永卫教授，受章明星老师联合指导。先后研究图数据库与 AI 推理优化。",
    skills: ["图数据库", "AI 推理优化", "高性能计算", "C++", "CUDA"],
  },
  {
    id: "intern-3",
    type: "work",
    title: "图数据库开发实习",
    organization: "海致星图",
    period: "2021.07 - 2021.09",
    description: "设计并实现 AtlasGraph 路径搜索功能与算法，实现并行化、高性能的路径搜索。",
    skills: ["图数据库", "C++", "并行计算"],
  },
  {
    id: "intern-1",
    type: "work",
    title: "游戏客户端开发实习",
    organization: "腾讯 IEG",
    period: "2020.07 - 2020.08",
    description: "参加公司内部比赛（超新星），使用虚幻 4 引擎开发游戏 Color War。",
    skills: ["UE4", "游戏开发"],
  },
  {
    id: "research-cg",
    type: "work",
    title: "计算机图形学研究",
    organization: "清华大学图形学实验室 / 圣路易斯华盛顿大学（远程）",
    organizationUrl: "https://cg.cs.tsinghua.edu.cn/research.htm",
    period: "2019 - 2020",
    description: "先后在清华大学张松海组（与张少魁合作，成果发表于 TVCG）和华盛顿大学居涛组从事图形学研究，完成 GAMES101 课程。",
    skills: ["计算机图形学", "场景合成", "Marching Cubes", "GAMES101"],
  },
  {
    id: "edu-1",
    type: "education",
    title: "计算机科学与技术（本科）",
    organization: "北京理工大学 计算机学院",
    period: "2017 - 2021",
    description: "主修计算机科学与技术。2019 年获 ICPC 南京站银奖、CCPC EC-Final 银奖等多项 ACM 竞赛奖项；同年获美国大学生数学建模赛 F 奖（Finalist）。",
    skills: ["算法", "数据结构", "操作系统"],
  },
];

export interface Award {
  title: string;
  year: number;
}

export const awards: Award[] = [
  { title: "ICPC 区域赛南京站 银奖", year: 2019 },
  { title: "CCPC 东大陆总决赛（EC-Final）银奖", year: 2019 },
  { title: "美国大学生数学建模赛 F 奖（Finalist）", year: 2019 },
  { title: "北京理工大学迪文奖学金 ×3", year: 2018 },
];

export const skills = [
  { name: "C++ / CUDA", level: 95 },
  { name: "Python", level: 85 },
  { name: "LLM Inference", level: 90 },
  { name: "系统架构", level: 85 },
  { name: "图数据库", level: 80 },
  { name: "TypeScript", level: 75 },
];
