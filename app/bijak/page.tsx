import Link from 'next/link';

export const metadata = {
  title: 'Bermain Slot dengan Bijak - Panduan Bertanggung Jawab | Jun88',
  description: 'Panduan bermain slot secara sehat dan bertanggung jawab. Pelajari cara mengatur batas waktu, uang, dan menghindari kecanduan di Jun88.',
  alternates: {
    canonical: 'https://jun88ss.org/bijak',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Bermain Slot dengan Bijak - Panduan Bertanggung Jawab | Jun88',
    description: 'Panduan bermain slot secara sehat dan bertanggung jawab. Pelajari cara mengatur batas waktu, uang, dan menghindari kecanduan.',
    url: 'https://jun88ss.org/bijak',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function BijakPage() {
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
        .bijak-content h2 {
          color: white;
          font-size: clamp(20px, 2.5vw, 24px);
          margin-top: 24px;
          margin-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 8px;
        }
        .bijak-content h2:first-child {
          margin-top: 0;
        }
        .bijak-content h3 {
          font-size: clamp(17px, 2vw, 19px);
          margin-top: 0;
          margin-bottom: 8px;
        }
        .bijak-content p {
          color: #d1d5db;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.9;
          margin-bottom: 0;
        }
        .bijak-content ul {
          color: #d1d5db;
          padding-left: clamp(20px, 2vw, 24px);
          margin-bottom: 16px;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.8;
        }
        .bijak-content ul li {
          margin-bottom: 8px;
        }
        .bijak-content strong {
          color: white;
        }
        .prinsip-card {
          border-radius: clamp(12px, 1.5vw, 16px);
          padding: clamp(16px, 2vw, 20px);
          margin-bottom: 16px;
        }
        .bijak-wrapper {
          background: rgba(255,255,255,0.03);
          border-radius: clamp(12px, 1.5vw, 16px);
          padding: clamp(20px, 3vw, 30px);
          border: 1px solid rgba(255,255,255,0.05);
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
            Bermain dengan <span style={{ color: '#34d399' }}>Bijak</span>
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            maxWidth: '600px', 
            margin: '10px auto 0',
            fontSize: 'clamp(14px, 1.5vw, 16px)'
          }}>
            Panduan bermain slot secara sehat dan bertanggung jawab di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>.
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div className="bijak-wrapper">
          <div className="bijak-content">
            
            <h2>🎯 Prinsip Bermain Bijak</h2>
            
            {/* ====== PRINSIP 1 ====== */}
            <div className="prinsip-card" style={{
              background: 'rgba(52,211,153,0.05)',
              border: '1px solid rgba(52,211,153,0.1)'
            }}>
              <h3 style={{ color: '#34d399' }}>1. Anggap Sebagai Hiburan</h3>
              <p>
                Jangan pernah menganggap bermain slot sebagai cara untuk menghasilkan uang. 
                Anggap biaya yang dikeluarkan sebagai <strong>biaya hiburan</strong>, 
                sama seperti membeli tiket bioskop atau konser.
              </p>
            </div>

            {/* ====== PRINSIP 2 ====== */}
            <div className="prinsip-card" style={{
              background: 'rgba(251,191,36,0.05)',
              border: '1px solid rgba(251,191,36,0.1)'
            }}>
              <h3 style={{ color: '#fbbf24' }}>2. Tetapkan Batas Waktu dan Uang</h3>
              <ul>
                <li><strong>Batas Waktu:</strong> Maksimal 1-2 jam per sesi</li>
                <li><strong>Batas Uang:</strong> Tentukan jumlah maksimal yang siap hilang</li>
                <li><strong>Batas Kerugian:</strong> Berhenti jika sudah mencapai batas kerugian</li>
                <li><strong>Batas Kemenangan:</strong> Ambil keuntungan jika sudah mencapai target</li>
              </ul>
            </div>

            {/* ====== PRINSIP 3 ====== */}
            <div className="prinsip-card" style={{
              background: 'rgba(244,114,182,0.05)',
              border: '1px solid rgba(244,114,182,0.1)'
            }}>
              <h3 style={{ color: '#f472b6' }}>3. Jangan Bermain Saat Tertekan</h3>
              <p>
                Hindari bermain saat sedang stres, sedih, marah, atau di bawah pengaruh alkohol. 
                Keputusan yang buruk sering terjadi saat emosi tidak stabil. 
                Bermainlah saat Anda dalam kondisi <strong>tenang dan rileks</strong>.
              </p>
            </div>

            {/* ====== PRINSIP 4 ====== */}
            <div className="prinsip-card" style={{
              background: 'rgba(96,165,250,0.05)',
              border: '1px solid rgba(96,165,250,0.1)'
            }}>
              <h3 style={{ color: '#60a5fa' }}>4. Ambil Jeda Secara Teratur</h3>
              <p>
                Beristirahatlah setiap <strong>30-60 menit</strong> untuk menyegarkan pikiran 
                dan menghindari kelelahan. Jeda singkat dapat membantu Anda tetap fokus 
                dan membuat keputusan yang lebih baik.
              </p>
            </div>

            {/* ====== TIPS TAMBAHAN ====== */}
            <h2>💡 Tips Tambahan</h2>
            <ul>
              <li>Mulai dengan taruhan kecil untuk memahami pola game</li>
              <li>Manfaatkan fitur demo sebelum bermain dengan uang asli</li>
              <li>Jangan tergoda untuk mengejar kerugian (chasing losses)</li>
              <li>Bermain sesuai dengan kemampuan finansial Anda</li>
              <li>Ambil jeda jika sudah mencapai batas waktu atau uang</li>
              <li>Jangan pernah meminjam uang untuk bermain</li>
            </ul>

            {/* ====== TANDA-TANDA PERLU BERHENTI ====== */}
            <h2>🚨 Tanda-tanda Perlu Berhenti</h2>
            <ul>
              <li>Menghabiskan uang di luar batas yang ditentukan</li>
              <li>Bermain lebih lama dari yang direncanakan</li>
              <li>Menyembunyikan kebiasaan bermain dari keluarga</li>
              <li>Meminjam uang untuk bermain</li>
              <li>Mengabaikan tanggung jawab sehari-hari</li>
              <li>Merasa stres atau cemas setelah bermain</li>
              <li>Berpikir tentang judi saat melakukan aktivitas lain</li>
            </ul>

            {/* ====== BANTUAN ====== */}
            <h2>📞 Butuh Bantuan?</h2>
            <p style={{ marginBottom: '12px' }}>
              Jika Anda merasa bermain slot sudah menjadi masalah, 
              <strong> jangan ragu untuk mencari bantuan profesional</strong>. 
              Anda tidak sendirian, dan ada banyak sumber daya yang tersedia untuk membantu.
            </p>
            <ul>
              <li>🌐 <strong>Gambling Help Online</strong> - Dukungan 24/7</li>
              <li>📞 <strong>Hotline Konseling</strong> - (021) 1234-5678</li>
              <li>💬 <strong>Chat Support</strong> - Tersedia di website resmi</li>
            </ul>

            {/* ====== LAST UPDATED ====== */}
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