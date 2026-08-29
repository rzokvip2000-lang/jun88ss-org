'use client';

import { useState } from 'react';
// ⚠️ PASTIKAN TIDAK ADA import Image from 'next/image'
// ⚠️ HANYA import { useState } dari 'react'

interface GameImageProps {
  src: string;
  alt: string;
  emoji: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  sizes?: string;
}

export default function GameImage({ 
  src, 
  alt, 
  emoji, 
  className, 
  style,
  priority = false,
  sizes = "(max-width: 768px) 50vw, 33vw"
}: GameImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className={className} 
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...style
      }}
    >
      {!imgError && (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setImgError(true)}
        />
      )}
      
      <div
        style={{
          position: 'absolute',
          fontSize: 'clamp(40px, 7vw, 64px)',
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
          borderRadius: 'inherit',
          pointerEvents: 'none'
        }}
      >
        {emoji}
      </div>
    </div>
  );
}