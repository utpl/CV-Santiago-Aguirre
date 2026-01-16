export interface Experience {
  position: string;
  company: string;
  period: string;
  current?: boolean;
  tasks: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlight?: boolean;
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: string;
  flag: string;
  percentage: number;
}
