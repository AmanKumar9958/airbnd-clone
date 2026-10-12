"use client";

import React, { useState } from "react";
import { Share, Heart } from "lucide-react";

interface ListingHeaderProps {
  title: string;
  onShareClick?: () => void;
}

export default function ListingHeader({ title, onShareClick }: ListingHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <section className="pt-6 pb-4">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Title */}
        <h1 className="text-2xl sm:text-[26px] font-semibold text-[#222222] leading-tight max-w-[850px]">
          {title}
        </h1>

        {/* Share and Save Action Buttons */}
        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 text-sm font-semibold text-[#222222] underline hover:bg-[#f7f7f7] py-2 px-3 rounded-lg transition-colors"
          >
            <Share className="w-4 h-4 text-[#222222]" />
            <span>Share</span>
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 text-sm font-semibold text-[#222222] underline hover:bg-[#f7f7f7] py-2 px-3 rounded-lg transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isSaved ? "fill-[#FF385C] text-[#FF385C]" : "text-[#222222]"
              }`}
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
