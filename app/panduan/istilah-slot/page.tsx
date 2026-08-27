import Link from 'next/link';

export const metadata = {
  title: 'Istilah-istilah Slot yang Wajib Diketahui Pemain | Jun88',
  description: 'Kumpulan istilah penting dalam dunia slot online yang harus Anda ketahui sebelum bermain di Jun88.',
  alternates: {
    canonical: 'https://jun88ss.org/panduan/istilah-slot',
  },
  openGraph: {
    title: 'Istilah-istilah Slot yang Wajib Diketahui Pemain | Jun88',
    description: 'Kumpulan istilah penting dalam dunia slot online yang harus Anda ketahui sebelum bermain di Jun88.',
    url: 'https://jun88ss.org/panduan/istilah-slot',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const guide = {
  id: 5,
  title: 'Istilah-istilah Slot yang Wajib Diketahui Pemain',
  slug: 'istilah-slot',
  category: 'Dasar',
  emoji: '📚',
  description: 'Kumpulan istilah penting dalam dunia slot online yang harus Anda ketahui sebelum bermain.',
  date: '17 Agustus 2026',
  readTime: '8 menit',
  content: `
    <h2>📚 Istilah-istilah Slot yang Wajib Diketahui</h2>
    <p>Dunia slot online memiliki kosakata tersendiri yang mungkin terasa asing bagi pemula. Memahami istilah-istilah ini akan membantu Anda berkomunikasi dengan pemain lain, memahami strategi, dan membuat keputusan yang lebih baik saat bermain. Berikut adalah istilah-istilah paling penting yang harus Anda ketahui.</p>
    
    <h3>1. RTP (Return to Player)</h3>
    <p>Persentase teoritis dari total taruhan yang akan dikembalikan kepada pemain dalam jangka panjang. Misalnya, RTP 96% berarti dari setiap Rp100.000 yang dipertaruhkan, secara teoritis akan dikembalikan Rp96.000. Ini adalah metrik paling penting untuk menilai potensi sebuah game.</p>
    
    <h3>2. Volatilitas</h3>
    <p>Tingkat risiko yang menunjukkan seberapa sering dan seberapa besar kemenangan yang bisa didapat. Terbagi menjadi tiga kategori: rendah (kemenangan sering, kecil), sedang (keseimbangan), dan tinggi (kemenangan jarang, besar).</p>
    
    <h3>3. Paylines</h3>
    <p>Garis kemenangan dalam slot yang menentukan kombinasi simbol yang menang. Paylines bisa berbentuk garis lurus, zig-zag, atau pola tertentu. Jumlah paylines bervariasi dari 1 hingga 1024 atau bahkan lebih dalam beberapa game.</p>
    
    <h3>4. Wild Symbol</h3>
    <p>Simbol yang bisa menggantikan simbol lain untuk membentuk kombinasi kemenangan. Wild adalah simbol yang paling diincar karena bisa meningkatkan peluang menang secara signifikan. Beberapa wild juga dilengkapi dengan pengali (multiplier).</p>
    
    <h3>5. Scatter Symbol</h3>
    <p>Simbol yang memicu fitur bonus, biasanya putaran gratis (free spin). Scatter tidak perlu berada di paylines untuk aktif, cukup muncul di gulungan mana saja. Semakin banyak scatter, semakin besar bonus yang didapat.</p>
    
    <h3>6. Free Spin</h3>
    <p>Putaran gratis yang tidak mengurangi saldo Anda, biasanya dipicu oleh scatter. Free spin adalah kesempatan terbaik untuk mendapatkan kemenangan besar tanpa risiko kehilangan modal. Selama free spin, sering kali ada pengali tambahan.</p>
    
    <h3>7. Multiplier</h3>
    <p>Pengali kemenangan yang bisa meningkatkan jumlah hadiah. Multiplier bisa berupa angka seperti 2x, 3x, 5x, atau bahkan 100x. Multiplier sering muncul di free spin atau fitur bonus lainnya.</p>
    
    <h3>8. Max Win</h3>
    <p>Kemenangan maksimal yang bisa didapat dari sebuah game slot. Biasanya dinyatakan dalam kelipatan taruhan, misalnya 5.000x atau 10.000x. Max win adalah target utama bagi pemain yang mengejar kemenangan besar.</p>
    
    <h3>9. Jackpot</h3>
    <p>Hadiah besar yang bisa dimenangkan, biasanya progresif (terus bertambah) atau fixed (tetap). Jackpot progresif bisa mencapai puluhan miliar rupiah dan menjadi daya tarik utama bagi banyak pemain.</p>
    
    <h3>10. Bonus Game</h3>
    <p>Fitur mini-game yang memberikan hadiah tambahan. Bonus game biasanya interaktif dan memberi pemain kesempatan untuk memilih hadiah atau bermain mini-game yang berbeda dari permainan utama.</p>
    
    <h3>11. Reel / Gulungan</h3>
    <p>Kolom vertikal tempat simbol-simbol berputar. Slot klasik biasanya memiliki 3 gulungan, sedangkan slot modern memiliki 5 gulungan atau lebih.</p>
    
    <h3>12. Bet / Taruhan</h3>
    <p>Jumlah uang yang dipertaruhkan dalam satu putaran. Taruhan bisa diatur sesuai dengan preferensi dan modal Anda.</p>
    
    <h3>13. Spin / Putaran</h3>
    <p>Satu kali putaran gulungan. Setiap spin adalah kesempatan untuk mendapatkan kombinasi kemenangan.</p>
    
    <h3>14. Autoplay</h3>
    <p>Fitur yang memungkinkan gulungan berputar secara otomatis untuk sejumlah putaran tertentu tanpa perlu menekan tombol spin setiap kali.</p>
    
    <p>Dengan memahami istilah-istilah di atas, Anda akan lebih percaya diri saat menjelajahi dunia slot online. Jangan ragu untuk kembali ke panduan ini jika Anda menemukan istilah yang belum dipahami.</p>
  `
};

export default function IstilahSlotPage() {
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
        {/* ====== BACK LINK ====== */}
        <Link
          href="/panduan"
          style={{
            color: '#a78bfa',
            textDecoration: 'none',
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            transition: 'all 0.3s',
            display: 'inline-block',
            position: 'relative',
            zIndex: 1,
          }}
        >
          ← Kembali ke Semua Panduan
        </Link>

        {/* ====== HEADER ====== */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: 'clamp(20px, 3vw, 30px)',
            marginTop: 'clamp(16px, 2vw, 20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'clamp(16px, 2vw, 20px)',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(48px, 8vw, 64px)',
                flexShrink: 0,
              }}
            >
              {guide.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(8px, 1.5vw, 12px)',
                  flexWrap: 'wrap',
                }}
              >
                <h1
                  style={{
                    fontSize: 'clamp(22px, 4vw, 28px)',
                    fontWeight: 'bold',
                    margin: 0,
                    lineHeight: '1.3',
                    color: '#ffffff',
                  }}
                >
                  {guide.title}
                </h1>
                <span
                  style={{
                    fontSize: 'clamp(11px, 1vw, 12px)',
                    fontWeight: 'bold',
                    background: 'rgba(124,58,237,0.25)',
                    color: '#a78bfa',
                    padding: '4px 14px',
                    borderRadius: '50px',
                    border: '1px solid rgba(124,58,237,0.15)',
                  }}
                >
                  {guide.category}
                </span>
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  marginTop: '8px',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                }}
              >
                {guide.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 'clamp(12px, 2vw, 16px)',
                  marginTop: '12px',
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                <span>📅 {guide.date}</span>
                <span>⏱️ {guide.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====== CONTENT ====== */}
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '20px',
            padding: 'clamp(24px, 3vw, 36px)',
            marginTop: 'clamp(16px, 2vw, 20px)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: guide.content }}
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              lineHeight: 1.9,
            }}
          />
        </div>

        {/* ====== CTA CARD ====== */}
        <div
          style={{
            background: 'rgba(124,58,237,0.1)',
            borderRadius: '20px',
            padding: 'clamp(20px, 2.5vw, 28px)',
            marginTop: 'clamp(16px, 2vw, 20px)',
            textAlign: 'center',
            border: '1px solid rgba(124,58,237,0.2)',
            position: 'relative',
            zIndex: 1,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              margin: '0',
              color: '#ffffff',
            }}
          >
            📖 Ingin Belajar Lebih Lanjut?
          </h3>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'clamp(13px, 1.2vw, 14px)',
              margin: '8px 0 0',
            }}
          >
            Baca panduan lainnya untuk meningkatkan pemahaman Anda tentang slot
            online di{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              Jun88
            </a>
          </p>
          <Link
            href="/panduan"
            style={{
              display: 'inline-block',
              marginTop: '14px',
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              color: 'white',
              padding: 'clamp(10px, 1.2vw, 12px) clamp(28px, 3vw, 34px)',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: 'clamp(13px, 1.2vw, 14px)',
              transition: 'all 0.3s',
              boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
            }}
          >
            Lihat Semua Panduan
          </Link>
        </div>

        {/* ====== NAVIGASI ====== */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 'clamp(20px, 3vw, 30px)',
            flexWrap: 'wrap',
            gap: 'clamp(8px, 1vw, 12px)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Link
            href="/panduan"
            style={{
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              fontSize: 'clamp(13px, 1.2vw, 14px)',
              transition: 'all 0.3s',
            }}
          >
            ← Semua Panduan
          </Link>
          <Link
            href="/"
            style={{
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              fontSize: 'clamp(13px, 1.2vw, 14px)',
              transition: 'all 0.3s',
            }}
          >
            Beranda →
          </Link>
        </div>
      </div>
    </div>
  );
}