
export interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  percentage: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  provider: string;
  name: string;
}
