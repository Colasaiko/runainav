import { MetadataRoute } from 'next';
import { aiTools } from '@/data/aiTools';
import { guideArticles } from '@/data/guideArticles';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://runainav.com';
  
  const lastModDate = new Date('2026-09-04');
  
  // Use a Map to deduplicate paths. The key is the normalized URL pathname.
  const sitemapEntries = new Map<string, MetadataRoute.Sitemap[0]>();

  // Helper to add/update entries
  const addEntry = (entry: MetadataRoute.Sitemap[0]) => {
    // Normalize URL path to prevent dupes like /guides/chatgpt vs /guides/chatgpt/
    const urlObj = new URL(entry.url);
    let path = urlObj.pathname;
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    const finalUrl = `${baseUrl}${path}`;
    
    sitemapEntries.set(finalUrl, {
      ...entry,
      url: finalUrl
    });
  };

  // 1. Static Pages
  addEntry({
    url: `${baseUrl}/`,
    lastModified: lastModDate,
    changeFrequency: 'daily' as const,
    priority: 1,
  });
  addEntry({
    url: `${baseUrl}/vpn`,
    lastModified: lastModDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: `${baseUrl}/guides`,
    lastModified: lastModDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: `${baseUrl}/ai`,
    lastModified: lastModDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: `${baseUrl}/vpn/weifeng`,
    lastModified: new Date('2026-09-03'),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  });

  // 2. Guide Articles (from data)
  guideArticles.forEach((article) => {
    addEntry({
      url: `${baseUrl}/guides/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    });
  });

  // 3. AI Tool Detail Pages (from data)
  aiTools.forEach((tool) => {
    addEntry({
      url: `${baseUrl}/guides/${tool.slug}`,
      lastModified: new Date(tool.lastUpdated),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
  });

  return Array.from(sitemapEntries.values());
}
