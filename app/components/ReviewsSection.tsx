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
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="flex items-center justify-center gap-3">
          {/* Laurel Branch Left */}
          <svg viewBox="0 0 32 32" className="w-10 h-14 text-[#222222] fill-current">
            <path d="M16 2c-2.2 4.5-5.5 9-10 13-3 2.5-4 5.5-4 9 0 6 5 11 11 11 1.5 0 3-.2 4.5-.7-2-2.5-3.5-5.5-4-9-.5-3.5-.5-7 0-10.5.5-3.5 2-7 2.5-9.8z" />
          </svg>

          {/* Rating */}
          <div className="text-[64px] font-extrabold text-[#222222] tracking-tighter leading-none">
            {rating.toFixed(1)}
          </div>

          {/* Laurel Branch Right */}
          <svg viewBox="0 0 32 32" className="w-10 h-14 text-[#222222] fill-current scale-x-[-1]">
            <path d="M16 2c-2.2 4.5-5.5 9-10 13-3 2.5-4 5.5-4 9 0 6 5 11 11 11 1.5 0 3-.2 4.5-.7-2-2.5-3.5-5.5-4-9-.5-3.5-.5-7 0-10.5.5-3.5 2-7 2.5-9.8z" />
          </svg>
        </div>

        <h3 className="text-[22px] font-bold text-[#222222] mt-2">
          Guest favourite
        </h3>
        <p className="text-base text-[#717171] mt-1 max-w-[420px]">
          One of the most loved homes on Airbnb, based on ratings, reviews, and reliability
        </p>
      </div>

      {/* Category Breakdown Ratings Bars (2 columns of 3) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-6 border-y border-[#ebebeb] mb-8">
        {ratingCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col justify-between">
            <span className="text-sm font-semibold text-[#222222]">{cat.label}</span>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span className="text-base font-bold text-[#222222]">{cat.score.toFixed(1)}</span>
              {/* Star or Progress bar */}
              <div className="w-16 h-1 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full"
                  style={{ width: `${(cat.score / 5.0) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
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
