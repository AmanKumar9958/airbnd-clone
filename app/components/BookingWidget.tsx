"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Flag, Plus, Minus } from "lucide-react";

export default function BookingWidget() {
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 1,
  });
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalGuests = guests.adults + guests.children;

  // Format summary label: "1 guest, 1 pet" or "2 guests, 1 infant, 1 pet"
  const getGuestSummary = () => {
    const parts: string[] = [];
    parts.push(`${totalGuests} guest${totalGuests > 1 ? "s" : ""}`);
    if (guests.infants > 0) {
      parts.push(`${guests.infants} infant${guests.infants > 1 ? "s" : ""}`);
    }
    if (guests.pets > 0) {
      parts.push(`${guests.pets} pet${guests.pets > 1 ? "s" : ""}`);
    }
    return parts.join(", ");
  };

  const updateGuests = (
    type: "adults" | "children" | "infants" | "pets",
    delta: number
  ) => {
    setGuests((prev) => {
      const current = prev[type];
      const next = current + delta;

      if (type === "adults") {
        if (next < 1) return prev; // At least 1 adult
        if (next + prev.children > 4) return prev; // Max 4 guests
        return { ...prev, adults: next };
      }

      if (type === "children") {
        if (next < 0) return prev;
        if (prev.adults + next > 4) return prev; // Max 4 guests
        return { ...prev, children: next };
      }

      if (type === "infants") {
        if (next < 0 || next > 5) return prev;
        return { ...prev, infants: next };
      }

      if (type === "pets") {
        if (next < 0 || next > 5) return prev;
        return { ...prev, pets: next };
      }

      return prev;
    });
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsGuestPickerOpen(false);
      }
    };

    if (isGuestPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGuestPickerOpen]);

  return (
    <aside className="w-full sticky top-24 self-start">
      {/* 1. Top Banner: Prices include all fees */}
      <div className="bg-white border border-[#dddddd] rounded-2xl py-4 px-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2.5 mb-6">
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
          <path
            d="M4.5 4.5L2 2"
            stroke="#b0b0b0"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
            fill="#E00B41"
          />
          <circle cx="7" cy="7" r="2" fill="white" />
        </svg>
        <span className="text-sm font-semibold text-[#222222]">
          Prices include all fees
        </span>
      </div>

      {/* 2. Main Reservation Card */}
      <div className="border border-[#e0e0e0] rounded-2xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-white">
        {/* Header Price Line: ₹4,340 for 1 night */}
        <div className="flex items-baseline mb-6">
          <span className="text-2xl font-bold text-[#222222] underline underline-offset-4 decoration-1">
            ₹4,340
          </span>
          <span className="text-base text-[#222222] font-normal ml-1.5">
            for 1 night
          </span>
        </div>

        {/* Date and Guest Pickers Box */}
        <div
          ref={dropdownRef}
          className={`border rounded-xl transition-colors relative ${
            isGuestPickerOpen ? "border-black ring-1 ring-black" : "border-[#717171]"
          }`}
        >
          {/* Top Row: Check-in / Checkout */}
          <div className="grid grid-cols-2 divide-x divide-[#717171] border-b border-[#717171]">
            <div className="p-3 text-left">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                CHECK-IN
              </label>
              <div className="text-sm text-[#222222] font-normal mt-0.5">
                10/28/2026
              </div>
            </div>
            <div className="p-3 text-left">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                CHECKOUT
              </label>
              <div className="text-sm text-[#222222] font-normal mt-0.5">
                10/29/2026
              </div>
            </div>
          </div>

          {/* Bottom Row: Guests Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
              className="w-full p-3 text-left flex items-center justify-between hover:bg-neutral-50/50 transition-colors cursor-pointer rounded-b-xl"
            >
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                  GUESTS
                </label>
                <div className="text-sm text-[#222222] font-normal mt-0.5">
                  {getGuestSummary()}
                </div>
              </div>
              {isGuestPickerOpen ? (
                <ChevronUp className="w-5 h-5 text-[#222222] stroke-[2.5]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#222222] stroke-[2.5]" />
              )}
            </button>

            {/* Guests Popover Dropdown matching reference screenshot */}
            {isGuestPickerOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-[#b0b0b0] shadow-[0_6px_24px_rgba(0,0,0,0.18)] rounded-2xl p-5 mt-2 z-50">
                {/* 1. Adults */}
                <div className="flex items-center justify-between pb-4 border-b border-[#ebebeb]">
                  <div>
                    <div className="text-base font-semibold text-[#222222]">
                      Adults
                    </div>
                    <div className="text-sm text-[#717171] mt-0.5">Age 13+</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateGuests("adults", -1)}
                      disabled={guests.adults <= 1}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-base text-[#222222] font-normal w-5 text-center">
                      {guests.adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateGuests("adults", 1)}
                      disabled={totalGuests >= 4}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. Children */}
                <div className="flex items-center justify-between py-4 border-b border-[#ebebeb]">
                  <div>
                    <div className="text-base font-semibold text-[#222222]">
                      Children
                    </div>
                    <div className="text-sm text-[#717171] mt-0.5">
                      Ages 2–12
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateGuests("children", -1)}
                      disabled={guests.children <= 0}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-base text-[#222222] font-normal w-5 text-center">
                      {guests.children}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateGuests("children", 1)}
                      disabled={totalGuests >= 4}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3. Infants */}
                <div className="flex items-center justify-between py-4 border-b border-[#ebebeb]">
                  <div>
                    <div className="text-base font-semibold text-[#222222]">
                      Infants
                    </div>
                    <div className="text-sm text-[#717171] mt-0.5">
                      Under 2
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateGuests("infants", -1)}
                      disabled={guests.infants <= 0}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-base text-[#222222] font-normal w-5 text-center">
                      {guests.infants}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateGuests("infants", 1)}
                      disabled={guests.infants >= 5}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 4. Pets */}
                <div className="flex items-center justify-between py-4">
                  <div>
                    <div className="text-base font-semibold text-[#222222]">
                      Pets
                    </div>
                    <a
                      href="#service-animals"
                      onClick={(e) => e.preventDefault()}
                      className="text-sm font-semibold text-[#222222] underline cursor-pointer mt-0.5 block hover:text-black"
                    >
                      Bringing a service animal?
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateGuests("pets", -1)}
                      disabled={guests.pets <= 0}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-base text-[#222222] font-normal w-5 text-center">
                      {guests.pets}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateGuests("pets", 1)}
                      disabled={guests.pets >= 5}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Capacity Note */}
                <p className="text-xs text-[#222222] leading-relaxed mt-2 pt-2 border-t border-[#ebebeb]">
                  This place has a maximum of 4 guests, not including infants. If
                  you&apos;re bringing more than 2 pets, please let your Host
                  know.
                </p>

                {/* Close Button */}
                <div className="pt-3 text-right">
                  <button
                    type="button"
                    onClick={() => setIsGuestPickerOpen(false)}
                    className="text-sm font-semibold underline text-[#222222] hover:text-black cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Free cancellation pill banner */}
        <div className="my-4 bg-[#F0F2F5] rounded-xl py-2.5 px-4 text-center">
          <span className="text-[13px] text-[#222222]">
            Free cancellation before{" "}
            <strong className="font-semibold">27 October</strong>
          </span>
        </div>

        {/* Reserve Button with signature Airbnb Pink */}
        <button className="w-full py-3.5 rounded-xl text-white font-semibold text-base transition-all active:scale-[0.98] bg-[#E00B41] hover:bg-[#D7043B] shadow-xs cursor-pointer">
          Reserve
        </button>

        <p className="text-center text-sm text-[#222222] mt-4 font-normal">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* 3. Report this listing */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#717171] hover:text-[#222222] cursor-pointer">
        <Flag className="w-4 h-4 fill-current text-[#717171]" />
        <span className="underline">Report this listing</span>
      </div>
    </aside>
  );
}
