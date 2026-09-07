export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://cv-santiago-aguirre.vercel.app');

export const PROFILE = {
  name: 'Hermel Santiago Aguirre Montaño',
  shortName: 'Santiago Aguirre',
  title: 'Desarrollador Full Stack',
  subtitle: 'Python · FastAPI · TypeScript · Next.js',
  tagline:
    'Construyo aplicaciones de punta a punta: APIs en Python sobre PostgreSQL y Redis, interfaces en Next.js y TypeScript. Cinco años resolviendo problemas reales de producción en el sector editorial y universitario.',
  location: 'Loja, Ecuador',
  availability: 'Disponible para nuevas oportunidades',
  photo: '/FOTO.jpg',
  cv: '/cv-santiago-aguirre.pdf',
  cvFileName: 'CV-Santiago-Aguirre.pdf',
};

export const CONTACT = {
  email: 'santiaguirrem@gmail.com',
  phone: '+593 99 395 4787',
  whatsapp: '593993954787',
  whatsappMessage:
    'Hola Santiago, vi tu portafolio y me gustaría conversar sobre una vacante.',
  linkedin: 'https://www.linkedin.com/in/santiago-aguirre-93b4251b1/',
  github: 'https://github.com/utpl',
};
