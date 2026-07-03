import type { Metadata } from 'next';
import { spaceGrotesk, ibmPlexMono } from '@/fonts/fonts';
import '../styles/styles.css';

export const metadata: Metadata = {
  title: 'Luciano Fernández - Portafolio Web',
  description:
    'Mi portafolio personal, donde podrás encontrar mis proyectos y contactarte conmigo.',
  applicationName: 'Luciano Fernández',
  icons: '/og-fullstack.png',
  themeColor: '#b45cff',
  appleWebApp: { title: 'Luciano Fernández' },
  twitter: {
    title: 'Luciano Fernández - Portafolio Web',
    card: 'summary_large_image',
    site: 'Luciano Fernández',
    creator: '@luchofseven',
    images: '/og-fullstack.png',
    description:
      'Mi portafolio personal, donde podrás encontrar mis proyectos y contactarte conmigo.',
  },
  openGraph: {
    title: 'Luciano Fernández - Portafolio Web',
    type: 'website',
    images: [{ url: '/og-fullstack.png' }],
    url: 'https://luchofseven.com.ar',
    description:
      'Mi portafolio personal, donde podrás encontrar mis proyectos y contactarte conmigo.',
    locale: 'es_ES',
    siteName: 'Luciano Fernández',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
