'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface AIToolLogoProps {
  tool: {
    slug?: string;
    name: string;
    logo?: string;
  };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function AIToolLogo({ tool, size = 'md', className = '' }: AIToolLogoProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [prevSlug, setPrevSlug] = useState(tool.slug);

  if (tool.slug !== prevSlug) {
    setPrevSlug(tool.slug);
    setImageFailed(false);
  }

  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const imageSizeMap = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64
  };

  const containerClass = `${sizeMap[size]} rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm border border-gray-100 flex-shrink-0 ${className}`;

  if (tool.logo && !imageFailed) {
    return (
      <div className={containerClass}>
        <Image
          src={tool.logo}
          alt={`${tool.name} Logo`}
          width={imageSizeMap[size]}
          height={imageSizeMap[size]}
          className="object-contain w-full h-full p-1 rounded-lg"
          unoptimized={tool.logo.endsWith('.svg')}
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {tool.name.charAt(0)}
    </div>
  );
}
