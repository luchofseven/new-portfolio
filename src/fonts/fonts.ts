import { Arimo, DM_Serif_Display } from 'next/font/google'

export const arimo = Arimo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-arimo'
})

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dmSerifDisplay'
})
