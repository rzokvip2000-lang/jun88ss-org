'use client';

import Link from 'next/link';

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
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      padding: 'clamp(24px, 4vw, 40px) clamp(16px, 3vw, 20px)',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* ====== BACKGROUND EFFECTS ====== */}
      <div style={{
        position: 'fixed',
        width: 'clamp(300px, 40vw, 600px)',
        height: 'clamp(300px, 40vw, 600px)',
        top: '-200px',
        right: '-200px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'fixed',
        width: 'clamp(250px, 35vw, 500px)',
        height: 'clamp(250px, 35vw, 500px)',
        bottom: '-150px',
        left: '-150px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.12), transparent 70%)',
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
        @media (max-width: 768px) {
          .artikel-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .artikel-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
        .artikel-filter {
          padding: clamp(6px, 0.8vw, 8px) clamp(14px, 2vw, 18px);
          border-radius: 50px;
          font-size: clamp(12px, 1.2vw, 14px);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          background: rgba(255,255,255,0.05);
          color: #9ca3af;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .artikel-filter:hover {
          background: rgba(255,255,255,0.1);
        }
        .artikel-filter.active {
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          box-shadow: 0 10px 30px rgba(124,58,237,0.2);
          border: none;
        }
        .artikel-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(16px);
          WebkitBackdropFilter: blur(16px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: clamp(12px, 1.5vw, 16px);
          padding: clamp(16px, 2vw, 20px);
          transition: all 0.4s;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .artikel-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(124,58,237,0.3);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(124,58,237,0.1);
        }
        .artikel-card-link {
          color: #a78bfa;
          text-decoration: none;
          font-size: clamp(13px, 1.2vw, 14px);
          font-weight: bold;
          transition: all 0.3s;
        }
        .artikel-card-link:hover {
          color: #c4b5fd;
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
            Artikel & <span style={{ color: '#a78bfa' }}>Berita</span>
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            marginTop: '8px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Kumpulan artikel, berita, dan tips terbaru seputar dunia slot online
          </p>
          
          {/* ====== FILTERS ====== */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(6px, 1vw, 8px)',
            marginTop: 'clamp(16px, 2vw, 20px)'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`artikel-filter ${cat === 'Semua' ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ====== GRID ARTIKEL ====== */}
        <div className="artikel-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(16px, 2vw, 20px)',
          padding: '0 10px'
        }}>
          {articles.map((article) => (
            <div key={article.id} className="artikel-card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 1vw, 10px)',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: 'clamp(24px, 3vw, 28px)' }}>{article.emoji}</span>
                <span style={{
                  fontSize: 'clamp(10px, 1vw, 12px)',
                  fontWeight: 'bold',
                  background: 'rgba(124,58,237,0.2)',
                  color: '#a78bfa',
                  padding: '4px 12px',
                  borderRadius: '50px'
                }}>
                  {article.category}
                </span>
              </div>

              <h3 style={{
                fontWeight: 'bold',
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                margin: '0 0 8px 0',
                lineHeight: '1.3',
                flex: '1'
              }}>
                {article.title}
              </h3>

              <p style={{
                color: '#9ca3af',
                fontSize: 'clamp(13px, 1.2vw, 14px)',
                margin: '0 0 16px 0',
                lineHeight: '1.6',
                flex: '1'
              }}>
                {article.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255,255,255,0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  gap: 'clamp(6px, 0.8vw, 10px)',
                  alignItems: 'center',
                  color: '#6b7280',
                  fontSize: 'clamp(11px, 1vw, 12px)'
                }}>
                  <span>📅 {article.date}</span>
                  <span style={{ color: '#374151' }}>•</span>
                  <span>⏱️ {article.readTime}</span>
                </div>
                <Link href={`/artikel/${article.slug}`} className="artikel-card-link">
                  Baca →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ====== JUMLAH ARTIKEL ====== */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(20px, 3vw, 30px)',
          color: '#6b7280',
          fontSize: 'clamp(13px, 1.2vw, 14px)'
        }}>
          Menampilkan {articles.length} artikel
        </div>

        {/* ====== BACK TO HOME ====== */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: 'clamp(20px, 3vw, 30px)'
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