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
            Syarat & <span style={{ color: '#f59e0b' }}>Ketentuan</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              margin: '12px auto 0',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
            }}
          >
            Syarat dan ketentuan yang berlaku saat mengakses website{' '}
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
          {/* ====== SYARAT & KETENTUAN ====== */}
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
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              1. Penerimaan Syarat
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Dengan mengakses dan menggunakan website{' '}
              <a
                href="https://jun88ss.org"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
              >
                Jun88
              </a>
              , Anda menyetujui untuk terikat dengan syarat dan ketentuan yang berlaku.
              Jika Anda tidak setuju dengan salah satu bagian dari syarat ini, harap{' '}
              <strong style={{ color: '#ffffff' }}>jangan gunakan website ini</strong>.
            </p>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              2. Konten dan Informasi
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Semua konten di website{' '}
              <a
                href="https://jun88ss.org"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
              >
                Jun88
              </a>{' '}
              ini disediakan untuk tujuan <strong style={{ color: '#ffffff' }}>informasi dan hiburan</strong>.
              Kami berusaha untuk menyajikan informasi yang akurat, namun tidak menjamin
              bahwa semua informasi yang disajikan selalu mutakhir atau bebas dari
              kesalahan.
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
                Konten tidak boleh dianggap sebagai saran profesional
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Kami tidak bertanggung jawab atas keputusan yang diambil berdasarkan
                informasi dari website ini
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Informasi RTP dan spesifikasi game dapat berubah sewaktu-waktu
              </li>
            </ul>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              3. Hak Kekayaan Intelektual
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Semua konten di website{' '}
              <a
                href="https://jun88ss.org"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
              >
                Jun88
              </a>{' '}
              ini, termasuk teks, gambar, logo, dan desain, adalah{' '}
              <strong style={{ color: '#ffffff' }}>milik Jun88</strong> dan dilindungi
              oleh hak cipta. Anda tidak diperbolehkan untuk menyalin, mendistribusikan,
              atau menggunakan konten tanpa izin tertulis.
            </p>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              4. Penggunaan yang Diizinkan
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
                Mengakses konten untuk keperluan pribadi dan non-komersial
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Membagikan tautan ke website kami di media sosial
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Mengutip konten dengan mencantumkan sumber yang jelas
              </li>
            </ul>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              5. Penggunaan yang Dilarang
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
                Menggunakan konten untuk tujuan komersial tanpa izin
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Menyebarkan informasi palsu atau menyesatkan
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Melakukan tindakan yang dapat merusak atau mengganggu website
              </li>
            </ul>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              6. Tautan ke Pihak Ketiga
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Website{' '}
              <a
                href="https://jun88ss.org"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
              >
                Jun88
              </a>{' '}
              ini mungkin berisi tautan ke website pihak ketiga. Kami{' '}
              <strong style={{ color: '#ffffff' }}>tidak bertanggung jawab</strong> atas
              konten, kebijakan privasi, atau praktik dari website tersebut.
            </p>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              7. Batasan Tanggung Jawab
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
                Kerugian langsung, tidak langsung, atau konsekuensial
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Kehilangan data atau keuntungan
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Gangguan atau kerusakan teknis pada perangkat Anda
              </li>
            </ul>

            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                marginTop: 'clamp(28px, 3vw, 36px)',
                marginBottom: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                paddingBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              8. Perubahan Syarat
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu.
              Perubahan akan diumumkan di halaman ini dengan tanggal pembaruan terbaru.
            </p>

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