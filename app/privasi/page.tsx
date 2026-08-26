// HAPUS 'use client' - Metadata hanya bisa di Server Component

import Link from 'next/link';

export const metadata = {
  title: 'Kebijakan Privasi - Jun88 | Perlindungan Data Pengguna',
  description: 'Kebijakan privasi Jun88. Kami menghormati privasi Anda. Baca bagaimana kami mengelola dan melindungi data pengguna di website Jun88.',
  alternates: {
    canonical: 'https://jun88ss.org/kebijakan-privasi',
  },
  openGraph: {
    title: 'Kebijakan Privasi - Jun88 | Perlindungan Data Pengguna',
    description: 'Kebijakan privasi Jun88. Kami menghormati privasi Anda. Baca bagaimana kami mengelola dan melindungi data pengguna di website Jun88.',
    url: 'https://jun88ss.org/kebijakan-privasi',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivasiPage() {
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
        .privasi-content p {
          color: #d1d5db;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.9;
          margin-bottom: 12px;
        }
        .privasi-content ul {
          color: #d1d5db;
          padding-left: clamp(20px, 2vw, 24px);
          margin-bottom: 16px;
          font-size: clamp(14px, 1.2vw, 16px);
        }
        .privasi-content ul li {
          margin-bottom: 8px;
          line-height: 1.7;
        }
        .privasi-content ul li strong {
          color: white;
        }
        .privasi-content strong {
          color: white;
        }
        .privasi-content h2 {
          color: white;
          font-size: clamp(18px, 2vw, 22px);
          margin-top: 24px;
          margin-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .privasi-content h2:first-child {
          margin-top: 0;
        }
        .privasi-content-wrapper {
          background: rgba(255,255,255,0.03);
          border-radius: clamp(12px, 1.5vw, 16px);
          padding: clamp(20px, 3vw, 30px);
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          WebkitBackdropFilter: blur(10px);
          line-height: 1.9;
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
            Kebijakan <span style={{ color: '#a78bfa' }}>Privasi</span>
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            maxWidth: '600px', 
            margin: '12px auto 0',
            fontSize: 'clamp(14px, 1.5vw, 18px)'
          }}>
            Kami menghormati privasi Anda. Berikut kebijakan privasi yang kami terapkan di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>.
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div className="privasi-content-wrapper">
          <div className="privasi-content">
            <h2>1. Informasi yang Kami Kumpulkan</h2>
            <p>Website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> ini tidak mengumpulkan data pribadi pengguna secara aktif. Data yang mungkin terkumpul adalah:</p>
            <ul>
              <li><strong>Cookie:</strong> Untuk analitik guna meningkatkan pengalaman pengguna.</li>
            </ul>

            <h2>2. Penggunaan Data</h2>
            <ul>
              <li>Meningkatkan pengalaman pengguna di website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a></li>
              <li>Menganalisis traffic dan perilaku pengunjung</li>
              <li>Menyediakan konten yang lebih relevan bagi pengunjung</li>
            </ul>

            <h2>3. Keamanan Data</h2>
            <p>Website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> ini menggunakan <strong>SSL enkripsi</strong> untuk melindungi data yang dikirimkan antara browser dan server.</p>

            <h2>4. Pihak Ketiga</h2>
            <p>Kami <strong>tidak menjual, menyewakan, atau membagikan</strong> data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.</p>

            <h2>5. Cookie</h2>
            <p>Website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> ini menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.</p>

            <h2>6. Perubahan Kebijakan</h2>
            <p>Kebijakan privasi <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> dapat diperbarui sewaktu-waktu sesuai dengan perkembangan regulasi atau perubahan layanan.</p>

            <div style={{ 
              borderTop: '1px solid rgba(255,255,255,0.05)', 
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