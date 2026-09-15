import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const destDir = path.join(__dirname, '../public/images/ai');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return resolve(null);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ data, url: res.url || url }));
    });
    req.on('error', (e) => resolve(null));
    req.setTimeout(5000, () => { req.destroy(); resolve(null); });
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    });
    req.on('error', (e) => { fs.unlink(dest, ()=>{}); resolve(false); });
    req.setTimeout(5000, () => { req.destroy(); fs.unlink(dest, ()=>{}); resolve(false); });
  });
}

async function run() {
  const content = fs.readFileSync(path.join(__dirname, '../src/data/aiTools.ts'), 'utf8');
  const tools = [];
  const regex = /slug:\s*'([^']+)'[\s\S]*?officialUrl:\s*'([^']+)'/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    tools.push({ slug: match[1], url: match[2] });
  }

  console.log(`Found ${tools.length} tools. Fetching favicons...`);

  let modifiedContent = content;

  for (const tool of tools) {
    console.log(`Fetching ${tool.slug} from ${tool.url}...`);
    try {
      const res = await fetchUrl(tool.url);
      let faviconUrl = null;
      let ext = '.png';
      
      if (res && res.data) {
        // Try to find apple-touch-icon or icon
        const iconMatch = res.data.match(/<link[^>]*rel=["'](?:shortcut icon|icon|apple-touch-icon)["'][^>]*href=["']([^"']+)["']/i);
        if (iconMatch && iconMatch[1]) {
          faviconUrl = new URL(iconMatch[1].replace(/&amp;/g, '&'), res.url).href;
        } else {
          // Fallback to /favicon.ico
          faviconUrl = new URL('/favicon.ico', res.url).href;
          ext = '.ico';
        }
      } else {
        faviconUrl = new URL('/favicon.ico', tool.url).href;
        ext = '.ico';
      }

      if (faviconUrl) {
        if (faviconUrl.includes('.svg')) ext = '.svg';
        else if (faviconUrl.includes('.png')) ext = '.png';
        else if (faviconUrl.includes('.ico')) ext = '.ico';

        const destPath = path.join(destDir, `${tool.slug}${ext}`);
        const success = await downloadFile(faviconUrl, destPath);
        
        if (success) {
          console.log(`[OK] Saved ${tool.slug} logo from ${faviconUrl}`);
          const logoPath = `/images/ai/${tool.slug}${ext}`;
          // Update aiTools.ts for this slug
          const toolBlockRegex = new RegExp(`(slug:\\s*'${tool.slug}'[\\s\\S]*?officialUrl:\\s*'[^']+')`);
          modifiedContent = modifiedContent.replace(toolBlockRegex, `$1,\n    logo: '${logoPath}',\n    logoSource: '${tool.url}'`);
        } else {
          console.log(`[FAIL] Could not download for ${tool.slug}`);
        }
      }
    } catch (err) {
      console.log(`[ERROR] ${tool.slug}: ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(__dirname, '../src/data/aiTools.ts'), modifiedContent);
  console.log('Done.');
}

run();
