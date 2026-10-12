"use client";

import React from "react";
import { X, Clock, Users, Key, Camera, PawPrint, AlertTriangle } from "lucide-react";
import { LISTING_DATA } from "../../data/listingData";

interface HouseRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HouseRulesModal({ isOpen, onClose }: HouseRulesModalProps) {
  if (!isOpen) return null;

  const { houseRules, additionalRules } = LISTING_DATA;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-[700px] w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="h-16 px-6 border-b border-neutral-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-[#222222]" />
          </button>
          <span className="font-semibold text-base text-[#222222]">
            House rules
          </span>
          <div className="w-9" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-[#222222]">
          <p className="text-base text-neutral-600">
            You’ll be staying in someone’s home, so please treat it with care and respect.
          </p>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#222222]">Checking in and out</h4>
            <div className="space-y-3 text-base text-neutral-800">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#222222]" />
                <span>Check-in after 2:00 pm</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#222222]" />
                <span>Checkout before 11:00 am</span>
              </div>
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-[#222222]" />
                <span>Self check-in with lockbox</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h4 className="font-bold text-lg text-[#222222]">During your stay</h4>
            <div className="space-y-3 text-base text-neutral-800">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#222222]" />
                <span>4 guests maximum</span>
              </div>
              <div className="flex items-center gap-3">
                <PawPrint className="w-5 h-5 text-[#222222]" />
                <span>Pets allowed</span>
              </div>
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-[#222222]" />
                <span>Commercial photography allowed</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h4 className="font-bold text-lg text-[#222222] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Additional rules & guidelines</span>
            </h4>
            <div className="bg-neutral-50 rounded-2xl p-5 space-y-3 text-sm text-neutral-700 leading-relaxed border border-neutral-100">
              {additionalRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-black">•</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
