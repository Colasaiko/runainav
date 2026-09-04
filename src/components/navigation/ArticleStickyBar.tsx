'use client';
import { useEffect, useState, useRef } from 'react';

type Section = {
  id: string;
  navLabel: string;
};

export default function ArticleStickyBar({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const topObserverRef = useRef<IntersectionObserver | null>(null);
  const h2ObserverRef = useRef<IntersectionObserver | null>(null);
  const endObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!sections.length) return;
    
    // 1. Observe H2 elements to highlight current active section
    h2ObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px', // Trigger when hitting the top portion
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) h2ObserverRef.current?.observe(el);
    });

    // 2. Observe the sticky trigger to show/hide the bar
    const topTrigger = document.getElementById('article-sticky-trigger');
    if (topTrigger) {
      topObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          // If the trigger has scrolled up past the header (y < 64 roughly)
          if (entry.boundingClientRect.y < 64) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
      );
      topObserverRef.current.observe(topTrigger);
    }

    // 3. Observe the end of article to hide the bar when footer shows
    const endTrigger = document.getElementById('article-end-trigger');
    if (endTrigger) {
      endObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else if (topTrigger && topTrigger.getBoundingClientRect().y < 64) {
            setIsVisible(true);
          }
        },
        { rootMargin: '0px 0px 0px 0px', threshold: 0 }
      );
      endObserverRef.current.observe(endTrigger);
    }

    return () => {
      h2ObserverRef.current?.disconnect();
      topObserverRef.current?.disconnect();
      endObserverRef.current?.disconnect();
    };
  }, [sections]);

  return (
    <div
      className={`fixed top-[64px] md:top-[72px] left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 max-w-4xl py-3">
        <nav className="flex items-center gap-2 overflow-x-auto scrollbar-hide snap-x">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors snap-start border ${
                activeId === s.id
                  ? 'bg-brand-50 text-brand-600 border-brand-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {s.navLabel}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
