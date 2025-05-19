import { DM_Serif_Display, Lilita_One, Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  display: 'swap',
});

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dmSerifDisplay',
  display: 'swap',
});

export const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lilitaOne',
  display: 'swap',
});
