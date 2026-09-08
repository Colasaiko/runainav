const fs = require('fs');
let content = fs.readFileSync('src/app/sitemap.ts', 'utf8');

content = content.replace(
  /addEntry\({\s*url: `\${baseUrl}\/vpn`,\s*lastModified: lastModDate,\s*changeFrequency: 'daily' as const,\s*priority: 0.9,\s*}\);/,
  `addEntry({
    url: \`\${baseUrl}/vpn\`,
    lastModified: lastModDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });
  addEntry({
    url: \`\${baseUrl}/subscriptions\`,
    lastModified: lastModDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  });`
);

fs.writeFileSync('src/app/sitemap.ts', content);
console.log('Updated sitemap.ts');
