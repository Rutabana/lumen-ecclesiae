"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/leonhard-niederwimmer.jpg"
          alt="Renaissance Church Interior"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full px-6 md:px-12 flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-end gap-32">
          {/* Saint Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/saint-peter.png"
              alt="Saint Peter"
              className="w-72 md:w-80 h-auto object-contain rounded-full shadow-lg"
            />
          </div>

          {/* Text Block */}
          <div className="space-y-4 md:mt-28 text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-lg">
              Lumen Ecclesiae
            </h1>
            <p className="text-lg md:text-2xl font-light drop-shadow-md">
              Your guide to the liturgy
            </p>
            <p className="text-base md:text-lg font-light max-w-md drop-shadow-md">
              Discover the depths of the liturgies of the rites of the Catholic Church
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
