import Link from 'next/link';

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

  return (
    <div
      style={{
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(40px, 6vw, 80px)',
        paddingLeft: 'clamp(16px, 3vw, 20px)',
        paddingRight: 'clamp(16px, 3vw, 20px)',
        paddingBottom: 'clamp(20px, 3vw, 30px)',
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
            Panduan <span style={{ color: '#a78bfa' }}>Bermain Slot</span>
          </h1>
          <p
            style={{
              color: '#9ca3af',
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              marginTop: '8px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Kumpulan panduan lengkap untuk membantu Anda memahami dunia slot
            online di{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
            >
              Jun88
            </a>
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
                    color: isActive ? 'white' : '#d1d5db',
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

        {/* ====== GRID PANDUAN ====== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 2vw, 20px)',
            padding: '0 10px',
          }}
        >
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/panduan/${guide.slug}`}
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <div
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
                  cursor: 'pointer',
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
                    {guide.emoji}
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
                    {guide.category}
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
                  {guide.title}
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
                  {guide.description}
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
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 'clamp(11px, 1vw, 12px)',
                    }}
                  >
                    📅 {guide.date}
                  </span>
                  <span
                    style={{
                      color: '#a78bfa',
                      fontSize: 'clamp(13px, 1.2vw, 14px)',
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                    }}
                  >
                    Baca →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ====== JUMLAH PANDUAN ====== */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 'clamp(24px, 3vw, 36px)',
            color: 'rgba(255,255,255,0.3)',
            fontSize: 'clamp(13px, 1.2vw, 14px)',
            padding: '0 10px',
          }}
        >
          Menampilkan {guides.length} dari {guides.length} panduan
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