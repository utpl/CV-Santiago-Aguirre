import type {
  Certification,
  Education,
  Experience,
  Language,
  Project,
  StackGroup,
  Stat,
} from './types';

export const stats: Stat[] = [
  { value: '5+', label: 'años en tecnología educativa' },
  { value: 'LMS', label: 'Moodle y Canvas en producción' },
  { value: '2', label: 'universidades y editoriales atendidas' },
  { value: 'MSc', label: 'Ciberseguridad (UNIR)' },
];

export const about = [
  'Ingeniero en Sistemas especializado en plataformas de gestión del aprendizaje. Desde 2021 trabajo en el ecosistema editorial y universitario de Loja, donde llevo cursos desde el guion en Word hasta el aula virtual publicada: virtualización bajo estándares de diseño instruccional, desarrollo de recursos interactivos y automatización de todo lo que se repite.',
  'Mi trabajo vive en la intersección de tres cosas: el contenido académico, las restricciones reales de Canvas y Moodle, y el código que las reconcilia. He construido pipelines en Python que convierten documentos editoriales en cursos completos vía API, constructores visuales que evitan que un docente tenga que tocar HTML, y decenas de recursos interactivos autocontenidos que funcionan dentro de un iframe sin librerías externas.',
  'Complemento ese perfil con administración de servidores y seguridad de la información —actualmente cursando el Máster en Ciberseguridad en UNIR—, lo que me permite hacerme cargo del ciclo completo: desarrollar, desplegar, endurecer y mantener.',
];

