"use client";

import React, { useState } from "react";

interface HoverPopupProps {
  children: React.ReactNode | React.ReactElement[];
  popups: { text: string; position?: "left" | "right" }[];
}

export default function HoverPopup({ children, popups }: HoverPopupProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <>
          {popups.map((popup, index) => (
            <div
              key={index}
              className="absolute w-64 p-4 text-sm bg-[#fdf6e3]/70 text-[#030509] border-2 border-[#5a2626] rounded-lg shadow-lg z-50"
              style={{
                top: `${index * 80}px`,
                left: popup.position === "left" ? undefined : "100%",
                right: popup.position === "left" ? "100%" : undefined,
                marginLeft: popup.position === "left" ? undefined : "1rem",
                marginRight: popup.position === "left" ? "1rem" : undefined,
                position: "absolute",
              }}
            >
              {popup.text}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
