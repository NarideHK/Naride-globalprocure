import React from "react";
import { Globe, Package, Wrench, Truck, FileSearch, Factory } from "lucide-react";

const services = [
  {
    title: "停產零部件採購",
    description: "協助客戶採購停產或難以取得的零部件，支援小批量需求。",
    icon: Package,
  },
  {
    title: "語言與支付服務",
    description: "提供需求翻譯、技術規格翻譯，並支援跨國支付解決方案。",
    icon: Globe,
  },
  {
    title: "物流與交貨",
    description: "自有物流網絡，支援跨國運輸、庫存管理，改善交貨納期。",
    icon: Truck,
  },
  {
    title: "售後與不良分析",
    description: "專業品質管理團隊，提供售後服務、不良分析與改進方案。",
    icon: Wrench,
  },
  {
    title: "環境資料與替代方案",
    description: "提供RoHS、REACH等環境合規資料，並推薦可替代產品。",
    icon: FileSearch,
  },
  {
    title: "工廠選定與品質評估",
    description: "協助選擇合適工廠，並提供ISO等級與品質評估報告。",
    icon: Factory,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 標題 */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            我們的服務
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Naride-globalprocure 提供全方位採購支援服務，從詢盤到售後，幫助客戶提升效率、降低風險。
          </p>
        </div>

        {/* 服務卡片 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-brand rounded-xl mb-6">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
