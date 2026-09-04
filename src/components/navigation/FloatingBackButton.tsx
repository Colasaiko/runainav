'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface FloatingBackButtonProps {
  fallbackHref: string;
}

export default function FloatingBackButton({ fallbackHref }: FloatingBackButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down more than 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBack = () => {
    try {
      const referrer = document.referrer;
      
      if (referrer) {
        const referrerUrl = new URL(referrer);
        
        // If referrer is from the same origin and not the exact same URL
        if (referrerUrl.origin === window.location.origin && referrerUrl.href !== window.location.href) {
          router.back();
          return;
        }
      }
      
      // Fallback
      router.push(fallbackHref);
    } catch (e) {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="返回上一页"
      style={{
        marginBottom: 'env(safe-area-inset-bottom)'
      }}
      className={`fixed left-4 sm:left-6 bottom-4 sm:bottom-6 z-40 flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-md hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4" />
      <span className="hidden sm:inline text-sm">返回上一页</span>
      <span className="inline sm:hidden text-sm">返回</span>
    </button>
  );
}
