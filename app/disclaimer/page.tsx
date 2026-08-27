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
            Disclaimer <span style={{ color: '#f472b6' }}>18+</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              marginTop: '8px',
            }}
          >
            Baca disclaimer ini sebelum mengakses konten website{' '}
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
            {/* ====== PERINGATAN ====== */}
            <div
              style={{
                background: 'rgba(239,68,68,0.1)',
                border: '2px solid rgba(239,68,68,0.2)',
                borderRadius: '16px',
                padding: 'clamp(16px, 2vw, 24px)',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              <div style={{ fontSize: 'clamp(36px, 6vw, 48px)' }}>⚠️</div>
              <h2
                style={{
                  color: '#f87171',
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  margin: '8px 0 0 0',
                  borderBottom: 'none',
                  paddingBottom: 0,
                }}
              >
                PERINGATAN!
              </h2>
              <p
                style={{
                  color: '#fca5a5',
                  fontSize: 'clamp(15px, 1.2vw, 17px)',
                  margin: '4px 0 0 0',
                  lineHeight: 1.9,
                }}
              >
                Website ini <strong style={{ color: '#ffffff' }}>HANYA</strong> untuk
                pengguna berusia <strong style={{ color: '#ffffff' }}>18 tahun ke atas</strong>.
              </p>
            </div>

            {/* ====== SYARAT & KETENTUAN AKSES ====== */}
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
              📋 Syarat & Ketentuan Akses
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
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Anda harus berusia <strong style={{ color: '#ffffff' }}>minimal 18 tahun</strong> untuk mengakses konten website ini.
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Pastikan perjudian online <strong style={{ color: '#ffffff' }}>legal di wilayah hukum Anda</strong>.
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Website ini hanya untuk tujuan <strong style={{ color: '#ffffff' }}>informasi dan hiburan</strong>.
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Bermainlah dengan <strong style={{ color: '#ffffff' }}>tanggung jawab</strong>.
              </li>
            </ul>

            {/* ====== TANGGUNG JAWAB PENGGUNA ====== */}
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
              ⚖️ Tanggung Jawab Pengguna
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Kami <strong style={{ color: '#ffffff' }}>tidak bertanggung jawab</strong> atas:
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
                Kerugian finansial akibat penggunaan informasi dari website{' '}
                <a
                  href="https://jun88ss.org"
                  style={{ color: '#a78bfa', textDecoration: 'none' }}
                >
                  Jun88
                </a>
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Pelanggaran hukum di wilayah Anda
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Penggunaan konten oleh individu di bawah umur
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Keputusan bermain berdasarkan informasi di website ini
              </li>
            </ul>

            {/* ====== KOMITMEN KAMI ====== */}
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
              🤝 Komitmen Kami
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
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                <strong style={{ color: '#ffffff' }}>Tidak menargetkan</strong> anak di bawah umur
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Menyediakan konten edukasi tentang{' '}
                <strong style={{ color: '#ffffff' }}>permainan bertanggung jawab</strong>
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Menyertakan peringatan 18+ di setiap halaman
              </li>
            </ul>

            {/* ====== BUTUH BANTUAN? ====== */}
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
              Jika Anda merasa bermain berlebihan, jangan ragu untuk mencari bantuan
              profesional.
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