import { motion } from "framer-motion";
import { Globe, Package, Truck, ShieldCheck, Leaf, Factory } from "lucide-react";

export default function Features() {
  const features = [
    { icon: <Globe className="w-8 h-8 text-blue-600" />, text: "語言翻譯與跨國溝通支援" },
    { icon: <Package className="w-8 h-8 text-blue-600" />, text: "支付與金融服務" },
    { icon: <Truck className="w-8 h-8 text-blue-600" />, text: "自有物流網絡，涵蓋運輸與庫存管理" },
    { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, text: "售後服務與不良分析" },
    { icon: <Leaf className="w-8 h-8 text-blue-600" />, text: "環境資料與合規支援" },
    { icon: <Factory className="w-8 h-8 text-blue-600" />, text: "替代產品推薦與工廠選定" },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">公司機能</h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow rounded-xl p-6 hover:shadow-lg flex flex-col items-center text-center"
            >
              {f.icon}
              <p className="mt-4">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
