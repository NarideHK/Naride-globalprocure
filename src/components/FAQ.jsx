import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const qas = [
    { q: "能否協助少批量物料採購？", a: "是的，我們專門支援少批量及停產零部件的採購。" },
    { q: "是否能提供環境合規性資料？", a: "可以，我們支援 RoHS、REACH 等多種環境規範。" },
    { q: "付款方式有哪些？", a: "支援國際支付與多幣別結算，降低跨境交易風險。" }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">常見問題</h3>
        <div className="space-y-4">
          {qas.map((qa, i) => (
            <div key={i} className="bg-white rounded-xl shadow">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center w-full px-6 py-4 text-left"
              >
                <span className="font-semibold">{qa.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  {qa.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
