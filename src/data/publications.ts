export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: "From Prefix Cache to Fusion RAG Cache: Accelerating LLM Inference in Retrieval-Augmented Generation",
    authors: "J Wang, W Xie, M Zhang, B Zhang, J Dong, Y Zhu, C Lin, J Tang, Y Han, et al.",
    venue: "arXiv preprint arXiv:2601.12904",
    year: 2026,
  },
  {
    title: "KTransformers: Unleashing the Full Potential of CPU/GPU Hybrid Inference for MoE Models",
    authors: "H Chen, W Xie, B Zhang, J Tang, J Wang, J Dong, S Chen, Z Yuan, C Lin, et al.",
    venue: "Proceedings of the ACM SIGOPS 31st Symposium on Operating Systems Principles (SOSP)",
    year: 2025,
  },
  {
    title: "Scaling Asynchronous Graph Query Processing via Partitioned Stateful Traversal Machines",
    authors: "S Chen, H Chen, S Ma, Y Qin, Z Wang, W Xie, M Zhang, K Chen, X Liao, et al.",
    venue: "IEEE 41st International Conference on Data Engineering (ICDE), 918-931",
    year: 2025,
  },
  {
    title: "VertexSurge: Variable Length Graph Pattern Match on Billion-edge Graphs",
    authors: "W Xie, M Zhang, X Liao, K Chen, J Jiang, YW Wu",
    venue: "Proceedings of the 29th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)",
    year: 2024,
  },
  {
    title: "ScenePalette: Contextually Exploring Object Collections through Multiplex Relations in 3D Scenes",
    authors: "SK Zhang, WY Xie, C Wang, SH Zhang",
    venue: "Journal of Computer Science and Technology 39(5), 1180-1192",
    year: 2024,
  },
  {
    title: "Fast 3D Indoor Scene Synthesis by Learning Spatial Relation Priors of Objects",
    authors: "SH Zhang, SK Zhang, WY Xie, CY Luo, YL Yang, H Fu",
    venue: "IEEE Transactions on Visualization and Computer Graphics 28(9), 3082-3092",
    year: 2021,
  },
  {
    title: "Geometry-based Layout Generation with Hyper-relations among Objects",
    authors: "SK Zhang, WY Xie, SH Zhang",
    venue: "Graphical Models 116, 101104",
    year: 2021,
  },
  {
    title: "Fast 3D Indoor Scene Synthesis with Discrete and Exact Layout Pattern Extraction",
    authors: "SH Zhang, SK Zhang, WY Xie, CY Luo, HB Fu",
    venue: "arXiv preprint arXiv:2002.00328",
    year: 2020,
  },
];
