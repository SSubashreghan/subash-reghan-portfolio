export interface RoadmapStage {
  stage: number;
  label: string;
  title: string;
  objective: string;
  focusItems: string[];
  status: 'active' | 'upcoming' | 'long-term';
}

export const futureRoadmap: RoadmapStage[] = [
  {
    stage: 1,
    label: "STAGE 01",
    title: "Strengthen Technical Foundations",
    objective: "Master deep backend engineering principles, scalable web architectures, database schemas, and system resilience.",
    focusItems: ["Python Architecture", "Full Stack Development", "System Design", "RESTful & Async APIs", "Relational Databases"],
    status: "active"
  },
  {
    stage: 2,
    label: "STAGE 02",
    title: "Build Intelligent Software Systems",
    objective: "Engineer modern AI-augmented applications leveraging model reasoning, autonomous agents, and automated workflows.",
    focusItems: ["LLMs & RAG Architecture", "AI Agents & Tool Orchestration", "MCP Protocols", "Workflow Automation", "API Integration"],
    status: "upcoming"
  },
  {
    stage: 3,
    label: "STAGE 03",
    title: "Research Real-World Problems",
    objective: "Conduct empirical market research to discover friction points where intelligent technology unlocks genuine compounding value.",
    focusItems: ["Domain Friction Analysis", "Business Workflow Bottlenecks", "Emerging Tech Arbitrage", "Customer Need Discovery", "Market Validation"],
    status: "upcoming"
  },
  {
    stage: 4,
    label: "STAGE 04",
    title: "Build Scalable Products",
    objective: "Transform validated insights into viable, reliable software products and SaaS solutions with solid unit economics.",
    focusItems: ["SaaS Architectures", "AI-Augmented Platforms", "Workflow Automation", "Acquisition Funnels", "Product Scalability"],
    status: "upcoming"
  },
  {
    stage: 5,
    label: "STAGE 05",
    title: "Establish Reghan Empire",
    objective: "Realize the long-term entrepreneurial vision of an integrated technology company delivering intelligent, scalable, and lasting software solutions.",
    focusItems: ["Intelligent Software", "Scalable SaaS", "Applied AI Systems", "Real-World Impact", "Sustainable Growth"],
    status: "long-term"
  }
];
