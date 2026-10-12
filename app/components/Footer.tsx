"use client";

import React from "react";
import { Globe, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-[#dddddd] pt-12 pb-8 mt-16 text-sm text-[#222222]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#717171] mb-8 flex-wrap">
          <a href="#" className="hover:underline">Airbnb</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:underline">India</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:underline">Haryana</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#222222] font-medium">Gurugram</span>
        </div>

        {/* 3 or 4 Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-[#dddddd]">
          <div className="space-y-3">
            <h5 className="font-semibold text-sm text-[#222222]">Support</h5>
            <ul className="space-y-2.5 text-[#222222]">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-sm text-[#222222]">Hosting</h5>
            <ul className="space-y-2.5 text-[#222222]">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-sm text-[#222222]">Airbnb</h5>
            <ul className="space-y-2.5 text-[#222222]">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Localization Bar */}
        <div className="pt-8 border-t border-[#dddddd] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#717171]">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold text-[#222222]">
            <button className="flex items-center gap-2 hover:underline">
              <Globe className="w-4 h-4" />
              <span>English (IN)</span>
            </button>
            <button className="hover:underline">
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
