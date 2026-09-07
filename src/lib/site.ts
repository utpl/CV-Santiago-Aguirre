export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://cv-santiago-aguirre.vercel.app');

export const PROFILE = {
  name: 'Hermel Santiago Aguirre Montaño',
  shortName: 'Santiago Aguirre',
  title: 'Ingeniero en Sistemas · Especialista en Tecnología Educativa',
  tagline:
    'Diseño y automatizo la infraestructura que sostiene la educación en línea: plataformas LMS, pipelines de contenido y recursos digitales de aprendizaje.',
  location: 'Loja, Ecuador',
  availability: 'Disponible para proyectos y consultoría',
  photo: '/FOTO.jpg',
  cv: '/cv-santiago-aguirre.pdf',
  cvFileName: 'CV-Santiago-Aguirre.pdf',
};

export const CONTACT = {
  email: 'santiaguirrem@gmail.com',
  phone: '+593 99 395 4787',
  whatsapp: '593993954787',
  whatsappMessage:
    'Hola Santiago, vi tu portafolio y me gustaría conversar sobre un proyecto.',
  linkedin: 'https://www.linkedin.com/in/santiago-aguirre-93b4251b1/',
  github: 'https://github.com/utpl',
};
