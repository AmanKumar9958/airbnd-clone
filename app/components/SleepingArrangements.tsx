"use client";

import React from "react";
import { LISTING_DATA } from "../data/listingData";

export default function SleepingArrangements() {
  const { sleepingArrangements } = LISTING_DATA;

  return (
    <section className="py-8 border-b border-[#dddddd]">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-6">
        Where you&apos;ll sleep
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px]">
        {sleepingArrangements.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="aspect-[1.48/1] w-full rounded-2xl overflow-hidden bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-base text-[#222222] mt-3">
              {item.title}
            </h4>
            <p className="text-sm text-[#717171] mt-0.5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
