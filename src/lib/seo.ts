import type { Metadata } from 'next';

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

const DEFAULT_TITLE = "RunAI AI快航 - AI工具、AI指南与全球网络使用指南";
const DEFAULT_DESC = "RunAI 分享 ChatGPT、Claude、Gemini、AI 编程、AI 绘图等工具与教程，并提供 VPN 与网络使用指南，帮助用户更轻松地探索和使用全球 AI 与互联网服务。";
const BASE_URL = "https://runainav.com";
const DEFAULT_IMAGE = "/images/og/default.webp"; 

export function constructMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical,
  image = DEFAULT_IMAGE,
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}: ConstructMetadataProps = {}): Metadata {
  
  // Normalize canonical path:
  // Root remains '/', everything else should NOT have a trailing slash
  let canonicalPath = canonical;
  if (canonicalPath && canonicalPath !== '/') {
    if (canonicalPath.endsWith('/')) {
      canonicalPath = canonicalPath.slice(0, -1);
    }
  }

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath || '/',
      siteName: "RunAI",
      locale: "zh_CN",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
      },
    },
  };

  return metadata;
}
