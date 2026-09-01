import type { Metadata } from 'next';
import { Bodoni_Moda, Cormorant_Garamond, Inter, Italianno, Parisienne } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const body = Inter({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500', '600'] });
const script = Italianno({ variable: '--font-script', subsets: ['latin'], weight: '400' });
const names = Parisienne({ variable: '--font-names', subsets: ['latin'], weight: '400' });
const luxe = Bodoni_Moda({ variable: '--font-luxe', subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = { title: 'A Wedding Invitation', description: 'A little invitation, made with a lot of love.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${script.variable} ${names.variable} ${luxe.variable}`}>{children}</body></html>;
}
