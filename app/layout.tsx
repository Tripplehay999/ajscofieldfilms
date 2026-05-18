import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Bebas_Neue } from 'next/font/google';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ajscofieldfilms',
    template: '%s — ajscofieldfilms',
  },
  description:
    'A SCOFIELD PRODUCTION | Cinematic brand films, weddings, music videos, event highlights, and premium color grade.',
  openGraph: {
    title: 'ajscofieldfilms',
    description: 'Cinematic storytelling for modern brands.',
    siteName: 'ajscofieldfilms',
  },
  // Save your logo to public/logo.png — it will appear as the browser tab icon
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-[#050505] font-sans text-white antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
