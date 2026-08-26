import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer 18+ - Kebijakan & Peringatan | Jun88',
  description: 'Baca disclaimer dan peringatan 18+ sebelum mengakses konten website Jun88. Pastikan perjudian online legal di wilayah Anda.',
  alternates: {
    canonical: 'https://jun88ss.org/disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Disclaimer 18+ - Kebijakan & Peringatan | Jun88',
    description: 'Baca disclaimer dan peringatan 18+ sebelum mengakses konten website Jun88. Pastikan perjudian online legal di wilayah Anda.',
    url: 'https://jun88ss.org/disclaimer',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function DisclaimerPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 3vw, 20px)',
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
        .disclaimer-content h2 {
          color: white;
          font-size: clamp(18px, 2vw, 22px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 8px;
          margin-bottom: 12px;
        }
        .disclaimer-content h2:first-child {
          margin-top: 0;
        }
        .disclaimer-content p {
          color: #d1d5db;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.9;
          margin-bottom: 12px;
        }
        .disclaimer-content ul {
          color: #d1d5db;
          padding-left: clamp(20px, 2vw, 24px);
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .disclaimer-content ul li {
          margin-bottom: 8px;
        }
        .disclaimer-content strong {
          color: white;
        }
        .disclaimer-wrapper {
          background: rgba(255,255,255,0.05);
          border-radius: clamp(12px, 1.5vw, 16px);
          padding: clamp(20px, 3vw, 30px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .warning-box {
          background: rgba(239,68,68,0.1);
          border: 2px solid rgba(239,68,68,0.2);
          border-radius: clamp(12px, 1.5vw, 16px);
          padding: clamp(16px, 2vw, 24px);
          text-align: center;
          margin-bottom: 24px;
        }
        .warning-box h2 {
          color: #f87171;
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        .warning-box p {
          color: #fca5a5;
          margin-bottom: 0;
        }
      `}</style>

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
            Disclaimer <span style={{ color: '#f472b6' }}>18+</span>
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 'clamp(14px, 1.5vw, 16px)', marginTop: '8px' }}>
            Baca disclaimer ini sebelum mengakses konten website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>.
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div className="disclaimer-wrapper">
          <div className="disclaimer-content">
            
            {/* ====== PERINGATAN ====== */}
            <div className="warning-box">
              <div style={{ fontSize: 'clamp(36px, 6vw, 48px)' }}>⚠️</div>
              <h2>PERINGATAN!</h2>
              <p>
                Website ini <strong>HANYA</strong> untuk pengguna 
                berusia <strong>18 tahun ke atas</strong>.
              </p>
            </div>

            {/* ====== SYARAT & KETENTUAN ====== */}
            <h2>📋 Syarat & Ketentuan Akses</h2>
            <ul>
              <li>Anda harus berusia <strong>minimal 18 tahun</strong> untuk mengakses konten website ini.</li>
              <li>Pastikan perjudian online <strong>legal di wilayah hukum Anda</strong>.</li>
              <li>Website ini hanya untuk tujuan <strong>informasi dan hiburan</strong>.</li>
              <li>Bermainlah dengan <strong>tanggung jawab</strong>.</li>
            </ul>

            {/* ====== TANGGUNG JAWAB ====== */}
            <h2 style={{ marginTop: 'clamp(24px, 3vw, 30px)' }}>⚖️ Tanggung Jawab Pengguna</h2>
            <p>
              Kami <strong>tidak bertanggung jawab</strong> atas:
            </p>
            <ul>
              <li>Kerugian finansial akibat penggunaan informasi dari website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a></li>
              <li>Pelanggaran hukum di wilayah Anda</li>
              <li>Penggunaan konten oleh individu di bawah umur</li>
              <li>Keputusan bermain berdasarkan informasi di website ini</li>
            </ul>

            {/* ====== KOMITMEN ====== */}
            <h2 style={{ marginTop: 'clamp(24px, 3vw, 30px)' }}>🤝 Komitmen Kami</h2>
            <ul>
              <li><strong>Tidak menargetkan</strong> anak di bawah umur</li>
              <li>Menyediakan konten edukasi tentang <strong>permainan bertanggung jawab</strong></li>
              <li>Menyertakan peringatan 18+ di setiap halaman</li>
            </ul>

            {/* ====== BANTUAN ====== */}
            <h2 style={{ marginTop: 'clamp(24px, 3vw, 30px)' }}>📞 Butuh Bantuan?</h2>
            <p>
              Jika Anda merasa bermain berlebihan, jangan ragu untuk mencari bantuan profesional.
            </p>
            <ul>
              <li>🌐 <strong>Gambling Help Online</strong> - Dukungan 24/7</li>
              <li>📞 <strong>Hotline Konseling</strong> - (021) 1234-5678</li>
            </ul>

            {/* ====== LAST UPDATED ====== */}
            <div style={{ 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              paddingTop: 'clamp(14px, 1.5vw, 16px)', 
              marginTop: 'clamp(16px, 2vw, 20px)',
              color: '#6b7280',
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              textAlign: 'center'
            }}>
              Terakhir diperbarui: 21 Agustus 2026
            </div>
          </div>
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

      </div>
    </div>
  );
}