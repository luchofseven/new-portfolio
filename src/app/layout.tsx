import type { Metadata } from 'next'
import { arimo, dmSerifDisplay } from '@/fonts/fonts'
import '../styles/styles.min.css'

export const metadata: Metadata = {
  title: 'Luciano Fernández - Portafolio Web',
  description: 'Mi portafolio personal, donde podrás encontrar mis proyectos y contactarte conmigo.',
  applicationName: 'Luciano Fernández',
  icons: '/lf-logo.png',
  themeColor: '#ec5cff',
  appleWebApp: { title: 'Luciano Fernández' },
  twitter: { title: 'Luciano Fernández - Portafolio Web', card: 'summary_large_image', site: 'Luciano Fernández', creator: '@luchofseven', images: '/og-logo.png', description: 'Portafolio personal de Luciano Fernández, desarrollador web front-end' },
  openGraph: { title: 'Luciano Fernández - Portafolio Web', type: 'website', images: [{ url: '/og-logo.png' }], url: 'https://luchofseven.com.ar', description: 'Portafolio personal de Luciano Fernández, desarrollador web front-end', locale: 'es_ES', siteName: 'Luciano Fernández' }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es" className={`${arimo.variable} ${dmSerifDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
