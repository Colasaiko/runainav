"use client";

import { useState, useMemo } from "react";
import { vpnBrands, VPNBrand } from "@/data/vpnBrands";
import { Search, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VPNList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("全部");
  const [sortBy, setSortBy] = useState("default");

  // Collect unique tags
  const allTags = ["全部", ...Array.from(new Set(vpnBrands.flatMap(b => b.tags)))];

  const filteredBrands = useMemo(() => {
    return vpnBrands
      .filter(brand => {
        const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              brand.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = activeTag === "全部" || brand.tags.includes(activeTag);
        return matchesSearch && matchesTag;
      })
      .sort((a, b) => {
        if (sortBy === "price_asc") {
          return (a.price || 9999) - (b.price || 9999);
        }
        if (sortBy === "price_desc") {
          return (b.price || 0) - (a.price || 0);
        }
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        // Default: use order field
        return (a.order || 99) - (b.order || 99);
      });
  }, [searchTerm, activeTag, sortBy]);

  const featuredBrands = useMemo(() => {
    return vpnBrands.filter(b => b.featured).sort((a, b) => (a.order || 99) - (b.order || 99));
  }, []);

  return (
    <div className="py-12">
      {/* Search & Filter */}
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索 VPN 品牌、功能或使用场景..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-shadow shadow-sm"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag 
                    ? "bg-gray-900 text-white" 
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="shrink-0 hidden md:block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none text-sm text-gray-700 cursor-pointer shadow-sm"
            >
              <option value="default">默认推荐</option>
              <option value="price_asc">价格最低</option>
              <option value="price_desc">价格最高</option>
              <option value="name">品牌名称</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      {searchTerm === "" && activeTag === "全部" && featuredBrands.length > 0 && (
        <div className="container mx-auto px-4 max-w-7xl mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-1.5 h-6 bg-brand-600 rounded-full mr-3"></span>
            精选 VPN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredBrands.map(brand => <BrandCard key={brand.id} brand={brand} isFeatured />)}
          </div>
        </div>
      )}

      {/* All Brands */}
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <span className="w-1.5 h-6 bg-gray-900 rounded-full mr-3"></span>
          全部 VPN 品牌
          <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
            {filteredBrands.length}
          </span>
        </h2>
        
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map(brand => <BrandCard key={brand.id} brand={brand} />)}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-500">未找到匹配的 VPN 品牌，请尝试其他关键词或标签。</p>
          </div>
        )}
      </div>
    </div>
  );
}

function BrandCard({ brand, isFeatured = false }: { brand: VPNBrand, isFeatured?: boolean }) {
  return (
    <div className={`flex flex-col bg-white rounded-2xl p-6 border ${isFeatured ? 'border-brand-200 shadow-sm hover:border-brand-400' : 'border-gray-100 hover:border-gray-200'} hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 relative group`}>
      {isFeatured && (
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
          Featured
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-lg font-bold text-gray-700 shrink-0 overflow-hidden">
            {/* Fallback to text if no image. Since we don't have images locally, just use text */}
            {brand.name.substring(0, 1)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{brand.name}</h3>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {brand.tags.map(tag => (
                <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-gray-50 text-gray-500 rounded-md border border-gray-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
        {brand.description}
      </p>
      
      <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-gray-50">
        {brand.price !== undefined && (
          <div>
            {brand.id === 'weifeng' ? (
              <>
                <div className="text-xs text-gray-400 mb-0.5">年付折算</div>
                <div className="text-sm font-semibold text-gray-900">{brand.currency}{brand.price} / 月</div>
                <div className="text-[10px] text-gray-400 mt-0.5">月付方案 ¥27 起</div>
              </>
            ) : (
              <>
                <div className="text-xs text-gray-400 mb-0.5">起步价格</div>
                <div className="text-sm font-semibold text-gray-900">{brand.currency}{brand.price} / 月</div>
              </>
            )}
          </div>
        )}
        {brand.traffic && (
          <div>
            <div className="text-xs text-gray-400 mb-0.5">基础流量</div>
            <div className="text-sm font-semibold text-gray-900">{brand.traffic}</div>
          </div>
        )}
      </div>
      
      <div className="flex gap-3 mt-auto">
        <Link 
          href={brand.slug === 'weifeng' ? `/vpn/${brand.slug}` : "/coming-soon"}
          className="flex-1 py-2.5 text-sm font-medium text-center text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
        >
          查看详情
        </Link>
        <a 
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-colors flex items-center justify-center group-hover:bg-brand-600"
        >
          前往官网 <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
        </a>
      </div>
    </div>
  );
}
