"use client";

import React, { useState } from "react";
import { Search, Globe, Menu, User } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#ebebeb] px-6 lg:px-20 transition-shadow">
      <div className="max-w-[1280px] mx-auto h-20 flex items-center justify-between">
        {/* Left: Airbnb Brand Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-1.5 text-[#FF385C] hover:opacity-90 transition-opacity">
            {/* Authentic Airbnb Belo Icon SVG */}
            <svg
              className="w-8 h-8 fill-current text-[#FF385C]"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.396l.011.315c0 4.132-3.13 7.806-7.5 7.806-3.23 0-5.46-1.554-7-3.79-1.54 2.236-3.77 3.79-7 3.79-4.37 0-7.5-3.674-7.5-7.806 0-1.168.32-2.368 1.05-3.896l.182-.365c1.01-2.344 5.17-11.054 7.124-14.884l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.373 0-2.482.684-3.528 2.547l-.448.862C10.088 10.274 5.952 18.94 4.96 21.246l-.155.334C4.195 23.013 4 23.978 4 24.894 4 27.878 6.273 30 9.5 30c2.81 0 4.88-1.554 6.05-3.856l.45-.882.45.882C17.62 28.446 19.69 30 22.5 30c3.227 0 5.5-2.122 5.5-5.106 0-.853-.178-1.782-.74-3.161l-.174-.383C26.096 18.985 21.96 10.32 20.024 6.46l-.496-.951C18.482 3.684 17.373 3 16 3zm0 13c2.761 0 5 2.239 5 5 0 2.21-1.436 4.084-3.447 4.757L17 25.938V22a1 1 0 0 0-2 0v3.938l-.553-.181C12.436 25.084 11 23.21 11 21c0-2.761 2.239-5 5-5zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
            <span className="font-bold text-xl tracking-tight hidden sm:inline text-[#FF385C]">airbnb</span>
          </a>
        </div>

        {/* Center: Search pill */}
        <div className="hidden md:flex items-center border border-[#dddddd] rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-sm font-semibold divide-x divide-[#dddddd]">
          <button className="px-3 text-[#222222] hover:text-black">Anywhere</button>
          <button className="px-3 text-[#222222] hover:text-black">Any week</button>
          <div className="pl-3 flex items-center gap-3">
            <span className="text-[#717171] font-normal">Add guests</span>
            <div className="w-8 h-8 rounded-full bg-[#FF385C] flex items-center justify-center text-white">
              <Search className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Right: User Menu */}
        <div className="flex items-center gap-2">
          <button className="hidden md:block text-sm font-semibold px-3 py-2 rounded-full hover:bg-[#f7f7f7] transition-colors text-[#222222]">
            Airbnb your home
          </button>
          <button className="p-2.5 rounded-full hover:bg-[#f7f7f7] transition-colors text-[#222222]">
            <Globe className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 border border-[#dddddd] rounded-full py-1.5 px-3.5 hover:shadow-md transition-shadow cursor-pointer bg-white">
            <Menu className="w-4 h-4 text-[#222222]" />
            <div className="w-7 h-7 rounded-full bg-[#717171] text-white flex items-center justify-center overflow-hidden">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
