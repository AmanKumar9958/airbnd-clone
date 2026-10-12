"use client";

import React from "react";
import { LISTING_DATA } from "../data/listingData";

export default function MobileBookingBar() {
  const { price } = LISTING_DATA;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#dddddd] px-6 py-3 flex items-center justify-between z-30 shadow-2xl">
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-base font-bold text-[#222222]">
            {price.currency}{price.perNight.toLocaleString()}
          </span>
          <span className="text-xs text-[#717171]">/ night</span>
        </div>
        <div className="text-xs text-[#222222] font-semibold underline">
          8–9 Oct
        </div>
      </div>

      <button className="airbnb-btn-gradient text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md active:scale-95 transition-transform">
        Reserve
      </button>
    </div>
  );
}
