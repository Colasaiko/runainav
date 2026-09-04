import React from 'react';

type SchemaProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Record<string, any>[];
};

/**
 * A reusable component to inject JSON-LD schema into the page head.
 * 
 * Usage:
 * <JsonLd data={{
 *   "@context": "https://schema.org",
 *   "@type": "WebSite",
 *   "name": "RunAI",
 *   "url": "https://runainav.com/"
 * }} />
 */
export default function JsonLd({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// 预定义一些基础的 Schema 生成函数，方便统一复用
const BASE_URL = 'https://runainav.com';

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "RunAI",
  "url": BASE_URL,
});

export const generateOrganizationSchema = (logoUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RunAI",
  "url": BASE_URL,
  ...(logoUrl ? { "logo": logoUrl } : {}),
});

// Breadcrumb 基础结构
export type BreadcrumbItem = {
  name: string;
  item: string;
};

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item,
  })),
});
