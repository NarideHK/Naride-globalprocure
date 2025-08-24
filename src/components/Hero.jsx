import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-32 pb-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          協助日本企業高效採購全球零部件
        </h2>
        <p className="text-lg md:text-xl mb-8">
          停產零件・小批量物料・跨國供應難題，一站式數位工具解決。
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          立即聯絡我們
        </a>
      </div>
    </section>
  );
}
