'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // External Links
  const externalLinks = {
    main: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
    daftar: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
    login: 'https://h5.jun882345.com/?chn=c2VvX2hvcGU%3D&id=NTUwNzU2ODQ0&fsource=E0UxNiSsir&referurl=www.oh845125fidhg.cc',
  };

  const menus = [
    { href: '/', label: '🏠 Beranda' },
    { href: '/review', label: '📝 Review' },
    { href: '/panduan', label: '📖 Panduan' },
    { href: '/artikel', label: '📰 Artikel' },
    { href: '/tentang', label: 'ℹ️ Tentang' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      background: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '0 clamp(12px, 2vw, 20px)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'clamp(56px, 8vh, 64px)'
      }}>
        
        {/* ====== LOGO ====== */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none'
        }}>
          <Image
            src="/images/jun88-ss-logo.webp"
            alt="Jun88 Logo"
            width={140}
            height={46}
            priority
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(124,58,237,0.3))',
              height: 'clamp(36px, 5vh, 46px)',
              width: 'auto'
            }}
          />
        </Link>

        {/* ====== MENU DESKTOP + CTA ====== */}
        <div style={{
          display: 'flex',
          gap: 'clamp(16px, 2vw, 24px)',
          alignItems: 'center'
        }}>
          {/* Menu Desktop */}
          <nav style={{
            display: 'flex',
            gap: 'clamp(16px, 2vw, 24px)',
            alignItems: 'center'
          }}>
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 1.2vw, 14px)',
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  padding: '6px 0',
                  borderBottom: '2px solid transparent',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderBottomColor = '#7c3aed';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9ca3af';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                {menu.label}
              </Link>
            ))}
          </nav>

          {/* ====== CTA BUTTONS (2 Tombol) ====== */}
          <div style={{
            display: 'flex',
            gap: 'clamp(8px, 1vw, 12px)',
            alignItems: 'center'
          }}>
            {/* CTA COBA SEKARANG / DAFTAR */}
            <a
              href={externalLinks.daftar}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: 'white',
                padding: 'clamp(8px, 1vw, 10px) clamp(16px, 2vw, 24px)',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                boxShadow: '0 10px 30px rgba(124,58,237,0.2)',
                whiteSpace: 'nowrap'
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
              🚀 Coba Sekarang
            </a>

            {/* CTA MASUK / LOGIN */}
            <a
              href={externalLinks.login}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                padding: 'clamp(8px, 1vw, 10px) clamp(16px, 2vw, 24px)',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
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
              🔑 Masuk
            </a>
          </div>
        </div>

        {/* ====== TOMBOL HAMBURGER (MOBILE) ====== */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: 'clamp(24px, 3vw, 28px)',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            transition: 'all 0.3s'
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ====== MENU MOBILE ====== */}
      {isMenuOpen && (
        <div style={{
          display: 'none',
          padding: '16px 0 20px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          flexDirection: 'column',
          gap: '4px'
        }}
        className="mobile-menu"
        >
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '16px',
                padding: '12px 16px',
                borderRadius: '12px',
                transition: 'all 0.3s',
                display: 'block'
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              {menu.label}
            </Link>
          ))}
          
          {/* ====== CTA BUTTONS DI MOBILE (2 Tombol) ====== */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '12px',
            padding: '0 4px'
          }}>
            <a
              href={externalLinks.daftar}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: 'white',
                padding: '14px 20px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(124,58,237,0.2)',
                transition: 'all 0.3s'
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              🚀 Coba Sekarang
            </a>
            <a
              href={externalLinks.login}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '14px 20px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 'bold',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.05)',
                transition: 'all 0.3s'
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              🔑 Masuk
            </a>
          </div>
        </div>
      )}

      {/* ====== RESPONSIVE STYLE ====== */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger-btn {
            display: block !important;
          }
          nav {
            display: none !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}