'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const games = [
  { 
    id: 1, 
    title: 'Mahjong Ways', 
    slug: 'mahjong-ways', 
    emoji: '🀄', 
    color: 'from-blue-600 to-cyan-500', 
    rtp: '96.92%', 
    image: '/images/mahjong-ways-jun88-ss.webp' 
  },
  { 
    id: 2, 
    title: 'Mahjong Ways 2', 
    slug: 'mahjong-ways-2', 
    emoji: '🎴', 
    color: 'from-emerald-600 to-teal-500', 
    rtp: '96.95%', 
    image: '/images/mahjong-ways-2-jun88-ss.webp' 
  },
  { 
    id: 3, 
    title: 'Ways of the Qilin', 
    slug: 'ways-of-the-qilin', 
    emoji: '🐉', 
    color: 'from-purple-600 to-pink-500', 
    rtp: '96.71%', 
    image: '/images/ways-of-the-qilin-jun88-ss.webp' 
  },
  { 
    id: 4, 
    title: 'Sugar Rush 1000', 
    slug: 'sugar-rush-1000', 
    emoji: '🍬', 
    color: 'from-pink-500 to-rose-500', 
    rtp: '96.88%', 
    image: '/images/sugar-rush-1000-jun88-ss.webp' 
  },
  { 
    id: 5, 
    title: 'Zeus Vs Hades', 
    slug: 'zeus-vs-hades', 
    emoji: '⚡', 
    color: 'from-yellow-600 to-orange-500', 
    rtp: '97.05%', 
    image: '/images/zeus-hades-jun88-ss.webp' 
  },
  { 
    id: 6, 
    title: 'Wisdom of Athena', 
    slug: 'wisdom-of-athena', 
    emoji: '🦉', 
    color: 'from-indigo-600 to-purple-500', 
    rtp: '96.80%', 
    image: '/images/wisdom-of-athena-jun88-ss.webp' 
  },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // EXTERNAL LINKS
  const externalLinks = {
    main: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
    daftar: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
    login: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      color: 'white',
      padding: 'clamp(12px, 3vw, 20px)',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* ====== BACKGROUND IMAGE ====== */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundImage: isMobile 
          ? 'url("/bg/bg-jun88ss-mobile.webp")'
          : 'url("/bg/bg-jun88ss-desktop.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none'
      }}></div>

      {/* ====== DARK OVERLAY ====== */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        pointerEvents: 'none'
      }}></div>

      {/* ====== BACKGROUND GLOW ====== */}
      <div style={{
        position: 'fixed',
        width: 'clamp(300px, 40vw, 600px)',
        height: 'clamp(300px, 40vw, 600px)',
        top: '-200px',
        left: '-200px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'fixed',
        width: 'clamp(250px, 35vw, 500px)',
        height: 'clamp(250px, 35vw, 500px)',
        bottom: '-150px',
        right: '-150px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.12), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'fixed',
        width: 'clamp(200px, 25vw, 300px)',
        height: 'clamp(200px, 25vw, 300px)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>

      {/* ====== GRID PATTERN ====== */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: 'clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px)'
      }}></div>

      {/* ====== ANIMATIONS ====== */}
      <style>{`
        @media (max-width: 768px) {
          .game-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .game-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
        @media (max-width: 360px) {
          .game-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>

      {/* ====== CONTENT ====== */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ====== HEADER / HERO ====== */}
        <div style={{ 
          textAlign: 'center', 
          padding: 'clamp(20px, 5vw, 40px) 0 clamp(20px, 5vw, 30px) 0'
        }}>
          
          {/* ====== LOGO ====== */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'clamp(16px, 3vw, 20px)',
            padding: '0 10px'
          }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <Image 
                src="/images/jun88-ss-logo.webp"
                alt="Jun88 Logo"
                width={isMobile ? 160 : 200}
                height={isMobile ? 52 : 66}
                priority
                style={{
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 20px rgba(124,58,237,0.3))'
                }}
              />
            </a>
          </div>

          {/* ====== LIVE BADGE ====== */}
          <div style={{ 
            display: 'inline-block',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            padding: 'clamp(6px, 1vw, 8px) clamp(14px, 2vw, 20px)',
            borderRadius: '50px',
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            color: '#9ca3af',
            border: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '16px'
          }}>
            🟢 Live • 1,234 Pemain
          </div>
          
          {/* ====== TITLE ====== */}
          <h1 style={{ 
            fontSize: 'clamp(28px, 8vw, 48px)', 
            fontWeight: 'bold', 
            margin: '0',
            lineHeight: '1.2'
          }}>
            Platform <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #a78bfa, #ec4899, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(124,58,237,0.2))'
            }}>
              Jun88
            </span>
          </h1>
          
          {/* ====== SUBTITLE ====== */}
          <p style={{ 
            color: '#9ca3af', 
            fontSize: 'clamp(14px, 2.5vw, 18px)', 
            marginTop: '12px', 
            maxWidth: '600px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            padding: '0 10px'
          }}>
            Review jujur & mendalam untuk game slot populer di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>Jun88</a>.
          </p>
          
          {/* ====== CTA BUTTONS ====== */}
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(10px, 2vw, 16px)', 
            justifyContent: 'center', 
            marginTop: '24px', 
            flexWrap: 'wrap',
            padding: '0 10px'
          }}>
            <a 
              href={externalLinks.main}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 32px)',
                borderRadius: '50px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                transition: 'all 0.3s',
                boxShadow: '0 10px 40px rgba(124,58,237,0.2)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(124,58,237,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(124,58,237,0.2)';
              }}
            >
              Main Sekarang
            </a>
            <a 
              href="/review" 
              style={{
                padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 32px)',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              Baca Review
            </a>
            <a 
              href={externalLinks.daftar}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 32px)',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              Daftar
            </a>
          </div>

          {/* ====== STATISTIK ====== */}
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(20px, 5vw, 40px)', 
            justifyContent: 'center', 
            marginTop: '30px',
            flexWrap: 'wrap'
          }}>
            <div>
              <span style={{ 
                fontSize: 'clamp(22px, 4vw, 28px)', 
                fontWeight: 'bold', 
                display: 'block' 
              }}>50+</span>
              <span style={{ color: '#6b7280', fontSize: 'clamp(12px, 1.5vw, 14px)' }}>Review</span>
            </div>
            <div>
              <span style={{ 
                fontSize: 'clamp(22px, 4vw, 28px)', 
                fontWeight: 'bold', 
                display: 'block', 
                color: '#fbbf24' 
              }}>4.5★</span>
              <span style={{ color: '#6b7280', fontSize: 'clamp(12px, 1.5vw, 14px)' }}>Rating</span>
            </div>
            <div>
              <span style={{ 
                fontSize: 'clamp(22px, 4vw, 28px)', 
                fontWeight: 'bold', 
                display: 'block', 
                color: '#34d399' 
              }}>96%+</span>
              <span style={{ color: '#6b7280', fontSize: 'clamp(12px, 1.5vw, 14px)' }}>RTP</span>
            </div>
          </div>
        </div>

        {/* ====== ARTIKEL INTRO ====== */}
        <div style={{
          maxWidth: '900px',
          margin: 'clamp(20px, 3vw, 30px) auto',
          padding: 'clamp(20px, 3vw, 30px)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 'clamp(16px, 2vw, 24px)',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(20px, 3vw, 28px)', 
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Selamat Datang di <span style={{ color: '#a78bfa' }}>Jun88</span>!
          </h2>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: '1.8',
            marginBottom: '16px'
          }}>
            <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 'bold' }}>Jun88</a> adalah platform hiburan digital terpercaya yang menyajikan berbagai permainan slot online dari provider ternama seperti <strong style={{ color: 'white' }}>PG Soft</strong>, <strong style={{ color: 'white' }}>Pragmatic Play</strong>, dan <strong style={{ color: 'white' }}>Microgaming</strong>. Dengan sistem keamanan berstandar internasional dan lisensi resmi, <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>link Jun88</a> menjamin kenyamanan dan keamanan setiap pemain.
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: '1.8',
            marginBottom: '16px'
          }}>
            Kami hadir untuk memberikan <strong style={{ color: 'white' }}>review jujur dan mendalam</strong> tentang setiap game slot yang tersedia. Dari analisis RTP, volatilitas, hingga fitur-fitur unggulan, semua kami sajikan secara transparan agar Anda bisa memilih game yang paling sesuai dengan gaya bermain. Untuk memulai petualangan Anda, lakukan <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>daftar Jun88</a> sekarang juga!
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: '1.8',
            marginBottom: '0'
          }}>
            Temukan game favoritmu, pelajari strategi terbaik, dan nikmati pengalaman bermain yang lebih menguntungkan hanya dengan <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 'bold' }}>login Jun88</a> dan rasakan sensasi bermain slot online yang aman dan nyaman!
          </p>
        </div>

        {/* ====== GAME POPULER - GRID 3 KOLOM ====== */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(20px, 3vw, 30px) 0' }}>
          
          {/* ====== SECTION HEADER ====== */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(20px, 3vw, 30px)' }}>
            <span style={{ 
              color: '#a78bfa',
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              fontWeight: 'bold',
              background: 'rgba(124,58,237,0.1)',
              padding: 'clamp(6px, 1vw, 8px) clamp(14px, 2vw, 20px)',
              borderRadius: '50px',
              border: '1px solid rgba(124,58,237,0.2)',
              backdropFilter: 'blur(10px)'
            }}>Game Populer</span>
            <h2 style={{ 
              fontSize: 'clamp(24px, 5vw, 36px)', 
              fontWeight: 'bold', 
              marginTop: '12px' 
            }}>Paling <span style={{ color: '#a78bfa' }}>Diminati</span></h2>
          </div>

          {/* ====== GRID GAMES ====== */}
          <div className="game-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px, 2vw, 20px)',
            padding: '0 10px'
          }}>
            {games.map((game) => (
              <div 
                key={game.id} 
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 'clamp(12px, 1.5vw, 16px)',
                  padding: 'clamp(12px, 1.5vw, 16px)',
                  transition: 'all 0.4s',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(124,58,237,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: 'clamp(10px, 1.2vw, 12px)',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${game.color.replace('from-', '').replace('to-', '')})`,
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
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    zIndex: 1,
                    opacity: 0.3,
                    textShadow: '0 0 20px rgba(0,0,0,0.5)'
                  }}>
                    {game.emoji}
                  </div>
                </div>
                
                <h3 style={{ 
                  fontWeight: 'bold', 
                  fontSize: 'clamp(14px, 1.5vw, 16px)', 
                  margin: '8px 0 4px',
                  lineHeight: '1.2'
                }}>{game.title}</h3>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: 'clamp(11px, 1.2vw, 13px)', 
                  margin: 0 
                }}>PG Soft</p>
                
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
                    fontSize: 'clamp(11px, 1.2vw, 13px)' 
                  }}>RTP {game.rtp}</span>
                  
                  <a 
                    href={`/review/${game.slug}`} 
                    style={{ 
                      color: '#a78bfa', 
                      textDecoration: 'none', 
                      fontSize: 'clamp(11px, 1.2vw, 13px)',
                      fontWeight: 'bold',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5fd'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a78bfa'}
                  >
                    Baca →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ====== LIHAT SEMUA GAME ====== */}
          <div style={{ textAlign: 'center', marginTop: 'clamp(20px, 3vw, 30px)' }}>
            <a 
              href="/review" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: 'clamp(10px, 1.5vw, 12px) clamp(16px, 3vw, 24px)',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              Lihat Semua Game →
            </a>
          </div>
        </div>

        {/* ====== ARTIKEL SETELAH GAME GRID ====== */}
        <div style={{
          maxWidth: '900px',
          margin: 'clamp(30px, 4vw, 40px) auto',
          padding: 'clamp(20px, 3vw, 30px)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 'clamp(16px, 2vw, 24px)',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: '1.8',
            marginBottom: '16px'
          }}>
            Setiap game yang tersedia di <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 'bold' }}>Jun88</a> telah melalui proses seleksi ketat untuk memastikan kualitas dan keadilan. Platform ini bekerja sama dengan provider terkemuka dunia untuk menghadirkan pengalaman bermain terbaik bagi para pemainnya. Dari Mahjong Ways hingga Zeus Vs Hades, setiap game memiliki karakteristik dan keunikan tersendiri yang patut untuk dieksplorasi. Untuk mengakses semua game tersebut, Anda hanya perlu melakukan <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none' }}>daftar Jun88</a> dan nikmati berbagai promo menarik.
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: '1.8',
            marginBottom: '0'
          }}>
            Temukan panduan lengkap, strategi bermain, dan review mendalam dari setiap game slot. Kunjungi halaman review dan panduan kami untuk mendapatkan informasi terbaru seputar RTP, volatilitas, dan fitur-fitur unggulan yang bisa meningkatkan peluang kemenangan Anda. Jangan lewatkan kesempatan untuk bermain dan rasakan sensasi bermain slot online yang aman, nyaman, dan menguntungkan dengan <a href="https://jun88ss.org" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 'bold' }}>aplikasi Jun88</a> yang bisa diunduh di perangkat Android!
          </p>
        </div>

        {/* ====== CTA SECTION ====== */}
        <div style={{ 
          maxWidth: '800px', 
          margin: 'clamp(20px, 3vw, 30px) auto', 
          padding: 'clamp(12px, 2vw, 20px)', 
          textAlign: 'center' 
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 'clamp(16px, 2vw, 24px)',
            padding: 'clamp(24px, 4vw, 40px)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(20px, 4vw, 28px)', 
              fontWeight: 'bold' 
            }}>Siap Temukan Game <span style={{ color: '#fbbf24' }}>Favoritmu</span>?</h2>
            <p style={{ 
              color: '#9ca3af', 
              marginTop: '8px',
              fontSize: 'clamp(14px, 1.5vw, 16px)'
            }}>
              Jelajahi review, panduan, dan artikel kami!
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: 'clamp(10px, 2vw, 16px)', 
              justifyContent: 'center', 
              marginTop: '20px', 
              flexWrap: 'wrap' 
            }}>
              <a 
                href={externalLinks.main}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                  padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 32px)',
                  borderRadius: '50px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 40px rgba(124,58,237,0.2)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(124,58,237,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(124,58,237,0.2)';
                }}
              >
                Main Sekarang
              </a>
              <a 
                href="/review" 
                style={{
                  padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 32px)',
                  borderRadius: '50px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                Lihat Review
              </a>
              <a 
                href={externalLinks.daftar}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 'clamp(10px, 1.5vw, 12px) clamp(20px, 4vw, 32px)',
                  borderRadius: '50px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                Daftar
              </a>
            </div>
            
            <p style={{ 
              color: '#6b7280', 
              fontSize: 'clamp(11px, 1.2vw, 12px)', 
              marginTop: '20px' 
            }}>18+ | Bermain dengan bijak</p>
          </div>
        </div>

      </div>
    </div>
  );
}