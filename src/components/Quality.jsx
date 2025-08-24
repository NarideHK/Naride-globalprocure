import React from "react";
import { ShieldCheck, FileBadge } from "lucide-react";

export default function Quality() {
  return (
    <section id="quality" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">品質與環境資料</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center">
            <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-lg font-medium">
              提供 ISO 認證等級、品質評估報告，保障產品可靠性。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow flex flex-col items-center">
            <FileBadge className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-lg font-medium">
              提供 RoHS、REACH 等環境合規文件，支援材料替代與風險管理。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
