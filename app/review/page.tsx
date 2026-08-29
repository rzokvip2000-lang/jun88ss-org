'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import GameImage from '@/components/GameImage';

export default function ReviewPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Nilai responsive berdasarkan mobile/desktop
  const paddingTop = isMobile ? '70px' : '80px';
  const paddingX = isMobile ? '12px' : '20px';
  const paddingBottom = isMobile ? '16px' : '30px';
  const headingSize = isMobile ? '24px' : '40px';
  const subHeadingSize = isMobile ? '13px' : '16px';
  const introPadding = isMobile ? '16px' : '36px';
  const introFontSize = isMobile ? '13px' : '17px';
  const cardPadding = isMobile ? '8px' : '16px';
  const cardRadius = isMobile ? '14px' : '20px';
  const titleSize = isMobile ? '12px' : '16px';
  const ratingSize = isMobile ? '10px' : '13px';
  const rtpSize = isMobile ? '10px' : '13px';
  const gridCols = isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const buttonPadding = isMobile ? '8px 14px' : '12px 24px';
  const buttonFontSize = isMobile ? '11px' : '15px';
  const marginBottom = isMobile ? '16px' : '40px';

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
          paddingBottom: paddingBottom,
          width: '100%'
        }}
      >
        {/* ====== HEADER ====== */}
        <div
          className="text-center"
          style={{
            marginBottom: isMobile ? '20px' : '40px',
            padding: '0 8px'
          }}
        >
          <h1
            style={{
              fontSize: headingSize,
              fontWeight: 'bold',
              margin: '0',
              lineHeight: '1.2'
            }}
          >
            Review <span style={{ color: '#a78bfa' }}>Permainan Jun88</span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: subHeadingSize,
              marginTop: '8px'
            }}
          >
            Kumpulan review lengkap untuk game-game slot terbaik di{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Jun88
            </a>
          </p>
        </div>

        {/* ====== ARTIKEL INTRO ====== */}
        <div
          className="glass-effect"
          style={{
            maxWidth: '900px',
            margin: `0 auto ${marginBottom}`,
            padding: introPadding,
            borderRadius: isMobile ? '16px' : '20px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            width: '100%'
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '18px' : '26px',
              fontWeight: 'bold',
              marginBottom: '12px',
              color: '#ffffff',
              lineHeight: '1.3'
            }}
          >
            Review Game Slot Terlengkap di{' '}
            <span style={{ color: '#a78bfa' }}>Jun88</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: introFontSize,
              lineHeight: '1.8',
              marginBottom: '12px',
              textAlign: isMobile ? 'left' : 'center'
            }}
          >
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
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
              fontSize: introFontSize,
              lineHeight: '1.8',
              marginBottom: '12px',
              textAlign: isMobile ? 'left' : 'center'
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
            sesuai dengan gaya bermain dan modal yang Anda miliki.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: introFontSize,
              lineHeight: '1.8',
              marginBottom: '0',
              textAlign: isMobile ? 'left' : 'center'
            }}
          >
            Temukan{' '}
            <a
              href="https://jun88ss.org"
              style={{ color: '#a78bfa', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
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
            menarik lainnya!
          </p>
        </div>

        {/* ====== SECTION REVIEW GAME ====== */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: `${isMobile ? '16px' : '30px'} 0`,
            width: '100%'
          }}
        >
          {/* ====== SECTION HEADER ====== */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: isMobile ? '16px' : '30px',
              padding: '0 8px'
            }}
          >
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
              📝 Review Game
            </span>
            <h2
              style={{
                fontSize: isMobile ? '24px' : '36px',
                fontWeight: 'bold',
                marginTop: '10px',
                color: '#ffffff',
                lineHeight: '1.2'
              }}
            >
              Review <span style={{ color: '#a78bfa' }}>Terlengkap</span>
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: isMobile ? '13px' : '17px',
                marginTop: '10px',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.7',
                padding: '0 10px'
              }}
            >
              Berikut adalah kumpulan review mendalam untuk 6 game slot terpopuler
              dari PG Soft yang tersedia di{' '}
              <a
                href="https://jun88ss.org"
                style={{ color: '#a78bfa', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jun88
              </a>
              .
            </p>
          </div>

          {/* ====== GRID REVIEW ====== */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: gridCols,
              gap: isMobile ? '10px' : '20px',
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
              >
                <div
                  className="glass-effect"
                  style={{
                    borderRadius: cardRadius,
                    padding: cardPadding,
                    transition: 'all 0.4s ease',
                    textAlign: 'center',
                    height: '100%',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    overflow: 'hidden'
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
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                    }
                  }}
                >
                  {/* ====== GAME IMAGE ====== */}
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
                      fontSize: titleSize,
                      margin: isMobile ? '4px 0 2px' : '8px 0 4px',
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
                      fontSize: ratingSize,
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
                        fontSize: rtpSize
                      }}
                    >
                      RTP {game.rtp}
                    </span>
                    <span
                      style={{
                        color: '#a78bfa',
                        fontSize: rtpSize,
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

          {/* ====== LIHAT SEMUA REVIEW ====== */}
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
                padding: buttonPadding,
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: buttonFontSize,
                transition: 'all 0.3s',
                width: isMobile ? '100%' : 'auto'
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
              Lihat Semua Review →
            </Link>
          </div>
        </div>

        {/* ====== JUMLAH REVIEW ====== */}
        <div
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '16px' : '36px',
            color: 'rgba(255,255,255,0.3)',
            fontSize: isMobile ? '11px' : '14px',
            padding: '0 10px'
          }}
        >
          Menampilkan {games.length} review game
        </div>

        {/* ====== BACK TO HOME ====== */}
        <div
          style={{
            textAlign: 'center',
            marginTop: isMobile ? '16px' : '30px',
            padding: '0 10px 20px 10px'
          }}
        >
          <Link
            href="/"
            style={{
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              fontSize: isMobile ? '11px' : '14px',
              transition: 'all 0.3s',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
            }}
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}