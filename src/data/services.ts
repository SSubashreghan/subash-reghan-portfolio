export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  deliverables: string[];
  businessBenefit: string;
  iconName: 'Megaphone' | 'Globe' | 'Code' | 'Video' | 'Bot' | 'Cpu';
  inquiryType: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing & Performance Growth",
    shortTitle: "Digital Marketing",
    badge: "Audience & Acquisition",
    description: "Multi-channel digital marketing campaigns that drive measurable reach, qualified leads, and brand engagement without ad-spend wastage.",
    deliverables: [
      "Meta Ads & Google Ads Campaign Management",
      "Social Media Marketing & Content Strategy",
      "Search Engine Optimization (SEO) Best Practices",
      "Conversion Rate Optimization & Funnel Analysis"
    ],
    businessBenefit: "Attract high-intent prospective customers and expand your brand footprint with data-backed marketing systems.",
    iconName: "Megaphone",
    inquiryType: "Digital Marketing & Lead Gen"
  },
  {
    id: "website-development",
    title: "Modern Business Website Development",
    shortTitle: "Website Development",
    badge: "Responsive Web",
    description: "Fast, accessible, and responsive websites engineered to represent your brand with distinction and convert visitors into clients.",
    deliverables: [
      "High-Performance Responsive Web Design",
      "Clean Semantic HTML, CSS & Modern Frameworks",
      "Mobile-First Layouts & Cross-Device Testing",
      "SEO-Ready Structure & Fast Page Speed"
    ],
    businessBenefit: "Establish an authoritative digital presence that looks stunning on every device and ranks effectively on search engines.",
    iconName: "Globe",
    inquiryType: "Web Development & Python"
  },
  {
    id: "web-application-development",
    title: "Web Application & Python Full Stack Development",
    shortTitle: "Web App Development",
    badge: "Full Stack Engineering",
    description: "Custom web applications and backend solutions built with Python, Django, robust database architectures, and API integrations.",
    deliverables: [
      "Full-Stack Python & Django Web Architecture",
      "Relational Database Schema Design (SQL/PostgreSQL)",
      "RESTful API Development & Third-Party Integrations",
      "Secure Authentication & User Management Systems"
    ],
    businessBenefit: "Power your business operations with reliable, custom-engineered software designed to scale with your organizational needs.",
    iconName: "Code",
    inquiryType: "Web Development & Python"
  },
  {
    id: "video-editing",
    title: "Video Editing & Motion Media Production",
    shortTitle: "Video Editing",
    badge: "Creative Media",
    description: "Compelling promotional videos, commercial reels, and motion content crafted to capture attention and elevate brand storytelling.",
    deliverables: [
      "High-Retention Social Media Reels & Shorts",
      "Corporate Brand & Infrastructure Showcases",
      "Precision Color Grading & Audio Mixing (DaVinci Resolve)",
      "Kinetic Typography, Motion Graphics & Visual Pacing"
    ],
    businessBenefit: "Stand out on social platforms with polished, cinematic visual media that holds viewer retention and drives action.",
    iconName: "Video",
    inquiryType: "Video Marketing & Editing"
  }
];
