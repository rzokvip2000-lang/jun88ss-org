import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Review Slot Jun88 - Ways of the Qilin & Mahjong Ways',
  description: 'Review jujur & mendalam untuk game slot Ways of the Qilin dan Mahjong Ways di platform Jun88.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-black min-h-screen`}>
        
        {/* ====== BACKGROUND ====== */}
        <div className="bg-site" />
        <div className="bg-overlay" />

        {/* ====== GLOW & GRID EFFECTS ====== */}
        <div className="bg-glow-purple" />
        <div className="bg-glow-pink" />
        <div className="bg-glow-gold" />
        <div className="bg-grid-pattern" />

        {/* ====== CONTENT ====== */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}