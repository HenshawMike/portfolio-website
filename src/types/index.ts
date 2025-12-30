/**
 * Core TypeScript interfaces for AI Engineer Portfolio
 */

export type ProjectCategory = 'ai-ml' | 'web-apps' | 'research' | 'open-source' | 'data-engineering';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  techStack?: string[];
  github?: string;
  liveDemo?: string;
  slug: string;
}

export interface EngineerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  skills: string[];
  certifications: string[];
  experience: string[];
  education: string;
  location: string;
  email: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'consulting' | 'full-time' | 'collaboration';
  message: string;
  timestamp: Date;
}
