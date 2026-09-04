'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TutorialImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function TutorialImage({ src, alt, caption }: TutorialImageProps) {
  const [error, setError] = useState(false);

  // If the image fails to load (e.g., user hasn't provided it yet), don't render a broken icon
  if (error || !src) return null;

  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50/50 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          onError={() => setError(true)}
          unoptimized // use unoptimized for user-provided static images to avoid build errors if missing
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-500 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
