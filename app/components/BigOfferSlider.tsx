"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const offerImages = [
  {
    id: 1,
    src: "/images/offer1.png",
    alt: "Today's Special Food Menu",
    href: "/offers/1", 
  },
  {
    id: 2,
    src: "/images/offer2.png",
    alt: "Super Delicious BURGER",
    href: "/offers/2",
  },
  {
    id: 3,
    src: "/images/offer3.png",
    alt: "Triple Stack BURGER",
    href: "/offers/3",
  },
];

const BigOfferSlider = () => {
  useEffect(() => {
    const interval = setInterval(() => {}, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background-500 py-12 w-screen ml-[-16px] mr-[-16px]">
      <div className="w-full">
        <div className="text-center mb-6 px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-brand-500 mb-2">Bigg Offer</h2>
          <p className="text-Gray-200 text-lg">
            For this week, take your food, buy your best one.
          </p>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="flex animate-scroll">
            {offerImages.map((image) => (
              <div key={image.id} className="flex-shrink-0 px-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Link href={image.href}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={560}
                      height={200}
                      className="w-[560px] h-[200px] object-cover"
                    />
                  </Link>
                </div>
              </div>
            ))}

            {offerImages.map((image) => (
              <div key={`${image.id}-duplicate`} className="flex-shrink-0 px-2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Link href={image.href}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={560}
                      height={200}
                      className="w-[560px] h-[200px] object-cover"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigOfferSlider;
