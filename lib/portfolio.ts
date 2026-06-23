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

export interface Portfolio {
  personal_information: PersonalInformation;
  education: Education[];
  languages: Language[];
  technical_skills: TechnicalSkills;
  work_experience: WorkExperience[];
}

export const portfolio = portfolioData as Portfolio;
