"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import ListingHeader from "./components/ListingHeader";
import PhotoGallery from "./components/PhotoGallery";
import PropertyOverview from "./components/PropertyOverview";
import Highlights from "./components/Highlights";
import DescriptionSection from "./components/DescriptionSection";
import SleepingArrangements from "./components/SleepingArrangements";
import AmenitiesSection from "./components/AmenitiesSection";
import CalendarSection from "./components/CalendarSection";
import BookingWidget from "./components/BookingWidget";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import HostProfileSection from "./components/HostProfileSection";
import ThingsToKnow from "./components/ThingsToKnow";
import MoreStaysNearby from "./components/MoreStaysNearby";
import Footer from "./components/Footer";
import MobileBookingBar from "./components/MobileBookingBar";

// Modals
import PhotoModal from "./components/modals/PhotoModal";
import AmenitiesModal from "./components/modals/AmenitiesModal";
import DescriptionModal from "./components/modals/DescriptionModal";
import HouseRulesModal from "./components/modals/HouseRulesModal";
import ShareModal from "./components/modals/ShareModal";

import { LISTING_DATA } from "./data/listingData";

export default function ListingPage() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [photoModalSection, setPhotoModalSection] = useState<string>("living-room");
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openPhotoModal = (sectionId: string = "living-room") => {
    setPhotoModalSection(sectionId);
    setIsPhotoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#FF385C]/20 selection:text-black">
      {/* 1. Global Navigation Bar */}
      <Header />

      {/* 2. Main Listing Container */}
      <main className="max-w-[1280px] mx-auto px-6 lg:px-20 pb-16">
        {/* Title and Action Buttons */}
        <ListingHeader
          title={LISTING_DATA.title}
          onShareClick={() => setIsShareModalOpen(true)}
        />

        {/* 5-Photo Grid Gallery */}
        <PhotoGallery
          photos={LISTING_DATA.photos}
          totalPhotosCount={76}
          onOpenModal={openPhotoModal}
        />

        {/* Two-Column Details and Booking Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-8 relative">
          {/* Left Column (Listing Details) */}
          <div className="w-full lg:w-[58%] xl:w-[62%] divide-y divide-[#dddddd]">
            <PropertyOverview
              propertyType={LISTING_DATA.propertyType}
              location={LISTING_DATA.location}
              capacity={LISTING_DATA.capacity}
              rating={LISTING_DATA.rating}
              reviewsCount={LISTING_DATA.reviewsCount}
              host={LISTING_DATA.host}
            />

            <Highlights />

            <DescriptionSection
              onOpenModal={() => setIsDescriptionModalOpen(true)}
            />

            <SleepingArrangements />

            <AmenitiesSection
              onOpenModal={() => setIsAmenitiesModalOpen(true)}
            />

            <CalendarSection />
          </div>

          {/* Right Column (Sticky Booking Widget) */}
          <div className="w-full lg:w-[42%] xl:w-[38%] shrink-0">
            <BookingWidget />
          </div>
        </div>

        {/* Full-Width Section 1: Reviews */}
        <ReviewsSection />

        {/* Full-Width Section 2: Location & Map */}
        <LocationSection />

        {/* Full-Width Section 3: Meet Your Host */}
        <HostProfileSection />

        {/* Full-Width Section 4: Things to Know */}
        <ThingsToKnow
          onOpenRulesModal={() => setIsRulesModalOpen(true)}
        />

        {/* Full-Width Section 5: More Stays Nearby */}
        <MoreStaysNearby />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Mobile Sticky Bottom Booking Bar */}
      <MobileBookingBar />

      {/* Modals */}
      <PhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        initialSectionId={photoModalSection}
        onShareClick={() => setIsShareModalOpen(true)}
      />

      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        onClose={() => setIsAmenitiesModalOpen(false)}
      />

      <DescriptionModal
        isOpen={isDescriptionModalOpen}
        onClose={() => setIsDescriptionModalOpen(false)}
      />

      <HouseRulesModal
        isOpen={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
