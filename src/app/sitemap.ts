import { MetadataRoute } from 'next';
import { aiTools } from '@/data/aiTools';
import { guideArticles } from '@/data/guideArticles';
import { aiTests } from '@/data/aiTests';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://runainav.com';
  
  const staticDates: Record<string, string> = {
    '/': '2026-09-08',
    '/vpn': '2026-09-10',
    '/subscriptions': '2026-09-08',
    '/guides': '2026-09-09',
    '/ai': '2026-09-08',
    '/vpn/weifeng': '2026-09-03',
    '/tests': '2026-09-10',
  };
  
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
    lastModified: new Date(staticDates['/']),
    changeFrequency: 'daily' as const,
    priority: 1,
  });
  addEntry({
    url: `${baseUrl}/vpn`,
    lastModified: new Date(staticDates['/vpn']),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: `${baseUrl}/subscriptions`,
    lastModified: new Date(staticDates['/subscriptions']),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: `${baseUrl}/guides`,
    lastModified: new Date(staticDates['/guides']),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: `${baseUrl}/ai`,
    lastModified: new Date(staticDates['/ai']),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: `${baseUrl}/vpn/weifeng`,
    lastModified: new Date(staticDates['/vpn/weifeng']),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  });

  addEntry({
    url: `${baseUrl}/tests`,
    lastModified: new Date(staticDates['/tests']),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });

  // Dynamic Test Detail Pages
  aiTests.forEach((test) => {
    if (test.open !== 'pending' && test.open !== 'not-tested') {
      addEntry({
        url: `${baseUrl}/tests/${test.slug}`,
        lastModified: new Date(test.publishedAt), // Use the test's published date, not the test date itself
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    }
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
