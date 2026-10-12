"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface DescriptionSectionProps {
  onOpenModal: () => void;
}

export default function DescriptionSection({ onOpenModal }: DescriptionSectionProps) {
  return (
    <section className="py-8 border-b border-[#dddddd]">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-4">
        About this space
      </h3>
      <div className="text-base text-[#222222] leading-relaxed space-y-4">
        <p className="font-medium text-neutral-800">
          Welcome to The Aurea – A Luxury Boutique Stay🌿
        </p>
        <p className="line-clamp-4 text-neutral-700">
          The Aurea is a thoughtfully curated luxury boutique studio on the 12th floor, offering
          panoramic city views, timeless interiors, and modern comfort. Designed in soothing beige,
          taupe, and warm wood tones, it creates a calm, boutique-hotel ambiance with soft lighting,
          elegant furnishings, and carefully curated décor, ensuring a premium stay that feels both
          luxurious and welcoming.
        </p>
      </div>

      <button
        onClick={onOpenModal}
        className="mt-4 flex items-center gap-1 font-semibold text-base text-[#222222] underline hover:text-black transition-colors"
      >
        <span>Show more</span>
        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
      </button>
    </section>
  );
}
