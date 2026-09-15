const https = require('https');

async function fetchImages(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        const matches = body.match(/https:\/\/[^"']+\.(?:png|webp|jpg)/ig) || [];
        const unique = [...new Set(matches)];
        resolve(unique);
      });
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://openai.com/chatgpt',
    'https://www.anthropic.com/claude',
    'https://gemini.google.com/faq',
    'https://cursor.com',
    'https://www.midjourney.com',
    'https://www.perplexity.ai'
  ];
  for (const url of urls) {
    console.log(`\n--- ${url} ---`);
    try {
      const images = await fetchImages(url);
      console.log(images.slice(0, 5));
    } catch (e) {
      console.log(e.message);
    }
  }
}
run();
