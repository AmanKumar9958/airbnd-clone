"use client";

import React from "react";
import { Waves, Dumbbell, Key } from "lucide-react";

export default function Highlights() {
  const items = [
    {
      icon: <Waves className="w-6 h-6 text-[#222222]" />,
      title: "Dive right in",
      description: "This is one of the few places in the area with a pool.",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#222222]" />,
      title: "Home gym",
      description: "The treadmill, stationary bike, yoga mat and free weights are ready for workouts.",
    },
    {
      icon: <Key className="w-6 h-6 text-[#222222]" />,
      title: "Self check-in",
      description: "Check yourself in with the lockbox.",
    },
  ];

  return (
    <section className="py-8 border-b border-[#dddddd] space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-6">
          <div className="mt-0.5 shrink-0">{item.icon}</div>
          <div>
            <h4 className="font-semibold text-base text-[#222222]">{item.title}</h4>
            <p className="text-sm text-[#717171] mt-0.5 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
