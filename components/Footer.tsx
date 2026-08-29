'use client';

import Link from 'next/link';

export default function Footer() {
  const menus = [
    { href: '/', label: 'Beranda' },
    { href: '/review', label: 'Review' },
    { href: '/panduan', label: 'Panduan' },
    { href: '/artikel', label: 'Artikel' },
    { href: '/tentang', label: 'Tentang' },
  ];

  const legal = [
    { href: '/privasi', label: 'Kebijakan Privasi' },
    { href: '/disclaimer', label: 'Disclaimer 18+' },
    { href: '/bijak', label: 'Bermain dengan Bijak' },
    { href: '/syarat-ketentuan', label: 'Syarat & Ketentuan' },
  ];

  return (
    <footer style={{
      background: 'rgba(10, 10, 10, 0.9)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      color: 'white',
      padding: 'clamp(24px, 4vw, 40px) clamp(12px, 3vw, 20px)',
      marginTop: 'clamp(24px, 4vw, 40px)',
      position: 'relative',
      zIndex: 10,
      width: '100%',
      maxWidth: '100vw'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(16px, 3vw, 30px)',
        width: '100%'
      }}>
        
        <nav style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'clamp(12px, 2vw, 24px)'
        }}>
          {menus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'clamp(8px, 2vw, 20px)',
          padding: 'clamp(10px, 1.5vw, 16px) 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          width: '100%'
        }}>
          {legal.map((item, index) => (
            <span key={item.href} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 20px)' }}>
              <Link
                href={item.href}
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: 'clamp(10px, 1.2vw, 13px)',
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a78bfa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6b7280';
                }}
              >
                {item.label}
              </Link>
              {index < legal.length - 1 && (
                <span style={{ color: '#374151' }}>|</span>
              )}
            </span>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          width: '100%'
        }}>
          <p style={{ 
            color: '#6b7280', 
            fontSize: 'clamp(10px, 1.2vw, 12px)',
            lineHeight: '1.8',
            marginBottom: '10px'
          }}>
            <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>⚠️ Peringatan 18+</span>
            <br />
            <span style={{ color: '#6b7280' }}>
              Website ini hanya untuk pengguna berusia <span style={{ color: 'white' }}>18 tahun ke atas</span>. 
              Pastikan perjudian online legal di wilayah Anda.
            </span>
            <br />
            <span style={{ color: '#fbbf24' }}>Bermainlah dengan bijak dan tanggung jawab.</span>
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(8px, 2vw, 20px)',
            flexWrap: 'wrap'
          }}>
            <span style={{ color: '#4b5563', fontSize: 'clamp(9px, 1vw, 12px)' }}>
              © 2026 <a href="https://jun88ss.org" style={{ color: '#4b5563', textDecoration: 'none' }}>Jun88</a>. All rights reserved.
            </span>
            <span style={{ color: '#4b5563', fontSize: 'clamp(9px, 1vw, 12px)' }}>
              Made with ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}