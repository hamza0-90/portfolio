export type PageViewType = 'overview' | 'projects' | 'certifications' | 'skills' | 'experience' | 'about' | 'contact';

export interface PersonalInfo {
  name: string;
  role: string;
  subTitle: string;
  bio: string;
  email: string;
  secondaryEmail?: string;
  phone: string;
  location: string;
  linkedIn: string;
  github?: string;
  fiverr?: string;
  upwork?: string;
  availability: 'Available for Hire' | 'Open to Contracts' | 'Freelancing';
  yearsExperience: string;
  completedProjectsCount: string;
  certificationsCount: string;
  satisfactionRate: string;
}

export type ProjectCategory = 'all' | 'ai-ml' | 'fullstack' | 'mobile' | 'security-db';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai-ml' | 'fullstack' | 'mobile' | 'security-db';
  categoryLabel: string;
  period: string;
  academicTag?: string; // e.g. "Final Year Project (FYP)", "Semester 5"
  featured: boolean;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  architectureOverview: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  interactiveDemoType?: 'airport-taxi' | 'daraz-analyzer' | 'text-summarizer' | 'steganography' | 'seo-marketplace' | 'startup-predictor';
  stats?: { label: string; value: string }[];
  highlightBadge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'Google Cloud' | 'Simplilearn' | 'Alison' | 'Udemy';
  issuerCategory: 'Google Cloud & AI' | 'AI & Machine Learning' | 'Development & Web' | 'Professional & Business';
  issueDate: string;
  credentialCode?: string;
  verificationUrl?: string;
  score?: string;
  badgeColor: string;
  description: string;
  skillsAcquired: string[];
  iconType: 'cloud' | 'brain' | 'code' | 'shield' | 'trending' | 'cpu';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  type: 'Internship' | 'Freelance' | 'Job';
  description: string[];
  skillsUsed: string[];
  letterId?: string;
  verifiedStatus: 'Offer Received' | 'Completed' | 'Active';
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  major?: string;
  status: 'In Progress' | 'Completed';
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  experienceYears?: string;
  iconName?: string;
  popularTag?: boolean;
}

export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}
