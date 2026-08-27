import Link from 'next/link';

export const metadata = {
  title: 'Kebijakan Privasi - Jun88 | Review Slot Online Terpercaya',
  description: 'Kebijakan privasi website Jun88. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.',
  alternates: {
    canonical: 'https://jun88ss.org/privasi',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Kebijakan Privasi - Jun88 | Review Slot Online Terpercaya',
    description: 'Kebijakan privasi website Jun88. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.',
    url: 'https://jun88ss.org/privasi',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function PrivasiPage() {
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
            Kebijakan <span style={{ color: '#34d399' }}>Privasi</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              margin: '12px auto 0',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
            }}
          >
            Kebijakan privasi yang berlaku saat mengakses website{' '}
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
            {/* ====== PENDAHULUAN ====== */}
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
              🔒 Pendahuluan
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Kami di{' '}
              <a
                href="https://jun88ss.org"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
              >
                Jun88
              </a>{' '}
              menghargai privasi Anda. Kebijakan privasi ini menjelaskan bagaimana
              kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda
              saat Anda mengakses website kami. Dengan menggunakan website ini,
              Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
            </p>

            {/* ====== INFORMASI YANG DIKUMPULKAN ====== */}
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
              📋 Informasi yang Dikumpulkan
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Kami dapat mengumpulkan informasi berikut:
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
                <strong style={{ color: '#ffffff' }}>Informasi yang Anda Berikan:</strong>{' '}
                Nama, alamat email, dan informasi lain yang Anda berikan saat mengisi
                formulir atau berinteraksi dengan website.
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                <strong style={{ color: '#ffffff' }}>Informasi Otomatis:</strong>{' '}
                Alamat IP, jenis browser, sistem operasi, halaman yang dikunjungi,
                waktu akses, dan data analitik lainnya.
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                <strong style={{ color: '#ffffff' }}>Cookie:</strong>{' '}
                Data yang dikumpulkan melalui cookie untuk meningkatkan pengalaman
                pengguna.
              </li>
            </ul>

            {/* ====== PENGGUNAAN INFORMASI ====== */}
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
              🎯 Penggunaan Informasi
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Informasi yang kami kumpulkan digunakan untuk:
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
                Menyediakan dan meningkatkan layanan website
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Mengirimkan pembaruan dan informasi terkait konten
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Menganalisis tren dan perilaku pengguna
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Menyediakan konten yang relevan dan dipersonalisasi
              </li>
            </ul>

            {/* ====== COOKIE ====== */}
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
              🍪 Cookie
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
              menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah
              file kecil yang disimpan di perangkat Anda. Anda dapat mengatur browser
              untuk menolak cookie, namun hal ini dapat mempengaruhi fungsionalitas
              website.
            </p>

            {/* ====== KEHALAMAN PIHAK KETIGA ====== */}
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
              🔗 Tautan ke Pihak Ketiga
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Website ini mungkin berisi tautan ke website pihak ketiga. Kami{' '}
              <strong style={{ color: '#ffffff' }}>tidak bertanggung jawab</strong>{' '}
              atas kebijakan privasi atau konten dari website tersebut. Kami
              menyarankan Anda untuk membaca kebijakan privasi dari setiap website
              yang Anda kunjungi.
            </p>

            {/* ====== KEAMANAN ====== */}
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
              🛡️ Keamanan
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi
              informasi pribadi Anda dari akses, perubahan, atau penghapusan yang tidak
              sah. Namun, tidak ada metode transmisi data melalui internet yang 100%
              aman, dan kami tidak dapat menjamin keamanan absolut.
            </p>

            {/* ====== HAK PENGGUNA ====== */}
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
              👤 Hak Pengguna
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Anda memiliki hak untuk:
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
                Mengakses dan memperbarui informasi pribadi Anda
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Meminta penghapusan data pribadi Anda
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Menolak pengumpulan data tertentu
              </li>
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                Menarik persetujuan sewaktu-waktu
              </li>
            </ul>

            {/* ====== PERUBAHAN KEBIJAKAN ====== */}
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
              📝 Perubahan Kebijakan Privasi
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '12px',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Kami berhak untuk mengubah kebijakan privasi ini sewaktu-waktu.
              Perubahan akan diumumkan di halaman ini dengan tanggal pembaruan
              terbaru. Kami menyarankan Anda untuk memeriksa halaman ini secara
              berkala untuk mengetahui perubahan terbaru.
            </p>

            {/* ====== HUBUNGI KAMI ====== */}
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
              📧 Hubungi Kami
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '0',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan
              hubungi kami melalui:
            </p>
            <ul
              style={{
                color: 'rgba(255,255,255,0.8)',
                paddingLeft: 'clamp(24px, 2vw, 32px)',
                marginBottom: '0',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.9,
              }}
            >
              <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>
                🌐 <strong style={{ color: '#ffffff' }}>Website:</strong>{' '}
                <a
                  href="https://jun88ss.org"
                  style={{ color: '#a78bfa', textDecoration: 'none' }}
                >
                  jun88ss.org
                </a>
              </li>
            </ul>

            {/* ====== FOOTER ====== */}
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                paddingTop: 'clamp(14px, 1.5vw, 16px)',
                marginTop: 'clamp(24px, 2vw, 28px)',
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