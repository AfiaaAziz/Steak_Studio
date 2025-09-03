"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = [
  "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",
  "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",
  "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",
  "https://images.pexels.com/photos/4109130/pexels-photo-4109130.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",
];

export default function Header() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSlide();
  };

  return (
    <header
      className="
        relative w-full overflow-hidden
        min-h-[60svh] sm:min-h-[65svh] md:min-h-[70svh]
        h-[480px] sm:h-[520px] md:h-[560px] lg:h-[600px]
      "
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden={i !== current}
        >
          <Image
            src={src}
            alt={`Food Image ${i + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
            draggable={false}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3 sm:gap-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${i === current ? "bg-brand-500 scale-110" : "bg-white/70"
              }`}
          />
        ))}
      </div>
    </header>
  );
}
