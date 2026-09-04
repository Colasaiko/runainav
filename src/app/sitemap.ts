import { MetadataRoute } from 'next';
import { aiTools } from '@/data/aiTools';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://runainav.com';
  
  const lastModDate = new Date('2026-09-02');
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: lastModDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/vpn/`,
      lastModified: lastModDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: lastModDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
        {
      url: `${baseUrl}/guides/cursor-build-blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/vpn-slow-speed`,
      lastModified: new Date('2026-09-04'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
{
      url: `${baseUrl}/guides/ai-network`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai`,
      lastModified: lastModDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vpn/weifeng`,
      lastModified: new Date('2026-09-03'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ];

  const aiPages = aiTools.map((tool) => ({
    url: `${baseUrl}/guides/${tool.slug}`,
    lastModified: new Date(tool.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...aiPages];
}
