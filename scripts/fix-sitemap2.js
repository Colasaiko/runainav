const fs = require('fs');
let c = fs.readFileSync('src/app/sitemap.ts', 'utf8');

if (!c.includes("`${baseUrl}/guides`")) {
  c = c.replace(
    /    \{\n      url: \`\$\{baseUrl\}\/ai\`,/g,
    `    {\n      url: \`\${baseUrl}/guides\`,\n      lastModified: lastModDate,\n      changeFrequency: 'daily' as const,\n      priority: 0.9,\n    },\n    {\n      url: \`\${baseUrl}/ai\`,`
  );
  fs.writeFileSync('src/app/sitemap.ts', c);
  console.log('Added /guides to sitemap');
} else {
  console.log('Already exists');
}
