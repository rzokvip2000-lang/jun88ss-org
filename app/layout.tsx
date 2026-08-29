import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Review Slot Jun88 - Ways of the Qilin & Mahjong Ways',
  description: 'Review jujur & mendalam untuk game slot Ways of the Qilin dan Mahjong Ways di platform Jun88.',
  keywords: 'Jun88, slot online, PG Soft, review slot, Ways of the Qilin, Mahjong Ways, RTP tertinggi, jun88 login, jun88 daftar',
  alternates: {
    canonical: 'https://jun88ss.org',
  },
  openGraph: {
    title: 'Review Slot Jun88 - Ways of the Qilin & Mahjong Ways',
    description: 'Review jujur & mendalam untuk game slot Ways of the Qilin dan Mahjong Ways di platform Jun88.',
    url: 'https://jun88ss.org',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
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
    google: 'ysIeOos7NtKlh0dQ3s8-GGZC0PMD6voKC6LTaymFUz4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="canonical" href="https://jun88ss.org" />
        <meta name="author" content="Jun88" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="dns-prefetch" href="https://jun88ss.org" />
        <link rel="dns-prefetch" href="https://h5.jun882345.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Jun88',
              url: 'https://jun88ss.org',
              description: 'Review jujur & mendalam untuk game slot populer di Jun88.',
              potentialAction: {
                '@type': 'SearchAction',
                'target': 'https://jun88ss.org/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 768px) {
                main {
                  padding-top: 70px !important;
                }
              }
              @media (min-width: 769px) {
                main {
                  padding-top: 64px !important;
                }
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-black min-h-screen overflow-x-hidden`}>
        <div className="bg-site" />
        <div className="bg-overlay" />

        <div className="bg-glow-purple" />
        <div className="bg-glow-pink" />
        <div className="bg-glow-gold" />
        <div className="bg-grid-pattern" />

        <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
          <Header />
          <main className="min-h-screen pt-16 w-full overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}