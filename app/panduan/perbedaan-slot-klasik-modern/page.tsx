import Link from 'next/link';

export const metadata = {
  title: 'Perbedaan Slot Klasik dan Slot Video Modern | Jun88',
  description: 'Kenali perbedaan antara slot klasik 3 putaran dan slot video modern dengan fitur canggih di Jun88.',
  alternates: {
    canonical: 'https://jun88ss.org/panduan/perbedaan-slot-klasik-modern',
  },
  openGraph: {
    title: 'Perbedaan Slot Klasik dan Slot Video Modern | Jun88',
    description: 'Kenali perbedaan antara slot klasik 3 putaran dan slot video modern dengan fitur canggih di Jun88.',
    url: 'https://jun88ss.org/panduan/perbedaan-slot-klasik-modern',
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
  id: 9,
  title: 'Perbedaan Slot Klasik dan Slot Video Modern',
  slug: 'perbedaan-slot-klasik-modern',
  category: 'Dasar',
  emoji: '🕹️',
  description: 'Kenali perbedaan antara slot klasik 3 putaran dan slot video modern dengan fitur canggih.',
  date: '13 Agustus 2026',
  readTime: '6 menit',
  content: `
    <h2>🕹️ Perbandingan Slot Klasik vs Slot Video Modern</h2>
    <p>Dunia slot online telah berkembang pesat sejak pertama kali diperkenalkan. Dari mesin slot mekanis sederhana dengan 3 gulungan dan satu payline, kini kita memiliki slot video dengan 5 gulungan atau lebih, puluhan hingga ribuan paylines, dan fitur-fitur yang sangat kompleks. Memahami perbedaan antara slot klasik dan slot video modern akan membantu Anda memilih game yang sesuai dengan preferensi Anda.</p>
    
    <p>Slot klasik dan slot video modern memiliki kelebihan dan kekurangan masing-masing. Tidak ada yang lebih baik secara absolut; semuanya tergantung pada apa yang Anda cari dari pengalaman bermain slot. Beberapa pemain menyukai kesederhanaan slot klasik, sementara yang lain menikmati kompleksitas dan visual slot video modern.</p>
    
    <h3>🎰 Slot Klasik</h3>
    <p>Slot klasik adalah jenis slot paling awal yang terinspirasi dari mesin slot fisik di kasino darat. Karakteristik utamanya meliputi:</p>
    <ul>
      <li><strong>Putaran:</strong> 3 putaran (3 gulungan)</li>
      <li><strong>Paylines:</strong> 1-5 paylines sederhana</li>
      <li><strong>Simbol:</strong> Buah-buahan (ceri, jeruk, lemon), angka 7, BAR, bel</li>
      <li><strong>Fitur:</strong> Sederhana, tanpa bonus kompleks. Mungkin hanya wild dan scatter sederhana</li>
      <li><strong>Visual:</strong> Minimalis, tidak terlalu banyak animasi</li>
      <li><strong>Cocok Untuk:</strong> Pemain yang suka kesederhanaan, nostalgia, atau baru memulai</li>
    </ul>
    
    <h3>🎬 Slot Video Modern</h3>
    <p>Slot video modern adalah evolusi dari slot klasik dengan teknologi digital yang canggih. Karakteristiknya:</p>
    <ul>
      <li><strong>Putaran:</strong> 5 putaran atau lebih (kadang 6 atau 7 gulungan)</li>
      <li><strong>Paylines:</strong> 10-1024 paylines atau bahkan "ways to win" tanpa paylines tradisional</li>
      <li><strong>Simbol:</strong> Tema spesifik yang kaya (mitologi, film, hewan, petualangan, dll)</li>
      <li><strong>Fitur:</strong> Free spin, wild, scatter, bonus game, jackpot, multiplier, expanding wild, sticky wild, dan banyak lagi</li>
      <li><strong>Visual:</strong> Grafis 3D, animasi canggih, efek suara yang imersif</li>
      <li><strong>Cocok Untuk:</strong> Semua pemain, terutama yang suka visual menarik dan fitur kompleks</li>
    </ul>
    
    <h2>🎯 Mana yang Harus Dipilih?</h2>
    <p>Berikut panduan untuk membantu Anda memilih:</p>
    <ul>
      <li><strong>Pemula:</strong> Mulai dengan slot klasik untuk memahami dasar-dasar slot tanpa kebingungan fitur bonus yang kompleks</li>
      <li><strong>Suka Visual:</strong> Pilih slot video dengan tema menarik dan grafis yang memukau</li>
      <li><strong>Suka Bonus:</strong> Slot video menawarkan lebih banyak fitur dan variasi permainan</li>
      <li><strong>Modal Kecil:</strong> Slot klasik biasanya lebih ramah di kantong dengan taruhan minimum yang rendah</li>
      <li><strong>Kejar Jackpot:</strong> Slot video modern biasanya menawarkan jackpot yang lebih besar</li>
      <li><strong>Nostalgia:</strong> Slot klasik memberikan nuansa mesin slot tradisional</li>
    </ul>
    
    <p>Yang terpenting, cobalah kedua jenis slot ini dan temukan mana yang paling Anda nikmati. Banyak pemain yang beralih antara slot klasik dan slot video tergantung pada suasana hati dan tujuan bermain mereka.</p>
  `
};

export default function PerbedaanSlotKlasikModernPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: 'white',
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 3vw, 20px)',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
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

      {/* ====== CONTENT ====== */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto',
        paddingTop: 'clamp(40px, 6vw, 80px)'
      }}>
        
        {/* ====== BACK LINK ====== */}
        <Link 
          href="/panduan" 
          className="back-link"
        >
          ← Kembali ke Semua Panduan
        </Link>

        {/* ====== HEADER ====== */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 'clamp(12px, 1.5vw, 16px)',
          padding: 'clamp(20px, 3vw, 30px)',
          marginTop: 'clamp(16px, 2vw, 20px)',
          border: '1px solid rgba(255,255,255,0.06)',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: 'clamp(16px, 2vw, 20px)', 
            flexWrap: 'wrap' 
          }}>
            <div style={{ 
              fontSize: 'clamp(48px, 8vw, 64px)', 
              flexShrink: 0 
            }}>{guide.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'clamp(8px, 1.5vw, 12px)', 
                flexWrap: 'wrap' 
              }}>
                <h1 style={{ 
                  fontSize: 'clamp(22px, 4vw, 28px)', 
                  fontWeight: 'bold', 
                  margin: 0,
                  lineHeight: '1.3'
                }}>{guide.title}</h1>
                <span className="category-badge">
                  {guide.category}
                </span>
              </div>
              <p style={{ 
                color: '#9ca3af', 
                marginTop: '8px',
                fontSize: 'clamp(14px, 1.2vw, 16px)'
              }}>{guide.description}</p>
              <div style={{ 
                display: 'flex', 
                gap: 'clamp(12px, 2vw, 16px)', 
                marginTop: '12px', 
                fontSize: 'clamp(12px, 1.2vw, 14px)', 
                color: '#6b7280' 
              }}>
                <span>📅 {guide.date}</span>
                <span>⏱️ {guide.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ====== CONTENT ====== */}
        <div className="guide-content-wrapper" style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 'clamp(12px, 1.5vw, 16px)',
          padding: 'clamp(20px, 3vw, 30px)',
          marginTop: 'clamp(16px, 2vw, 20px)',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          lineHeight: 1.8,
          position: 'relative',
          zIndex: 1
        }}>
          <div dangerouslySetInnerHTML={{ __html: guide.content }} className="guide-content" />
        </div>

        {/* ====== CTA CARD ====== */}
        <div className="cta-card" style={{
          background: 'rgba(124,58,237,0.08)',
          borderRadius: 'clamp(12px, 1.5vw, 16px)',
          padding: 'clamp(20px, 2.5vw, 24px)',
          marginTop: 'clamp(16px, 2vw, 20px)',
          textAlign: 'center',
          border: '1px solid rgba(124,58,237,0.15)',
          position: 'relative',
          zIndex: 1
        }}>
          <h3 style={{ 
            fontSize: 'clamp(16px, 1.8vw, 18px)',
            margin: '0'
          }}>📖 Ingin Belajar Lebih Lanjut?</h3>
          <p style={{ 
            color: '#9ca3af', 
            fontSize: 'clamp(13px, 1.2vw, 14px)',
            margin: '8px 0 0'
          }}>Baca panduan lainnya untuk meningkatkan pemahaman Anda tentang slot online di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>.</p>
          <Link
            href="/panduan"
            className="cta-button"
          >
            Lihat Semua Panduan
          </Link>
        </div>

        {/* ====== NAVIGASI ====== */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 'clamp(20px, 3vw, 30px)',
          flexWrap: 'wrap',
          gap: 'clamp(8px, 1vw, 12px)',
          position: 'relative',
          zIndex: 1
        }}>
          <Link 
            href="/panduan" 
            className="nav-link"
          >
            ← Semua Panduan
          </Link>
          <Link 
            href="/" 
            className="nav-link"
          >
            Beranda →
          </Link>
        </div>

        {/* ====== STYLES ====== */}
        <style>{`
          .back-link {
            color: #a78bfa;
            text-decoration: none;
            font-size: clamp(14px, 1.2vw, 16px);
            transition: all 0.3s;
            display: inline-block;
            position: relative;
            z-index: 1;
          }
          .back-link:hover {
            color: #c4b5fd;
            transform: translateX(-4px);
          }
          
          .category-badge {
            font-size: clamp(11px, 1vw, 12px);
            font-weight: bold;
            background: rgba(124,58,237,0.2);
            color: #a78bfa;
            padding: 4px 14px;
            border-radius: 50px;
          }
          
          .nav-link {
            color: #6b7280;
            text-decoration: none;
            font-size: clamp(13px, 1.2vw, 14px);
            transition: all 0.3s;
          }
          .nav-link:hover {
            color: white;
          }
          
          .cta-card {
            background: rgba(124,58,237,0.08);
            border-radius: clamp(12px, 1.5vw, 16px);
            padding: clamp(20px, 2.5vw, 24px);
            margin-top: clamp(16px, 2vw, 20px);
            text-align: center;
            border: 1px solid rgba(124,58,237,0.15);
            transition: all 0.3s;
            position: relative;
            z-index: 1;
          }
          .cta-card:hover {
            border-color: rgba(124,58,237,0.3);
            box-shadow: 0 10px 40px rgba(124,58,237,0.1);
          }
          
          .cta-button {
            display: inline-block;
            margin-top: 12px;
            background: linear-gradient(135deg, #7c3aed, #ec4899);
            color: white;
            padding: clamp(10px, 1.2vw, 12px) clamp(24px, 3vw, 28px);
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            font-size: clamp(13px, 1.2vw, 14px);
            transition: all 0.3s;
          }
          .cta-button:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 50px rgba(124,58,237,0.4);
          }
          
          .guide-content h2 {
            color: white;
            font-size: clamp(20px, 2.5vw, 24px);
            margin-top: 28px;
            margin-bottom: 12px;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-bottom: 8px;
          }
          .guide-content h2:first-child {
            margin-top: 0;
          }
          .guide-content h3 {
            color: #d1d5db;
            font-size: clamp(17px, 2vw, 19px);
            margin-top: 20px;
            margin-bottom: 8px;
          }
          .guide-content p {
            color: #d1d5db;
            font-size: clamp(14px, 1.2vw, 16px);
            line-height: 1.9;
            margin-bottom: 12px;
          }
          .guide-content ul {
            color: #d1d5db;
            padding-left: clamp(20px, 2vw, 24px);
            margin-bottom: 16px;
            font-size: clamp(14px, 1.2vw, 16px);
          }
          .guide-content ul li {
            margin-bottom: 8px;
            line-height: 1.7;
          }
          .guide-content strong {
            color: white;
          }
          .guide-content-wrapper {
            transition: all 0.3s;
          }
          .guide-content-wrapper:hover {
            border-color: rgba(124,58,237,0.15);
          }
          
          @media (max-width: 480px) {
            .guide-content h2 {
              font-size: 18px;
            }
            .guide-content h3 {
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}