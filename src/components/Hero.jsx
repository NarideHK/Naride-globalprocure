import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Naride-globalprocure
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          專注於協助日本客戶採購 <br />
          停產零部件・國內調達困難物料・少批量調達困難物料
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100"
        >
          聯絡我們 <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
