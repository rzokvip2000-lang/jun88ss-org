import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Review Permainan Jun88 - Kumpulan Review Game Slot PG Soft Terlengkap',
  description: 'Review lengkap semua game slot PG Soft di Jun88: Mahjong Ways, Mahjong Ways 2, Ways of the Qilin, Sugar Rush 1000, Zeus Vs Hades, Wisdom of Athena. RTP, volatilitas, max win, dan fitur bonus.',
  alternates: {
    canonical: 'https://jun88ss.org/review',
  },
  openGraph: {
    title: 'Review Permainan Jun88 - Kumpulan Review Game Slot PG Soft Terlengkap',
    description: 'Review lengkap semua game slot PG Soft di Jun88. Temukan RTP, volatilitas, max win, dan fitur bonus setiap game.',
    url: 'https://jun88ss.org/review',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReviewPage() {
  const games = [
    { 
      id: 1, 
      title: 'Mahjong Ways', 
      slug: 'mahjong-ways', 
      emoji: '🀄', 
      gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)',
      rtp: '96.92%', 
      rating: '4.3',
      image: '/images/mahjong-ways-jun88-ss.webp'
    },
    { 
      id: 2, 
      title: 'Mahjong Ways 2', 
      slug: 'mahjong-ways-2', 
      emoji: '🎴', 
      gradient: 'linear-gradient(135deg, #059669, #14b8a6)',
      rtp: '96.95%', 
      rating: '4.4',
      image: '/images/mahjong-ways-2-jun88-ss.webp'
    },
    { 
      id: 3, 
      title: 'Ways of the Qilin', 
      slug: 'ways-of-the-qilin', 
      emoji: '🐉', 
      gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
      rtp: '96.71%', 
      rating: '4.5',
      image: '/images/ways-of-the-qilin-jun88-ss.webp'
    },
    { 
      id: 4, 
      title: 'Sugar Rush 1000', 
      slug: 'sugar-rush-1000', 
      emoji: '🍬', 
      gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
      rtp: '96.88%', 
      rating: '4.6',
      image: '/images/sugar-rush-1000-jun88-ss.webp'
    },
    { 
      id: 5, 
      title: 'Zeus Vs Hades', 
      slug: 'zeus-vs-hades', 
      emoji: '⚡', 
      gradient: 'linear-gradient(135deg, #ca8a04, #f97316)',
      rtp: '97.05%', 
      rating: '4.7',
      image: '/images/zeus-hades-jun88-ss.webp'
    },
    { 
      id: 6, 
      title: 'Wisdom of Athena', 
      slug: 'wisdom-of-athena', 
      emoji: '🦉', 
      gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      rtp: '96.80%', 
      rating: '4.4',
      image: '/images/wisdom-of-athena-jun88-ss.webp'
    },
  ];

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
            Review <span style={{ color: '#a78bfa' }}>Permainan Jun88</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              marginTop: '8px',
            }}
          >
            Kumpulan review lengkap untuk game-game slot terbaik di{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              Jun88
            </a>
          </p>
        </div>

        {/* ====== ARTIKEL INTRO ====== */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto clamp(30px, 4vw, 40px)',
            padding: 'clamp(24px, 3vw, 36px)',
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#ffffff',
            }}
          >
            Review Game Slot Terlengkap di{' '}
            <span style={{ color: '#a78bfa' }}>Jun88</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              lineHeight: '1.9',
              marginBottom: '16px',
            }}
          >
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              Jun88
            </a>{' '}
            adalah platform terpercaya yang menghadirkan berbagai game slot dari
            provider kelas dunia. Di halaman ini, kami menyajikan{' '}
            <strong style={{ color: '#ffffff' }}>review lengkap dan jujur</strong>{' '}
            untuk setiap game yang tersedia, mulai dari Mahjong Ways, Mahjong Ways 2,
            Ways of the Qilin, hingga Sugar Rush 1000, Zeus Vs Hades, dan Wisdom of
            Athena.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              lineHeight: '1.9',
              marginBottom: '16px',
            }}
          >
            Setiap{' '}
            <a
              href="/review"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              review
            </a>{' '}
            kami buat berdasarkan{' '}
            <strong style={{ color: '#ffffff' }}>pengalaman bermain langsung</strong>{' '}
            dan analisis mendalam terhadap RTP, volatilitas, fitur bonus, hingga
            potensi max win. Dengan informasi ini, Anda bisa memilih game yang paling
            sesuai dengan gaya bermain dan modal yang Anda miliki. Untuk memulai
            petualangan Anda, lakukan{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              daftar Jun88
            </a>{' '}
            sekarang juga!
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              lineHeight: '1.9',
              marginBottom: '0',
            }}
          >
            Temukan{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              login Jun88
            </a>{' '}
            sebagai pintu akses utama Anda untuk menikmati semua game slot favorit.
            Jangan lewatkan{' '}
            <a
              href="/panduan"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              panduan slot
            </a>{' '}
            dan{' '}
            <a
              href="/artikel"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              artikel
            </a>{' '}
            menarik lainnya yang akan memperkaya wawasan Anda!
          </p>
        </div>

        {/* ====== SECTION REVIEW GAME ====== */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 'clamp(20px, 3vw, 30px) 0',
          }}
        >
          {/* ====== SECTION HEADER ====== */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(20px, 3vw, 30px)',
            }}
          >
            <span
              style={{
                color: '#a78bfa',
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                fontWeight: 'bold',
                background: 'rgba(124,58,237,0.1)',
                padding: 'clamp(6px, 1vw, 8px) clamp(14px, 2vw, 20px)',
                borderRadius: '50px',
                border: '1px solid rgba(124,58,237,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              📝 Review Game
            </span>
            <h2
              style={{
                fontSize: 'clamp(24px, 5vw, 36px)',
                fontWeight: 'bold',
                marginTop: '12px',
                color: '#ffffff',
              }}
            >
              Review <span style={{ color: '#a78bfa' }}>Terlengkap</span>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                marginTop: '12px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.8',
              }}
            >
              Berikut adalah kumpulan review mendalam untuk 6 game slot terpopuler
              dari PG Soft yang tersedia di{' '}
              <a
                href="https://jun88ss.org"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
              >
                Jun88
              </a>
              . Setiap{' '}
              <a
                href="/review"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
              >
                review
              </a>{' '}
              mencakup analisis RTP, volatilitas, fitur bonus, hingga tips strategi
              bermain untuk membantu Anda memilih game yang paling sesuai.
            </p>
          </div>

          {/* ====== GRID REVIEW ====== */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(12px, 2vw, 20px)',
              padding: '0 10px',
            }}
          >
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/review/${game.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    padding: 'clamp(12px, 1.5vw, 16px)',
                    transition: 'all 0.4s ease',
                    textAlign: 'center',
                    height: '100%',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1/1',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      background: game.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        fontSize: 'clamp(40px, 6vw, 64px)',
                        zIndex: 1,
                        opacity: 0.3,
                        textShadow: '0 0 20px rgba(0,0,0,0.5)',
                        pointerEvents: 'none',
                      }}
                    >
                      {game.emoji}
                    </div>
                  </div>

                  <h3
                    style={{
                      fontWeight: 'bold',
                      fontSize: 'clamp(14px, 1.5vw, 16px)',
                      margin: '8px 0 4px',
                      lineHeight: '1.2',
                      color: '#ffffff',
                    }}
                  >
                    {game.title}
                  </h3>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 'clamp(12px, 1.2vw, 13px)',
                      margin: 0,
                    }}
                  >
                    PG Soft • ⭐ {game.rating}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span
                      style={{
                        color: '#34d399',
                        fontWeight: 'bold',
                        fontSize: 'clamp(12px, 1.2vw, 13px)',
                      }}
                    >
                      RTP {game.rtp}
                    </span>
                    <span
                      style={{
                        color: '#a78bfa',
                        fontSize: 'clamp(12px, 1.2vw, 13px)',
                        fontWeight: 'bold',
                      }}
                    >
                      Baca Review →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ====== LIHAT SEMUA REVIEW ====== */}
          <div
            style={{
              textAlign: 'center',
              marginTop: 'clamp(20px, 3vw, 30px)',
            }}
          >
            <Link
              href="/review"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: 'clamp(10px, 1.5vw, 12px) clamp(16px, 3vw, 24px)',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#ffffff',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                transition: 'all 0.3s',
              }}
            >
              Lihat Semua Review →
            </Link>
          </div>
        </div>

        {/* ====== JUMLAH REVIEW ====== */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 'clamp(24px, 3vw, 36px)',
            color: 'rgba(255,255,255,0.3)',
            fontSize: 'clamp(13px, 1.2vw, 14px)',
            padding: '0 10px',
          }}
        >
          Menampilkan {games.length} review game
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