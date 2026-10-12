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
  const photoLeft =
    photos.find((p) => p.url.includes("26f90a0b"))?.url ||
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/26f90a0b-929e-44a3-b7d2-739f2891c02c.jpeg";

  const photoTopMiddle =
    photos.find((p) => p.url.includes("57d18950"))?.url ||
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/57d18950-58b9-4c58-8aff-ffdc5b73673d.jpeg";

  const photoBottomMiddle =
    photos.find((p) => p.url.includes("34b2ffd4"))?.url ||
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/34b2ffd4-7480-40e2-a66b-619daf5c506a.jpeg";

  const photoTopRight =
    photos.find((p) => p.url.includes("fffd8e76"))?.url ||
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/fffd8e76-04a8-4cee-89df-b490d6e29b85.jpeg";

  const photoBottomRight =
    photos.find((p) => p.url.includes("810da56f"))?.url ||
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/810da56f-7ce4-4b78-be65-4aee1be5c16c.jpeg";

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
