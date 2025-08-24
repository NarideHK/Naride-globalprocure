import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-700">Naride-globalprocure</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-blue-600">特色</a>
          <a href="#services" className="hover:text-blue-600">服務</a>
          <a href="#network" className="hover:text-blue-600">全球據點</a>
          <a href="#quality" className="hover:text-blue-600">品質</a>
          <a href="#contact" className="hover:text-blue-600">聯絡</a>
        </nav>
      </div>
    </motion.header>
  );
}
