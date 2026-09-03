"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  caption?: string;
}

export default function ZoomableImage({ src, alt, width, height, className = "", caption }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className="mb-6 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gray-50 flex items-center justify-center">
          <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height} 
            className={`object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 ${className}`} 
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur text-gray-800 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 shadow-sm">
              <ZoomIn className="w-4 h-4" /> 点击查看大图
            </div>
          </div>
        </div>
        {caption && (
          <figcaption className="p-3 text-center text-xs text-gray-500 border-t border-gray-100 bg-gray-50 relative z-10">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="关闭预览"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center overflow-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={src} 
              alt={alt} 
              width={1920} 
              height={1080} 
              className="w-auto h-auto max-w-full object-contain shadow-2xl" 
            />
          </div>
          
          {caption && (
            <p className="text-white/70 text-sm mt-4 text-center max-w-2xl">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
