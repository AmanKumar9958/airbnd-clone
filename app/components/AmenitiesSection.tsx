"use client";

import React from "react";
import {
  Mountain,
  Building2,
  UtensilsCrossed,
  Wifi,
  Laptop,
  Car,
  Waves,
  Sparkles,
  PawPrint,
  ShieldAlert,
} from "lucide-react";

interface AmenitiesSectionProps {
  onOpenModal: () => void;
}

export default function AmenitiesSection({ onOpenModal }: AmenitiesSectionProps) {
  const previewItems = [
    { name: "Mountain view", icon: <Mountain className="w-6 h-6 text-[#222222]" /> },
    { name: "City skyline view", icon: <Building2 className="w-6 h-6 text-[#222222]" /> },
    { name: "Kitchen", icon: <UtensilsCrossed className="w-6 h-6 text-[#222222]" /> },
    { name: "Wifi", icon: <Wifi className="w-6 h-6 text-[#222222]" /> },
    { name: "Dedicated workspace", icon: <Laptop className="w-6 h-6 text-[#222222]" /> },
    { name: "Free parking on premises", icon: <Car className="w-6 h-6 text-[#222222]" /> },
    { name: "Pool", icon: <Waves className="w-6 h-6 text-[#222222]" /> },
    { name: "Shared hot tub – available all year", icon: <Sparkles className="w-6 h-6 text-[#222222]" /> },
    { name: "Pets allowed", icon: <PawPrint className="w-6 h-6 text-[#222222]" /> },
    { name: "Exterior security cameras on property", icon: <ShieldAlert className="w-6 h-6 text-[#222222]" /> },
  ];

  return (
    <section className="py-8 border-b border-[#dddddd]">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 max-w-[650px]">
        {previewItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-[#222222]">
            <div className="shrink-0">{item.icon}</div>
            <span className="text-base font-normal">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={onOpenModal}
          className="border border-[#222222] hover:bg-neutral-50 text-[#222222] font-semibold text-base py-3 px-6 rounded-lg transition-colors active:scale-98"
        >
          Show all 71 amenities
        </button>
      </div>
    </section>
  );
}
