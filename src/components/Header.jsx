import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Naride-globalprocure
        </h1>

        {/* Nav */}
        <nav className="space-x-6 hidden md:block">
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            功能特色
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">
            服務內容
          </a>
          <a href="#network" className="text-gray-700 hover:text-blue-600">
            全球網絡
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            聯絡我們
          </a>
        </nav>
      </div>
    </header>
  );
}
