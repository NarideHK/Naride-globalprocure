import React from "react";
import { MapPin } from "lucide-react";

export default function GlobalNetwork() {
  const regions = [
    "中國（20個城市）", "日本", "台灣", "韓國", "德國", "法國", "瑞士", "印度"
  ];

  return (
    <section id="network" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">全球網絡</h3>
        <p className="text-lg text-gray-700 mb-8">
          Naride-globalprocure 擁有廣泛的國際據點，為日本客戶提供穩定、可信賴的採購協助。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {regions.map((region, i) => (
            <div
              key={i}
              className="flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200"
            >
              <MapPin className="w-4 h-4 text-blue-600 mr-2" />
              <span>{region}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
