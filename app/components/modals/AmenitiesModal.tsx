"use client";

import React from "react";
import { X, Check } from "lucide-react";
import { LISTING_DATA } from "../../data/listingData";

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AmenitiesModal({ isOpen, onClose }: AmenitiesModalProps) {
  if (!isOpen) return null;

  const { amenityGroups } = LISTING_DATA;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-[780px] w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="h-16 px-6 border-b border-neutral-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-[#222222]" />
          </button>
          <span className="font-semibold text-base text-[#222222]">
            What this place offers
          </span>
          <div className="w-9" />
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {amenityGroups.map((group, idx) => (
            <div key={idx} className="space-y-4 pb-6 border-b border-neutral-100 last:border-none">
              <h4 className="font-bold text-lg text-[#222222]">
                {group.title}
              </h4>
              <div className="divide-y divide-neutral-100">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="py-3.5 flex items-center gap-3 text-base text-[#222222]">
                    <Check className="w-5 h-5 text-[#222222] shrink-0 stroke-[2]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
