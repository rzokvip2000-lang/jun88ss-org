// HAPUS 'use client' - Metadata hanya bisa di Server Component

import Link from 'next/link';

export const metadata = {
  title: 'Tentang Jun88 - Platform Slot Online Terpercaya | Review Jun88',
  description: 'Kenali Jun88 lebih dekat. Platform slot online terpercaya dengan review jujur, RTP terbaru, dan panduan lengkap untuk pemain Indonesia.',
  alternates: {
    canonical: 'https://jun88ss.org/tentang',
  },
  openGraph: {
    title: 'Tentang Jun88 - Platform Slot Online Terpercaya | Review Jun88',
    description: 'Kenali Jun88 lebih dekat. Platform slot online terpercaya dengan review jujur, RTP terbaru, dan panduan lengkap untuk pemain Indonesia.',
    url: 'https://jun88ss.org/tentang',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TentangPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      padding: 'clamp(24px, 4vw, 40px) clamp(16px, 3vw, 20px)',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* ====== BACKGROUND EFFECTS ====== */}
      <div style={{
        position: 'fixed',
        width: 'clamp(300px, 40vw, 600px)',
        height: 'clamp(300px, 40vw, 600px)',
        top: '-200px',
        left: '-200px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'fixed',
        width: 'clamp(250px, 35vw, 500px)',
        height: 'clamp(250px, 35vw, 500px)',
        bottom: '-150px',
        right: '-150px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: 'clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px)'
      }}></div>

      {/* ====== CONTENT ====== */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto',
        paddingTop: 'clamp(40px, 6vw, 80px)'
      }}>
        
        {/* ====== HEADER ====== */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 4vw, 40px)' }}>
          <h1 style={{ 
            fontSize: 'clamp(28px, 5vw, 40px)', 
            fontWeight: 'bold',
            margin: '0'
          }}>
            Tentang <span style={{ color: '#a78bfa' }}>Jun88</span>
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            maxWidth: '600px', 
            margin: '12px auto 0',
            fontSize: 'clamp(14px, 1.5vw, 18px)'
          }}>
            Memahami platform <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> dan tujuan di balik review yang kami sajikan
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 'clamp(12px, 1.5vw, 16px)',
          padding: 'clamp(20px, 3vw, 30px)',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          lineHeight: 1.9
        }}>
          
          <h2 style={{ 
            color: 'white', 
            fontSize: 'clamp(20px, 2.5vw, 24px)', 
            marginTop: '0', 
            marginBottom: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            paddingBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎯 Apa Itu Jun88?
          </h2>
          <p style={{ color: '#d1d5db', marginBottom: '12px', fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
            <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 'bold' }}>Jun88</a> adalah platform hiburan digital yang telah berkembang pesat di Asia Tenggara, khususnya Indonesia. Platform ini menyediakan berbagai permainan slot online dari provider ternama seperti <strong style={{ color: 'white' }}>PG Soft</strong>, <strong style={{ color: 'white' }}>Pragmatic Play</strong>, dan <strong style={{ color: 'white' }}>Microgaming</strong>.
          </p>
          <p style={{ color: '#d1d5db', marginBottom: '12px', fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
            Dengan lisensi resmi dan sistem enkripsi canggih, <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> menjamin keamanan data dan transaksi pemain. Layanan pelanggan 24/7 serta antarmuka yang user-friendly membuat pengalaman bermain semakin nyaman.
          </p>
          
          <h2 style={{ 
            color: 'white', 
            fontSize: 'clamp(20px, 2.5vw, 24px)', 
            marginTop: 'clamp(24px, 3vw, 30px)', 
            marginBottom: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            paddingBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎯 Mengapa Review Ini Dibuat?
          </h2>
          <p style={{ color: '#d1d5db', marginBottom: '12px', fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
            ReviewJun88 lahir dari kebutuhan akan informasi yang <strong style={{ color: 'white' }}>jujur, transparan, dan mendalam</strong> tentang game-game slot di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>. Kami melakukan <strong style={{ color: 'white' }}>playtest langsung</strong> pada setiap game, menganalisis RTP, volatilitas, dan fitur bonus untuk memastikan akurasi informasi.
          </p>
          <p style={{ color: '#d1d5db', marginBottom: '12px', fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
            Tujuan kami adalah <strong style={{ color: 'white' }}>memberdayakan pemain</strong> dengan informasi yang dibutuhkan untuk membuat keputusan lebih bijak.
          </p>
          
          <h2 style={{ 
            color: 'white', 
            fontSize: 'clamp(20px, 2.5vw, 24px)', 
            marginTop: 'clamp(24px, 3vw, 30px)', 
            marginBottom: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            paddingBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎯 Apa yang Kami Tawarkan?
          </h2>
          <ul style={{ 
            color: '#d1d5db', 
            paddingLeft: 'clamp(20px, 2vw, 24px)', 
            marginBottom: '16px',
            fontSize: 'clamp(14px, 1.2vw, 16px)'
          }}>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Review Game Jujur:</strong> Berdasarkan pengalaman bermain nyata, bukan copy-paste.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Informasi RTP Terbaru:</strong> Data selalu diperbarui sesuai update resmi provider.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Panduan & Strategi:</strong> Dari pemula hingga profesional.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Rekomendasi Objektif:</strong> Independen, tidak terikat pihak manapun.
            </li>
          </ul>
          
          <h2 style={{ 
            color: 'white', 
            fontSize: 'clamp(20px, 2.5vw, 24px)', 
            marginTop: 'clamp(24px, 3vw, 30px)', 
            marginBottom: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            paddingBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎯 Metodologi Review
          </h2>
          <ul style={{ 
            color: '#d1d5db', 
            paddingLeft: 'clamp(20px, 2vw, 24px)', 
            marginBottom: '16px',
            fontSize: 'clamp(14px, 1.2vw, 16px)'
          }}>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Playtest Langsung:</strong> Minimal 100 putaran per game.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Analisis RTP & Volatilitas:</strong> Data resmi dari provider.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Evaluasi Fitur Bonus:</strong> Free spin, wild, scatter, dan lainnya.
            </li>
            <li style={{ marginBottom: '8px', lineHeight: '1.7' }}>
              <strong style={{ color: 'white' }}>Update Berkala:</strong> Review diperbarui sesuai perubahan game.
            </li>
          </ul>
          
          <h2 style={{ 
            color: 'white', 
            fontSize: 'clamp(20px, 2.5vw, 24px)', 
            marginTop: 'clamp(24px, 3vw, 30px)', 
            marginBottom: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            paddingBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🎯 Komitmen Kami
          </h2>
          <p style={{ color: '#d1d5db', marginBottom: '12px', fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
            Kami berkomitmen menyajikan informasi <strong style={{ color: 'white' }}>akurat, terpercaya, dan bermanfaat</strong>. Kami juga mendukung <strong style={{ color: 'white' }}>permainan bertanggung jawab</strong> dengan selalu menyertakan peringatan 18+ dan panduan bermain bijak.
          </p>
          <p style={{ color: '#d1d5db', marginBottom: '0', fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
            Selamat bermain di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> dan semoga beruntung!
          </p>
        </div>

        {/* ====== BACK TO HOME ====== */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(20px, 3vw, 30px)' }}>
          <Link
            href="/"
            className="back-link"
          >
            ← Kembali ke Beranda
          </Link>
        </div>

        {/* ====== STYLES ====== */}
        <style>{`
          .back-link {
            color: #6b7280;
            text-decoration: none;
            font-size: clamp(13px, 1.2vw, 14px);
            transition: all 0.3s;
            display: inline-block;
          }
          .back-link:hover {
            color: white;
            transform: translateX(-4px);
          }
        `}</style>

      </div>
    </div>
  );
}