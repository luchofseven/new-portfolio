import type { Metadata } from 'next'
import { arimo, dmSerifDisplay } from '@/fonts/fonts'
import '../styles/styles.min.css'

export const metadata: Metadata = {
  title: 'Luciano Fernández - Portafolio Web'
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
