"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";

export default function CalendarSection() {
  // Current visible start month (default: October 2026)
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2026, 9, 1));
  const [checkIn, setCheckIn] = useState<string | null>("2026-10-27");
  const [checkOut, setCheckOut] = useState<string | null>("2026-10-28");

  const weekHeaders = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const getMonthData = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDayOfWeek = firstDay.getDay(); // 0 for Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = firstDay.toLocaleString("en-US", { month: "long" });
    return {
      year,
      month,
      monthName,
      startDayOfWeek,
      daysInMonth,
    };
  };

  const month1 = getMonthData(currentMonth);
  const month2Date = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    1
  );
  const month2 = getMonthData(month2Date);

  const formatDateKey = (year: number, month: number, day: number) => {
    const m = String(month + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${year}-${m}-${d}`;
  };

  const handleDateClick = (dateStr: string) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(dateStr);
      setCheckOut(null);
    } else if (checkIn && !checkOut) {
      if (dateStr > checkIn) {
        setCheckOut(dateStr);
      } else if (dateStr < checkIn) {
        setCheckIn(dateStr);
      } else {
        setCheckOut(null);
      }
    }
  };

  const clearDates = () => {
    setCheckIn(null);
    setCheckOut(null);
  };

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    return Math.round(
      Math.abs(d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  const formatDisplayDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const nights = getNights();

  const renderMonth = (
    m: ReturnType<typeof getMonthData>,
    isFirstMonth: boolean
  ) => {
    return (
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4 h-9">
          {isFirstMonth ? (
            <button
              onClick={handlePrevMonth}
              className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-[#222222]"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
          ) : (
            <div className="w-9" />
          )}

          <span className="font-semibold text-base text-[#222222] select-none">
            {m.monthName} {m.year}
          </span>

          {isFirstMonth ? (
            <>
              <button
                onClick={handleNextMonth}
                className="p-2 -mr-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-[#222222] md:hidden"
                aria-label="Next month"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              <div className="w-9 hidden md:block" />
            </>
          ) : (
            <button
              onClick={handleNextMonth}
              className="p-2 -mr-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-[#222222]"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#717171] mb-2 select-none">
          {weekHeaders.map((w, i) => (
            <div key={i} className="py-1">
              {w}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1 gap-x-0 text-center text-sm">
          {/* Empty offset days */}
          {[...Array(m.startDayOfWeek)].map((_, i) => (
            <div key={`empty-${m.month}-${i}`} className="h-10" />
          ))}

          {/* Days in Month */}
          {[...Array(m.daysInMonth)].map((_, i) => {
            const day = i + 1;
            const dateKey = formatDateKey(m.year, m.month, day);
            const isStart = dateKey === checkIn;
            const isEnd = dateKey === checkOut;
            const isInRange =
              checkIn && checkOut && dateKey > checkIn && dateKey < checkOut;

            let buttonClasses =
              "h-10 w-full flex items-center justify-center text-sm font-medium transition-all cursor-pointer ";
            let containerClasses = "";

            if (isStart && checkOut) {
              containerClasses = "bg-neutral-100 rounded-l-full";
              buttonClasses += "bg-black text-white font-semibold rounded-full group-hover:ring-2 group-hover:ring-black group-hover:ring-offset-2 group-hover:ring-offset-white";
            } else if (isEnd && checkIn) {
              containerClasses = "bg-neutral-100 rounded-r-full";
              buttonClasses += "bg-black text-white font-semibold rounded-full group-hover:ring-2 group-hover:ring-black group-hover:ring-offset-2 group-hover:ring-offset-white";
            } else if (isStart && !checkOut) {
              buttonClasses += "bg-black text-white font-semibold rounded-full group-hover:ring-2 group-hover:ring-black group-hover:ring-offset-2 group-hover:ring-offset-white";
            } else if (isInRange) {
              containerClasses = "bg-neutral-100";
              buttonClasses += "text-[#222222] hover:bg-neutral-200 rounded-full";
            } else {
              buttonClasses +=
                "text-[#222222] hover:border-black border border-transparent rounded-full";
            }

            return (
              <div
                key={dateKey}
                className={`group relative ${containerClasses} hover:z-40 z-10`}
              >
                {/* Check-in Tooltip */}
                {isStart && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-40 pointer-events-none whitespace-nowrap hidden group-hover:flex flex-col items-center transition-all duration-150">
                    <div className="bg-white text-[#222222] text-[13px] font-normal px-2.5 py-1 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[#e4e4e4]">
                      Check-in day
                    </div>
                    <div
                      className="bg-white border-r border-b border-[#e4e4e4]"
                      style={{
                        marginTop: "-5px",
                        width: "8px",
                        height: "8px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </div>
                )}

                {/* Checkout Tooltip */}
                {isEnd && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-40 pointer-events-none whitespace-nowrap hidden group-hover:flex flex-col items-center transition-all duration-150">
                    <div className="bg-white text-[#222222] text-[13px] font-normal px-2.5 py-1 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[#e4e4e4]">
                      Checkout day
                    </div>
                    <div
                      className="bg-white border-r border-b border-[#e4e4e4]"
                      style={{
                        marginTop: "-5px",
                        width: "8px",
                        height: "8px",
                        transform: "rotate(45deg)",
                      }}
                    />
                  </div>
                )}

                <button
                  onClick={() => handleDateClick(dateKey)}
                  className={buttonClasses}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 border-b border-[#dddddd]">
      <div>
        <h3 className="text-[22px] font-semibold text-[#222222]">
          {checkIn && checkOut
            ? `${nights} night${nights > 1 ? "s" : ""} in Gurugram`
            : checkIn
            ? "Select checkout date"
            : "Select check-in date"}
        </h3>
        <p className="text-sm text-[#717171] mt-1">
          {checkIn && checkOut
            ? `${formatDisplayDate(checkIn)} – ${formatDisplayDate(checkOut)}`
            : checkIn
            ? "Minimum stay: 1 night"
            : "Add your travel dates for exact pricing"}
        </p>
      </div>

      {/* Side-by-Side Dual Month Calendar */}
      <div className="mt-6 flex flex-col md:flex-row gap-8 max-w-[700px]">
        {/* Month 1 */}
        {renderMonth(month1, true)}

        {/* Month 2 (Desktop view) */}
        <div className="flex-1 hidden md:block">
          {renderMonth(month2, false)}
        </div>
      </div>

      {/* Calendar footer controls */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <button
          className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-600"
          aria-label="Keyboard shortcuts"
        >
          <Keyboard className="w-5 h-5" />
        </button>
        <button
          onClick={clearDates}
          className="font-semibold text-[#222222] underline hover:text-black py-1 px-2 rounded-md cursor-pointer"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}
