// app/sitemap.ts
import { MetadataRoute } from 'next'

const BASE_URL = 'https://jun88id.com';

// SEMUA halaman statis (sudah termasuk semua yang Anda sebutkan)
const allPages = [
  // Root / Beranda
  '',
  
  // Artikel (index)
  '/artikel',
  
  // Artikel detail (8 artikel)
  '/artikel/cara-klaim-bonus-jun88',
  '/artikel/fitur-tersembunyi-slot-pg-soft',
  '/artikel/pg-soft-vs-pragmatic-play',
  '/artikel/review-mahjong-ways-2',
  '/artikel/strategi-menang-ways-of-the-qilin',
  '/artikel/tren-slot-online-2026',
  '/artikel/update-rtp-pgsoft-maret-2026',
  '/artikel/ways-of-qilin-vs-mahjong-ways',
  
  // Bijak
  '/bijak',
  
  // Disclaimer
  '/disclaimer',
  
  // Panduan (index)
  '/panduan',
  
  // Panduan detail (10 panduan)
  '/panduan/apa-itu-rtp',
  '/panduan/bermain-slot-bijak',
  '/panduan/fitur-free-spin',
  '/panduan/istilah-slot',
  '/panduan/kesalahan-pemula-slot',
  '/panduan/memilih-game-slot',
  '/panduan/mengelola-bankroll',
  '/panduan/perbedaan-slot-klasik-modern',
  '/panduan/strategi-modal-kecil',
  '/panduan/volatilitas-slot',
  
  // Privasi
  '/privasi',
  
  // Review (index)
  '/review',
  
  // Review detail (6 review)
  '/review/mahjong-ways',
  '/review/mahjong-ways-2',
  '/review/sugar-rush-1000',
  '/review/ways-of-the-qilin',
  '/review/wisdom-of-athena',
  '/review/zeus-vs-hades',
  
  // Syarat & Ketentuan
  '/syarat-ketentuan',
  
  // Tentang
  '/tentang',
];

// Fungsi untuk menentukan prioritas
function getPriority(path: string): number {
  // Beranda: prioritas tertinggi
  if (path === '') return 1.0;
  
  // Halaman penting (statis utama)
  if (path === '/artikel' || path === '/panduan' || path === '/review') return 0.8;
  
  // Halaman statis lainnya
  if (['/bijak', '/disclaimer', '/privasi', '/syarat-ketentuan', '/tentang'].includes(path)) {
    return 0.7;
  }
  
  // Artikel detail
  if (path.startsWith('/artikel/') && path !== '/artikel') return 0.6;
  
  // Panduan detail
  if (path.startsWith('/panduan/') && path !== '/panduan') return 0.6;
  
  // Review detail
  if (path.startsWith('/review/') && path !== '/review') return 0.6;
  
  return 0.5; // Default
}

// Fungsi untuk menentukan frekuensi perubahan
function getChangeFrequency(path: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  // Beranda & halaman index: sering berubah
  if (path === '' || path === '/artikel' || path === '/panduan' || path === '/review') {
    return 'daily';
  }
  
  // Artikel: update mingguan
  if (path.startsWith('/artikel/') && path !== '/artikel') return 'weekly';
  
  // Review: update mingguan
  if (path.startsWith('/review/') && path !== '/review') return 'weekly';
  
  // Panduan: relatif permanen
  if (path.startsWith('/panduan/') && path !== '/panduan') return 'monthly';
  
  // Halaman statis: jarang berubah
  return 'monthly';
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = allPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));

  return entries;
}