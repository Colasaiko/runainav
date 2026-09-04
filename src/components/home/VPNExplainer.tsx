import { ShieldAlert, Map, Lock } from "lucide-react";

export default function VPNExplainer() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么会需要 VPN？</h2>
            <p className="text-gray-600 leading-relaxed">
              部分海外互联网服务可能由于服务地区限制、网络环境、IP 地区或服务可用区域，导致用户无法正常访问或体验不稳定。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-600">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">服务地区与网络环境</h3>
              <p className="text-sm text-gray-500">某些 AI 服务仅在特定国家或地区提供，VPN 可帮助建立符合要求的网络连接。</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-600">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">加密网络连接</h3>
              <p className="text-sm text-gray-500">在公共 Wi-Fi 或不可信网络环境下，保护你的数据隐私和账号安全。</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-brand-600">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">改善连接稳定性</h3>
              <p className="text-sm text-gray-500">优化国际路由节点，减少访问海外开发文档和学习资源时的延迟和丢包。</p>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              请遵守所在地法律法规以及第三方服务的使用条款，合理使用网络工具。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
