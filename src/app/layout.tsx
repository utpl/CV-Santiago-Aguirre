import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { PROFILE, CONTACT, SITE_URL } from '@/lib/site';

// Fuentes auto-alojadas: sin peticiones a Google en build ni en runtime.
const sans = localFont({
  src: './fonts/inter-latin-variable.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-sans',
  fallback: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

const display = localFont({
  src: './fonts/playfair-latin-variable.woff2',
  weight: '400 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-display',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

const description =
  'Ingeniero en Sistemas especializado en Canvas LMS, Moodle, automatización de contenido educativo y seguridad de la información. Loja, Ecuador.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.shortName} — ${PROFILE.title}`,
    template: `%s · ${PROFILE.shortName}`,
  },
  description,
  keywords: [
    'Ingeniero en Sistemas',
    'Canvas LMS',
    'Moodle',
    'Tecnología educativa',
    'Diseño instruccional',
    'Ciberseguridad',
    'Python',
    'Next.js',
    'Loja',
    'Ecuador',
    'UTPL',
    'EdiLoja',
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: 'es_EC',
    url: SITE_URL,
    siteName: `${PROFILE.shortName} · Portafolio`,
    title: `${PROFILE.shortName} — ${PROFILE.title}`,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.shortName} — ${PROFILE.title}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#080D16',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.name,
  alternateName: PROFILE.shortName,
  jobTitle: PROFILE.title,
  email: `mailto:${CONTACT.email}`,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE.photo}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Loja',
    addressCountry: 'EC',
  },
  sameAs: [CONTACT.linkedin, CONTACT.github],
  knowsAbout: [
    'Canvas LMS',
    'Moodle',
    'Diseño instruccional',
    'Automatización de contenido',
    'Ciberseguridad',
    'Python',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
