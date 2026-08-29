'use client';

import Link from 'next/link';
// ⚠️ PASTIKAN TIDAK ADA import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const headerPadding = (mounted && isMobile) ? '0 12px' : '0 20px';
  const headerHeight = (mounted && isMobile) ? '56px' : '64px';
  const logoHeight = (mounted && isMobile) ? '32px' : '46px';
  const gapSize = (mounted && isMobile) ? '12px' : '24px';
  const fontSize = (mounted && isMobile) ? '12px' : '14px';
  const ctaPadding = (mounted && isMobile) ? '6px 12px' : '10px 24px';
  const ctaFontSize = (mounted && isMobile) ? '11px' : '14px';

  return (
    <header
      suppressHydrationWarning
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: headerPadding,
        width: '100%',
        maxWidth: '100vw'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: headerHeight,
          width: '100%'
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <img
            src="/images/jun88-ss-logo.webp"
            alt="Jun88 Logo"
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(124,58,237,0.3))',
              height: logoHeight,
              width: 'auto',
              maxHeight: '46px'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>

        <div
          style={{
            display: 'flex',
            gap: gapSize,
            alignItems: 'center'
          }}
        >
          <nav
            style={{
              display: (mounted && isMobile) ? 'none' : 'flex',
              gap: gapSize,
              alignItems: 'center'
            }}
          >
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: fontSize,
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  padding: '6px 0',
                  borderBottom: '2px solid transparent',
                  whiteSpace: 'nowrap'
                }}
              >
                {menu.label}
              </Link>
            ))}
          </nav>

          <div
            style={{
              display: 'flex',
              gap: (mounted && isMobile) ? '6px' : '12px',
              alignItems: 'center'
            }}
          >
            <a
              href={externalLinks.daftar}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: 'white',
                padding: ctaPadding,
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: ctaFontSize,
                fontWeight: 'bold',
                transition: 'all 0.3s',
                boxShadow: '0 10px 30px rgba(124,58,237,0.2)',
                whiteSpace: 'nowrap'
              }}
            >
              🚀 Coba Sekarang
            </a>

            <a
              href={externalLinks.login}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                padding: ctaPadding,
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: ctaFontSize,
                fontWeight: 'bold',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                whiteSpace: 'nowrap'
              }}
            >
              🔑 Masuk
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: (mounted && isMobile) ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            transition: 'all 0.3s'
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && mounted && isMobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '16px 0 20px',
            borderTop: '1px solid rgba(255,255,255,0.05)'
          }}
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
            >
              {menu.label}
            </Link>
          ))}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '12px',
              padding: '0 4px'
            }}
          >
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
            >
              🔑 Masuk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}