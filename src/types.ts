export interface Skill {
  name: string;
  level: number; // Percentage, e.g., 90
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  techStack: string[];
  description: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'java' | 'all';
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  grade: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  githubUrl: string;
  location: string;
}
