"use client";

import React from "react";
import { Star, ShieldCheck, Briefcase, Sparkles, MessageSquare, Shield } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export default function HostProfileSection() {
  const { host } = LISTING_DATA;

  return (
    <section className="py-12 border-b border-[#dddddd]">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-6">
        Meet your Host
      </h3>

      <div className="flex flex-col lg:flex-row gap-12 items-start max-w-[1020px]">
        {/* Passport Card (Airbnb Signature UI) */}
        <div className="w-full sm:w-[380px] bg-white border border-[#dddddd] rounded-3xl p-8 shadow-xl flex flex-col items-center text-center">
          {/* Avatar and Superhost Badge */}
          <div className="relative mb-4">
            <img
              src={host.avatar}
              alt={host.name}
              className="w-28 h-28 rounded-full object-cover shadow-sm ring-4 ring-white"
            />
            <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-2 rounded-full shadow-md">
              <ShieldCheck className="w-5 h-5 fill-white text-[#FF385C]" />
            </div>
          </div>

          <h4 className="text-2xl font-bold text-[#222222]">{host.name}</h4>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#222222] mt-1">
            <Sparkles className="w-4 h-4 text-[#FF385C]" />
            <span>{host.badge}</span>
          </div>

          {/* 3 Stats Columns */}
          <div className="w-full grid grid-cols-3 divide-x divide-neutral-200 mt-6 pt-6 border-t border-neutral-100">
            <div>
              <div className="text-xl font-bold text-[#222222]">{host.reviewsCount}</div>
              <div className="text-[11px] text-[#717171] uppercase font-semibold tracking-wider mt-0.5">
                Reviews
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#222222] flex items-center justify-center gap-0.5">
                <span>{host.rating}</span>
                <Star className="w-3.5 h-3.5 fill-current text-black" />
              </div>
              <div className="text-[11px] text-[#717171] uppercase font-semibold tracking-wider mt-0.5">
                Rating
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#222222]">{host.yearsHosting}</div>
              <div className="text-[11px] text-[#717171] uppercase font-semibold tracking-wider mt-0.5">
                Hosting
              </div>
            </div>
          </div>
        </div>

        {/* Host Details & Description */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-base text-[#222222]">
              <Briefcase className="w-5 h-5 text-[#222222] shrink-0" />
              <span>My work: {host.work}</span>
            </div>
            <div className="flex items-center gap-4 text-base text-[#222222]">
              <Sparkles className="w-5 h-5 text-[#222222] shrink-0" />
              <span>{host.generation}</span>
            </div>
          </div>

          <div className="border-t border-[#ebebeb] pt-6 space-y-2">
            <h5 className="font-semibold text-base text-[#222222]">
              Host details
            </h5>
            <p className="text-sm text-[#222222]">Response rate: {host.responseRate}</p>
            <p className="text-sm text-[#222222]">{host.responseTime}</p>
          </div>

          <div className="pt-2">
            <button className="bg-black hover:bg-neutral-800 text-white font-semibold text-base py-3.5 px-6 rounded-xl transition-colors active:scale-98 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Message Host</span>
            </button>
          </div>

          {/* Security Assurance */}
          <div className="pt-4 border-t border-[#ebebeb] flex items-start gap-4 text-xs text-[#717171]">
            <Shield className="w-6 h-6 text-[#FF385C] shrink-0 mt-0.5" />
            <p>
              To protect your payment, never transfer money or communicate outside of the Airbnb
              website or app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
