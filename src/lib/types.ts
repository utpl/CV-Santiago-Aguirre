export interface Experience {
  position: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  tasks: string[];
}

export interface Project {
  title: string;
  role: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  demo?: string;
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

export interface StackGroup {
  title: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
  detail: string;
}

export interface Stat {
  value: string;
  label: string;
}
