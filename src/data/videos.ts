export type VideoCategory = 'ALL' | 'REELS' | 'SOCIAL MEDIA' | 'VIDEO EDITING' | 'MOTION GRAPHICS';

export interface VideoWork {
  id: string;
  title: string;
  client: string;
  category: 'REELS' | 'SOCIAL MEDIA' | 'VIDEO EDITING' | 'MOTION GRAPHICS';
  videoUrl: string;
  description: string;
  tags: string[];
}

export const clientVideos: VideoWork[] = [
  {
    id: "sha-tech",
    title: "SHA Innovative Technologies — Corporate Brand Commercial",
    client: "SHA Innovative Technologies",
    category: "MOTION GRAPHICS",
    videoUrl: "/assets/videos/sha_innovative_technology.mp4",
    description: "High-impact promotional media showcasing company offerings, tech solutions, and service offerings with clean transitions and brand consistency.",
    tags: ["Brand Identity", "Motion Graphics", "Tech Commercial"]
  },
  {
    id: "tidco-fintech",
    title: "TIDCO Fintech Tower — Architectural & Business Showcase",
    client: "TIDCO Fintech Tower",
    category: "VIDEO EDITING",
    videoUrl: "/assets/videos/tidco_fintech_tower.mp4",
    description: "Cinematic showcase of premium commercial fintech infrastructure, combining dynamic motion graphics, corporate pacing, and architectural highlights.",
    tags: ["Fintech", "Commercial Video", "Motion Design"]
  },
  {
    id: "kison",
    title: "Kison — Social Media Promotional Reel",
    client: "Kison",
    category: "REELS",
    videoUrl: "/assets/videos/kison.mp4",
    description: "Fast-paced social media reel engineered for high audience retention, rhythm-matched cuts, and clear commercial call-to-action.",
    tags: ["Social Reel", "Retention Editing", "Audience Growth"]
  },
  {
    id: "nesavu",
    title: "Nesavu — Brand Heritage & Product Storytelling",
    client: "Nesavu",
    category: "SOCIAL MEDIA",
    videoUrl: "/assets/videos/nesavu.mp4",
    description: "Visual storytelling highlighting authentic craftsmanship and lifestyle brand elegance with refined color grading and narrative pacing.",
    tags: ["Brand Story", "Lifestyle Media", "Social Campaign"]
  },
  {
    id: "shomli",
    title: "Shomli — Creative Video Production & Motion",
    client: "Shomli",
    category: "REELS",
    videoUrl: "/assets/videos/shomli.mp4",
    description: "Creative visual editing combining dynamic transitions, vibrant color treatment, and modern social format delivery.",
    tags: ["Creative Reel", "DaVinci Resolve", "Visual Pacing"]
  }
];

export const googleDriveBackupUrl = "https://drive.google.com/drive/folders/1q1B9ZAyacwCKC8XFI189iH6T3GWC8Ku7";
