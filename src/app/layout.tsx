import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Hermel Aguirre - Ingeniero en Sistemas | Especialista TIC',
    template: '%s | Hermel Aguirre'
  },
  description: 'CV profesional de Hermel Santiago Aguirre Montaño - Especialista en Moodle, Canvas, Ciberseguridad y Desarrollo de Software. Más de 3 años de experiencia en plataformas LMS.',
  keywords: ['Ingeniero en Sistemas', 'Desarrollador', 'Moodle', 'Canvas', 'Ciberseguridad', 'LMS', 'Ecuador', 'UTPL', 'EdiLoja'],
  authors: [{ name: 'Hermel Santiago Aguirre Montaño' }],
  creator: 'Hermel Santiago Aguirre Montaño',
  publisher: 'Hermel Santiago Aguirre Montaño',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hermel-aguirre.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hermel Aguirre - Ingeniero en Sistemas | Especialista TIC',
    description: 'CV profesional de Hermel Santiago Aguirre Montaño - Especialista en Moodle, Canvas, Ciberseguridad y Desarrollo de Software.',
    url: 'https://hermel-aguirre.dev',
    siteName: 'Hermel Aguirre Portfolio',
    locale: 'es_EC',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hermel Aguirre - Ingeniero en Sistemas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hermel Aguirre - Ingeniero en Sistemas | Especialista TIC',
    description: 'CV profesional de Hermel Santiago Aguirre Montaño - Especialista en Moodle, Canvas, Ciberseguridad y Desarrollo de Software.',
    images: ['/og-image.jpg'],
    creator: '@hermelaguirre',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}