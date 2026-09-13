export interface ExperienceItem {
  company: string;
  role: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location: string;
  companyUrl: string;
  summary: string;
  responsibilities: string[];
}

export const currentExperience: ExperienceItem = {
  company: "SHA Innovative Technologies",
  role: "Digital Marketer",
  employmentType: "Employee",
  startDate: "2025",
  endDate: "Present",
  location: "Puducherry, India",
  companyUrl: "https://shainnovativetechnologies.com/",
  summary: "Spearheading multi-channel digital marketing initiatives, targeted ad acquisition, and website development projects for growing business clients.",
  responsibilities: [
    "Architecting and executing data-driven digital marketing campaigns across Google Ads and Meta Ads.",
    "Developing responsive website interfaces and managing web development implementations.",
    "Delivering end-to-end promotional video marketing assets and motion media for client portfolios.",
    "Collaborating closely with client stakeholders to analyze growth metrics and optimize lead generation pipelines."
  ]
};

export const impactMetrics = [
  {
    value: 10,
    suffix: "+",
    label: "LEADS GENERATED",
    sublabel: "High-intent qualified business leads for commercial clients"
  },
  {
    value: 5,
    suffix: "",
    label: "CLIENTS WORKED WITH",
    sublabel: "Businesses partnered across marketing, web, and video production"
  },
  {
    value: 40,
    suffix: "%",
    label: "REACH INCREASE",
    sublabel: "Consistent audience expansion and engagement boost across platforms"
  }
];
