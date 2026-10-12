"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export default function ReviewsSection() {
  const { rating, reviewsCount, ratingCategories, reviewTags, reviews } = LISTING_DATA;
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredReviews = activeTag
    ? reviews.filter((r) =>
        r.comment.toLowerCase().includes(activeTag.toLowerCase()) ||
        activeTag === "Hospitality" ||
        activeTag === "Comfort"
      )
    : reviews;

  return (
    <section className="py-12 border-b border-[#dddddd]">
      {/* Big Guest Favourite Header Banner */}
      <div className="flex flex-col items-center justify-center text-center pt-2 mb-10">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {/* Left Laurel Branch */}
          <img
            src="/laurel-left.png"
            alt="Guest favourite laurel left"
            className="w-16 h-20 sm:w-20 sm:h-24 object-contain select-none"
          />

          {/* Center Rating */}
          <span className="text-[80px] sm:text-[92px] font-bold text-[#222222] tracking-tighter leading-none">
            {rating.toFixed(1)}
          </span>

          {/* Right Laurel Branch */}
          <img
            src="/laurel-right.png"
            alt="Guest favourite laurel right"
            className="w-16 h-20 sm:w-20 sm:h-24 object-contain select-none"
          />
        </div>

        <h2 className="text-[22px] font-bold text-[#222222] mt-3 tracking-tight">
          Guest favourite
        </h2>
        <p className="text-base sm:text-[17px] text-[#717171] mt-1.5 max-w-[480px] font-normal leading-snug">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button
          type="button"
          className="text-sm font-semibold text-[#222222] underline underline-offset-4 mt-2 hover:text-black transition-colors"
        >
          How reviews work
        </button>
      </div>

      {/* 7-Column Category Breakdown */}
      <div className="border-t border-[#ebebeb] pt-8 mb-10 overflow-x-auto no-scrollbar">
        <div className="min-w-[760px] grid grid-cols-7 divide-x divide-[#e5e5e5]">
          {/* Column 1: Overall rating */}
          <div className="flex flex-col justify-between h-[115px] pr-4 md:pr-5">
            <span className="text-sm font-semibold text-[#222222]">Overall rating</span>
            <div className="space-y-1 w-full max-w-[130px] pt-1">
              {[
                { star: 5, fill: "w-full" },
                { star: 4, fill: "w-0" },
                { star: 3, fill: "w-0" },
                { star: 2, fill: "w-0" },
                { star: 1, fill: "w-0" },
              ].map((item) => (
                <div key={item.star} className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#717171] w-2 text-left">
                    {item.star}
                  </span>
                  <div className="flex-1 h-1 bg-[#e5e5e5] rounded-full overflow-hidden">
                    <div className={`h-full bg-[#222222] rounded-full ${item.fill}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Cleanliness */}
          <div className="flex flex-col justify-between h-[115px] px-4 md:px-5">
            <div>
              <span className="text-sm font-semibold text-[#222222] block">Cleanliness</span>
              <span className="text-sm font-semibold text-[#222222] block mt-0.5">4.9</span>
            </div>
            <div className="text-[#222222] pb-1">
              {/* Spray bottle SVG */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15h9v11a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V15z" />
                <path d="M15 15v-4h3v4" />
                <path d="M13 8h5a2 2 0 0 1 2 2v1H13V8z" />
                <path d="M13 9.5H9" />
                <path d="M17 11.5l-3 3.5" />
                <circle cx="5.5" cy="8" r="0.8" fill="currentColor" stroke="none" />
                <circle cx="4" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
                <circle cx="5.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>

          {/* Column 3: Accuracy */}
          <div className="flex flex-col justify-between h-[115px] px-4 md:px-5">
            <div>
              <span className="text-sm font-semibold text-[#222222] block">Accuracy</span>
              <span className="text-sm font-semibold text-[#222222] block mt-0.5">5.0</span>
            </div>
            <div className="text-[#222222] pb-1">
              {/* Checkmark in circle SVG */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="16" cy="16" r="12" />
                <path d="M11 16.5l3.5 3.5 7-7" />
              </svg>
            </div>
          </div>

          {/* Column 4: Check-in */}
          <div className="flex flex-col justify-between h-[115px] px-4 md:px-5">
            <div>
              <span className="text-sm font-semibold text-[#222222] block">Check-in</span>
              <span className="text-sm font-semibold text-[#222222] block mt-0.5">5.0</span>
            </div>
            <div className="text-[#222222] pb-1">
              {/* Key SVG matching Airbnb reference */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="21" r="5" />
                <path d="M14.5 17.5L25 7" />
                <path d="M21.5 10.5l2 2" />
                <path d="M24 8l2 2" />
              </svg>
            </div>
          </div>

          {/* Column 5: Communication */}
          <div className="flex flex-col justify-between h-[115px] px-4 md:px-5">
            <div>
              <span className="text-sm font-semibold text-[#222222] block">Communication</span>
              <span className="text-sm font-semibold text-[#222222] block mt-0.5">5.0</span>
            </div>
            <div className="text-[#222222] pb-1">
              {/* Speech bubble SVG */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H12l-5 4v-4H9a3 3 0 0 1-3-3V8z" />
              </svg>
            </div>
          </div>

          {/* Column 6: Location */}
          <div className="flex flex-col justify-between h-[115px] px-4 md:px-5">
            <div>
              <span className="text-sm font-semibold text-[#222222] block">Location</span>
              <span className="text-sm font-semibold text-[#222222] block mt-0.5">5.0</span>
            </div>
            <div className="text-[#222222] pb-1">
              {/* Folded map SVG */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 7l7-3 8 3 7-3v21l-7 3-8-3-7 3V7z" />
                <path d="M12 4v21" />
                <path d="M20 7v21" />
              </svg>
            </div>
          </div>

          {/* Column 7: Value */}
          <div className="flex flex-col justify-between h-[115px] pl-4 md:pl-5">
            <div>
              <span className="text-sm font-semibold text-[#222222] block">Value</span>
              <span className="text-sm font-semibold text-[#222222] block mt-0.5">5.0</span>
            </div>
            <div className="text-[#222222] pb-1">
              {/* Price tag SVG */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M26 15l-10 10a2 2 0 0 1-2.8 0L4.5 16.3V6h10.3l11.2 9z" />
                <circle cx="9.5" cy="11" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Review Filter Tags */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors whitespace-nowrap ${
            activeTag === null
              ? "bg-black text-white border-black"
              : "border-neutral-300 text-neutral-800 hover:border-black"
          }`}
        >
          All reviews ({reviewsCount})
        </button>
        {reviewTags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTag(tag.name === activeTag ? null : tag.name)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors whitespace-nowrap ${
              activeTag === tag.name
                ? "bg-black text-white border-black"
                : "border-neutral-300 text-neutral-800 hover:border-black"
            }`}
          >
            {tag.name} ({tag.count})
          </button>
        ))}
      </div>

      {/* 2-Column Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {filteredReviews.map((rev) => (
          <div key={rev.id} className="space-y-3">
            {/* Reviewer Header */}
            <div className="flex items-center gap-3">
              <img
                src={rev.author.avatar}
                alt={rev.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-base text-[#222222]">
                  {rev.author.name}
                </h4>
                <p className="text-xs text-[#717171]">
                  {rev.author.location} · {rev.author.yearsOnAirbnb}
                </p>
              </div>
            </div>

            {/* Stars and date */}
            <div className="flex items-center gap-2 text-xs text-[#222222]">
              <div className="flex items-center gap-0.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current text-black" />
                ))}
              </div>
              <span className="font-semibold">·</span>
              <span className="font-semibold">{rev.date}</span>
              {rev.stayDuration && (
                <>
                  <span className="text-[#717171]">·</span>
                  <span className="text-[#717171]">{rev.stayDuration}</span>
                </>
              )}
            </div>

            {/* Comment */}
            <p className="text-base text-[#222222] leading-relaxed">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="border border-[#222222] hover:bg-neutral-50 text-[#222222] font-semibold text-base py-3 px-6 rounded-lg transition-colors active:scale-98">
          Show all {reviewsCount} reviews
        </button>
      </div>
    </section>
  );
}
