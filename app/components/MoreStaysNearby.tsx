"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface NearbyStay {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: string;
}

const NEARBY_STAYS_PAGE_1: NearbyStay[] = [
  {
    id: "stay-1",
    title: "The Luxe Garden Suite1BHK (2.0) | Golf Course Road",
    image: "/stays/stay-1.jpg",
    price: "₹3,290",
    rating: "New",
  },
  {
    id: "stay-2",
    title: "Romantic Garden Retreat | Jacuzzi + Cinema",
    image: "/stays/stay-2.jpg",
    price: "₹6,000",
    rating: "5.0",
  },
  {
    id: "stay-3",
    title: "Elora by Merakey Homes | Peaceful Private Escape",
    image: "/stays/stay-3.jpg",
    price: "₹4,608",
    rating: "4.91",
  },
  {
    id: "stay-4",
    title: "Suite 2 Stay: Jacuzzi | Projector | Near 32 Avenue",
    image: "/stays/stay-4.jpg",
    price: "₹4,499",
    rating: "4.94",
  },
  {
    id: "stay-5",
    title: "Luxury Private Studio | Hot Tub | Balcony | Wi-Fi",
    image: "/stays/stay-5.jpg",
    price: "₹2,744",
    rating: "5.0",
  },
];

const NEARBY_STAYS_PAGE_2: NearbyStay[] = [
  {
    id: "stay-6",
    title: "The Glass Penthouse | Skyline Jacuzzi & Terrace",
    image: "/stays/stay-6.jpg",
    price: "₹5,800",
    rating: "4.98",
  },
  {
    id: "stay-7",
    title: "Boho Chic Studio | Projector & Floating Bed",
    image: "/stays/stay-7.jpg",
    price: "₹3,890",
    rating: "4.95",
  },
  {
    id: "stay-8",
    title: "The Urban Sanctuary | Golf Course Ext Road",
    image: "/stays/stay-8.jpg",
    price: "₹4,200",
    rating: "4.92",
  },
  {
    id: "stay-9",
    title: "Sky Villa Suite | 360° City View & Lounge",
    image: "/stays/stay-9.jpg",
    price: "₹6,500",
    rating: "5.0",
  },
  {
    id: "stay-10",
    title: "Minimalist Nordic Loft | High-Rise Balcony",
    image: "/stays/stay-10.jpg",
    price: "₹3,450",
    rating: "4.88",
  },
];

export default function MoreStaysNearby() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 2;

  const currentStays = currentPage === 1 ? NEARBY_STAYS_PAGE_1 : NEARBY_STAYS_PAGE_2;

  return (
    <section className="py-12 border-b border-[#dddddd]">
      {/* Header Row: Title on Left, Pagination Controls on Right */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#222222]">
          More stays nearby
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-sm font-normal text-[#222222]">
            {currentPage} / {totalPages}
          </span>

          <div className="flex items-center gap-2">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                currentPage === 1
                  ? "border-[#EBEBEB] text-[#CCCCCC] cursor-not-allowed bg-white"
                  : "border-[#B0B0B0] text-[#222222] hover:border-black hover:scale-104 bg-white active:scale-96"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                currentPage === totalPages
                  ? "border-[#EBEBEB] text-[#CCCCCC] cursor-not-allowed bg-white"
                  : "border-[#B0B0B0] text-[#222222] hover:border-black hover:scale-104 bg-white active:scale-96"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5 Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-4.5">
        {currentStays.map((stay) => (
          <div
            key={stay.id}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="aspect-square rounded-2xl overflow-hidden relative mb-2.5 bg-neutral-100 shadow-xs">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
              />
              <button
                type="button"
                aria-label="Save listing"
                className="absolute top-3 right-3 p-1 transition-transform active:scale-90"
              >
                <Heart className="w-5 h-5 fill-black/30 text-white stroke-[2]" />
              </button>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-[14px] text-[#222222] leading-snug line-clamp-2 tracking-tight group-hover:text-black">
              {stay.title}
            </h3>

            {/* Price & Rating */}
            <div className="text-[13px] text-[#222222] mt-1 flex items-center gap-1 font-normal">
              <span>{stay.price}</span>
              <span className="text-[#717171]">·</span>
              <span className="flex items-center gap-0.5">
                <span>★</span>
                <span>{stay.rating}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
