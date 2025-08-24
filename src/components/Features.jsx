import React from "react";
import { Globe, CreditCard, Package, Wrench, FileText, Leaf, RefreshCw, Factory } from "lucide-react";

export default function Features() {
  const items = [
    { icon: Globe, text: "需求翻譯：支援海外供應商溝通" },
    { icon: CreditCard, text: "支付服務：多國貨幣付款" },
    { icon: Package, text: "物流：自有網絡，運輸與庫存管理" },
    { icon: Wrench, text: "售後服務：產品支援 & 不良分析" },
    { icon: FileText, text: "環境資料：RoHS、REACH 等合規文件" },
    { icon: Leaf, text: "替代產品推薦：材料替代方案" },
    { icon: RefreshCw, text: "VA/VE/Cost Down 支援" },
    { icon: Factory, text: "工廠選定與品質評估" },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">
          我們的功能與優勢
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <item.icon className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
