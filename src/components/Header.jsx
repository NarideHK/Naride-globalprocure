import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-brand">Naride-globalprocure</h1>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-brand">服務</a>
          <a href="#network" className="hover:text-brand">全球網絡</a>
          <a href="#quality" className="hover:text-brand">品質保障</a>
          <a href="#contact" className="hover:text-brand">聯絡我們</a>
        </nav>

        {/* 行動按鈕 */}
        <a
          href="#contact"
          className="btn btn-primary hidden md:inline-block"
        >
          免費諮詢
        </a>
      </div>
    </header>
  );
};

export default Header;
