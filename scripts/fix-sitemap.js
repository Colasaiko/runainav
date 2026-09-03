const fs = require('fs');

let c = fs.readFileSync('src/app/sitemap.ts', 'utf8');

c = c.replace(/url: \`\$\{baseUrl\}\/ai\/\$\{tool\.slug\}\`,/g, 'url: `${baseUrl}/guides/${tool.slug}`,');

// Add /guides to staticPages
const guidesPage = `
    {
      url: \`\${baseUrl}/guides\`,
      lastModified: lastModDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },`;

c = c.replace(/    \{\n      url: \`\$\{baseUrl\}\/ai\`/g, guidesPage + '\n    {\n      url: `${baseUrl}/ai`');

fs.writeFileSync('src/app/sitemap.ts', c);
console.log('Fixed Sitemap');
