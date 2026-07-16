import portfolioData from "@/data/portfolio.json";

export interface Contact {
  phone: string;
  email: string;
  location: string;
  github: string;
}

export interface PersonalInformation {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
}

export interface Education {
  institution: string;
  degree: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface TechnicalSkills {
  frontend: string[];
  backend: string[];
  databases: string[];
  cloud_devops: string[];
  architecture_practices: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectTechStack {
  frontend?: string[];
  backend?: string[];
  infrastructure?: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  live_url: string;
  github_url: string;
  tags: string[];
  tech_stack: ProjectTechStack;
  features: string[];
}

export interface Portfolio {
  personal_information: PersonalInformation;
  education?: Education[];
  languages?: Language[];
  technical_skills: TechnicalSkills;
  work_experience: WorkExperience[];
  projects: Project[];
}

export const portfolio = portfolioData as unknown as Portfolio;
