"use client";

import React from "react";
import { PhotoItem } from "../data/listingData";

interface PhotoGalleryProps {
  photos: PhotoItem[];
  totalPhotosCount?: number;
  onOpenModal: (initialIndex?: number) => void;
}

export default function PhotoGallery({
  photos,
  totalPhotosCount = 76,
  onOpenModal,
}: PhotoGalleryProps) {
  // Exact 5 photos from the user's reference screenshot:
  // Slot 1 (Left 2 cols): Living room daytime
  const photoLeft =
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/26f90a0b-929e-44a3-b7d2-739f2891c02c.jpeg";

  // Slot 2 (Top-Middle): Daytime living room & bed overview
  const photoTopMiddle =
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/810da56f-7ce4-4b78-be65-4aee1be5c16c.jpeg";

  // Slot 3 (Bottom-Middle): TV console with 'AURA HOUSE' on screen
  const photoBottomMiddle =
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/7775ef82-b7b5-4c9a-b36e-8973cb1fe276.jpeg";

  // Slot 4 (Top-Right): Balcony at night with round wicker chair and wine glasses
  const photoTopRight =
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/cad63bf7-aaeb-43b6-92c3-b0253eca42bf.jpeg";

  // Slot 5 (Bottom-Right): Master bedroom with glowing headboard & basket
  const photoBottomRight =
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/fffd8e76-04a8-4cee-89df-b490d6e29b85.jpeg";

  return (
    <section className="relative rounded-2xl overflow-hidden mt-3 sm:mt-4">
      {/* Desktop & Tablet 5-photo grid - Compact height matching user reference */}
      <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-2 h-[280px] sm:h-[320px] md:h-[355px] lg:h-[380px]">
        {/* 1. Main Large Photo (Left: col 1-2, row 1-2) */}
        <div
          onClick={() => onOpenModal(0)}
          className="col-start-1 col-end-3 row-start-1 row-end-3 relative cursor-pointer overflow-hidden group bg-neutral-100"
        >
          <img
            src={photoLeft}
            alt="Living room daytime"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* 2. Top-Middle (col 3, row 1): Living room overview */}
        <div
          onClick={() => onOpenModal(8)}
          className="col-start-3 col-end-4 row-start-1 row-end-2 relative cursor-pointer overflow-hidden group bg-neutral-100"
        >
          <img
            src={photoTopMiddle}
            alt="Living room daytime view"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* 3. Bottom-Middle (col 3, row 2): TV console view */}
        <div
          onClick={() => onOpenModal(13)}
          className="col-start-3 col-end-4 row-start-2 row-end-3 relative cursor-pointer overflow-hidden group bg-neutral-100"
        >
          <img
            src={photoBottomMiddle}
            alt="TV console view"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* 4. Top-Right (col 4, row 1): Balcony night view with wine glasses */}
        <div
          onClick={() => onOpenModal(4)}
          className="col-start-4 col-end-5 row-start-1 row-end-2 relative cursor-pointer overflow-hidden group bg-neutral-100"
        >
          <img
            src={photoTopRight}
            alt="Balcony night view"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* 5. Bottom-Right (col 4, row 2): Master bedroom suite */}
        <div
          onClick={() => onOpenModal(1)}
          className="col-start-4 col-end-5 row-start-2 row-end-3 relative cursor-pointer overflow-hidden group bg-neutral-100"
        >
          <img
            src={photoBottomRight}
            alt="Master bedroom suite"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
      </div>

      {/* Mobile single image banner */}
      <div
        onClick={() => onOpenModal(0)}
        className="sm:hidden relative h-[250px] w-full cursor-pointer"
      >
        <img
          src={photoLeft}
          alt="Main view"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-medium">
          1 / {totalPhotosCount}
        </div>
      </div>

      {/* "Show all photos" Button at Bottom Right */}
      <button
        onClick={() => onOpenModal(0)}
        className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 bg-white text-[#222222] border border-black hover:bg-neutral-50 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-all active:scale-95 z-10"
      >
        {/* 3x3 dots icon */}
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current">
          <circle cx="3" cy="3" r="1.5" />
          <circle cx="8" cy="3" r="1.5" />
          <circle cx="13" cy="3" r="1.5" />
          <circle cx="3" cy="8" r="1.5" />
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="13" cy="8" r="1.5" />
          <circle cx="3" cy="13" r="1.5" />
          <circle cx="8" cy="13" r="1.5" />
          <circle cx="13" cy="13" r="1.5" />
        </svg>
        <span>Show all photos</span>
      </button>
    </section>
  );
}
