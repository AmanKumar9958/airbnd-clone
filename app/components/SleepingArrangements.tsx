"use client";

import React from "react";
import { BedDouble, BedSingle, Sofa } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export default function SleepingArrangements() {
  const { sleepingArrangements } = LISTING_DATA;

  return (
    <section className="py-8 border-b border-[#dddddd]">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-6">
        Where you&apos;ll sleep
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[620px]">
        {/* Bedroom Card */}
        <div className="border border-[#dddddd] rounded-2xl p-5 hover:border-black/50 transition-colors">
          <div className="h-32 w-full rounded-xl overflow-hidden mb-4 bg-neutral-100">
            <img
              src={sleepingArrangements[0].image}
              alt="Bedroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <BedDouble className="w-5 h-5 text-[#222222]" />
          </div>
          <h4 className="font-semibold text-base text-[#222222]">
            {sleepingArrangements[0].title}
          </h4>
          <p className="text-sm text-[#717171] mt-0.5">
            {sleepingArrangements[0].description}
          </p>
        </div>

        {/* Living Room Card */}
        <div className="border border-[#dddddd] rounded-2xl p-5 hover:border-black/50 transition-colors">
          <div className="h-32 w-full rounded-xl overflow-hidden mb-4 bg-neutral-100">
            <img
              src={sleepingArrangements[1].image}
              alt="Living room"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <BedSingle className="w-5 h-5 text-[#222222]" />
            <Sofa className="w-5 h-5 text-[#222222]" />
          </div>
          <h4 className="font-semibold text-base text-[#222222]">
            {sleepingArrangements[1].title}
          </h4>
          <p className="text-sm text-[#717171] mt-0.5">
            {sleepingArrangements[1].description}
          </p>
        </div>
      </div>
    </section>
  );
}
