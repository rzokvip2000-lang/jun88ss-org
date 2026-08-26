// HAPUS 'use client' - Metadata hanya bisa di Server Component

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
    <div style={{ 
      minHeight: '100vh',
      color: 'white',
      padding: 'clamp(16px, 3vw, 20px)',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* ====== BACKGROUND ====== */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: '#0a0a0a',
        pointerEvents: 'none'
      }}></div>

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

      {/* ====== STYLES ====== */}
      <style>{`
        .anchor-link {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.3s;
        }
        .anchor-link:hover {
          color: #a78bfa;
        }
        .game-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(16px);
          WebkitBackdropFilter: blur(16px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: clamp(12px, 1.5vw, 16px);
          padding: clamp(12px, 1.5vw, 16px);
          transition: all 0.4s;
          text-align: center;
          height: 100%;
        }
        .game-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(124,58,237,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.1);
        }
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
        .review-link {
          color: #a78bfa;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }
        .review-link:hover {
          color: #c4b5fd;
          text-decoration: underline;
        }
        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: clamp(10px, 1.5vw, 12px) clamp(16px, 3vw, 24px);
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          text-decoration: none;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          font-size: clamp(13px, 1.5vw, 15px);
          transition: all 0.3s;
        }
        .view-all-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(124,58,237,0.3);
        }
      `}</style>

      {/* ====== CONTENT ====== */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '1200px', 
        margin: '0 auto', 
        paddingTop: 'clamp(40px, 6vw, 80px)' 
      }}>
        
        {/* ====== HEADER ====== */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: 'clamp(30px, 4vw, 40px)',
          padding: '0 10px'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(28px, 5vw, 40px)', 
            fontWeight: 'bold',
            margin: '0'
          }}>
            Review <span style={{ color: '#a78bfa' }}>Permainan Jun88</span>
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            marginTop: '8px'
          }}>
            Kumpulan review lengkap untuk game-game slot terbaik di <a href="https://jun88ss.org" className="anchor-link" style={{ color: '#a78bfa' }}>Jun88</a>
          </p>
        </div>

        {/* ====== ARTIKEL INTRO ====== */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto clamp(30px, 4vw, 40px)',
          padding: 'clamp(24px, 3vw, 36px)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 'clamp(16px, 2vw, 24px)',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(20px, 2.5vw, 26px)', 
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Review Game Slot Terlengkap di <span style={{ color: '#a78bfa' }}>Jun88</span>
          </h2>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(15px, 1.2vw, 17px)',
            lineHeight: '1.9',
            marginBottom: '16px'
          }}>
            <a href="https://jun88ss.org" className="review-link">Jun88</a> adalah platform terpercaya yang menghadirkan 
            berbagai game slot dari provider kelas dunia. Di halaman ini, kami menyajikan 
            <strong style={{ color: 'white' }}> review lengkap dan jujur</strong> untuk setiap game 
            yang tersedia, mulai dari Mahjong Ways, Mahjong Ways 2, Ways of the Qilin, 
            hingga Sugar Rush 1000, Zeus Vs Hades, dan Wisdom of Athena.
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(15px, 1.2vw, 17px)',
            lineHeight: '1.9',
            marginBottom: '16px'
          }}>
            Setiap <a href="/review" className="review-link">review</a> 
            kami buat berdasarkan <strong style={{ color: 'white' }}>pengalaman bermain langsung</strong> 
            dan analisis mendalam terhadap RTP, volatilitas, fitur bonus, hingga potensi max win. 
            Dengan informasi ini, Anda bisa memilih game yang paling sesuai dengan gaya bermain 
            dan modal yang Anda miliki. Untuk memulai petualangan Anda, lakukan <a href="https://jun88ss.org" className="review-link">daftar Jun88</a> sekarang juga!
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(15px, 1.2vw, 17px)',
            lineHeight: '1.9',
            marginBottom: '0'
          }}>
            Temukan <a href="https://jun88ss.org" className="review-link">login Jun88</a> sebagai pintu akses utama Anda untuk menikmati semua game slot favorit. Jangan lewatkan <a href="/panduan" className="review-link">panduan slot</a> dan <a href="/artikel" className="review-link">artikel</a> menarik lainnya yang akan memperkaya wawasan Anda!
          </p>
        </div>

        {/* ====== SECTION REVIEW GAME ====== */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: 'clamp(20px, 3vw, 30px) 0'
        }}>
          
          {/* ====== SECTION HEADER ====== */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(20px, 3vw, 30px)' 
          }}>
            <span style={{ 
              color: '#a78bfa',
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              fontWeight: 'bold',
              background: 'rgba(124,58,237,0.1)',
              padding: 'clamp(6px, 1vw, 8px) clamp(14px, 2vw, 20px)',
              borderRadius: '50px',
              border: '1px solid rgba(124,58,237,0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              📝 Review Game
            </span>
            <h2 style={{ 
              fontSize: 'clamp(24px, 5vw, 36px)', 
              fontWeight: 'bold', 
              marginTop: '12px' 
            }}>
              Review <span style={{ color: '#a78bfa' }}>Terlengkap</span>
            </h2>
            <p style={{ 
              color: '#d1d5db', 
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              marginTop: '12px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.8'
            }}>
              Berikut adalah kumpulan <a href="/review" className="review-link">review</a> mendalam 
              untuk 6 game slot terpopuler dari PG Soft yang tersedia di <a href="https://jun88ss.org" className="review-link">Jun88</a>. 
              Setiap <a href="/review" className="review-link">review</a> mencakup analisis RTP, volatilitas, 
              fitur bonus, hingga tips strategi bermain untuk membantu Anda memilih game yang paling sesuai.
            </p>
          </div>

          {/* ====== GRID REVIEW ====== */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px, 2vw, 20px)',
            padding: '0 10px'
          }}>
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/review/${game.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
              >
                <div className="game-card">
                  <div style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    borderRadius: 'clamp(10px, 1.2vw, 12px)',
                    overflow: 'hidden',
                    background: game.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      fontSize: 'clamp(40px, 6vw, 64px)',
                      zIndex: 1,
                      opacity: 0.3,
                      textShadow: '0 0 20px rgba(0,0,0,0.5)',
                      pointerEvents: 'none'
                    }}>
                      {game.emoji}
                    </div>
                  </div>
                  
                  <h3 style={{ 
                    fontWeight: 'bold', 
                    fontSize: 'clamp(14px, 1.5vw, 16px)', 
                    margin: '8px 0 4px',
                    lineHeight: '1.2',
                    color: 'white'
                  }}>{game.title}</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: 'clamp(12px, 1.2vw, 13px)', 
                    margin: 0 
                  }}>PG Soft • ⭐ {game.rating}</p>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginTop: '12px', 
                    paddingTop: '12px', 
                    borderTop: '1px solid rgba(255,255,255,0.05)' 
                  }}>
                    <span style={{ 
                      color: '#34d399', 
                      fontWeight: 'bold', 
                      fontSize: 'clamp(12px, 1.2vw, 13px)' 
                    }}>RTP {game.rtp}</span>
                    <span style={{ 
                      color: '#a78bfa', 
                      fontSize: 'clamp(12px, 1.2vw, 13px)',
                      fontWeight: 'bold'
                    }}>
                      Baca Review →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ====== LIHAT SEMUA REVIEW ====== */}
          <div style={{ textAlign: 'center', marginTop: 'clamp(20px, 3vw, 30px)' }}>
            <Link 
              href="/review" 
              className="view-all-btn"
            >
              Lihat Semua Review →
            </Link>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(20px, 3vw, 30px)',
          color: '#6b7280',
          fontSize: 'clamp(13px, 1.2vw, 14px)'
        }}>
          Menampilkan {games.length} review game
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: 'clamp(30px, 4vw, 40px)',
          padding: '0 10px'
        }}>
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