"use client";

import React from "react";

interface DescriptionSectionProps {
  onOpenModal: () => void;
}

export default function DescriptionSection({ onOpenModal }: DescriptionSectionProps) {
  return (
    <section className="py-8 border-b border-[#dddddd]">
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
        className="mt-6 inline-flex items-center justify-center bg-[#F2F2F2] hover:bg-[#EBEBEB] text-[#222222] font-semibold text-base px-6 py-3 rounded-xl transition-colors cursor-pointer"
      >
        Show more
      </button>
    </section>
  );
}
