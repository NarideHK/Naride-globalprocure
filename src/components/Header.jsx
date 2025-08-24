import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Naride-globalprocure</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#features" className="hover:text-blue-600">特色</a>
          <a href="#services" className="hover:text-blue-600">服務</a>
          <a href="#network" className="hover:text-blue-600">全球網絡</a>
          <a href="#quality" className="hover:text-blue-600">品質</a>
          <a href="#contact" className="hover:text-blue-600">聯絡我們</a>
        </nav>
      </div>
    </header>
  );
}
