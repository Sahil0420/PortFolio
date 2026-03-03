export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  socials: Social[];
  resume: string;
}

export interface Social {
  label: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string; // Keep this short for the main grid card
  longDescription: string; // Add this: Detailed paragraph for the modal
  tags: string[]; // These will become your "Pixel Badges"
  features?: string[]; // Add this: Optional list of key features/wins
  link: string;
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
}