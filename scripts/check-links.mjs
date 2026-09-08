import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'out');

if (!fs.existsSync(OUT_DIR)) {
  console.error('[ERROR] out/ not found. Run npm run build first.');
  process.exit(1);
}

const REDIRECTS_FILE = path.join(OUT_DIR, '_redirects');
const redirects = new Map();
if (fs.existsSync(REDIRECTS_FILE)) {
  const content = fs.readFileSync(REDIRECTS_FILE, 'utf8');
  content.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const parts = line.split(/\s+/);
      if (parts.length >= 2) {
        redirects.set(parts[0], parts[1]);
      }
    }
  });
}

const htmlFiles = [];
function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}
walk(OUT_DIR);

let scannedHtmlPages = htmlFiles.length;
let checkedInternalLinks = 0;
let checkedLocalAssets = 0;
let checkedJsonLdUrls = 0;
let brokenInternalLinks = 0;
let brokenLocalAssets = 0;
let redirectWarnings = 0;

const brokenLinksSet = new Set();
const brokenAssetsSet = new Set();
const redirectWarnSet = new Set();

function normalizeUrl(url) {
  let u = url;
  if (u.startsWith('https://runainav.com')) {
    u = u.replace('https://runainav.com', '');
    if (u === '') u = '/';
  }
  
  if (u.includes('#')) u = u.split('#')[0];
  if (u.includes('?')) u = u.split('?')[0];
  return u;
}

function checkAsset(assetPath, sourceFile, type) {
  if (!assetPath || assetPath.startsWith('http://') || assetPath.startsWith('https://') || assetPath.startsWith('data:') || assetPath.startsWith('mailto:') || assetPath.startsWith('tel:') || assetPath.startsWith('javascript:')) {
    return;
  }
  
  let normalized = normalizeUrl(assetPath);
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  
  if (type === 'link') checkedInternalLinks++;
  else if (type === 'asset') checkedLocalAssets++;
  else if (type === 'jsonld' || type === 'sitemap') checkedJsonLdUrls++;
  
  if (redirects.has(normalized)) {
    redirectWarnings++;
    redirectWarnSet.add(`Source: ${sourceFile.replace(OUT_DIR, '')}\nTarget: ${normalized}\nCanonical: ${redirects.get(normalized)}`);
    return; 
  }
  
  const targetPath = path.join(OUT_DIR, normalized);
  let exists = false;
  
  if (type === 'link' || type === 'sitemap') {
    if (normalized === '/') {
      exists = fs.existsSync(path.join(OUT_DIR, 'index.html'));
    } else {
      exists = fs.existsSync(targetPath + '.html') || 
               fs.existsSync(path.join(targetPath, 'index.html')) || 
               fs.existsSync(targetPath);
    }
    
    if (!exists) {
      brokenInternalLinks++;
      brokenLinksSet.add(`Source: ${sourceFile.replace(OUT_DIR, '')}\nTarget: ${normalized}`);
    }
  } else {
    exists = fs.existsSync(targetPath);
    if (!exists) {
      brokenLocalAssets++;
      brokenAssetsSet.add(`Source: ${sourceFile.replace(OUT_DIR, '')}\nTarget: ${normalized}`);
    }
  }
}

const hrefRegex = /href=["']([^"']+)["']/g;
const srcRegex = /src=["']([^"']+)["']/g;
const posterRegex = /poster=["']([^"']+)["']/g;
const contentRegex = /content=["']([^"']+)["']/g;
const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.endsWith('.css') || url.endsWith('.js') || url.endsWith('.json') || url.endsWith('.ico') || url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.webp') || url.endsWith('.svg')) {
      checkAsset(url, file, 'asset');
    } else {
      checkAsset(url, file, 'link');
    }
  }
  
  while ((match = srcRegex.exec(content)) !== null) {
    checkAsset(match[1], file, 'asset');
  }
  
  while ((match = posterRegex.exec(content)) !== null) {
    checkAsset(match[1], file, 'asset');
  }
  
  while ((match = contentRegex.exec(content)) !== null) {
    const c = match[1];
    if (c.includes('/images/') && (c.endsWith('.png') || c.endsWith('.jpg') || c.endsWith('.webp') || c.endsWith('.jpeg'))) {
      checkAsset(c, file, 'asset');
    }
  }
  
  while ((match = jsonLdRegex.exec(content)) !== null) {
    const jsonStr = match[1];
    const urlMatches = jsonStr.match(/https:\/\/runainav\.com\/[^"'\s]+/g);
    if (urlMatches) {
      for (const u of urlMatches) {
        checkAsset(u, file, 'jsonld');
      }
    }
  }
}

// Check Sitemap
const sitemapFile = path.join(OUT_DIR, 'sitemap.xml');
if (fs.existsSync(sitemapFile)) {
  const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    const u = match[1];
    if (u.startsWith('https://runainav.com')) {
      checkAsset(u, sitemapFile, 'sitemap');
    }
  }
}

console.log(`Scanned ${scannedHtmlPages} HTML pages`);
console.log(`Checked ${checkedInternalLinks} internal links`);
console.log(`Checked ${checkedLocalAssets} local assets`);
console.log(`Checked ${checkedJsonLdUrls} same-origin JSON-LD URLs\n`);

if (redirectWarnings > 0) {
  console.log(`[WARN] Internal link points to redirect (${redirectWarnings} warnings)`);
  let idx = 0;
  for (const warn of redirectWarnSet) {
    if (idx < 5) console.log(warn + '\n');
    idx++;
  }
  if (redirectWarnSet.size > 5) console.log(`... and ${redirectWarnSet.size - 5} more redirect warnings.`);
  console.log('');
}

if (brokenInternalLinks > 0 || brokenLocalAssets > 0) {
  console.log(`Broken internal links: ${brokenInternalLinks}`);
  let idx = 0;
  for (const bl of brokenLinksSet) {
    console.log(`[ERROR] Broken internal link\n${bl}\n`);
    idx++;
  }
  
  console.log(`Broken local assets: ${brokenLocalAssets}`);
  idx = 0;
  for (const ba of brokenAssetsSet) {
    console.log(`[ERROR] Broken asset\n${ba}\n`);
    idx++;
  }
  
  console.error('❌ Internal link check failed.');
  process.exit(1);
} else {
  console.log('Broken internal links: 0');
  console.log('Broken local assets: 0');
  console.log(`Redirect warnings: ${redirectWarnings}\n`);
  console.log('✅ Internal link check passed.');
}
