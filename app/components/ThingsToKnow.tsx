"use client";

import React from "react";

interface ThingsToKnowProps {
  onOpenRulesModal: () => void;
}

export default function ThingsToKnow({ onOpenRulesModal }: ThingsToKnowProps) {
  return (
    <section className="py-12 border-b border-[#dddddd]">
      <h2 className="text-[22px] md:text-[24px] font-semibold text-[#222222] mb-8">
        Things to know
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Column 1: Cancellation policy */}
        <div>
          {/* Calendar with X icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-[#222222] stroke-[1.6] fill-none mb-4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="9.5" y1="13.5" x2="14.5" y2="18.5" />
            <line x1="14.5" y1="13.5" x2="9.5" y2="18.5" />
          </svg>

          <h3 className="font-semibold text-base text-[#222222] mb-2">
            Cancellation policy
          </h3>

          <div className="text-sm text-[#222222] leading-relaxed space-y-1 mb-3">
            <p>
              Free cancellation before 26 October. After that, the reservation is
              non-refundable.
            </p>
            <p>Review this host&apos;s full policy for details.</p>
          </div>

          <button
            onClick={onOpenRulesModal}
            className="font-semibold text-sm text-[#222222] underline hover:text-black block transition-opacity hover:opacity-80"
          >
            Learn more
          </button>
        </div>

        {/* Column 2: House rules */}
        <div>
          {/* Key icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-[#222222] stroke-[1.6] fill-none mb-4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="8" cy="15" r="4" />
            <path d="M10.8 12.2L19 4" />
            <path d="M18 5l2 2" />
            <path d="M15.5 7.5l1.5 1.5" />
          </svg>

          <h3 className="font-semibold text-base text-[#222222] mb-2">
            House rules
          </h3>

          <div className="text-sm text-[#222222] leading-relaxed space-y-1 mb-3">
            <p>Check-in after 2:00 pm</p>
            <p>Checkout before 11:00 am</p>
            <p>4 guests maximum</p>
          </div>

          <button
            onClick={onOpenRulesModal}
            className="font-semibold text-sm text-[#222222] underline hover:text-black block transition-opacity hover:opacity-80"
          >
            Learn more
          </button>
        </div>

        {/* Column 3: Safety & property */}
        <div>
          {/* Shield icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-[#222222] stroke-[1.6] fill-none mb-4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>

          <h3 className="font-semibold text-base text-[#222222] mb-2">
            Safety &amp; property
          </h3>

          <div className="text-sm text-[#222222] leading-relaxed space-y-1 mb-3">
            <p>Exterior security cameras on property</p>
            <p>Carbon monoxide alarm</p>
            <p>Smoke alarm</p>
          </div>

          <button
            onClick={onOpenRulesModal}
            className="font-semibold text-sm text-[#222222] underline hover:text-black block transition-opacity hover:opacity-80"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
