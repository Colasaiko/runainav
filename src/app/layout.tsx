import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "RunAI AI快航 - AI工具、AI指南与全球网络使用指南",
  description: "RunAI 分享 ChatGPT、Claude、Gemini、AI 编程、AI 绘图等工具与教程，并提供 VPN 与网络使用指南，帮助用户更轻松地探索和使用全球 AI 与互联网服务。",
  canonical: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
