"use client";

import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp, Flag, Plus, Minus } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export default function BookingWidget() {
  const { price, rating, reviewsCount } = LISTING_DATA;
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 1,
  });
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);

  const totalGuests = guests.adults + guests.children;
  const basePrice = price.perNight * nights;
  const totalPrice = basePrice + price.cleaningFee + price.serviceFee + price.taxes;

  const updateGuests = (type: "adults" | "children" | "infants" | "pets", delta: number) => {
    setGuests((prev) => {
      const current = prev[type];
      const next = Math.max(type === "adults" ? 1 : 0, current + delta);
      if (type !== "infants" && type !== "pets" && prev.adults + (type === "children" ? next : prev.children) > 4) {
        return prev;
      }
      return { ...prev, [type]: next };
    });
  };

  return (
    <aside className="w-full">
      <div className="border border-[#dddddd] rounded-2xl p-6 shadow-xl bg-white sticky top-28">
        {/* Price and Ratings Header */}
        <div className="flex items-baseline justify-between mb-6">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[22px] font-bold text-[#222222]">
              {price.currency}{price.perNight.toLocaleString()}
            </span>
            <span className="text-base text-[#717171] font-normal">/ night</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-[#222222]">
            <Star className="w-3.5 h-3.5 fill-current text-[#222222]" />
            <span>{rating.toFixed(1)}</span>
            <span className="text-[#717171]">·</span>
            <span className="text-[#717171] underline font-medium">
              {reviewsCount} reviews
            </span>
          </div>
        </div>

        {/* Date and Guest Pickers Box */}
        <div className="border border-[#b0b0b0] rounded-xl overflow-hidden mb-4 divide-y divide-[#b0b0b0]">
          {/* Top Row: Check-in / Checkout */}
          <div className="grid grid-cols-2 divide-x divide-[#b0b0b0]">
            <div className="p-3 text-left">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                Check-in
              </label>
              <div className="text-sm text-[#222222] font-normal mt-0.5">8/10/2026</div>
            </div>
            <div className="p-3 text-left">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                Checkout
              </label>
              <div className="text-sm text-[#222222] font-normal mt-0.5">9/10/2026</div>
            </div>
          </div>

          {/* Bottom Row: Guests */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
              className="w-full p-3 text-left flex items-center justify-between hover:bg-neutral-50/50 transition-colors"
            >
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                  Guests
                </label>
                <div className="text-sm text-[#222222] font-normal mt-0.5">
                  {totalGuests} guest{totalGuests > 1 ? "s" : ""}
                  {guests.pets > 0 ? `, ${guests.pets} pet` : ""}
                </div>
              </div>
              {isGuestPickerOpen ? (
                <ChevronUp className="w-4 h-4 text-[#222222]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#222222]" />
              )}
            </button>

            {/* Guests Popover Dropdown */}
            {isGuestPickerOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-[#dddddd] shadow-2xl rounded-xl p-4 mt-2 z-30 space-y-4">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#222222]">Adults</div>
                    <div className="text-xs text-[#717171]">Age 13+</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateGuests("adults", -1)}
                      disabled={guests.adults <= 1}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black disabled:opacity-30 disabled:cursor-not-allowed text-neutral-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">
                      {guests.adults}
                    </span>
                    <button
                      onClick={() => updateGuests("adults", 1)}
                      disabled={totalGuests >= 4}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black disabled:opacity-30 disabled:cursor-not-allowed text-neutral-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#222222]">Children</div>
                    <div className="text-xs text-[#717171]">Ages 2–12</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateGuests("children", -1)}
                      disabled={guests.children <= 0}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black disabled:opacity-30 disabled:cursor-not-allowed text-neutral-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">
                      {guests.children}
                    </span>
                    <button
                      onClick={() => updateGuests("children", 1)}
                      disabled={totalGuests >= 4}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black disabled:opacity-30 disabled:cursor-not-allowed text-neutral-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Pets */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#222222]">Pets</div>
                    <div className="text-xs text-[#717171]">Bringing a service animal?</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateGuests("pets", -1)}
                      disabled={guests.pets <= 0}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black disabled:opacity-30 disabled:cursor-not-allowed text-neutral-600"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">
                      {guests.pets}
                    </span>
                    <button
                      onClick={() => updateGuests("pets", 1)}
                      className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:border-black text-neutral-600"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-right border-t border-neutral-100">
                  <button
                    onClick={() => setIsGuestPickerOpen(false)}
                    className="text-xs font-semibold underline text-[#222222] hover:text-black"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reserve Button with signature Airbnb Pink-Red gradient */}
        <button
          className="w-full py-3.5 rounded-xl text-white font-semibold text-base transition-all active:scale-98 airbnb-btn-gradient shadow-md"
        >
          Reserve
        </button>

        <p className="text-center text-xs text-[#717171] mt-3 font-normal">
          You won&apos;t be charged yet
        </p>

        {/* Price Breakdown */}
        <div className="mt-5 space-y-3 text-sm text-[#222222]">
          <div className="flex items-center justify-between">
            <span className="underline">
              {price.currency}{price.perNight.toLocaleString()} × {nights} night
            </span>
            <span>{price.currency}{basePrice.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="underline">Cleaning fee</span>
            <span>{price.currency}{price.cleaningFee.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="underline">Airbnb service fee</span>
            <span>{price.currency}{price.serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="underline">Taxes</span>
            <span>{price.currency}{price.taxes.toLocaleString()}</span>
          </div>

          <div className="pt-4 border-t border-[#dddddd] flex items-center justify-between font-bold text-base text-[#222222]">
            <span>Total before taxes</span>
            <span>{price.currency}{(basePrice + price.cleaningFee + price.serviceFee).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Report this listing */}
      <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-[#717171] hover:text-[#222222] cursor-pointer">
        <Flag className="w-3.5 h-3.5" />
        <span className="underline">Report this listing</span>
      </div>
    </aside>
  );
}
