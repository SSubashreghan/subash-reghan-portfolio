export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  corePositioning: string;
  heroHeadline: {
    primary: string;
    secondary: string;
  };
  heroSummary: string;
  aboutTitle: string;
  aboutStory: {
    intro: string;
    philosophy: string;
    vision: string;
  };
  education: {
    degree: string;
    institution?: string;
    period?: string;
    location?: string;
  };
}

export const profileData: ProfileData = {
  name: "Subash Reghan",
  title: "Digital Marketer • Python Full Stack Developer",
  tagline: "Technology × Business × Innovation",
  corePositioning: "Technology + Business",
  heroHeadline: {
    primary: "DIGITAL MARKETER",
    secondary: "PYTHON FULL STACK DEVELOPER"
  },
  heroSummary: "Building at the intersection of Technology, Digital Growth & Business. Combining Python full-stack development, performance marketing, and product strategy to deliver measurable real-world results.",
  aboutTitle: "WHO IS SUBASH REGHAN?",
  aboutStory: {
    intro: "A Computer Science graduate grounded in software development, data architecture, and modern full-stack web technologies. I bring technical rigor to digital marketing strategies and business-focused thinking to software engineering.",
    philosophy: "I operate at the convergence of technology and commerce. Rather than treating code, marketing, and media as isolated silos, I bridge them: combining Python & Django engineering, targeted customer acquisition, visual media, and practical business execution.",
    vision: "I am actively building real-world engineering and marketing capabilities while methodically laying the foundation for Reghan Empire—a long-term technology company vision focused on developing intelligent software systems, automating workflows, and solving tangible industry problems."
  },
  education: {
    degree: "B.Sc. Computer Science"
  }
};
