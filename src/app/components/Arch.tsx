"use client";

import React, { useRef, useEffect, useState } from "react";

export default function Arch({ items }: { items: React.ReactElement[] }) {
  const mid = (items.length - 1) / 2;
  const [heights, setHeights] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = itemRefs.current.map((el) => el?.offsetHeight || 0);
    setHeights(newHeights);
  }, [items]);

  const visualHeight = Math.max(...heights, 0);

  return (
    <div className="flex flex-row justify-center space-x-8 items-end">
      {items.map((item, i) => {
        const baseOffset = Math.pow(i - mid, 2) * 40;
        const itemHeight = heights[i] || 0;

        // align all items based on the tallest one, so visually they're symmetric
        const adjustedHeight = itemHeight || visualHeight;
        const visualOffset = baseOffset - (visualHeight - adjustedHeight);

        return (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              itemRefs.current[i] = el;
            }}
            className="transition-transform duration-300 flex items-center justify-center"
            style={{
              transform: `translateY(-${visualOffset}px)`,
              minWidth: "12rem",
              minHeight: `${visualHeight}px`,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
