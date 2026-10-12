"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Share, Heart } from "lucide-react";
import { PhotoItem } from "../../data/listingData";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  initialIndex?: number;
}

export default function PhotoModal({
  isOpen,
  onClose,
  photos,
  initialIndex = 0,
}: PhotoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");

  if (!isOpen) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden animate-in fade-in duration-200">
      {/* Modal Top Header */}
      <div className="h-16 px-6 border-b border-neutral-200 flex items-center justify-between shrink-0 bg-white z-10">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close photo tour"
        >
          <X className="w-5 h-5 text-[#222222]" />
        </button>

        <div className="text-sm font-semibold text-[#222222]">
          {viewMode === "slider" ? `${currentIndex + 1} / ${photos.length}` : "All Photos"}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode(viewMode === "slider" ? "grid" : "slider")}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors mr-2"
          >
            {viewMode === "slider" ? "Grid view" : "Slider view"}
          </button>
          <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
            <Share className="w-4 h-4 text-[#222222]" />
          </button>
          <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
            <Heart className="w-4 h-4 text-[#222222]" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === "slider" ? (
        <div className="flex-1 relative flex items-center justify-center bg-black/95 p-4 select-none">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Photo */}
          <div className="max-w-[1000px] max-h-[80vh] flex flex-col items-center justify-center">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.caption || `Photo ${currentIndex + 1}`}
              className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            {currentPhoto.caption && (
              <p className="text-white text-sm text-center mt-4 max-w-[700px] font-normal leading-relaxed text-neutral-300">
                {currentPhoto.caption}
              </p>
            )}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      ) : (
        /* Grid View Mode */
        <div className="flex-1 overflow-y-auto p-6 md:p-12 max-w-[1100px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, idx) => (
              <div
                key={photo.id || idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setViewMode("slider");
                }}
                className="relative group cursor-pointer aspect-4/3 rounded-xl overflow-hidden bg-neutral-100"
              >
                <img
                  src={photo.url}
                  alt={`Photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Photo {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
