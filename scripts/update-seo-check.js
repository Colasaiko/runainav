const fs = require('fs');
let c = fs.readFileSync('scripts/check-seo-lengths.js', 'utf8');

const newCheck = `
// 6. Check /guides/cursor-build-blog
const cursorBlogContent = fs.readFileSync('src/app/guides/cursor-build-blog/page.tsx', 'utf-8');
const cursorBlogTitle = cursorBlogContent.match(/title:\\s*['"]([^'"]+)['"]/)[1];
const cursorBlogDesc = cursorBlogContent.match(/description:\\s*['"]([^'"]+)['"]/)[1];
checkLength('/guides/cursor-build-blog', 'Title', cursorBlogTitle, 20, 30);
checkLength('/guides/cursor-build-blog', 'Description', cursorBlogDesc, 70, 80);
`;

if (!c.includes('cursor-build-blog')) {
  c = c.replace(/if \(hasError\) \{/, newCheck + '\nif (hasError) {');
}

fs.writeFileSync('scripts/check-seo-lengths.js', c);
