"use client";

import React from "react";
import { Search, Maximize2, Home } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export default function LocationSection() {
  const { location, neighborhood } = LISTING_DATA;

  return (
    <section className="py-12 border-b border-[#dddddd]">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-1">
        Where you&apos;ll be
      </h3>
      <p className="text-base text-[#222222] mb-6">
        {location}
      </p>

      {/* Styled Interactive Map Container */}
      <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#dddddd] shadow-xs bg-[#e5e3df]">
        {/* Real stylized Map Graphics SVG / Render */}
        <div className="absolute inset-0 bg-[#e8ecdc] opacity-90 overflow-hidden">
          {/* Decorative roads, blocks, water & green parks SVG */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#d5dec2" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#f4f3f0" />
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Park / Greenery patches */}
            <path d="M 0 50 Q 200 120 400 60 T 900 100 L 900 0 L 0 0 Z" fill="#dbeef0" opacity="0.6" />
            <path d="M 100 250 Q 300 180 550 300 T 1200 200 L 1200 600 L 0 600 Z" fill="#e2edda" opacity="0.7" />

            {/* Arterial Highway / Roads */}
            <path d="M -50 200 L 1200 450" stroke="#ffffff" strokeWidth="14" />
            <path d="M -50 200 L 1200 450" stroke="#fcd34d" strokeWidth="3" strokeDasharray="6 6" />

            <path d="M 250 -50 L 450 600" stroke="#ffffff" strokeWidth="12" />
            <path d="M 750 -50 L 600 600" stroke="#ffffff" strokeWidth="10" />
            <path d="M 50 400 Q 350 320 850 480" stroke="#ffffff" strokeWidth="8" />

            {/* City Sectors labels */}
            <text x="180" y="240" fill="#9ca3af" fontSize="12" fontWeight="600" fontFamily="sans-serif">SECTOR 66</text>
            <text x="380" y="360" fill="#9ca3af" fontSize="12" fontWeight="600" fontFamily="sans-serif">SECTOR 67</text>
            <text x="600" y="260" fill="#9ca3af" fontSize="12" fontWeight="600" fontFamily="sans-serif">M3M URBANA</text>
            <text x="240" y="460" fill="#9ca3af" fontSize="12" fontWeight="600" fontFamily="sans-serif">BADSHAHPUR</text>
          </svg>
        </div>

        {/* Center Airbnb Radar Circle & House Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* Subtle radar circle */}
          <div className="w-36 h-36 rounded-full bg-[#FF385C]/15 border-2 border-[#FF385C]/40 animate-pulse flex items-center justify-center">
            {/* House Pin Icon */}
            <div className="w-12 h-12 rounded-full bg-[#222222] text-white flex items-center justify-center shadow-2xl ring-4 ring-white">
              <Home className="w-6 h-6 fill-white text-white" />
            </div>
          </div>
        </div>

        {/* Top Search Pill: "Explore dining" */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-[#dddddd] shadow-md rounded-full py-2.5 px-5 flex items-center gap-2 text-sm font-semibold text-[#222222] cursor-pointer hover:shadow-lg transition-shadow">
          <Search className="w-4 h-4 text-[#717171]" />
          <span>Explore dining</span>
        </div>

        {/* Fullscreen Button at Top Right */}
        <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white border border-[#dddddd] shadow-md flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <Maximize2 className="w-4 h-4 text-[#222222]" />
        </button>

        {/* Mapbox / Google attribution bottom right */}
        <div className="absolute bottom-2 right-2 bg-white/80 text-[10px] text-neutral-600 px-2 py-0.5 rounded shadow-xs font-mono">
          Map data ©2026 Google
        </div>
      </div>

      {/* Neighborhood Narrative */}
      <div className="mt-6 max-w-[700px] space-y-2">
        <h4 className="font-semibold text-base text-[#222222]">
          {neighborhood}
        </h4>
        <p className="text-base text-[#717171] leading-relaxed">
          A high-rise skyline rises beside the Aravalli foothills, where rooftop bars, premium
          cafes (Nautical Mile, Barista, Bakers Oven), and fast-growing business districts drive the
          urban rhythm. Situated with convenient direct access to golf course extension road.
        </p>
      </div>
    </section>
  );
}
