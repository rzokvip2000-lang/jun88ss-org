import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // HAPUS atau KOMENTARI output: 'export' untuk development
  // output: 'export', // <- COMMENT INI UNTUK DEVELOPMENT
  
  images: {
    // Untuk static export, gunakan unoptimized: true
    unoptimized: true, // <- INI PENTING UNTUK STATIC EXPORT
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    path: '/_next/image',
  },
  
  trailingSlash: false,
  compress: true,
  reactStrictMode: true,
  
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
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
    ];
  },
  
  poweredByHeader: false,
};

export default nextConfig;