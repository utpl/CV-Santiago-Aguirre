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
  { value: '5+', label: 'años desarrollando software' },
  { value: 'Full Stack', label: 'Python / FastAPI y TypeScript / Next.js' },
  { value: '10+', label: 'proyectos propios en producción' },
  { value: 'MSc', label: 'Ciberseguridad · UNIR' },
];

export const about = [
  'Desarrollador full stack con cinco años construyendo software que se usa a diario. En el back trabajo con Python —FastAPI, SQLAlchemy, PostgreSQL, Redis— y en el front con TypeScript, React y Next.js. Escribo sistemas completos: modelo de datos, API, colas de trabajo, interfaz y despliegue.',
  'Mi experiencia viene del sector editorial y universitario, donde los problemas rara vez son de manual: integrar plataformas con APIs de terceros, procesar documentos con reglas de negocio complejas, automatizar procesos que antes tomaban semanas. Eso me acostumbró a leer documentación ajena, trabajar con restricciones que no elegí y entregar lo que funciona en producción, no lo que funciona en local.',
  'Documento lo que construyo —decisiones de arquitectura, contratos entre servicios, deuda técnica— porque el código que nadie más puede mantener no sirve. Complemento el perfil con administración de servidores y seguridad de la información, y curso el Máster en Ciberseguridad en UNIR.',
];

