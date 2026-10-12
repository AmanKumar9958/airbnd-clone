"use client";

import React, { useState } from "react";
import { X, Copy, Check, MessageCircle, Mail } from "lucide-react";
import { LISTING_DATA } from "../../data/listingData";

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const { title, photos } = LISTING_DATA;
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://www.airbnb.co.in/rooms/1729476134054893611";

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-[550px] w-full flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="h-16 px-6 border-b border-neutral-200 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-[#222222]" />
          </button>
          <span className="font-semibold text-base text-[#222222]">
            Share this place
          </span>
          <div className="w-9" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Card preview */}
          <div className="flex items-center gap-4 p-3 border border-neutral-200 rounded-2xl bg-neutral-50/50">
            <img
              src={photos[0]?.url}
              alt={title}
              className="w-16 h-16 rounded-xl object-cover shrink-0"
            />
            <div className="overflow-hidden">
              <h4 className="font-semibold text-sm text-[#222222] truncate">{title}</h4>
              <p className="text-xs text-[#717171] mt-0.5">Rental unit in Gurugram · ★ 5.0</p>
            </div>
          </div>

          {/* Share Channels */}
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-[#222222]">
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 p-3.5 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
              <span>{copied ? "Copied!" : "Copy link"}</span>
            </button>
            <button
              onClick={() => window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(currentUrl)}`)}
              className="flex items-center gap-3 p-3.5 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </button>
            <button
              onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`)}
              className="flex items-center gap-3 p-3.5 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`)}
              className="flex items-center gap-3 p-3.5 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <FacebookIcon className="w-5 h-5 text-blue-600" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
