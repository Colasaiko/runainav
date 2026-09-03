"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
            Run<span className="text-brand-600">AI</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/ai" className="hover:text-gray-900 transition-colors">AI工具</Link>
            <Link href="/guides" className="hover:text-gray-900 transition-colors">AI指南</Link>
            <Link href="/coming-soon" className="hover:text-gray-900 transition-colors">使用教程</Link>
            <Link href="/coming-soon" className="hover:text-gray-900 transition-colors">海外资源</Link>
            <Link href="/coming-soon" className="hover:text-gray-900 transition-colors">VPN指南</Link>
            <Link href="/vpn" className="hover:text-gray-900 transition-colors">VPN</Link>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors md:block hidden" aria-label="搜索">
            <Search className="w-5 h-5" />
          </button>
          
          <Link 
            href="/vpn" 
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
          >
            查看 VPN
          </Link>

          <button 
            className="p-2 text-gray-900 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          <Link href="/ai" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">AI工具</Link>
          <Link href="/guides" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">AI指南</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">使用教程</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">海外资源</Link>
          <Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">VPN指南</Link>
          <Link href="/vpn" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2 text-brand-600">VPN 方案</Link>
        </div>
      )}
    </header>
  );
}
