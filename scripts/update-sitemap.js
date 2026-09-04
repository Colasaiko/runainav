const fs = require('fs');
let c = fs.readFileSync('src/app/sitemap.ts', 'utf8');

if (!c.includes('cursor-build-blog')) {
  const insertIndex = c.indexOf('url: `${baseUrl}/guides/ai-network`');
  if (insertIndex !== -1) {
    const toInsert = `    {
      url: \`\${baseUrl}/guides/cursor-build-blog\`,
      lastModified: new Date('2026-09-04'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },\n`;
    
    // Find the opening brace of ai-network
    const startOfAiNetwork = c.lastIndexOf('{', insertIndex);
    c = c.substring(0, startOfAiNetwork) + toInsert + c.substring(startOfAiNetwork);
  }
}

fs.writeFileSync('src/app/sitemap.ts', c);
