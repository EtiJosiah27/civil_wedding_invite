import type { Metadata } from 'next';
import { Bodoni_Moda, Cormorant_Garamond, Inter, Italianno, Parisienne } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const body = Inter({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500', '600'] });
const script = Italianno({ variable: '--font-script', subsets: ['latin'], weight: '400' });
const names = Parisienne({ variable: '--font-names', subsets: ['latin'], weight: '400' });
const luxe = Bodoni_Moda({ variable: '--font-luxe', subsets: ['latin'], weight: ['400', '500', '600'] });

const siteUrl = 'https://our-civil-wedding.etijosiah27.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Etieno & Ugo — Civil Wedding',
  description: 'You’re invited to celebrate with Etieno and Ugo on September 25, 2026.',
  openGraph: {
    title: 'Etieno & Ugo — Civil Wedding',
    description: 'You’re invited to celebrate with us on September 25, 2026.',
    url: siteUrl,
    siteName: 'Etieno & Ugo — Civil Wedding',
    type: 'website',
    images: [{ url: '/wedding-preview.jpg', width: 1200, height: 630, alt: 'A chocolate and antique-gold wedding envelope for Etieno and Ugo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etieno & Ugo — Civil Wedding',
    description: 'You’re invited to celebrate with us on September 25, 2026.',
    images: ['/wedding-preview.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${script.variable} ${names.variable} ${luxe.variable}`}>{children}</body></html>;
}
