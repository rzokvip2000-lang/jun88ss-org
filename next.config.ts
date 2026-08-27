import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ====== UNTUK NETLIFY - EXPORT STATIS ======
  output: 'export',  // <-- INI PENTING!
  
  // ====== KOMPRESI GAMBAR ======
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true, // Wajib untuk static export
  },
  
  // ====== OPTIMASI ======
  compress: true,
  reactStrictMode: true,
  
  // ====== TRAILING SLASH (Bantu Netlify) ======
  trailingSlash: true,
  
  // ====== HEADERS UNTUK CACHE ======
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/bg/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;