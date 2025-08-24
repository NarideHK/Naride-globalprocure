import React from "react";

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">
          常見問題
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">Q: 是否支援少批量採購？</h4>
            <p>A: 是的，我們專注於協助少批量及困難物料的調達。</p>
          </div>
          <div>
            <h4 className="font-semibold">Q: 是否能處理環境合規資料？</h4>
            <p>A: 我們提供 RoHS、REACH 等各類環境資料。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
