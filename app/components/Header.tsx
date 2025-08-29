"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const images = [
  "/images/chicken-burger.jpg",
  "/images/chicken-burger.jpg",
  "/images/chicken-burger.jpg",
  "/images/chicken-burger.jpg",
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{
            width: 1440,
            height: 408,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={img}
            alt={`Food Image ${index + 1}`}
            width={1440}
            height={408}
            className="object-cover rounded-lg"
            priority
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full p-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 p-4 text-white">
          <p className="text-sm font-semibold text-brand-500 mb-2">
            Best in Town
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            ENJOY OUR CHICKEN
            <br className="hidden sm:inline" />
            <span className="text-brand-500">BURGER</span>
            <br className="hidden sm:inline" /> FAST FOOD
          </h1>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <Link href="/menu">
              <button className="px-6 py-3 bg-brand-500 text-white font-semibold rounded-full transition duration-300 ease-in-out text-base sm:text-lg">
                Order Now
              </button>
            </Link>
            <p className="text-lg font-medium">Price : $10.50</p>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 z-20 flex justify-center space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? "bg-brand-500 scale-110"
                : "bg-white opacity-50"
              }`}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
