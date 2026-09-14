const fs = require('fs');
let c = fs.readFileSync('src/app/ai/AIList.tsx', 'utf8');
const lines = c.split('\n');
// Keep only one 'use client';
let useClientCount = 0;
let importBlockOver = false;
let outLines = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("'use client';")) {
    useClientCount++;
    if (useClientCount > 1) continue;
  }
  outLines.push(lines[i]);
}
// Now we have multiple import { useState ... } perhaps.
c = outLines.join('\n');
c = c.replace(/import \{ useState, useEffect \} from 'react';[\s\S]*?import \{ Search, ChevronRight, Zap, Target, Lightbulb, Star, LayoutGrid, ExternalLink \} from 'lucide-react';\s*\n\s*import \{ useState, useEffect \} from 'react';/, "import { useState, useEffect } from 'react';\nimport Link from 'next/link';\nimport { aiTools } from '@/data/aiTools';\nimport { Search, ChevronRight, Zap, Target, Lightbulb, Star, LayoutGrid, ExternalLink } from 'lucide-react';\n\nimport { useState, useEffect } from 'react';");
c = c.replace(/import \{ useState, useEffect \} from 'react';\s*\n\s*import Link from 'next\/link';\s*\n\s*import \{ aiTools \} from '@\/data\/aiTools';\s*\n\s*import \{ Search, ChevronRight, Zap, Target, Lightbulb, Star, LayoutGrid, ExternalLink \} from 'lucide-react';\s*\n\s*import \{ useState, useEffect \} from 'react';\s*\n\s*import Link from 'next\/link';\s*\n\s*import \{ aiTools \} from '@\/data\/aiTools';\s*\n\s*import \{ Search, ChevronRight, Zap, Target, Lightbulb, Star, LayoutGrid, ExternalLink \} from 'lucide-react';/, "import { useState, useEffect } from 'react';\nimport Link from 'next/link';\nimport { aiTools } from '@/data/aiTools';\nimport { Search, ChevronRight, Zap, Target, Lightbulb, Star, LayoutGrid, ExternalLink } from 'lucide-react';");

c = c.replace("如果还不知道该选什么，可以先从 ChatGPT、Claude 或 Gemini 开始。", "如果还不知道该选什么，可以先从 DeepSeek、豆包、ChatGPT 或 Claude 开始。");
fs.writeFileSync('src/app/ai/AIList.tsx', c);
