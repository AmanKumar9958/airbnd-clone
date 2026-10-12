"use client";

import React from "react";
import { X, Check } from "lucide-react";
import { LISTING_DATA } from "../../data/listingData";

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DescriptionModal({ isOpen, onClose }: DescriptionModalProps) {
  if (!isOpen) return null;

  const { overview } = LISTING_DATA;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-[780px] w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="h-16 px-6 border-b border-neutral-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-[#222222]" />
          </button>
          <span className="font-semibold text-base text-[#222222]">
            About this space
          </span>
          <div className="w-9" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-[#222222] text-base leading-relaxed">
          <div>
            <h4 className="font-bold text-xl text-[#222222] mb-3">
              The Aurea — A Luxury Boutique Stay🌿
            </h4>
            <p className="whitespace-pre-line text-neutral-800">
              {overview.description}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <h5 className="font-bold text-lg text-[#222222] mb-3">
              The space includes:
            </h5>
            <ul className="space-y-2">
              {overview.theSpace.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-neutral-800">
                  <span className="text-[#FF385C] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <h5 className="font-bold text-lg text-[#222222] mb-3">
              Guest access (M3M Urbana Premium):
            </h5>
            <ul className="space-y-2">
              {overview.guestAccess.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-neutral-800">
                  <span className="text-[#FF385C] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <h5 className="font-bold text-lg text-[#222222] mb-2">
              Around the property:
            </h5>
            <p className="text-sm text-neutral-600 mb-2">
              Everything you need is just an elevator ride away in the promenade:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-700">
              <div className="p-3 bg-neutral-50 rounded-xl">
                <span className="font-bold block mb-1">☕ Cafes:</span>
                Nautical Mile, Bakers Oven Boulangerie, Barista, Cafe Melodies, Mogli&apos;s Cafe
              </div>
              <div className="p-3 bg-neutral-50 rounded-xl">
                <span className="font-bold block mb-1">🍽 Restaurants:</span>
                Bikanervala, Krua Thai, Bunny&apos;s Cafe, Burger Monk, Xingfu, KFC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
