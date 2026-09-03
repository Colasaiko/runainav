import { ShoppingCart, ExternalLink } from "lucide-react";

interface FloatingBuyButtonProps {
  url: string;
  brandName: string;
}

export default function FloatingBuyButton({ url, brandName }: FloatingBuyButtonProps) {
  return (
    <>
      <style>{`
        .btn-flip {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .btn-flip:hover {
          transform: rotateX(360deg);
        }
      `}</style>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] group btn-flip bg-brand-600 hover:bg-brand-500 text-white px-5 py-3 lg:px-8 lg:py-4 rounded-full shadow-2xl flex items-center justify-center hover:shadow-brand-500/30 transition-colors"
      >
        <div className="flex items-center gap-2 group-hover:hidden">
          <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
          <span className="font-bold whitespace-nowrap text-sm lg:text-base">准备好购买了吗？</span>
        </div>
        <div className="items-center gap-2 hidden group-hover:flex">
          <span className="font-bold whitespace-nowrap text-sm lg:text-base">前往{brandName}</span>
          <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6" />
        </div>
      </a>
    </>
  );
}
