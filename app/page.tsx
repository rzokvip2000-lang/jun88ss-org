'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import GameImage from '@/components/GameImage';

interface Game {
  id: number;
  title: string;
  slug: string;
  emoji: string;
  gradient: string;
  rtp: string;
  rating: string;
  image: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const games: Game[] = [
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

  const features: Feature[] = [
    {
      icon: '🎯',
      title: 'Review Jujur',
      desc: 'Review berdasarkan pengalaman bermain langsung, bukan copy-paste'
    },
    {
      icon: '📊',
      title: 'Analisis RTP',
      desc: 'Informasi RTP dan volatilitas setiap game secara transparan'
    },
    {
      icon: '💰',
      title: 'Max Win',
      desc: 'Informasi potensi max win dan fitur bonus setiap game'
    },
    {
      icon: '🔒',
      title: 'Terpercaya',
      desc: 'Platform aman dengan lisensi resmi dan sistem keamanan terbaik'
    },
    {
      icon: '🎰',
      title: 'PG Soft',
      desc: 'Koleksi game PG Soft terlengkap dengan review mendalam'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      desc: 'Akses mudah melalui desktop maupun perangkat mobile'
    }
  ];

  const externalLinks = {
    main: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
    daftar: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
    login: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
  };

  // Nilai responsive berdasarkan mobile/desktop
  const paddingTop = isMobile ? '70px' : '80px';
  const paddingX = isMobile ? '12px' : '20px';
  const heroHeadingSize = isMobile ? '32px' : '56px';
  const heroSubSize = isMobile ? '16px' : '20px';
  const sectionHeadingSize = isMobile ? '24px' : '36px';
  const cardPadding = isMobile ? '16px' : '24px';
  const gridCols = isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const gapSize = isMobile ? '12px' : '20px';
  const cardRadius = isMobile ? '12px' : '16px';
  const titleSize = isMobile ? '14px' : '16px';
  const descSize = isMobile ? '12px' : '14px';

  return (
    <div
      className="w-full max-w-full overflow-x-hidden"
      style={{
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
        background: 'transparent'
      }}
    >
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: paddingTop,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingBottom: '40px',
          width: '100%'
        }}
      >
        {/* ====== HERO SECTION ====== */}
        <div
          className="text-center"
          style={{
            padding: isMobile ? '20px 0' : '40px 0',
            marginBottom: isMobile ? '30px' : '50px'
          }}
        >
          <h1
            style={{
              fontSize: heroHeadingSize,
              fontWeight: 'bold',
              marginBottom: '16px',
              lineHeight: '1.2'
            }}
          >
            Selamat Datang di{' '}
            <span className="text-gradient" style={{ color: '#a78bfa' }}>
              Jun88
            </span>
          </h1>
          <p
            style={{
              fontSize: heroSubSize,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '700px',
              margin: '0 auto 24px',
              lineHeight: '1.8'
            }}
          >
            Temukan review lengkap game slot terbaik dari PG Soft di Jun88.
            Dapatkan informasi RTP, volatilitas, dan fitur bonus setiap game.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: isMobile ? '12px' : '16px',
              justifyContent: 'center'
            }}
          >
            <Link
              href="/review"
              style={{
                padding: isMobile ? '12px 24px' : '14px 32px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: isMobile ? '14px' : '16px',
                transition: 'all 0.3s',
                display: 'inline-block',
                boxShadow: '0 10px 30px rgba(124,58,237,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(124,58,237,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(124,58,237,0.2)';
              }}
            >
              Lihat Review Game
            </Link>
            <Link
              href="/panduan"
              style={{
                padding: isMobile ? '12px 24px' : '14px 32px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: isMobile ? '14px' : '16px',
                transition: 'all 0.3s',
                background: 'rgba(255,255,255,0.05)',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              Panduan Slot
            </Link>
            <a
              href={externalLinks.daftar}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: isMobile ? '12px 24px' : '14px 32px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: isMobile ? '14px' : '16px',
                transition: 'all 0.3s',
                background: 'rgba(255,255,255,0.05)',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              🚀 Daftar
            </a>
          </div>

          {/* ====== STATS ====== */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '24px' : '48px',
              marginTop: '32px',
              flexWrap: 'wrap'
            }}
          >
            <div className="text-center">
              <div style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 'bold', color: '#a78bfa' }}>
                50+
              </div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: 'rgba(255,255,255,0.5)' }}>
                Review Game
              </div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 'bold', color: '#fbbf24' }}>
                4.5★
              </div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: 'rgba(255,255,255,0.5)' }}>
                Rating Rata-rata
              </div>
            </div>
            <div className="text-center">
              <div style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 'bold', color: '#34d399' }}>
                96%+
              </div>
              <div style={{ fontSize: isMobile ? '12px' : '14px', color: 'rgba(255,255,255,0.5)' }}>
                RTP Tertinggi
              </div>
            </div>
          </div>
        </div>

        {/* ====== TENTANG JUN88 ====== */}
        <div
          className="glass-effect"
          style={{
            maxWidth: '900px',
            margin: `0 auto ${isMobile ? '30px' : '40px'}`,
            padding: isMobile ? '20px' : '32px',
            borderRadius: isMobile ? '16px' : '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            width: '100%'
          }}
        >
          <h2
            style={{
              fontSize: sectionHeadingSize,
              fontWeight: 'bold',
              marginBottom: '16px',
              textAlign: 'center'
            }}
          >
            Selamat Datang di <span style={{ color: '#a78bfa' }}>Jun88!</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.9',
              textAlign: isMobile ? 'left' : 'center',
              marginBottom: '12px'
            }}
          >
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 'bold' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Jun88
            </a>{' '}
            adalah platform hiburan digital terpercaya yang menyajikan berbagai permainan slot online dari provider ternama seperti <strong style={{ color: '#ffffff' }}>PG Soft</strong>, <strong style={{ color: '#ffffff' }}>Pragmatic Play</strong>, dan <strong style={{ color: '#ffffff' }}>Microgaming</strong>. Dengan sistem keamanan berstandar internasional dan lisensi resmi, link Jun88 menjamin kenyamanan dan keamanan setiap pemain.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.9',
              textAlign: isMobile ? 'left' : 'center',
              marginBottom: '12px'
            }}
          >
            Kami hadir untuk memberikan <strong style={{ color: '#ffffff' }}>review jujur dan mendalam</strong> tentang setiap game slot yang tersedia. Dari analisis RTP, volatilitas, hingga fitur-fitur unggulan, semua kami sajikan secara transparan agar Anda bisa menikmati pengalaman bermain yang paling sesuai dengan gaya dan preferensi Anda. Untuk memulai petualangan Anda, lakukan{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              daftar Jun88
            </a>{' '}
            sekarang juga!
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.9',
              textAlign: isMobile ? 'left' : 'center',
              marginBottom: '0'
            }}
          >
            Temukan game favoritmu, pelajari strategi terbaik, dan nikmati pengalaman bermain yang lebih menguntungkan hanya dengan{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 'bold' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              login Jun88
            </a>{' '}
            dan rasakan sensasi bermain slot online yang aman dan nyaman!
          </p>
        </div>

        {/* ====== FITUR ====== */}
        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: sectionHeadingSize,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '24px'
            }}
          >
            Keunggulan <span style={{ color: '#a78bfa' }}>Kami</span>
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: gridCols,
              gap: gapSize,
              width: '100%'
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect"
                style={{
                  borderRadius: cardRadius,
                  padding: cardPadding,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.03)'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <div style={{ fontSize: isMobile ? '32px' : '40px', marginBottom: '8px' }}>
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: titleSize,
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    color: '#ffffff'
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: descSize,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.5',
                    margin: 0
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ====== GAME POPULER ====== */}
        <div style={{ marginBottom: '40px' }}>
          <div className="text-center" style={{ marginBottom: isMobile ? '16px' : '24px' }}>
            <span
              style={{
                color: '#a78bfa',
                fontSize: isMobile ? '10px' : '14px',
                fontWeight: 'bold',
                background: 'rgba(124,58,237,0.1)',
                padding: isMobile ? '4px 12px' : '8px 20px',
                borderRadius: '50px',
                border: '1px solid rgba(124,58,237,0.2)',
                backdropFilter: 'blur(10px)',
                display: 'inline-block'
              }}
            >
              🎰 Game Populer
            </span>
            <h2
              style={{
                fontSize: sectionHeadingSize,
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              Paling <span style={{ color: '#a78bfa' }}>Diminati</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: gridCols,
              gap: gapSize,
              padding: '0 4px',
              width: '100%'
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
                  width: '100%'
                }}
                scroll={false}
              >
                <div
                  className="glass-effect"
                  style={{
                    borderRadius: cardRadius,
                    padding: isMobile ? '12px' : '16px',
                    transition: 'all 0.4s ease',
                    textAlign: 'center',
                    height: '100%',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.03)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(124,58,237,0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                    }
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1/1',
                      borderRadius: isMobile ? '12px' : '16px',
                      overflow: 'hidden',
                      background: game.gradient
                    }}
                  >
                    <GameImage
                      src={game.image}
                      alt={game.title}
                      emoji={game.emoji}
                      priority={game.id <= 3}
                      sizes={isMobile ? "(max-width: 768px) 50vw, 33vw" : "(max-width: 768px) 50vw, 33vw"}
                    />
                  </div>

                  <h3
                    style={{
                      fontWeight: 'bold',
                      fontSize: isMobile ? '13px' : '16px',
                      margin: isMobile ? '6px 0 2px' : '8px 0 4px',
                      lineHeight: '1.2',
                      color: '#ffffff',
                      wordBreak: 'break-word'
                    }}
                  >
                    {game.title}
                  </h3>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: isMobile ? '10px' : '13px',
                      margin: 0
                    }}
                  >
                    PG Soft • ⭐ {game.rating}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: isMobile ? '6px' : '12px',
                      paddingTop: isMobile ? '6px' : '12px',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      flexWrap: 'wrap',
                      gap: '4px'
                    }}
                  >
                    <span
                      style={{
                        color: '#34d399',
                        fontWeight: 'bold',
                        fontSize: isMobile ? '10px' : '13px'
                      }}
                    >
                      RTP {game.rtp}
                    </span>
                    <span
                      style={{
                        color: '#a78bfa',
                        fontSize: isMobile ? '10px' : '13px',
                        fontWeight: 'bold'
                      }}
                    >
                      {isMobile ? 'Review →' : 'Baca Review →'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ====== LIHAT SEMUA GAME ====== */}
          <div
            style={{
              textAlign: 'center',
              marginTop: isMobile ? '16px' : '30px',
              padding: '0 10px'
            }}
          >
            <Link
              href="/review"
              className="glass-effect"
              style={{
                display: isMobile ? 'block' : 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: isMobile ? '10px 16px' : '12px 24px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: isMobile ? '13px' : '15px',
                transition: 'all 0.3s',
                width: isMobile ? '100%' : 'auto',
                background: 'rgba(255,255,255,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(167,139,250,0.2)';
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              Lihat Semua Game →
            </Link>
          </div>
        </div>

        {/* ====== CTA BANNER ====== */}
        <div
          className="glass-effect"
          style={{
            borderRadius: isMobile ? '16px' : '20px',
            padding: isMobile ? '24px 16px' : '40px 32px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.15))',
            border: '1px solid rgba(124,58,237,0.2)'
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '20px' : '28px',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}
          >
            Siap Memulai Petualangan Anda?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: isMobile ? '14px' : '16px',
              marginBottom: '20px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Lakukan daftar Jun88 sekarang dan nikmati semua game slot favorit dengan review lengkap dari kami!
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: isMobile ? '10px' : '16px',
              justifyContent: 'center'
            }}
          >
            <a
              href={externalLinks.daftar}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: isMobile ? '12px 24px' : '14px 32px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: isMobile ? '14px' : '16px',
                transition: 'all 0.3s',
                display: 'inline-block',
                boxShadow: '0 10px 30px rgba(124,58,237,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(124,58,237,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(124,58,237,0.2)';
              }}
            >
              🚀 Daftar Jun88
            </a>
            <a
              href={externalLinks.login}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: isMobile ? '12px 24px' : '14px 32px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: isMobile ? '14px' : '16px',
                transition: 'all 0.3s',
                background: 'rgba(255,255,255,0.05)',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              🔑 Login Jun88
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}