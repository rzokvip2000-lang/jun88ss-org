// HAPUS 'use client' - Metadata hanya bisa di Server Component

import Link from 'next/link';

export const metadata = {
  title: 'Syarat & Ketentuan - Jun88 | Review Slot Online Terpercaya',
  description: 'Syarat dan ketentuan penggunaan website Jun88. Baca sebelum mengakses konten dan review game slot online di Jun88.',
  alternates: {
    canonical: 'https://jun88ss.org/syarat-ketentuan',
  },
  openGraph: {
    title: 'Syarat & Ketentuan - Jun88 | Review Slot Online Terpercaya',
    description: 'Syarat dan ketentuan penggunaan website Jun88. Baca sebelum mengakses konten dan review game slot online di Jun88.',
    url: 'https://jun88ss.org/syarat-ketentuan',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SyaratKetentuanPage() {
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
        .syarat-content h2 {
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
        .syarat-content h2:first-child {
          margin-top: 0;
        }
        .syarat-content p {
          color: #d1d5db;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.9;
          margin-bottom: 12px;
        }
        .syarat-content ul {
          color: #d1d5db;
          padding-left: clamp(20px, 2vw, 24px);
          margin-bottom: 16px;
          font-size: clamp(14px, 1.2vw, 16px);
        }
        .syarat-content ul li {
          margin-bottom: 6px;
          line-height: 1.7;
        }
        .syarat-content strong {
          color: white;
        }
        .syarat-wrapper {
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
            Syarat & <span style={{ color: '#f59e0b' }}>Ketentuan</span>
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            maxWidth: '600px', 
            margin: '12px auto 0',
            fontSize: 'clamp(14px, 1.5vw, 18px)'
          }}>
            Syarat dan ketentuan yang berlaku saat mengakses website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>.
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div className="syarat-wrapper">
          <div className="syarat-content">
            
            <h2>1. Penerimaan Syarat</h2>
            <p>
              Dengan mengakses dan menggunakan website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>, Anda menyetujui untuk terikat dengan 
              syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan salah satu bagian dari 
              syarat ini, harap <strong>jangan gunakan website ini</strong>.
            </p>

            <h2>2. Konten dan Informasi</h2>
            <p>
              Semua konten di website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> ini disediakan untuk tujuan <strong>informasi dan hiburan</strong>. 
              Kami berusaha untuk menyajikan informasi yang akurat, namun tidak menjamin bahwa semua informasi 
              yang disajikan selalu mutakhir atau bebas dari kesalahan.
            </p>
            <ul>
              <li>Konten tidak boleh dianggap sebagai saran profesional</li>
              <li>Kami tidak bertanggung jawab atas keputusan yang diambil berdasarkan informasi dari website ini</li>
              <li>Informasi RTP dan spesifikasi game dapat berubah sewaktu-waktu</li>
            </ul>

            <h2>3. Hak Kekayaan Intelektual</h2>
            <p>
              Semua konten di website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> ini, termasuk teks, gambar, logo, dan desain, adalah 
              <strong> milik Jun88</strong> dan dilindungi oleh hak cipta. 
              Anda tidak diperbolehkan untuk menyalin, mendistribusikan, atau menggunakan konten tanpa izin tertulis.
            </p>

            <h2>4. Penggunaan yang Diizinkan</h2>
            <ul>
              <li>Mengakses konten untuk keperluan pribadi dan non-komersial</li>
              <li>Membagikan tautan ke website kami di media sosial</li>
              <li>Mengutip konten dengan mencantumkan sumber yang jelas</li>
            </ul>

            <h2>5. Penggunaan yang Dilarang</h2>
            <ul>
              <li>Menggunakan konten untuk tujuan komersial tanpa izin</li>
              <li>Menyebarkan informasi palsu atau menyesatkan</li>
              <li>Melakukan tindakan yang dapat merusak atau mengganggu website</li>
            </ul>

            <h2>6. Tautan ke Pihak Ketiga</h2>
            <p>
              Website <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a> ini mungkin berisi tautan ke website pihak ketiga. Kami <strong>tidak bertanggung jawab</strong> 
              atas konten, kebijakan privasi, atau praktik dari website tersebut.
            </p>

            <h2>7. Batasan Tanggung Jawab</h2>
            <ul>
              <li>Kerugian langsung, tidak langsung, atau konsekuensial</li>
              <li>Kehilangan data atau keuntungan</li>
              <li>Gangguan atau kerusakan teknis pada perangkat Anda</li>
            </ul>

            <h2>8. Perubahan Syarat</h2>
            <p>
              Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diumumkan 
              di halaman ini dengan tanggal pembaruan terbaru.
            </p>

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