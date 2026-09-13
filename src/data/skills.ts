export interface SkillItem {
  name: string;
  focus: string;
  level?: 'Core' | 'Proficient' | 'Exploring';
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  type: 'proven' | 'exploring';
  description: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    id: "development",
    title: "SOFTWARE DEVELOPMENT",
    badge: "Engineering & Architecture",
    type: "proven",
    description: "Building reliable, scalable web applications and backend systems with clean architectures, relational data modeling, and modern web standards.",
    skills: [
      { name: "Python", focus: "Core Logic, Backend Scripting & Automation", level: "Core" },
      { name: "Django", focus: "MVC Architecture, ORM & Backend APIs", level: "Core" },
      { name: "HTML & CSS", focus: "Modern Responsive Layouts & Semantic Structure", level: "Core" },
      { name: "JavaScript", focus: "DOM Manipulation & Client-Side Interactivity", level: "Proficient" },
      { name: "SQL & Databases", focus: "Relational Modeling, Queries & Data Integrity", level: "Proficient" },
      { name: "Git & GitHub", focus: "Source Control, Branching & Collaborative Workflow", level: "Proficient" }
    ]
  },
  {
    id: "marketing",
    title: "DIGITAL MARKETING",
    badge: "Growth & Acquisition",
    type: "proven",
    description: "Driving measurable visibility, lead generation, and brand growth through data-informed campaign management and audience targeting.",
    skills: [
      { name: "Digital Marketing", focus: "Multi-Channel Growth Strategy", level: "Core" },
      { name: "Meta Ads", focus: "Targeted Audience Campaigns & Retargeting", level: "Core" },
      { name: "Google Ads", focus: "Search & Display Intent-Based Campaigns", level: "Proficient" },
      { name: "Social Media Marketing", focus: "Brand Voice & Audience Engagement", level: "Core" },
      { name: "Content Marketing", focus: "Narrative, Creative Positioning & Copy", level: "Proficient" },
      { name: "SEO Optimization", focus: "On-Page Structure & Organic Discoverability", level: "Proficient" }
    ]
  },
  {
    id: "creative",
    title: "CREATIVE TOOLS & MEDIA",
    badge: "Visual Storytelling",
    type: "proven",
    description: "Producing cinematic promotional video assets, social reels, and digital graphics that amplify brand identity and hold audience attention.",
    skills: [
      { name: "Video Editing", focus: "Commercial Video Pacing, Audio & Narrative", level: "Core" },
      { name: "DaVinci Resolve", focus: "Precision Cuts, Transitions & Color Treatment", level: "Proficient" },
      { name: "CapCut", focus: "Fast-Paced High-Retention Social Reels", level: "Core" },
      { name: "Canva", focus: "High-Impact Marketing Visuals & Collateral", level: "Core" },
      { name: "Figma", focus: "UI Wireframing, Layouts & Digital Mockups", level: "Proficient" }
    ]
  },
  {
    id: "emerging",
    title: "AI & EMERGING TECH INTERESTS",
    badge: "Currently Exploring & Research",
    type: "exploring",
    description: "Actively studying, experimenting with, and researching modern AI architectures and automation paradigms for future software systems.",
    skills: [
      { name: "Generative AI & LLMs", focus: "Prompt Engineering & Model Capabilities", level: "Exploring" },
      { name: "RAG Architectures", focus: "Retrieval-Augmented Generation Workflows", level: "Exploring" },
      { name: "AI Agents", focus: "Autonomous Agent Reasoning & Tool Invocation", level: "Exploring" },
      { name: "Model Context Protocol (MCP)", focus: "Standardized Context & Tool Connections", level: "Exploring" },
      { name: "APIs & Automation", focus: "Workflow Orchestration & System Integrations", level: "Exploring" },
      { name: "SaaS Architecture", focus: "Multi-Tenant Scalability & Business Logic", level: "Exploring" }
    ]
  }
];

// Compatibility alias for existing components
export const skillsData = skillsCategories;
