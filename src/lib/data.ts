import { Experience, Education, Certification, SkillCategory, Language } from './types';
import { Code, Shield, Database, Globe } from 'lucide-react';

export const experiences: Experience[] = [
  {
    position: "Desarrollador TIC (ámbito educativo)",
    company: "EdiLoja",
    period: "Enero 2023 - Presente",
    current: true,
    tasks: [
      "Implementación y personalización de Moodle y Canvas",
      "Virtualización de cursos bajo estándares de diseño instruccional",
      "Administración de servidores y sistemas",
      "Capacitación y soporte a usuarios",
      "Desarrollo de herramientas en HTML, CSS y JavaScript"
    ]
  },
  {
    position: "Analista de Desarrollo de Sistemas",
    company: "UTPL",
    period: "Mayo 2022 - Diciembre 2022",
    current: false,
    tasks: [
      "Gestión documental y repositorios institucionales",
      "Optimización de procesos TIC",
      "Análisis y mejora de sistemas existentes"
    ]
  },
  {
    position: "Digitalizador TIC",
    company: "EdiLoja",
    period: "Febrero 2021 - Abril 2022",
    current: false,
    tasks: [
      "Virtualización de metacursos en HTML y CSS",
      "Implementación de recursos interactivos",
      "Diseño de contenido educativo digital"
    ]
  },
  {
    position: "Desarrollador Full Stack",
    company: "Ingenix",
    period: "Octubre 2020 - Diciembre 2020",
    current: false,
    tasks: [
      "Desarrollo Front-End y Back-End en JavaScript",
      "Proyectos: Toosh-Eventos, Megashop",
      "Integración de funcionalidades complejas"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Máster en Ciberseguridad",
    institution: "UNIR (Universidad Internacional de La Rioja)",
    period: "2022 - Presente",
    status: "En curso",
    highlight: true
  },
  {
    degree: "Ingeniero en Sistemas Informáticos",
    institution: "UTPL (Universidad Técnica Particular de Loja)",
    period: "2013",
    status: "Completado"
  },
  {
    degree: "Asistente en Desarrollo de Software",
    institution: "Centro de Estudios Latinoamericano",
    period: "2017",
    status: "Completado"
  }
];

export const certifications: Certification[] = [
  {
    title: "Business Intelligence con Power BI",
    organization: "Sociedad Ecuatoriana de Estadística",
    year: "2022"
  },
  {
    title: "Ethical Hacking",
    organization: "Hacker Mentor (Quito)",
    year: "2023"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Desarrollo",
    color: "blue",
    skills: [
      { name: "Python & Django", level: 90 },
      { name: "JavaScript & Vue.js", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Java", level: 80 },
    ]
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    color: "red",
    skills: [
      { name: "Ethical Hacking", level: 85 },
      { name: "Seguridad de la Información", level: 80 },
      { name: "Análisis de Vulnerabilidades", level: 75 },
    ]
  },
  {
    icon: Database,
    title: "Bases de Datos & ERP",
    color: "green",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Odoo", level: 80 },
      { name: "Power BI", level: 75 },
    ]
  },
  {
    icon: Globe,
    title: "Plataformas LMS",
    color: "purple",
    skills: [
      { name: "Moodle", level: 95 },
      { name: "Canvas", level: 90 },
      { name: "Diseño Instruccional", level: 85 },
    ]
  }
];

export const otherTechnologies = [
  "Bootstrap", "Vuetify.js", "Tailwind CSS", "Windows Server", "Linux", "Redes", "Git", "Docker"
];

export const languages: Language[] = [
  {
    name: "Español",
    level: "Nativo",
    flag: "🇪🇨",
    percentage: 100
  },
  {
    name: "Inglés",
    level: "Intermedio",
    flag: "🇬🇧",
    percentage: 75
  }
];
