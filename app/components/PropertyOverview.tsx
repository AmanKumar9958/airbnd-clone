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

        {/* Free cancellation pill matching exact reference image */}
        <div className="mt-2.5">
          <span className="inline-block bg-[#F2F4F7] text-[#656C6C] text-[13px] font-medium px-2 py-0.5 rounded-md leading-normal">
            Free cancellation
          </span>
        </div>
      </div>

      {/* Guest Favourite Laurel Banner - Authentic Airbnb UI */}
      <div className="mt-6 border border-[#dddddd] rounded-xl p-6 flex items-center justify-between gap-4 bg-white shadow-xs">
        {/* Left: Laurel leaves icon and Guest Favourite */}
        <div className="flex items-center gap-3">
          {/* Laurel Left leaf SVG */}
          <svg viewBox="0 0 12 24" className="w-4 h-8 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6.5 8A8.6 8.6 0 0 0 6 10.7C6 14.7 8.7 18 11 18" />
            <path d="M5.5 5.2C5.2 6.9 6.5 8 6.5 8s1.6-.6 1.9-2.2C8.7 4.1 7.4 3 7.4 3s-1.6.6-1.9 2.2z" />
            <path d="M2.9 12.1c1.3 1.3 3 .8 3 .8s.5-1.8-.8-3c-1.3-1.3-3-.8-3-.8s-.5 1.8.8 3z" />
            <path d="M6.9 16.6c-1.5-.6-1.7-2.2-1.7-2.2s1.3-1 2.8-.5c1.5.6 1.7 2.2 1.7 2.2s-1.3 1-2.8.5z" />
          </svg>

          <div className="text-center font-semibold text-[18px] text-[#222222] leading-tight">
            <div>Guest</div>
            <div className="-mt-0.5">favourite</div>
          </div>

          {/* Laurel Right leaf SVG */}
          <svg viewBox="0 0 12 24" className="w-4 h-8 text-[#222222] scale-x-[-1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6.5 8A8.6 8.6 0 0 0 6 10.7C6 14.7 8.7 18 11 18" />
            <path d="M5.5 5.2C5.2 6.9 6.5 8 6.5 8s1.6-.6 1.9-2.2C8.7 4.1 7.4 3 7.4 3s-1.6.6-1.9 2.2z" />
            <path d="M2.9 12.1c1.3 1.3 3 .8 3 .8s.5-1.8-.8-3c-1.3-1.3-3-.8-3-.8s-.5 1.8.8 3z" />
            <path d="M6.9 16.6c-1.5-.6-1.7-2.2-1.7-2.2s1.3-1 2.8-.5c1.5.6 1.7 2.2 1.7 2.2s-1.3 1-2.8.5z" />
          </svg>
        </div>

        {/* Middle: Description text */}
        <div className="hidden sm:block text-[15px] font-semibold text-[#222222] leading-snug max-w-[240px]">
          One of the most loved homes on Airbnb, according to guests
        </div>

        {/* Right: Stats (Rating + Divider + Reviews) */}
        <div className="flex items-center gap-6">
          {/* Middle: Rating Score */}
          <div className="text-center min-w-[45px]">
            <div className="text-[22px] font-bold text-[#222222] leading-none">
              {rating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center gap-0.5 mt-1.5 text-black">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-black text-black" />
              ))}
            </div>
          </div>

          {/* Divider between rating and reviews */}
          <div className="w-[1px] h-9 bg-[#dddddd]" />

          {/* Right: Reviews count */}
          <div className="text-center min-w-[50px]">
            <div className="text-[22px] font-bold text-[#222222] leading-none">
              {reviewsCount}
            </div>
            <div className="text-xs font-semibold text-[#222222] mt-1.5 leading-none">
              Reviews
            </div>
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
