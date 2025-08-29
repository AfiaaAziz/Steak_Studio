"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 4 food hero photos from Pexels
const images = [
  "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",
  "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",
  "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",

  "https://images.pexels.com/photos/4109130/pexels-photo-4109130.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=1",
];

export default function Header() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1)),
      2000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative w-full h-[500px] sm:h-[520px] md:h-[560px] lg:h-[600px] overflow-hidden">
      {/* Slides: full-bleed background */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
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
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Copy */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full p-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 p-4 text-white">
          <p className="text-sm font-semibold text-brand-500 mb-2">Best in Town</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            ENJOY OUR CHICKEN
            <br className="hidden sm:inline" />
            <span className="text-brand-500">BURGER</span>
            <br className="hidden sm:inline" /> FAST FOOD
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link href="/menu">
              <button className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-full transition duration-300 ease-in-out text-base sm:text-lg">
                Order Now
              </button>
            </Link>
            <p className="text-lg font-medium">Price : $10.50</p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              i === current ? "bg-brand-500 scale-110" : "bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  );
}
