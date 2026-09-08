const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// If marked is not available, we can just do basic regex replacements. Let's see if we can use basic regex first.
function parseMarkdownToHTML(md) {
  let html = md;
  // bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // H3
  html = html.replace(/^### (.*?)$/gm, '<h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>');
  // H2
  html = html.replace(/^## (.*?)$/gm, '<h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-2 border-b border-gray-100">$1</h2>');
  // Lists
  html = html.replace(/^- (.*?)$/gm, '<li className="mb-2">$1</li>');
  // Tables (Very rudimentary, let's just use CSS grid or simple table)
  // For simplicity, we won't fully parse tables properly with regex, we'll just fix them up manually or use raw HTML.
  // Actually, I can just write raw HTML for tables in the JS objects instead of Markdown.
  return html;
}
