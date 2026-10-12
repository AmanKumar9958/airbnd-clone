"use client";

import React from "react";
import { Grid } from "lucide-react";
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
  // Take top 5 for the desktop collage
  const collage = photos.slice(0, 5);

  return (
    <section className="relative rounded-2xl overflow-hidden mt-4">
      {/* Desktop & Tablet 5-photo grid */}
      <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-2 h-[380px] md:h-[450px] lg:h-[520px]">
        {/* Main Large Photo (Left half, 2 cols, 2 rows) */}
        {collage[0] && (
          <div
            onClick={() => onOpenModal(0)}
            className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden group bg-neutral-100"
          >
            <img
              src={collage[0].url}
              alt={collage[0].caption || "Living room"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* 2nd Photo (Top Middle-Right) */}
        {collage[1] && (
          <div
            onClick={() => onOpenModal(1)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-neutral-100"
          >
            <img
              src={collage[1].url}
              alt={collage[1].caption || "Bedroom"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* 3rd Photo (Top Right) */}
        {collage[2] && (
          <div
            onClick={() => onOpenModal(2)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-neutral-100"
          >
            <img
              src={collage[2].url}
              alt={collage[2].caption || "Infinity Pool"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* 4th Photo (Bottom Middle-Right) */}
        {collage[3] && (
          <div
            onClick={() => onOpenModal(3)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-neutral-100"
          >
            <img
              src={collage[3].url}
              alt={collage[3].caption || "Kitchen dining"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}

        {/* 5th Photo (Bottom Right) */}
        {collage[4] && (
          <div
            onClick={() => onOpenModal(4)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden group bg-neutral-100"
          >
            <img
              src={collage[4].url}
              alt={collage[4].caption || "Balcony view"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        )}
      </div>

      {/* Mobile single image banner */}
      <div
        onClick={() => onOpenModal(0)}
        className="sm:hidden relative h-[280px] w-full cursor-pointer"
      >
        <img
          src={collage[0]?.url}
          alt="Main view"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-medium">
          1 / {totalPhotosCount}
        </div>
      </div>

      {/* "Show all photos" Button at Bottom Right */}
      <button
        onClick={() => onOpenModal(0)}
        className="absolute bottom-5 right-5 hidden sm:flex items-center gap-2 bg-white text-[#222222] border border-black/80 hover:bg-neutral-50 px-3.5 py-1.5 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95"
      >
        {/* 3x3 dots icon */}
        <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
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
        <span>Show all {totalPhotosCount} photos</span>
      </button>
    </section>
  );
}
