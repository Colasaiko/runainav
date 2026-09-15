const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const tools = [
  { slug: 'deepseek', url: 'https://www.deepseek.com', selector: null },
  { slug: 'doubao', url: 'https://www.doubao.com', selector: null },
  { slug: 'kimi', url: 'https://kimi.moonshot.cn', selector: null },
  { slug: 'kling', url: 'https://klingai.kuaishou.com', selector: null },
  { slug: 'jimeng', url: 'https://jimeng.jianying.com/ai-tool/home', selector: null },
  { slug: 'chatgpt', url: 'https://chatgpt.com', selector: null },
  { slug: 'claude', url: 'https://www.anthropic.com/claude', selector: null },
  { slug: 'gemini', url: 'https://gemini.google.com/app', selector: null },
  { slug: 'perplexity', url: 'https://www.perplexity.ai', selector: null },
  { slug: 'cursor', url: 'https://cursor.com', selector: null },
  { slug: 'midjourney', url: 'https://www.midjourney.com', selector: null },
  { slug: 'suno', url: 'https://suno.com', selector: null }
];

async function capture() {
  const browser = await puppeteer.launch({ headless: 'new' });
  
  for (const t of tools) {
    try {
      console.log(`Capturing ${t.slug}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 15000 });
      
      const dir = path.join(__dirname, '..', 'public', 'images', 'ai', 'screenshots', t.slug);
      fs.mkdirSync(dir, { recursive: true });
      
      await page.screenshot({ path: path.join(dir, 'chat.webp'), type: 'webp', quality: 80 });
      await page.close();
      console.log(`  Success: ${t.slug}`);
    } catch (e) {
      console.log(`  Failed: ${t.slug} - ${e.message}`);
    }
  }
  
  await browser.close();
}

capture();
