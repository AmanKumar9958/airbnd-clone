"use client";

import React from "react";
import { Star, ShieldCheck } from "lucide-react";

interface PropertyOverviewProps {
  propertyType: string;
  location: string;
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  rating: number;
  reviewsCount: number;
  host: {
    name: string;
    avatar: string;
    badge: string;
    yearsHosting: string;
  };
}

export default function PropertyOverview({
  propertyType,
  location,
  capacity,
  rating,
  reviewsCount,
  host,
}: PropertyOverviewProps) {
  return (
    <section className="py-6 border-b border-[#dddddd]">
      {/* Property Type and specs */}
      <div>
        <h2 className="text-[22px] font-semibold text-[#222222] leading-tight">
          {propertyType} in {location}
        </h2>
        <ol className="flex items-center gap-1.5 text-base text-[#222222] mt-1 font-normal flex-wrap">
          <li>{capacity.guests} guests</li>
          <li>·</li>
          <li>{capacity.bedrooms} bedroom</li>
          <li>·</li>
          <li>{capacity.beds} beds</li>
          <li>·</li>
          <li>{capacity.bathrooms} bathroom</li>
        </ol>
      </div>

      {/* Guest Favourite Laurel Banner - Authentic Airbnb UI */}
      <div className="mt-6 border border-[#dddddd] rounded-2xl p-5 flex items-center justify-between gap-4 bg-white hover:bg-neutral-50/50 transition-colors shadow-xs">
        {/* Left: Laurel leaves icon and Guest Favourite */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {/* Laurel Left leaf SVG */}
            <svg viewBox="0 0 24 32" className="w-6 h-8 text-[#222222] fill-current">
              <path d="M12 2C10.5 5.5 8 9 5 12c-2 2-3 4-3 6.5C2 23 5.5 27 10 28c1 .2 2 .3 3 .3-1.5-2-2.5-4.5-3-7-.5-2.5-.5-5 0-7.5.5-2.5 1.5-5 2-6.8z" />
            </svg>
            <div className="text-center px-1">
              <div className="font-semibold text-sm text-[#222222] uppercase tracking-wider">
                Guest
              </div>
              <div className="font-semibold text-sm text-[#222222] uppercase tracking-wider -mt-1">
                favourite
              </div>
            </div>
            {/* Laurel Right leaf SVG */}
            <svg viewBox="0 0 24 32" className="w-6 h-8 text-[#222222] fill-current scale-x-[-1]">
              <path d="M12 2C10.5 5.5 8 9 5 12c-2 2-3 4-3 6.5C2 23 5.5 27 10 28c1 .2 2 .3 3 .3-1.5-2-2.5-4.5-3-7-.5-2.5-.5-5 0-7.5.5-2.5 1.5-5 2-6.8z" />
            </svg>
          </div>
          <div className="hidden sm:block text-sm text-[#222222] font-semibold max-w-[200px] leading-snug">
            One of the most loved homes on Airbnb, according to guests
          </div>
        </div>

        {/* Middle: Rating Score */}
        <div className="text-center px-2 border-x border-[#ebebeb]">
          <div className="text-lg font-bold text-[#222222] leading-none flex items-center justify-center gap-1">
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center justify-center gap-0.5 mt-1 text-[#222222]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current text-[#222222]" />
            ))}
          </div>
        </div>

        {/* Right: Reviews count */}
        <div className="text-right pr-2">
          <div className="text-lg font-bold text-[#222222] leading-none">
            {reviewsCount}
          </div>
          <div className="text-xs text-[#222222] underline font-medium mt-1">
            Reviews
          </div>
        </div>
      </div>

      {/* Host preview card */}
      <div className="flex items-center gap-4 mt-6 pt-2">
        <div className="relative">
          <img
            src={host.avatar}
            alt={host.name}
            className="w-12 h-12 rounded-full object-cover border border-neutral-200"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#FF385C] text-white p-1 rounded-full shadow-xs">
            <ShieldCheck className="w-3 h-3" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-base text-[#222222]">
            Hosted by {host.name}
          </h3>
          <p className="text-sm text-[#717171]">
            {host.badge} · {host.yearsHosting} hosting
          </p>
        </div>
      </div>
    </section>
  );
}
