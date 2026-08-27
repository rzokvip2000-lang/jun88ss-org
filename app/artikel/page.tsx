import Link from 'next/link';

export const metadata = {
  title: 'Artikel & Berita Slot Online Terbaru | Jun88',
  description: 'Kumpulan artikel, berita, dan tips terbaru seputar dunia slot online di Jun88. Update RTP, strategi, dan perbandingan game slot.',
  alternates: {
    canonical: 'https://jun88ss.org/artikel',
  },
  openGraph: {
    title: 'Artikel & Berita Slot Online Terbaru | Jun88',
    description: 'Kumpulan artikel, berita, dan tips terbaru seputar dunia slot online di Jun88.',
    url: 'https://jun88ss.org/artikel',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ArtikelPage() {
  const articles = [
    {
      id: 1,
      title: 'Update RTP PG Soft Terbaru Maret 2026',
      slug: 'update-rtp-pg-soft-maret-2026',
      category: 'Berita',
      emoji: '📊',
      description: 'Simak update RTP terbaru dari PG Soft untuk semua game slot populer. Ada kenaikan di beberapa game favorit!',
      date: '21 Agustus 2026',
      readTime: '3 menit'
    },
    {
      id: 2,
      title: 'Ways of the Qilin vs Mahjong Ways: Perbandingan Lengkap',
      slug: 'ways-of-qilin-vs-mahjong-ways',
      category: 'Perbandingan',
      emoji: '⚔️',
      description: 'Mana yang lebih baik? Kami bandingkan Ways of the Qilin dan Mahjong Ways dari segi RTP, fitur, dan potensi kemenangan.',
      date: '20 Agustus 2026',
      readTime: '5 menit'
    },
    {
      id: 3,
      title: '5 Fitur Tersembunyi di Slot PG Soft yang Jarang Diketahui',
      slug: 'fitur-tersembunyi-slot-pg-soft',
      category: 'Tips',
      emoji: '🔍',
      description: 'Temukan 5 fitur tersembunyi di slot PG Soft yang bisa meningkatkan peluang kemenangan Anda!',
      date: '19 Agustus 2026',
      readTime: '4 menit'
    },
    {
      id: 4,
      title: 'Tren Slot Online 2026: Apa yang Harus Diketahui Pemain',
      slug: 'tren-slot-online-2026',
      category: 'Berita',
      emoji: '📈',
      description: 'Ikuti tren terbaru di dunia slot online tahun 2026, dari teknologi hingga game-game baru yang wajib dicoba.',
      date: '18 Agustus 2026',
      readTime: '6 menit'
    },
    {
      id: 5,
      title: 'Cara Klaim Bonus Tanpa Syarat Ribet di Jun88',
      slug: 'cara-klaim-bonus-jun88',
      category: 'Tips',
      emoji: '🎁',
      description: 'Panduan lengkap cara mengklaim bonus di Jun88 dengan syarat yang mudah dan menguntungkan.',
      date: '17 Agustus 2026',
      readTime: '4 menit'
    },
    {
      id: 6,
      title: 'Review Mahjong Ways 2: Lebih Baik dari Pendahulunya?',
      slug: 'review-mahjong-ways-2',
      category: 'Review',
      emoji: '🎴',
      description: 'Apakah Mahjong Ways 2 lebih baik dari Mahjong Ways? Simak review lengkapnya di sini.',
      date: '16 Agustus 2026',
      readTime: '5 menit'
    },
    {
      id: 7,
      title: 'Strategi Jitu Menang di Slot Ways of the Qilin',
      slug: 'strategi-menang-ways-of-the-qilin',
      category: 'Strategi',
      emoji: '🧠',
      description: 'Kumpulan strategi dan tips dari pemain profesional untuk menang di Ways of the Qilin.',
      date: '15 Agustus 2026',
      readTime: '4 menit'
    },
    {
      id: 8,
      title: 'PG Soft vs Pragmatic Play: Mana Provider Slot Terbaik?',
      slug: 'pg-soft-vs-pragmatic-play',
      category: 'Perbandingan',
      emoji: '🏆',
      description: 'Perbandingan lengkap antara dua raksasa provider slot: PG Soft dan Pragmatic Play.',
      date: '14 Agustus 2026',
      readTime: '7 menit'
    }
  ];

  const categories = ['Semua', ...new Set(articles.map((a) => a.category))];

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
          maxWidth: '1200px',
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
            Artikel & <span style={{ color: '#a78bfa' }}>Berita</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              marginTop: '8px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Kumpulan artikel, berita, dan tips terbaru seputar dunia slot online
          </p>

          {/* ====== FILTERS ====== */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'clamp(6px, 1vw, 8px)',
              marginTop: 'clamp(16px, 2vw, 20px)',
            }}
          >
            {categories.map((cat) => {
              const isActive = cat === 'Semua';
              return (
                <span
                  key={cat}
                  style={{
                    padding: 'clamp(6px, 0.8vw, 8px) clamp(14px, 2vw, 18px)',
                    borderRadius: '50px',
                    fontSize: 'clamp(12px, 1.2vw, 14px)',
                    fontWeight: '500',
                    cursor: 'default',
                    transition: 'all 0.3s',
                    background: isActive
                      ? 'linear-gradient(135deg, #7c3aed, #ec4899)'
                      : 'rgba(255,255,255,0.08)',
                    color: isActive ? 'white' : 'rgba(255,255,255,0.6)',
                    border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: isActive
                      ? '0 10px 30px rgba(124,58,237,0.2)'
                      : 'none',
                    backdropFilter: isActive ? 'none' : 'blur(10px)',
                    WebkitBackdropFilter: isActive ? 'none' : 'blur(10px)',
                  }}
                >
                  {cat}
                </span>
              );
            })}
          </div>
        </div>

        {/* ====== GRID ARTIKEL ====== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 2vw, 20px)',
            padding: '0 10px',
          }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: 'clamp(18px, 2vw, 24px)',
                transition: 'all 0.4s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              {/* HEADER CARD */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(8px, 1vw, 10px)',
                  marginBottom: '12px',
                }}
              >
                <span style={{ fontSize: 'clamp(28px, 3vw, 32px)' }}>
                  {article.emoji}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(10px, 1vw, 12px)',
                    fontWeight: 'bold',
                    background: 'rgba(124,58,237,0.25)',
                    color: '#a78bfa',
                    padding: '4px 14px',
                    borderRadius: '50px',
                    border: '1px solid rgba(124,58,237,0.15)',
                  }}
                >
                  {article.category}
                </span>
              </div>

              {/* TITLE */}
              <h3
                style={{
                  fontWeight: 'bold',
                  fontSize: 'clamp(16px, 1.5vw, 18px)',
                  margin: '0 0 10px 0',
                  lineHeight: '1.4',
                  flex: '1',
                  color: '#ffffff',
                }}
              >
                {article.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 'clamp(13px, 1.2vw, 14px)',
                  margin: '0 0 16px 0',
                  lineHeight: '1.7',
                  flex: '1',
                }}
              >
                {article.description}
              </p>

              {/* FOOTER */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(6px, 0.8vw, 10px)',
                    alignItems: 'center',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: 'clamp(11px, 1vw, 12px)',
                  }}
                >
                  <span>📅 {article.date}</span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                  <span>⏱️ {article.readTime}</span>
                </div>
                <Link
                  href={`/artikel/${article.slug}`}
                  style={{
                    color: '#a78bfa',
                    textDecoration: 'none',
                    fontSize: 'clamp(13px, 1.2vw, 14px)',
                    fontWeight: 'bold',
                    transition: 'all 0.3s',
                  }}
                >
                  Baca →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ====== JUMLAH ARTIKEL ====== */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 'clamp(24px, 3vw, 36px)',
            color: 'rgba(255,255,255,0.3)',
            fontSize: 'clamp(13px, 1.2vw, 14px)',
            padding: '0 10px',
          }}
        >
          Menampilkan {articles.length} artikel
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