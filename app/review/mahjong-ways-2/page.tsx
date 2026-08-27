import Link from 'next/link';
import { useState } from 'react';

export const metadata = {
  title: 'Panduan Bermain Slot Online Terlengkap | Jun88',
  description: 'Kumpulan panduan lengkap untuk pemain slot online di Jun88. Pelajari RTP, volatilitas, strategi, dan tips bermain slot yang aman.',
  alternates: {
    canonical: 'https://jun88ss.org/panduan',
  },
  openGraph: {
    title: 'Panduan Bermain Slot Online Terlengkap | Jun88',
    description: 'Kumpulan panduan lengkap untuk pemain slot online di Jun88. Pelajari RTP, volatilitas, strategi, dan tips bermain slot yang aman.',
    url: 'https://jun88ss.org/panduan',
    siteName: 'Jun88',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PanduanPage() {
  const guides = [
    { 
      id: 1, 
      title: 'Apa Itu RTP? Panduan Lengkap untuk Pemain Slot', 
      slug: 'apa-itu-rtp', 
      category: 'Dasar', 
      emoji: '📊', 
      description: 'Pelajari apa itu RTP (Return to Player) dan bagaimana cara menggunakannya untuk memilih game slot terbaik.', 
      date: '21 Agustus 2026' 
    },
    { 
      id: 2, 
      title: 'Volatilitas Slot: Low, Medium, High - Mana yang Cocok?', 
      slug: 'volatilitas-slot', 
      category: 'Dasar', 
      emoji: '📈', 
      description: 'Kenali perbedaan volatilitas rendah, sedang, dan tinggi serta cara memilih sesuai gaya bermain Anda.', 
      date: '20 Agustus 2026' 
    },
    { 
      id: 3, 
      title: 'Cara Memilih Game Slot yang Tepat untuk Pemula', 
      slug: 'memilih-game-slot', 
      category: 'Pemula', 
      emoji: '🎯', 
      description: 'Panduan lengkap untuk pemula dalam memilih game slot yang sesuai dengan modal dan tujuan bermain.', 
      date: '19 Agustus 2026' 
    },
    { 
      id: 4, 
      title: '5 Kesalahan Pemula di Slot Online dan Cara Menghindarinya', 
      slug: 'kesalahan-pemula-slot', 
      category: 'Pemula', 
      emoji: '⚠️', 
      description: 'Hindari kesalahan umum yang sering dilakukan pemain pemula dan tingkatkan peluang kemenangan Anda.', 
      date: '18 Agustus 2026' 
    },
    { 
      id: 5, 
      title: 'Istilah-istilah Slot yang Wajib Diketahui Pemain', 
      slug: 'istilah-slot', 
      category: 'Dasar', 
      emoji: '📚', 
      description: 'Kumpulan istilah penting dalam dunia slot online yang harus Anda ketahui sebelum bermain.', 
      date: '17 Agustus 2026' 
    },
    { 
      id: 6, 
      title: 'Tips Mengelola Bankroll untuk Bermain Slot', 
      slug: 'mengelola-bankroll', 
      category: 'Strategi', 
      emoji: '💰', 
      description: 'Pelajari cara mengelola modal dengan bijak agar bermain lebih lama dan mengurangi risiko kerugian besar.', 
      date: '16 Agustus 2026' 
    },
    { 
      id: 7, 
      title: 'Cara Kerja Fitur Free Spin di Slot Online', 
      slug: 'fitur-free-spin', 
      category: 'Fitur', 
      emoji: '🔄', 
      description: 'Pahami cara kerja fitur putaran gratis dan bagaimana memaksimalkan peluang kemenangan dari fitur ini.', 
      date: '15 Agustus 2026' 
    },
    { 
      id: 8, 
      title: 'Strategi Bermain Slot dengan Modal Kecil', 
      slug: 'strategi-modal-kecil', 
      category: 'Strategi', 
      emoji: '🎲', 
      description: 'Tips dan trik bermain slot dengan modal terbatas agar tetap bisa menikmati permainan dan menang.', 
      date: '14 Agustus 2026' 
    },
    { 
      id: 9, 
      title: 'Perbedaan Slot Klasik dan Slot Video Modern', 
      slug: 'perbedaan-slot-klasik-modern', 
      category: 'Dasar', 
      emoji: '🕹️', 
      description: 'Kenali perbedaan antara slot klasik 3 gulungan dan slot video modern dengan fitur canggih.', 
      date: '13 Agustus 2026' 
    },
    { 
      id: 10, 
      title: 'Cara Bermain Slot dengan Bijak dan Bertanggung Jawab', 
      slug: 'bermain-slot-bijak', 
      category: 'Tips', 
      emoji: '🧠', 
      description: 'Panduan bermain slot secara sehat, mengatur batas waktu dan uang, serta menghindari kecanduan.', 
      date: '12 Agustus 2026' 
    }
  ];

  const categories = ['Semua', ...new Set(guides.map((g) => g.category))];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredGuides = activeCategory === 'Semua' 
    ? guides 
    : guides.filter((g) => g.category === activeCategory);

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
          .guide-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .guide-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
        .filter-btn {
          padding: clamp(6px, 0.8vw, 8px) clamp(14px, 2vw, 18px);
          border-radius: 50px;
          font-size: clamp(12px, 1.2vw, 14px);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }
        .filter-btn-active {
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          box-shadow: 0 10px 30px rgba(124,58,237,0.2);
        }
        .filter-btn-inactive {
          background: rgba(255,255,255,0.05);
          color: #9ca3af;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .filter-btn-inactive:hover {
          background: rgba(255,255,255,0.1);
        }
        .guide-card {
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
          cursor: pointer;
        }
        .guide-card:hover {
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
        .read-link {
          color: #a78bfa;
          font-size: clamp(13px, 1.2vw, 14px);
          font-weight: bold;
          transition: all 0.3s;
        }
        .read-link:hover {
          color: #c4b5fd;
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
            Panduan <span style={{ color: '#a78bfa' }}>Bermain Slot</span>
          </h1>
          <p style={{ 
            color: '#9ca3af', 
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            marginTop: '8px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Kumpulan panduan lengkap untuk membantu Anda memahami dunia slot online di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>
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
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? 'filter-btn filter-btn-active' : 'filter-btn filter-btn-inactive'}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ====== GRID PANDUAN ====== */}
        <div className="guide-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(16px, 2vw, 20px)',
          padding: '0 10px'
        }}>
          {filteredGuides.map((guide) => (
            <Link
              key={guide.id}
              href={`/panduan/${guide.slug}`}
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >
              <div className="guide-card">
                {/* HEADER CARD */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(8px, 1vw, 10px)',
                  marginBottom: '12px'
                }}>
                  <span style={{ fontSize: 'clamp(24px, 3vw, 28px)' }}>{guide.emoji}</span>
                  <span style={{
                    fontSize: 'clamp(10px, 1vw, 12px)',
                    fontWeight: 'bold',
                    background: 'rgba(124,58,237,0.2)',
                    color: '#a78bfa',
                    padding: '4px 12px',
                    borderRadius: '50px'
                  }}>
                    {guide.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 style={{
                  fontWeight: 'bold',
                  fontSize: 'clamp(15px, 1.5vw, 17px)',
                  margin: '0 0 8px 0',
                  lineHeight: '1.3',
                  flex: '1'
                }}>
                  {guide.title}
                </h3>

                {/* DESCRIPTION */}
                <p style={{
                  color: '#9ca3af',
                  fontSize: 'clamp(13px, 1.2vw, 14px)',
                  margin: '0 0 16px 0',
                  lineHeight: '1.6',
                  flex: '1'
                }}>
                  {guide.description}
                </p>

                {/* FOOTER */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <span style={{
                    color: '#6b7280',
                    fontSize: 'clamp(11px, 1vw, 12px)'
                  }}>
                    📅 {guide.date}
                  </span>
                  <span className="read-link">
                    Baca →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ====== JUMLAH PANDUAN ====== */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(20px, 3vw, 30px)',
          color: '#6b7280',
          fontSize: 'clamp(13px, 1.2vw, 14px)'
        }}>
          Menampilkan {filteredGuides.length} dari {guides.length} panduan
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