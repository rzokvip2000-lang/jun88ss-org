'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GameImageProps {
  src: string;
  alt: string;
  emoji: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export default function GameImage({ 
  src, 
  alt, 
  emoji, 
  className, 
  style,
  priority = false 
}: GameImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className={className} 
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        ...style
      }}
    >
      {/* ====== GAMBAR ====== */}
      {!imgError && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          onError={() => setImgError(true)}
        />
      )}
      
      {/* ====== FALLBACK EMOJI ====== */}
      <div
        style={{
          position: 'absolute',
          fontSize: 'clamp(48px, 7vw, 64px)',
          zIndex: 1,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: imgError ? 'rgba(124,58,237,0.1)' : 'transparent',
          borderRadius: 'inherit'
        }}
      >
        {emoji}
      </div>
    </div>
  );
}