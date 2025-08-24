import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-brand to-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* 左側文字 */}
        <div className="flex-1 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            全球停產零部件採購 <br />  
            Naride-globalprocure 助你一站解決
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            協助企業解決日本國內採購困難、少批量零件調達問題，  
            提供語言翻譯、支付、物流、售後與品質管理等全方位服務。
          </p>

          <div className="flex gap-4">
            <a href="#services" className="btn btn-secondary">
              了解服務
            </a>
            <a href="#contact" className="btn btn-primary">
              聯絡我們
            </a>
          </div>
        </div>

        {/* 右側圖片（暫時用一張代表性圖，可換成你的） */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://via.placeholder.com/400x300.png?text=Global+Procurement"
            alt="Global Procurement"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
