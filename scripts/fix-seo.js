const fs = require('fs');
let c = fs.readFileSync('src/data/aiCategorySeo.ts', 'utf8');

// I will just locate the 'china:' block and the 'global:' block manually using exact string indexes or robust parsing, or I'll just rewrite the whole file, which is safer.
// Let's rewrite the whole file to be safe!
