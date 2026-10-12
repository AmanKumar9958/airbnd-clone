"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

interface ThingsToKnowProps {
  onOpenRulesModal: () => void;
}

export default function ThingsToKnow({ onOpenRulesModal }: ThingsToKnowProps) {
  const { cancellationPolicy } = LISTING_DATA;

  return (
    <section className="py-12 border-b border-[#dddddd]">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-6">
        Things to know
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: House Rules */}
        <div className="space-y-3">
          <h4 className="font-semibold text-base text-[#222222]">House rules</h4>
          <ul className="text-sm text-[#222222] space-y-2">
            <li>Check-in after 2:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>4 guests maximum</li>
            <li>Self check-in with lockbox</li>
          </ul>
          <button
            onClick={onOpenRulesModal}
            className="flex items-center gap-1 font-semibold text-sm text-[#222222] underline hover:text-black pt-2"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Column 2: Safety & Property */}
        <div className="space-y-3">
          <h4 className="font-semibold text-base text-[#222222]">Safety & property</h4>
          <ul className="text-sm text-[#222222] space-y-2">
            <li>Exterior security cameras on property</li>
            <li>Carbon monoxide alarm installed</li>
            <li>Smoke alarm installed</li>
            <li>Noise decibel monitors on property</li>
          </ul>
          <button
            onClick={onOpenRulesModal}
            className="flex items-center gap-1 font-semibold text-sm text-[#222222] underline hover:text-black pt-2"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Column 3: Cancellation policy */}
        <div className="space-y-3">
          <h4 className="font-semibold text-base text-[#222222]">Cancellation policy</h4>
          <p className="text-sm text-[#222222] leading-relaxed">
            {cancellationPolicy.title}. {cancellationPolicy.description}
          </p>
          <button
            onClick={onOpenRulesModal}
            className="flex items-center gap-1 font-semibold text-sm text-[#222222] underline hover:text-black pt-2"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
