import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-4"
      >
        全球停產零件與困難採購的數位解決方案
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="max-w-3xl mx-auto mb-6"
      >
        Naride-globalprocure 以數位化工具，協助日本企業處理停產零部件、日本國內調達困難物料、少批量調達困難物料，並提供全流程效率提升。
      </motion.p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow"
      >
        聯絡我們
      </motion.a>
    </section>
  );
}
