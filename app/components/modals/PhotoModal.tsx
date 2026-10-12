"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { PHOTO_TOUR_SECTIONS, PhotoTourSection } from "../../data/photoTourData";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSectionId?: string;
  onShareClick?: () => void;
}

export default function PhotoModal({
  isOpen,
  onClose,
  initialSectionId = "living-room",
  onShareClick,
}: PhotoModalProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>(initialSectionId);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isUserScrollingRef = useRef<boolean>(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to initial section on open
  useEffect(() => {
    if (isOpen) {
      if (initialSectionId && initialSectionId !== "living-room") {
        const timer = setTimeout(() => {
          const el = document.getElementById(`tour-section-${initialSectionId}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
        return () => clearTimeout(timer);
      } else {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
        }
      }
    }
  }, [isOpen, initialSectionId]);

  // Track active section during scroll
  const handleScroll = () => {
    if (isUserScrollingRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollPos = container.scrollTop + 140;

    for (let i = PHOTO_TOUR_SECTIONS.length - 1; i >= 0; i--) {
      const sec = PHOTO_TOUR_SECTIONS[i];
      const el = document.getElementById(`tour-section-${sec.id}`);
      if (el && el.offsetTop <= scrollPos) {
        setActiveSectionId(sec.id);
        break;
      }
    }
  };

  // Smooth animated scroll to section when choosing from thumbnail ribbon
  const scrollToSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    isUserScrollingRef.current = true;

    const el = document.getElementById(`tour-section-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="fixed inset-0 z-50 bg-white overflow-y-auto scroll-smooth animate-in fade-in duration-200"
    >
      {/* 1. Sticky Top Navigation Bar */}
      <header className="sticky top-0 bg-white z-40 h-16 px-6 sm:px-12 lg:px-20 border-b border-neutral-100 flex items-center justify-between">
        {/* Back Arrow Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Back to listing"
          className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 text-[#222222] group-hover:scale-110 transition-transform" strokeWidth={2.4} />
        </button>

        {/* Action Buttons: Share and Save */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onShareClick}
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:underline px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <Share className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-[#222222] hover:underline px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isSaved ? "fill-[#E00B41] text-[#E00B41]" : "text-[#222222]"
              }`}
            />
            <span className="hidden sm:inline">{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </header>

      {/* 2. Main Photo Tour Content */}
      <main className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 pb-32">
        {/* Header Heading */}
        <div className="pt-6 pb-2">
          <h1 className="text-[28px] sm:text-[34px] font-bold text-[#222222] tracking-tight">
            Photo tour
          </h1>
        </div>

        {/* Top Thumbnail Ribbon with Smooth Scroll Trigger */}
        <nav
          aria-label="Photo tour sections"
          className="pt-4 pb-8 overflow-x-auto no-scrollbar border-b border-[#ebebeb] select-none"
        >
          <div className="flex items-start gap-4 sm:gap-5 min-w-max pb-1">
            {PHOTO_TOUR_SECTIONS.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="flex flex-col items-start text-left group cursor-pointer transition-all active:scale-95"
                >
                  {/* Thumbnail Image Box */}
                  <div
                    className={`w-[110px] h-[72px] sm:w-[126px] sm:h-[82px] rounded-xl overflow-hidden bg-neutral-100 border-2 transition-all duration-200 ${
                      isActive
                        ? "border-black ring-2 ring-black ring-offset-2"
                        : "border-transparent group-hover:border-neutral-400 opacity-90 group-hover:opacity-100"
                    }`}
                  >
                    <img
                      src={sec.thumbnail}
                      alt={sec.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Section Label */}
                  <span
                    className={`text-xs sm:text-[13px] mt-2 transition-colors ${
                      isActive
                        ? "font-bold text-black"
                        : "font-medium text-[#222222] group-hover:text-black"
                    }`}
                  >
                    {sec.name}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* 3. Room Sections with Sticky Left Headers & Right Photo Grids */}
        <div className="divide-y divide-[#ebebeb]">
          {PHOTO_TOUR_SECTIONS.map((section) => (
            <section
              key={section.id}
              id={`tour-section-${section.id}`}
              className="pt-12 pb-16 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
                {/* Left Column: STICKY TITLE & AMENITIES */}
                <div className="lg:col-span-4 lg:sticky lg:top-24 self-start pr-2">
                  <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#222222] tracking-tight leading-tight">
                    {section.name}
                  </h2>
                  <p className="text-sm text-[#717171] mt-2.5 leading-relaxed font-normal">
                    {section.features}
                    {section.hasShowMore && (
                      <span className="inline">
                        {" "}
                        ·{" "}
                        <button
                          type="button"
                          className="underline text-[#222222] font-semibold hover:text-black cursor-pointer inline"
                        >
                          Show more
                        </button>
                      </span>
                    )}
                  </p>
                </div>

                {/* Right Column: PHOTOS IN AIRBNB LAYOUT */}
                <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                  {renderSectionPhotos(section)}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

// Helper to render responsive photo layouts matching Airbnb's masonry rhythms
function renderSectionPhotos(section: PhotoTourSection) {
  const { photos, layoutType } = section;

  if (layoutType === "living_room") {
    // Living Room (7 photos): Pair -> Wide Single -> Pair -> Pair
    return (
      <div className="space-y-3 sm:space-y-4">
        {/* Row 1: Pair */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <PhotoCard photo={photos[0]} aspect="aspect-[4/3] sm:aspect-[3/4]" />
          <PhotoCard photo={photos[1]} aspect="aspect-[4/3] sm:aspect-[3/4]" />
        </div>

        {/* Row 2: Wide Single */}
        {photos[2] && (
          <PhotoCard photo={photos[2]} aspect="aspect-[16/10] sm:aspect-[16/9]" />
        )}

        {/* Row 3: Pair */}
        {photos[3] && photos[4] && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <PhotoCard photo={photos[3]} aspect="aspect-[4/3]" />
            <PhotoCard photo={photos[4]} aspect="aspect-[4/3]" />
          </div>
        )}

        {/* Row 4: Pair */}
        {photos[5] && photos[6] && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <PhotoCard photo={photos[5]} aspect="aspect-[3/4]" />
            <PhotoCard photo={photos[6]} aspect="aspect-[3/4]" />
          </div>
        )}
      </div>
    );
  }

  if (layoutType === "kitchen") {
    // Kitchen (5 photos): 1 Tall on left + 2 Stacked on right, then 1 Pair
    return (
      <div className="space-y-3 sm:space-y-4">
        {/* Row 1: 1 Tall left + 2 Stacked right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-stretch">
          <PhotoCard photo={photos[0]} aspect="h-full min-h-[300px] sm:min-h-[440px]" />
          <div className="flex flex-col gap-3 sm:gap-4 justify-between">
            {photos[1] && <PhotoCard photo={photos[1]} aspect="aspect-[4/3]" />}
            {photos[2] && <PhotoCard photo={photos[2]} aspect="aspect-[4/3]" />}
          </div>
        </div>

        {/* Row 2: Pair */}
        {photos[3] && photos[4] && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <PhotoCard photo={photos[3]} aspect="aspect-[4/3]" />
            <PhotoCard photo={photos[4]} aspect="aspect-[4/3]" />
          </div>
        )}
      </div>
    );
  }

  if (layoutType === "bedroom") {
    // Bedroom (5 photos): Pair -> Wide Single -> Pair
    return (
      <div className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <PhotoCard photo={photos[0]} aspect="aspect-[4/3] sm:aspect-[3/4]" />
          <PhotoCard photo={photos[1]} aspect="aspect-[4/3] sm:aspect-[3/4]" />
        </div>
        {photos[2] && (
          <PhotoCard photo={photos[2]} aspect="aspect-[16/10] sm:aspect-[16/9]" />
        )}
        {photos[3] && photos[4] && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <PhotoCard photo={photos[3]} aspect="aspect-[4/3]" />
            <PhotoCard photo={photos[4]} aspect="aspect-[4/3]" />
          </div>
        )}
      </div>
    );
  }

  if (layoutType === "bathroom") {
    // Bathroom (5 photos): 1 Tall + 2 Stacked, then 1 Pair
    return (
      <div className="space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-stretch">
          <PhotoCard photo={photos[0]} aspect="h-full min-h-[300px] sm:min-h-[440px]" />
          <div className="flex flex-col gap-3 sm:gap-4 justify-between">
            {photos[1] && <PhotoCard photo={photos[1]} aspect="aspect-[4/3]" />}
            {photos[2] && <PhotoCard photo={photos[2]} aspect="aspect-[4/3]" />}
          </div>
        </div>
        {photos[3] && photos[4] && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <PhotoCard photo={photos[3]} aspect="aspect-[4/3]" />
            <PhotoCard photo={photos[4]} aspect="aspect-[4/3]" />
          </div>
        )}
      </div>
    );
  }

  if (layoutType === "gym") {
    // Gym (3 photos): 1 Wide Single -> 1 Pair
    return (
      <div className="space-y-3 sm:space-y-4">
        {photos[0] && (
          <PhotoCard photo={photos[0]} aspect="aspect-[16/10] sm:aspect-[16/9]" />
        )}
        {photos[1] && photos[2] && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <PhotoCard photo={photos[1]} aspect="aspect-[4/3]" />
            <PhotoCard photo={photos[2]} aspect="aspect-[4/3]" />
          </div>
        )}
      </div>
    );
  }

  // Standard fallback
  return (
    <div className="space-y-3 sm:space-y-4">
      {photos[0] && (
        <PhotoCard photo={photos[0]} aspect="aspect-[16/10] sm:aspect-[16/9]" />
      )}
      {photos.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {photos.slice(1).map((p, idx) => (
            <PhotoCard key={idx} photo={p} aspect="aspect-[4/3]" />
          ))}
        </div>
      )}
    </div>
  );
}

// Individual Photo Card with subtle hover zoom
function PhotoCard({
  photo,
  aspect = "aspect-[4/3]",
}: {
  photo: { url: string; caption?: string };
  aspect?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-neutral-100 group cursor-pointer ${aspect}`}>
      <img
        src={photo.url}
        alt={photo.caption || "Listing photograph"}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
    </div>
  );
}
