export interface JourneyMilestone {
  step: number;
  label: string;
  type: 'past' | 'present' | 'future';
  description: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    step: 1,
    label: "B.Sc. Computer Science",
    type: "past",
    description: "Built strong fundamentals in algorithms, relational databases, data structures, and computer science theory."
  },
  {
    step: 2,
    label: "Software Development & Python",
    type: "past",
    description: "Hands-on programming with Python, Django, HTML, CSS, JavaScript, and relational databases."
  },
  {
    step: 3,
    label: "Digital Marketing & Growth",
    type: "past",
    description: "Developed capabilities across paid acquisition, Meta & Google Ads, SEO, and multi-channel campaign strategy."
  },
  {
    step: 4,
    label: "Creative Media & Video Production",
    type: "past",
    description: "Produced high-impact commercial media, brand reels, and video storytelling assets for clients."
  },
  {
    step: 5,
    label: "Professional Industry Role",
    type: "present",
    description: "Serving as Digital Marketer at SHA Innovative Technologies, driving acquisition campaigns and web implementations."
  },
  {
    step: 6,
    label: "Full Stack Engineering",
    type: "present",
    description: "Deepening end-to-end Python web development, database architecture, and resilient API development."
  },
  {
    step: 7,
    label: "AI & Emerging Technology",
    type: "future",
    description: "Exploring practical LLM orchestration, agentic workflows, RAG, MCP integrations, and intelligent automation."
  },
  {
    step: 8,
    label: "Software Entrepreneurship",
    type: "future",
    description: "Validating real-world market problems and launching scalable software tools and SaaS solutions."
  },
  {
    step: 9,
    label: "Reghan Empire",
    type: "future",
    description: "Establishing an integrated technology company focused on intelligent software, automation, and real-world solutions."
  }
];
