export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'Web App' | 'AI / Machine Learning' | 'SaaS' | 'Automation';
  status: 'In Development' | 'Planned' | 'Private Testing';
}

// In accordance with portfolio principles: no fabricated projects or screenshots are displayed.
// This centralized data structure is ready for actual proprietary deployments.
export const projectsData: ProjectItem[] = [];

export const projectsEmptyState = {
  badge: "SYSTEMS IN PROGRESS",
  title: "Projects Are Currently Being Developed",
  description: "I am actively building and engineering full-stack Python applications, API systems, and exploratory AI tools behind the scenes. Live deployments and GitHub repositories will be published here as they achieve production readiness.",
  focusAreas: [
    { title: "Python & Django Platforms", detail: "Robust web architectures with relational database modeling" },
    { title: "Intelligent AI Systems", detail: "Practical LLM orchestration, agent workflows, and automation" },
    { title: "Business Software Solutions", detail: "Tools engineered to solve verifiable operational bottlenecks" }
  ]
};
