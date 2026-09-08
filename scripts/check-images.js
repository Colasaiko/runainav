const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const allFiles = walk('src');
const imageRegex = /["'](\/images\/[^"']+\.(png|webp|jpg|jpeg))["']/g;
const missing = new Set();

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const imgPath = match[1];
    const fullPath = path.join('public', imgPath);
    if (!fs.existsSync(fullPath)) {
      missing.add(imgPath + ' (in ' + file + ')');
      // Fix default image
      if (imgPath === '/images/og/default.webp') {
        // We already fixed this! wait, if it's missing, but I just created it.
      }
    }
  }
}

console.log("Missing images referenced in src/:");
missing.forEach(m => console.log(m));
if (missing.size === 0) console.log("None!");
