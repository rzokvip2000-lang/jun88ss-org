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
    <div
      style={{
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* ====== CONTENT ====== */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          margin: '0 auto',
          paddingTop: 'clamp(40px, 6vw, 80px)',
          paddingLeft: 'clamp(16px, 3vw, 20px)',
          paddingRight: 'clamp(16px, 3vw, 20px)',
          paddingBottom: 'clamp(20px, 3vw, 30px)',
        }}
      >
        {/* ====== HEADER ====== */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(30px, 4vw, 40px)',
            padding: '0 10px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 40px)',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            Bermain dengan <span style={{ color: '#34d399' }}>Bijak</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              margin: '10px auto 0',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
            }}
          >
            Panduan bermain slot secara sehat dan bertanggung jawab di{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              Jun88
            </a>
            .
          </p>
        </div>

        {/* ====== CONTENT ====== */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '20px',
            padding: 'clamp(24px, 3vw, 36px)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            lineHeight: 1.9,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          {/* ====== KONTEN ====== */}
          <div
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              lineHeight: 1.9,
            }}
          >
            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: '0',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
              }}
            >
              🎯 Prinsip Bermain Bijak
            </h2>

            {/* ====== PRINSIP 1 ====== */}
            <div
              style={{
                background: 'rgba(52,211,153,0.08)',
                borderRadius: '16px',
                padding: 'clamp(16px, 2vw, 20px)',
                marginBottom: '16px',
                border: '1px solid rgba(52,211,153,0.12)',
              }}
            >
              <h3 style={{ color: '#34d399', fontSize: 'clamp(17px, 2vw, 19px)', margin: '0 0 8px 0' }}>
                1. Anggap Sebagai Hiburan
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.9, margin: 0 }}>
                Jangan pernah menganggap bermain slot sebagai cara untuk menghasilkan uang.
                Anggap biaya yang dikeluarkan sebagai <strong style={{ color: '#ffffff' }}>biaya hiburan</strong>,
                sama seperti membeli tiket bioskop atau konser.
              </p>
            </div>

            {/* ====== PRINSIP 2 ====== */}
            <div
              style={{
                background: 'rgba(251,191,36,0.08)',
                borderRadius: '16px',
                padding: 'clamp(16px, 2vw, 20px)',
                marginBottom: '16px',
                border: '1px solid rgba(251,191,36,0.12)',
              }}
            >
              <h3 style={{ color: '#fbbf24', fontSize: 'clamp(17px, 2vw, 19px)', margin: '0 0 8px 0' }}>
                2. Tetapkan Batas Waktu dan Uang
              </h3>
              <ul
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  paddingLeft: 'clamp(20px, 2vw, 24px)',
                  margin: '0',
                  fontSize: 'clamp(15px, 1.2vw, 17px)',
                  lineHeight: 1.9,
                }}
              >
                <li style={{ marginBottom: '6px', lineHeight: '1.8' }}>
                  <strong style={{ color: '#ffffff' }}>Batas Waktu:</strong> Maksimal 1-2 jam per sesi
                </li>
                <li style={{ marginBottom: '6px', lineHeight: '1.8' }}>
                  <strong style={{ color: '#ffffff' }}>Batas Uang:</strong> Tentukan jumlah maksimal yang siap hilang
                </li>
                <li style={{ marginBottom: '6px', lineHeight: '1.8' }}>
                  <strong style={{ color: '#ffffff' }}>Batas Kerugian:</strong> Berhenti jika sudah mencapai batas kerugian
                </li>
                <li style={{ marginBottom: '6px', lineHeight: '1.8' }}>
                  <strong style={{ color: '#ffffff' }}>Batas Kemenangan:</strong> Ambil keuntungan jika sudah mencapai target
                </li>
              </ul>
            </div>

            {/* ====== PRINSIP 3 ====== */}
            <div
              style={{
                background: 'rgba(244,114,182,0.08)',
                borderRadius: '16px',
                padding: 'clamp(16px, 2vw, 20px)',
                marginBottom: '16px',
                border: '1px solid rgba(244,114,182,0.12)',
              }}
            >
              <h3 style={{ color: '#f472b6', fontSize: 'clamp(17px, 2vw, 19px)', margin: '0 0 8px 0' }}>
                3. Jangan Bermain Saat Tertekan
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.9, margin: 0 }}>
                Hindari bermain saat sedang stres, sedih, marah, atau di bawah pengaruh alkohol.
                Keputusan yang buruk sering terjadi saat emosi tidak stabil.
                Bermainlah saat Anda dalam kondisi <strong style={{ color: '#ffffff' }}>tenang dan rileks</strong>.
              </p>
            </div>

            {/* ====== PRINSIP 4 ====== */}
            <div
              style={{
                background: 'rgba(96,165,250,0.08)',
                borderRadius: '16px',
                padding: 'clamp(16px, 2vw, 20px)',
                marginBottom: '16px',
                border: '1px solid rgba(96,165,250,0.12)',
              }}
            >
              <h3 style={{ color: '#60a5fa', fontSize: 'clamp(17px, 2vw, 19px)', margin: '0 0 8px 0' }}>
                4. Ambil Jeda Secara Teratur
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(15px, 1.2vw, 17px)', lineHeight: 1.9, margin: 0 }}>
                Beristirahatlah setiap <strong style={{ color: '#ffffff' }}>30-60 menit</strong> untuk menyegarkan pikiran
                dan menghindari kelelahan. Jeda singkat dapat membantu Anda tetap fokus
                dan membuat keputusan yang lebih baik.
              </p>
            </div>

            {/* ====== TIPS TAMBAHAN ====== */}
            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
              }}
            >
              💡 Tips Tambahan
            </h2>
            <ul
              style={{
                color: 'rgba(255,255,255,0.8)',
                paddingLeft: 'clamp(24px, 2vw, 32px)',
                marginBottom: '16px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Mulai dengan taruhan kecil untuk memahami pola game</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Manfaatkan fitur demo sebelum bermain dengan uang asli</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Jangan tergoda untuk mengejar kerugian (chasing losses)</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Bermain sesuai dengan kemampuan finansial Anda</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Ambil jeda jika sudah mencapai batas waktu atau uang</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Jangan pernah meminjam uang untuk bermain</li>
            </ul>

            {/* ====== TANDA-TANDA PERLU BERHENTI ====== */}
            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
              }}
            >
              🚨 Tanda-tanda Perlu Berhenti
            </h2>
            <ul
              style={{
                color: 'rgba(255,255,255,0.8)',
                paddingLeft: 'clamp(24px, 2vw, 32px)',
                marginBottom: '16px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Menghabiskan uang di luar batas yang ditentukan</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Bermain lebih lama dari yang direncanakan</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Menyembunyikan kebiasaan bermain dari keluarga</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Meminjam uang untuk bermain</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Mengabaikan tanggung jawab sehari-hari</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Merasa stres atau cemas setelah bermain</li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>Berpikir tentang judi saat melakukan aktivitas lain</li>
            </ul>

            {/* ====== BANTUAN ====== */}
            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
              }}
            >
              📞 Butuh Bantuan?
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Jika Anda merasa bermain slot sudah menjadi masalah,
              <strong style={{ color: '#ffffff' }}> jangan ragu untuk mencari bantuan profesional</strong>.
              Anda tidak sendirian, dan ada banyak sumber daya yang tersedia untuk membantu.
            </p>
            <ul
              style={{
                color: 'rgba(255,255,255,0.8)',
                paddingLeft: 'clamp(24px, 2vw, 32px)',
                marginBottom: '16px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                🌐 <strong style={{ color: '#ffffff' }}>Gambling Help Online</strong> - Dukungan 24/7
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                📞 <strong style={{ color: '#ffffff' }}>Hotline Konseling</strong> - (021) 1234-5678
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                💬 <strong style={{ color: '#ffffff' }}>Chat Support</strong> - Tersedia di website resmi
              </li>
            </ul>

            {/* ====== FOOTER ====== */}
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                paddingTop: 'clamp(14px, 1.5vw, 16px)',
                marginTop: 'clamp(16px, 2vw, 20px)',
                color: 'rgba(255,255,255,0.3)',
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                textAlign: 'center',
              }}
            >
              Terakhir diperbarui: 21 Agustus 2026
            </div>
          </div>
        </div>

        {/* ====== BACK TO HOME ====== */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 'clamp(20px, 3vw, 30px)',
            padding: '0 10px 20px 10px',
          }}
        >
          <Link
            href="/"
            style={{
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              fontSize: 'clamp(13px, 1.2vw, 14px)',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}