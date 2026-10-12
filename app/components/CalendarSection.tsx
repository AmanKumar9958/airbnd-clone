"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";

export default function CalendarSection() {
  const [checkIn, setCheckIn] = useState<number | null>(8);
  const [checkOut, setCheckOut] = useState<number | null>(9);

  // October 2026 starts on Thursday (day index 4: Sun 0, Mon 1, Tue 2, Wed 3, Thu 4)
  const daysInOct = 31;
  const startDayOct = 4; // Thu

  // November 2026 starts on Sunday (day index 0)
  const daysInNov = 30;
  const startDayNov = 0; // Sun

  const weekHeaders = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handleDateClick = (day: number) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(day);
      setCheckOut(null);
    } else if (checkIn && !checkOut) {
      if (day > checkIn) {
        setCheckOut(day);
      } else {
        setCheckIn(day);
      }
    }
  };

  const clearDates = () => {
    setCheckIn(null);
    setCheckOut(null);
  };

  return (
    <section className="py-8 border-b border-[#dddddd]">
      <div>
        <h3 className="text-[22px] font-semibold text-[#222222]">
          {checkIn && checkOut
            ? `${checkOut - checkIn} night in Gurugram`
            : "Select check-in date"}
        </h3>
        <p className="text-sm text-[#717171] mt-1">
          {checkIn && checkOut
            ? `${checkIn} Oct 2026 – ${checkOut} Oct 2026`
            : "Add your travel dates for exact pricing"}
        </p>
      </div>

      {/* Side-by-Side Dual Month Calendar */}
      <div className="mt-6 flex flex-col md:flex-row gap-8 max-w-[700px]">
        {/* Month 1: October 2026 */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <button className="p-1 rounded-full hover:bg-neutral-100 transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#222222]" />
            </button>
            <span className="font-semibold text-base text-[#222222]">October 2026</span>
            <div className="w-5 md:hidden" />
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#717171] mb-2">
            {weekHeaders.map((w, i) => (
              <div key={i} className="py-1">
                {w}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {/* Empty offset days */}
            {[...Array(startDayOct)].map((_, i) => (
              <div key={`empty-oct-${i}`} className="h-10" />
            ))}

            {/* Days in Oct */}
            {[...Array(daysInOct)].map((_, i) => {
              const day = i + 1;
              const isSelectedStart = day === checkIn;
              const isSelectedEnd = day === checkOut;
              const isInRange = checkIn && checkOut && day > checkIn && day < checkOut;

              let style = "text-[#222222] hover:border-black border border-transparent";
              if (isSelectedStart) {
                style = "bg-black text-white font-semibold rounded-l-full";
              } else if (isSelectedEnd) {
                style = "bg-black text-white font-semibold rounded-r-full";
              } else if (isInRange) {
                style = "bg-neutral-100 text-black";
              }

              return (
                <button
                  key={`oct-${day}`}
                  onClick={() => handleDateClick(day)}
                  className={`h-10 w-full flex items-center justify-center rounded-full text-sm font-medium transition-colors ${style}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Month 2: November 2026 */}
        <div className="flex-1 hidden md:block">
          <div className="flex items-center justify-between mb-4">
            <div className="w-5" />
            <span className="font-semibold text-base text-[#222222]">November 2026</span>
            <button className="p-1 rounded-full hover:bg-neutral-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-[#222222]" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#717171] mb-2">
            {weekHeaders.map((w, i) => (
              <div key={i} className="py-1">
                {w}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {/* Empty offset days for Nov */}
            {[...Array(startDayNov)].map((_, i) => (
              <div key={`empty-nov-${i}`} className="h-10" />
            ))}

            {/* Days in Nov */}
            {[...Array(daysInNov)].map((_, i) => {
              const day = i + 1;
              return (
                <button
                  key={`nov-${day}`}
                  className="h-10 w-full flex items-center justify-center rounded-full text-sm font-medium text-[#222222] hover:border-black border border-transparent transition-colors"
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Calendar footer controls */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-600">
          <Keyboard className="w-5 h-5" />
        </button>
        <button
          onClick={clearDates}
          className="font-semibold text-[#222222] underline hover:text-black py-1 px-2 rounded-md"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}