export const experiences: Experience[] = [
  {
    position: 'Desarrollador TIC — Ámbito educativo',
    company: 'EdiLoja',
    location: 'Loja, Ecuador',
    period: 'Enero 2023 — Presente',
    current: true,
    summary:
      'Responsable técnico de la producción de cursos virtuales y de las herramientas internas que la sostienen.',
    tasks: [
      'Implementación, personalización y administración de Moodle y Canvas LMS',
      'Virtualización de cursos bajo estándares de diseño instruccional',
      'Automatización de la producción de contenido con Python y las APIs REST de Canvas',
      'Desarrollo de recursos interactivos en HTML, CSS y JavaScript para aulas virtuales',
      'Administración de servidores, respuesta a incidentes y endurecimiento de infraestructura',
      'Capacitación y soporte técnico a docentes y equipos editoriales',
    ],
  },
  {
    position: 'Analista de Desarrollo de Sistemas',
    company: 'UTPL — Universidad Técnica Particular de Loja',
    location: 'Loja, Ecuador',
    period: 'Mayo 2022 — Diciembre 2022',
    summary:
      'Soporte al área de sistemas en gestión documental y mejora de procesos institucionales.',
    tasks: [
      'Gestión documental y mantenimiento de repositorios institucionales',
      'Análisis y optimización de procesos TIC existentes',
      'Mejora y documentación de sistemas en producción',
    ],
  },
  {
    position: 'Digitalizador TIC',
    company: 'EdiLoja',
    location: 'Loja, Ecuador',
    period: 'Febrero 2021 — Abril 2022',
    summary:
      'Producción de metacursos y recursos digitales para programas de educación a distancia.',
    tasks: [
      'Virtualización de metacursos en HTML y CSS',
      'Implementación de recursos interactivos embebidos en LMS',
      'Diseño y maquetación de contenido educativo digital',
    ],
  },
  {
    position: 'Desarrollador Full Stack',
    company: 'Ingenix',
    period: 'Octubre 2020 — Diciembre 2020',
    summary: 'Desarrollo de producto web en proyectos comerciales.',
    tasks: [
      'Desarrollo front-end y back-end en JavaScript',
      'Proyectos: Toosh-Eventos y Megashop',
      'Integración de funcionalidades transaccionales',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Automatización EdiLoja',
    role: 'Diseño y desarrollo',
    year: '2026',
    summary:
      'Pipeline completo de migración de cursos en Canvas LMS que comprime metacursos de 16 semanas a formatos de 5 y 8 semanas para periodos extraordinarios, siguiendo la plantilla institucional "Rediseño 3".',
    highlights: [
      'Cadena de módulos en Python: tabla Excel → JSON, extracción vía API de Canvas, mapeo del curso origen con BeautifulSoup, copia de imágenes y archivos, y generación del HTML final',
      'Interfaz local en Flask para operar todo el proceso sin línea de comandos',
      'Reglas estructurales codificadas: un archivo por semana, banner con todas las unidades y una "Zona de práctica" con actividades, autoevaluación y actividad evaluada',
      'Reutilización automática de contextualizaciones y marcado de los casos que requieren redacción nueva',
    ],
    stack: ['Python', 'Flask', 'BeautifulSoup', 'Canvas REST API', 'JSON', 'HTML/CSS'],
  },
  {
    title: 'Canvas Course Builder',
    role: 'Diseño y desarrollo',
    year: '2026',
    summary:
      'Constructor visual de cursos empaquetado como bundle de Theme JS de Canvas. Permite a un docente armar un curso completo sin ver una sola línea de HTML, después de que la universidad restringiera el acceso al editor enriquecido.',
    highlights: [
      'Evita el editor RCE y escribe directamente contra la API REST de Canvas usando la sesión y el token CSRF del propio docente',
      'Genera la página "Docente" y las ocho páginas de semana con una sola operación',
      'Interfaz de acordeón por subtema con párrafos, tablas delimitadas por pipes y carga de imágenes mediante el flujo de dos pasos de la Files API',
      'Cero exposición de HTML al usuario final',
    ],
    stack: ['JavaScript', 'Canvas REST API', 'Canvas Theme JS', 'DOM', 'Files API'],
  },
  {
    title: 'Validador de guías didácticas',
    role: 'Diseño y desarrollo',
    year: '2025 — 2026',
    summary:
      'Pipeline de procesamiento de documentos Word y validador en navegador para las guías editoriales de EdiLoja, iterado a lo largo de siete versiones hasta la 3.7.',
    highlights: [
      'Normalización de formato APA para tablas y figuras con numeración por campos SEQ',
      'Detección de tablas fusionadas, reposicionamiento de autoevaluaciones y normalización de leyendas',
      'Idempotencia como requisito duro: reprocesar un documento nunca altera lo ya correcto',
      'Guía de buen etiquetado embebida en la propia herramienta',
      'Desplegado como HTML estático de cliente sobre hosting compartido con cabeceras de no-caché',
    ],
    stack: ['Python', 'python-docx', 'JavaScript', 'HTML', 'JSON', 'Hostinger'],
  },
  {
    title: 'Recursos interactivos para aulas virtuales',
    role: 'Desarrollo',
    year: '2021 — 2026',
    summary:
      'Serie continua de recursos de aprendizaje autocontenidos embebidos en Canvas y Moodle: líneas de tiempo, crucigramas, sopas de letras, emparejamiento drag & drop, gráficos económicos en SVG, quizzes de caso e infografías multimedia.',
    highlights: [
      'Cada recurso es un único archivo HTML sin dependencias externas, dimensionado para iframes de 800×800 px',
      'Fidelidad textual exacta respecto al guion editorial en DOCX',
      'Componentes reutilizables de Canvas —barras de pestañas, rutas de aprendizaje, resultados de aprendizaje animados— construidos solo con CSS, dado que Canvas elimina JavaScript, manejadores en línea y SVG',
      'Resolución de falsos positivos del verificador de accesibilidad moviendo texto visible a pseudo-elementos con content: attr()',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'SVG', 'Canvas LMS', 'Moodle'],
  },
  {
    title: 'Gobierno Abierto — UTPL',
    role: 'Desarrollo y adaptación',
    year: '2026',
    summary:
      'Adaptación sistemática de trece recursos interactivos del curso de Gobierno Abierto a la identidad visual institucional de la UTPL.',
    highlights: [
      'Paleta institucional aplicada de forma consistente: navy #004170, dorado #F2BF42 y tinta #14202D, reservando rojo y verde para estados de retroalimentación',
      'Conversión de recursos construidos en React a HTML vanilla autocontenido',
      'Cobertura de líneas de tiempo, cuestionarios y actividades de arrastrar y soltar',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Sistema de diseño'],
  },
  {
    title: 'Respuesta a incidente y plan de infraestructura',
    role: 'Análisis y consultoría',
    year: '2026',
    summary:
      'Investigación y erradicación de un compromiso de seguridad en el hosting corporativo de EdiLoja, con documentación técnica y una hoja de ruta de migración a la nube.',
    highlights: [
      'Análisis forense que databa el compromiso en aproximadamente 77 días y eliminación de los artefactos maliciosos identificados',
      'Identificación del complemento responsable del vector de reinfección',
      'Informes técnicos formales para sustentar la decisión ante la dirección',
      'Propuesta de migración en tres fases: auditoría, traslado a nube y administración de seguridad continua',
    ],
    stack: ['Linux', 'cPanel', 'Hardening', 'AWS / GCP / Azure', 'Documentación técnica'],
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: 'Lenguajes y frameworks',
    items: [
      'Python',
      'Django',
      'Flask',
      'JavaScript',
      'TypeScript',
      'Vue.js',
      'React',
      'Next.js',
      'Java',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Plataformas educativas',
    items: [
      'Canvas LMS',
      'Moodle',
      'Canvas REST API',
      'Theme JS',
      'Diseño instruccional',
      'Accesibilidad WCAG',
      'SCORM / iframes',
    ],
  },
  {
    title: 'Infraestructura y seguridad',
    items: [
      'Linux',
      'Windows Server',
      'Docker',
      'Redes',
      'cPanel / Hostinger',
      'AWS Lightsail',
      'Hardening',
      'Ethical Hacking',
      'Respuesta a incidentes',
    ],
  },
  {
    title: 'Datos y herramientas',
    items: [
      'MongoDB',
      'PostgreSQL',
      'Power BI',
      'Odoo',
      'BeautifulSoup',
      'python-docx',
      'Git',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Máster en Ciberseguridad',
    institution: 'UNIR — Universidad Internacional de La Rioja',
    period: '2022 — Presente',
    status: 'En curso',
    highlight: true,
  },
  {
    degree: 'Ingeniero en Sistemas Informáticos y Computación',
    institution: 'UTPL — Universidad Técnica Particular de Loja',
    period: 'Titulado',
    status: 'Completado',
  },
  {
    degree: 'Asistente en Desarrollo de Software',
    institution: 'Centro de Estudios Latinoamericano',
    period: '2017',
    status: 'Completado',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Ethical Hacking',
    organization: 'Hacker Mentor · Quito',
    year: '2023',
  },
  {
    title: 'Business Intelligence con Power BI',
    organization: 'Sociedad Ecuatoriana de Estadística',
    year: '2022',
  },
];

export const languages: Language[] = [
  { name: 'Español', level: 'Nativo', detail: 'Lengua materna' },
  { name: 'Inglés', level: 'Intermedio', detail: 'Lectura técnica y documentación' },
];
