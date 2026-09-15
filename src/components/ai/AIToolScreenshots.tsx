'use client';

import Image from 'next/image';

interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
}

interface AITool {
  name: string;
  slug: string;
  screenshots?: Screenshot[];
}

export default function AIToolScreenshots({ tool }: { tool: AITool }) {
  if (!tool.screenshots || tool.screenshots.length === 0) {
    return null;
  }

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{tool.name} 界面预览</h2>
      <div className={`grid gap-6 ${tool.screenshots.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
        {tool.screenshots.map((shot, idx) => (
          <div key={idx} className="flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="relative w-full aspect-[16/10] bg-gray-50 border-b border-gray-100">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </div>
            {shot.caption && (
              <div className="p-4 text-center text-sm text-gray-600 bg-white">
                {shot.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