export const experiences: Experience[] = [
  {
    position: 'Desarrollador — Ámbito educativo',
    company: 'EdiLoja',
    location: 'Loja, Ecuador',
    period: 'Enero 2023 — Presente',
    current: true,
    summary:
      'Desarrollo de las plataformas internas de producción de contenido y responsable técnico de la infraestructura que las sostiene.',
    tasks: [
      'Diseño y desarrollo de aplicaciones en Python (FastAPI, SQLAlchemy, PostgreSQL, Redis) para automatizar la producción editorial',
      'Interfaces web en TypeScript, React y Next.js, y en htmx cuando el proyecto no justifica un build de front',
      'Integración con las APIs REST de Canvas LMS: autenticación, subida de archivos y creación de contenido programática',
      'Implementación, personalización y administración de Moodle y Canvas LMS',
      'Administración de servidores Linux, respuesta a incidentes y endurecimiento de la infraestructura',
      'Documentación técnica: arquitectura, ADRs, contratos front-back y registro de deuda técnica',
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
      'Análisis y optimización de procesos internos mediante soluciones TIC',
      'Mejora y documentación de sistemas en producción',
    ],
  },
  {
    position: 'Digitalizador TIC',
    company: 'EdiLoja',
    location: 'Loja, Ecuador',
    period: 'Febrero 2021 — Abril 2022',
    summary:
      'Desarrollo front-end de contenido y recursos digitales para programas de educación a distancia.',
    tasks: [
      'Maquetación de metacursos en HTML y CSS para la modalidad abierta y a distancia de la UTPL',
      'Desarrollo de recursos interactivos autocontenidos en HTML, CSS, JavaScript y SVG',
      'Revisión y adaptación de parámetros operativos de planes docentes',
    ],
  },
  {
    position: 'Desarrollador Full Stack',
    company: 'Ingenix',
    period: 'Octubre 2020 — Diciembre 2020',
    summary: 'Desarrollo de producto web en proyectos comerciales.',
    tasks: [
      'Desarrollo front-end y back-end de aplicaciones web en JavaScript',
      'Proyectos: Toosh-Eventos y Megashop',
      'Integración de funcionalidades transaccionales',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Automatización EdiLoja',
    role: 'Arquitectura y desarrollo',
    year: '2026',
    summary:
      'Plataforma completa para la producción de guías didácticas y metacursos de Canvas. Todo el sistema orbita alrededor de un documento único: un agente de IA genera el borrador, los docentes lo revisan en un editor web, un validador aplica las reglas institucionales y el resultado se publica en Canvas.',
    highlights: [
      'Back-end en FastAPI con PostgreSQL 17, SQLAlchemy 2, migraciones con Alembic y colas de trabajo en Redis + RQ',
      'Autenticación con JWT y hashing Argon2; front-end en htmx y Jinja2, sin paso de compilación',
      'Monorepo con apps, librerías compartidas, esquemas JSON versionados y vocabulario controlado',
      'Suite de pruebas y documentación propia: arquitectura, ADRs, contrato front-back y registro de deuda técnica',
    ],
    stack: ['Python 3.13', 'FastAPI', 'PostgreSQL', 'Redis + RQ', 'SQLAlchemy', 'Alembic', 'htmx'],
    repo: 'https://github.com/utpl/Atomatizacion_Ediloja',
  },
  {
    title: 'Loja Moda',
    role: 'Desarrollo full stack',
    year: '2026',
    summary:
      'Ecommerce de moda en Next.js que permite al usuario visualizar cómo le quedaría una prenda a partir de su propia fotografía. Catálogo, registro de usuarios y flujo de compra.',
    highlights: [
      'Next.js con App Router y TypeScript de extremo a extremo',
      'Prueba virtual de prendas sobre la foto del usuario',
      'Catálogo, cuentas de usuario y carrito con flujo de compra',
      'Desplegado en Vercel con integración continua desde el repositorio',
    ],
    stack: ['Next.js', 'TypeScript', 'React', 'Vercel'],
    repo: 'https://github.com/utpl/Loja-Moda',
    demo: 'https://loja-moda-delta.vercel.app',
  },
  {
    title: 'Canvas Course Builder',
    role: 'Diseño y desarrollo',
    year: '2026',
    summary:
      'Constructor visual de cursos empaquetado como bundle de Theme JS de Canvas. Permite a un docente armar un curso completo sin ver una línea de HTML, después de que la universidad restringiera el acceso al editor enriquecido.',
    highlights: [
      'Evita el editor RCE y escribe directamente contra la API REST de Canvas usando la sesión y el token CSRF del docente',
      'Genera la página "Docente" y las ocho páginas de semana en una sola operación',
      'Editor de acordeón por subtema con párrafos, tablas y carga de imágenes vía el flujo de dos pasos de la Files API',
      'Cero exposición de HTML al usuario final',
    ],
    stack: ['JavaScript', 'Canvas REST API', 'Files API', 'DOM'],
  },
  {
    title: 'Apolo — Gestión de personal',
    role: 'Desarrollo full stack',
    year: '2025',
    summary:
      'Aplicación web para la gestión de personal: registro de empleados, datos y seguimiento, construida sobre Next.js con Firebase como backend.',
    highlights: [
      'Next.js con TypeScript y Firebase para autenticación y persistencia',
      'Modelo de datos y vistas de administración de personal',
      'Desplegado en Vercel',
    ],
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Vercel'],
    repo: 'https://github.com/utpl/Apolo',
    demo: 'https://apolo-ten.vercel.app',
  },
  {
    title: 'Pipeline de guías didácticas',
    role: 'Diseño y desarrollo',
    year: '2025 — 2026',
    summary:
      'Procesamiento automatizado de documentos Word para las guías editoriales: normalización de formato, validación contra reglas de estilo y conversión a datos estructurados, iterado a lo largo de varias versiones.',
    highlights: [
      'Normalización de formato APA para tablas y figuras con numeración por campos SEQ',
      'Detección de tablas fusionadas, reposicionamiento de secciones y normalización de leyendas',
      'Idempotencia como requisito duro: reprocesar un documento nunca altera lo ya correcto',
      'Empaquetado con Docker y migraciones de base de datos con Alembic',
    ],
    stack: ['Python', 'python-docx', 'Docker', 'Alembic', 'JavaScript'],
    repo: 'https://github.com/utpl/App_Creacion-guias-',
  },
  {
    title: 'Recursos educativos interactivos',
    role: 'Desarrollo front-end',
    year: '2021 — 2026',
    summary:
      'Serie continua de recursos de aprendizaje autocontenidos embebidos en Canvas y Moodle: líneas de tiempo, crucigramas, emparejamiento drag & drop, gráficos en SVG, quizzes de caso e infografías.',
    highlights: [
      'Cada recurso es un único archivo HTML sin dependencias externas, dimensionado para iframes de 800×800 px',
      'Componentes construidos solo con CSS, dado que Canvas elimina JavaScript, manejadores en línea y SVG',
      'Resolución de falsos positivos del verificador de accesibilidad con pseudo-elementos y content: attr()',
      'Conversión de recursos en React a HTML vanilla para su distribución',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'SVG', 'React', 'Accesibilidad'],
    repo: 'https://github.com/utpl/Recursos-Educativos',
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: 'Back-end',
    items: [
      'Python 3.13',
      'FastAPI',
      'Django',
      'Flask',
      'SQLAlchemy',
      'Alembic',
      'Redis + RQ',
      'JWT / Argon2',
      'Node.js',
      'Java',
    ],
  },
  {
    title: 'Front-end',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Tailwind CSS',
      'htmx',
      'HTML5',
      'CSS3',
      'SVG',
      'Accesibilidad WCAG',
    ],
  },
  {
    title: 'Datos e infraestructura',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Docker',
      'Linux',
      'Windows Server',
      'Vercel',
      'AWS Lightsail',
      'Git',
      'Power BI',
    ],
  },
  {
    title: 'Integraciones y seguridad',
    items: [
      'Canvas LMS REST API',
      'Moodle',
      'Canvas Theme JS',
      'python-docx',
      'BeautifulSoup',
      'Odoo',
      'Hardening de servidores',
      'Ethical Hacking',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Máster en Ciberseguridad',
    institution: 'UNIR — Universidad Internacional de La Rioja',
    period: 'Finalización prevista 2027',
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
    year: '2022',
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
