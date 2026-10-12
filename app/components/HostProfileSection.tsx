"use client";

import React from "react";
import { LISTING_DATA } from "../data/listingData";

export default function HostProfileSection() {
  const { host } = LISTING_DATA;
  const coHost = host.coHosts?.[0] || {
    name: "Shivika",
    avatar:
      "https://a0.muscache.com/im/pictures/user/User/original/3d3ba782-a284-49a4-a340-5dc1de9718f2.jpeg",
  };

  return (
    <section className="py-12 border-b border-[#dddddd]">
      <h2 className="text-[22px] md:text-[24px] font-semibold text-[#222222] mb-6">
        Meet your host
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 max-w-[1020px]">
        {/* Left Column: Host Card & Highlights */}
        <div className="w-full sm:w-[350px] shrink-0">
          {/* Host Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-neutral-100 flex items-center justify-between gap-6">
            {/* Left inside card: Avatar, Name & Superhost Badge */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-2.5">
                <img
                  src={host.avatar}
                  alt={host.name}
                  className="w-24 h-24 rounded-full object-cover shadow-sm"
                />
                {/* Pink verification badge with shield check */}
                <div
                  className="absolute bottom-0 right-0 w-7 h-7 bg-[#E00B41] rounded-full flex items-center justify-center text-white shadow-md ring-2 ring-white"
                  title="Identity verified"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="w-3.5 h-3.5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M7.42 14.7a1.05 1.05 0 0 1-.84-.42L3.18 9.9a1.05 1.05 0 0 1 1.63-1.32l2.5 3.1 5.4-7.56a1.05 1.05 0 0 1 1.7 1.22l-6.17 8.64a1.05 1.05 0 0 1-.82.72z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-[28px] sm:text-[30px] font-bold text-[#222222] tracking-tight leading-tight">
                {host.name}
              </h3>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#222222] mt-1">
                {/* Superhost Ribbon/Medal Icon */}
                <svg
                  viewBox="0 0 16 16"
                  className="w-3.5 h-3.5 fill-[#222222] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M8 0a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V15a1 1 0 0 0 1.6.8L8 14.2l.4.3a1 1 0 0 0 1.6-.8V7.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                </svg>
                <span>Superhost</span>
              </div>
            </div>

            {/* Right inside card: 3 Stacked Stats */}
            <div className="flex flex-col justify-between self-stretch py-1 min-w-[96px]">
              <div>
                <div className="text-[22px] font-bold text-[#222222] leading-none">
                  {host.reviewsCount}
                </div>
                <div className="text-[10px] font-semibold text-[#222222] mt-1 tracking-tight">
                  Reviews
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#EBEBEB] my-2" />

              <div>
                <div className="text-[22px] font-bold text-[#222222] leading-none flex items-center gap-0.5">
                  <span>{host.rating}</span>
                  <span className="text-sm leading-none">★</span>
                </div>
                <div className="text-[10px] font-semibold text-[#222222] mt-1 tracking-tight">
                  Rating
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#EBEBEB] my-2" />

              <div>
                <div className="text-[22px] font-bold text-[#222222] leading-none">
                  {host.monthsHosting || 7}
                </div>
                <div className="text-[10px] font-semibold text-[#222222] mt-1 tracking-tight">
                  Months hosting
                </div>
              </div>
            </div>
          </div>

          {/* Highlights below card */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 text-base text-[#222222]">
              {/* Balloon icon for Born in the 90s */}
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-[#222222] stroke-[1.6] fill-none shrink-0"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <ellipse cx="12" cy="8.5" rx="5.5" ry="6.5" />
                <polygon points="12,15 10,18 14,18" fill="#222222" stroke="none" />
                <path d="M12 18c-0.8 1.8 1.8 2.8 0 4.5" />
              </svg>
              <span>{host.generation}</span>
            </div>

            <div className="flex items-center gap-4 text-base text-[#222222]">
              {/* Briefcase icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-[#222222] stroke-[1.6] fill-none shrink-0"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="7" width="20" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
              <span>My work: {host.work}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Co-Hosts, Host Details, Message Host Button, and Safety Note */}
        <div className="flex-1 max-w-[520px]">
          {/* Lakshit is a Superhost */}
          <div className="mb-7">
            <h3 className="text-[20px] font-semibold text-[#222222] mb-2">
              {host.name} is a Superhost
            </h3>
            <p className="text-[15px] text-[#222222] leading-relaxed">
              Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
            </p>
          </div>

          {/* Co-Hosts */}
          <div className="mb-7">
            <h3 className="text-[20px] font-semibold text-[#222222] mb-3.5">
              Co-Hosts
            </h3>
            <div className="flex items-center gap-3">
              <img
                src={coHost.avatar}
                alt={coHost.name}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <span className="text-[15px] font-medium text-[#222222]">
                {coHost.name}
              </span>
            </div>
          </div>

          {/* Host details */}
          <div className="mb-6">
            <h3 className="text-[20px] font-semibold text-[#222222] mb-3">
              Host details
            </h3>
            <div className="space-y-1 text-[15px] text-[#222222]">
              <p>Response rate: {host.responseRate}</p>
              <p>{host.responseTime}</p>
            </div>
          </div>

          {/* Message host button */}
          <div className="mb-10">
            <button className="bg-[#F2F2F2] hover:bg-[#EBEBEB] text-[#222222] font-semibold text-base py-3.5 px-6 rounded-xl transition-colors active:scale-[0.99]">
              Message host
            </button>
          </div>

          {/* Payment protection notice */}
          <div className="flex items-center gap-3.5 text-xs text-[#717171] leading-normal">
            <svg
              viewBox="0 0 32 32"
              className="w-6 h-7 text-[#E00B41] shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 2.5C11.5 6 5.5 7 3.5 7.5v9c0 8.5 7 13 12.5 14.5 5.5-1.5 12.5-6 12.5-14.5v-9c-2-.5-8-1.5-12.5-5z" />
              <path
                strokeWidth="1.3"
                d="M16 11.5c-1.8 0-3 1.3-3 3.1 0 2.2 2.7 5.4 3 5.4s3-3.2 3-5.4c0-1.8-1.2-3.1-3-3.1zm0 3.8a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"
              />
            </svg>
            <p>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
