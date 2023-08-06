import type { Metadata } from 'next'
import { arimo, dmSerifDisplay } from '@/fonts/fonts'
import '../styles/styles.min.css'

export const metadata: Metadata = {
  title: 'Luciano Fernández - Portafolio Web',
  description: 'Portafolio personal de Luciano Fernández, desarrollador web front-end',
  applicationName: 'Luciano Fernández',
  appleWebApp: { title: 'Luciano Fernández' },
  twitter: { title: 'Luciano Fernández - Portafolio Web', images: 'https://portfolio-zeta-five-47.vercel.app/lf-logo.webp', card: 'summary_large_image', site: 'Luciano Fernández', creator: '@luchofseven', description: 'Portafolio personal de Luciano Fernández, desarrollador web front-end' },
  openGraph: { title: 'Luciano Fernández - Portafolio Web', type: 'website', images: 'https://portfolio-zeta-five-47.vercel.app/lf-logo.webp', url: 'https://portfolio-zeta-five-47.vercel.app/', description: 'Portafolio personal de Luciano Fernández, desarrollador web front-end', locale: 'es_ES', siteName: 'Luciano Fernández' }
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
