import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-700 mb-6">聯絡我們</h3>
        <p className="mb-6 text-gray-700">
          想了解更多關於 Naride-globalprocure 的服務？請透過以下方式與我們聯繫。
        </p>
        <a
          href="mailto:info@naride-globalprocure.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          立即聯絡
        </a>
      </div>
    </section>
  );
}
