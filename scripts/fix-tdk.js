const fs = require('fs');
const ts = require('typescript');

let content = fs.readFileSync('src/data/aiTools.ts', 'utf-8');

function fixLength(text, min, max, targetLen, isTitle = false) {
  let len = Array.from(text).length;
  if (len >= min && len <= max) return text;
  
  if (isTitle) {
      // pad title with some keywords
      if (len < min) {
          return text + "使用教程".repeat(Math.ceil((min - len) / 4)).substring(0, min - len);
      }
      return text.substring(0, max);
  }
  
  // description
  if (len < min) {
     const pad = "，你可以通过本指南快速了解它的各项功能，立即提升你的工作与学习效率。";
     let newText = text + pad;
     newText = newText.substring(0, max);
     if(newText.endsWith('。')) return newText;
     return newText.substring(0, max - 1) + '。';
  } else if (len > max) {
      let newText = text.substring(0, max - 3) + '...';
      return newText;
  }
  return text;
}

// We will parse with regex because we need to write it back exactly
const titleRegex = /seoTitle:\s*'(.*?)'/g;
const descRegex = /seoDescription:\s*'(.*?)'/g;

content = content.replace(titleRegex, (match, p1) => {
    let t = p1;
    let len = Array.from(t).length;
    if (len < 20 || len > 30) {
        if (len < 20) {
           t = t + "体验与使用指南";
           if (Array.from(t).length < 20) t = t + "全面解析";
        } 
        if (Array.from(t).length > 30) {
            t = Array.from(t).slice(0, 30).join('');
        }
    }
    return `seoTitle: '${t}'`;
});

content = content.replace(descRegex, (match, p1) => {
    let d = p1;
    let len = Array.from(d).length;
    if (len < 70) {
        let padding = "。这份详细指南将带你从零基础入门，全面掌握这款智能效率神器的所有核心功能与实用技巧。";
        d = d.replace(/。$/, '') + padding;
        if (Array.from(d).length > 80) {
            d = Array.from(d).slice(0, 79).join('') + '。';
        }
    } else if (len > 80) {
        d = Array.from(d).slice(0, 79).join('') + '。';
    }
    return `seoDescription: '${d}'`;
});

fs.writeFileSync('src/data/aiTools.ts', content);
