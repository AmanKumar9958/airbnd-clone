"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DescriptionModal({ isOpen, onClose }: DescriptionModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-[740px] w-full max-h-[88vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Close Button Header */}
        <div className="sticky top-0 bg-white z-20 pt-6 px-6 md:px-8 pb-2 flex items-center shrink-0">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors w-9 h-9 flex items-center justify-center text-[#222222] cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4.5 h-4.5 text-[#222222] stroke-[2.2]" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-8 text-[#222222] text-[15px] sm:text-[16px] leading-[1.6]">
          {/* Main Title */}
          <h2 className="text-[26px] font-bold text-[#222222] mb-6">
            About this space
          </h2>

          <div className="space-y-4">
            <p className="font-medium text-[#222222]">
              Welcome to The Aurea – A Luxury Boutique Stay🌿
            </p>

            <p className="text-neutral-800">
              The Aurea is a thoughtfully curated luxury boutique studio on the 12th floor, offering panoramic city views, timeless interiors, and modern comfort. Designed in soothing beige, taupe, and warm wood tones, it creates a calm, boutique-hotel ambiance with soft lighting, elegant furnishings, and carefully curated décor, ensuring a premium stay that feels both luxurious and welcoming.
            </p>

            {/* The space section */}
            <div className="pt-2">
              <h3 className="font-bold text-[17px] text-[#222222] mb-2">
                The space
              </h3>
              <p className="text-neutral-800 mb-4">
                Wake up to breathtaking skyline views as you sip your morning coffee at the breakfast counter overlooking floor-to-ceiling windows, unwind on the private balcony as the city lights come alive, or capture beautiful moments in the full-length mirror perfectly placed beside the window with the skyline as your backdrop.
              </p>
              <p className="text-neutral-800 mb-4">
                Whether you’re visiting Gurgaon for business, a romantic getaway, a staycation, or an extended stay, Aurea offers a peaceful retreat where luxury meets everyday comfort.
              </p>
              <p className="text-neutral-800 mb-4">
                The space — This is an entire private studio apartment with no shared spaces, thoughtfully furnished for couples, solo travellers, business professionals and long stays.
              </p>
            </div>

            {/* The studio includes */}
            <div className="pt-1">
              <p className="font-semibold text-[#222222] mb-3">
                The studio includes:
              </p>
              <ul className="space-y-2 text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Comfortable king-size bed with premium linens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Stylish L-shaped sofa for relaxing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Smart TV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Fully air-conditioned apartment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>High-speed Wi-Fi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Dedicated work/study desk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Spacious wardrobe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Modern bathroom with premium fittings</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Fully equipped kitchenette featuring:</span>
                  </div>
                  <ul className="pl-6 space-y-1 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="select-none text-neutral-500">*</span>
                      <span>Refrigerator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="select-none text-neutral-500">*</span>
                      <span>Induction cooktop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="select-none text-neutral-500">*</span>
                      <span>Electric kettle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="select-none text-neutral-500">*</span>
                      <span>Basic cookware & utensils</span>
                    </li>
                  </ul>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Beautiful private balcony with skyline views and cozy seating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span>Warm ambient lighting designed to create a relaxing boutique hotel experience</span>
                </li>
              </ul>
            </div>

            {/* Divider */}
            <div className="py-4">
              <div className="border-t border-[#EBEBEB]" />
            </div>

            {/* Around the property section */}
            <div>
              <h3 className="font-bold text-[17px] text-[#222222] mb-2">
                Around the property
              </h3>
              <p className="text-neutral-800 mb-4">
                Everything you need is just a short walk away.
              </p>

              {/* Cafes */}
              <div className="mb-4">
                <p className="font-semibold text-[#222222] mb-1.5 flex items-center gap-1.5">
                  <span>☕</span>
                  <span>Cafés</span>
                </p>
                <ul className="space-y-1 pl-2 text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Nautical Mile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Bakers Oven Boulangerie & Café</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Barista</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Café Melodies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Mogli’s Café</span>
                  </li>
                </ul>
              </div>

              {/* Restaurants */}
              <div className="mb-4">
                <p className="font-semibold text-[#222222] mb-1.5 flex items-center gap-1.5">
                  <span>🍽</span>
                  <span>Restaurants</span>
                </p>
                <ul className="space-y-1 pl-2 text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Bikanervala</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Krua Thai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Bunny’s Café & Restro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Burger Monk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Xingfu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Funbytes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Mr. Kimm’s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Chicago Pizza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>KFC</span>
                  </li>
                </ul>
              </div>

              {/* Entertainment & Essentials */}
              <div className="mb-4">
                <p className="font-semibold text-[#222222] mb-1.5 flex items-center gap-1.5">
                  <span>🎬</span>
                  <span>Entertainment & Essentials</span>
                </p>
                <ul className="space-y-1 pl-2 text-neutral-800">
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Wave Cinemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Reliance SMART</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Pharmacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Salon & Spa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Kids Play Area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span>Shopping outlets</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="py-4">
              <div className="border-t border-[#EBEBEB]" />
            </div>

            {/* Guest access section */}
            <div>
              <h3 className="font-bold text-[17px] text-[#222222] mb-2">
                Guest access
              </h3>
              <p className="text-neutral-800 mb-3">
                Guests will have exclusive access to the entire apartment along with the building’s common facilities.
              </p>
              <p className="font-semibold text-[#222222] mb-3">
                Inside M3M Urbana Premium you’ll have access to:
              </p>

              <ul className="space-y-3 text-neutral-800">
                <li className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span className="font-medium">Swimming Pool (18th Floor)</span>
                  </div>
                  <ul className="pl-6 space-y-1 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="select-none text-neutral-500">*</span>
                      <span>Morning: 7:00 AM – 10:00 AM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="select-none text-neutral-500">*</span>
                      <span>Evening: 5:00 PM – 9:00 PM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="select-none text-neutral-500">*</span>
                      <span>Closed every Monday for maintenance</span>
                    </li>
                  </ul>
                  <p className="text-xs text-neutral-500 pl-6 mt-0.5">
                    (Pool availability is subject to society guidelines.)
                  </p>
                </li>

                <li className="flex flex-col gap-0.5">
                  <div className="flex items-start gap-2">
                    <span className="select-none">•</span>
                    <span className="font-medium">Gym (4th Floor)</span>
                  </div>
                  <p className="text-neutral-700 pl-5 text-sm">7:00 AM – 9:00 PM</p>
                </li>

                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span className="font-medium">Pool Table (4th Floor)</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="select-none">•</span>
                  <span className="font-medium">Restaurant (4th Floor) (Chargeable)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
