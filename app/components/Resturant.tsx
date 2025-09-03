import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const OurRestaurant = () => {
  return (
    <section className="bg-background-500 py-16 sm:py-20 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative w-full max-w-[489px] mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-4 lg:gap-[10px]">
              <div className="relative h-[200px] lg:h-[153px] w-full lg:w-[230px] overflow-hidden">
                <Image
                  src="/images/Resturant1.png"
                  alt="Chef cooking"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="relative h-[200px] lg:h-[153px] w-full lg:w-[230px] overflow-hidden">
                <Image
                  src="/images/Resturant2.png"
                  alt="Diners at a table"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative mt-4 lg:mt-[10px] h-[280px] lg:h-[320px] w-full lg:w-[470px] overflow-hidden">
              <Image
                src="/images/Resturant3.png"
                alt="People eating at a restaurant"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-sm font-semibold text-brand-500 mb-2">
              OUR RESTAURANT
            </h4>
            <h2 className="text-4xl font-bold text-Gray-200 leading-tight mb-8">
              For every special occasion
              <br />
              there&apos;s heritaste
            </h2>
            <p className="text-Gray-200 mb-8">
              Indignation and dislike men who are so beguiled demoralized by the
              charms of pleasure of the moment. Success Story.
            </p>

            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-brand-500 flex items-center justify-center">
                <Image
                  src="/images/success.png"
                  alt="Book Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-500 mb-1">
                  Success Story
                </h3>
                <p className="text-Gray-200 mb-4">
                  Certain circumstances and owing to the claims of duty
                  obligations of business it will frequently.
                </p>
                <Link href="/about#story">
                  <button className="flex items-center text-brand-500 font-semibold transition-colors duration-300 border-2 border-brand-500 rounded-full px-4 py-2 hover:bg-brand-500 hover:text-white">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-brand-500 flex items-center justify-center">
                <Image
                  src="/images/passionate.png"
                  alt="Chef Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-500 mb-1">
                  Passionate Chefs
                </h3>
                <p className="text-Gray-200 mb-4">
                  Duty or the obligations of business it frequently occur
                  pleasures have to be repudiated.
                </p>
                <Link href="/about#chef">
                  <button className="flex items-center text-brand-500 font-semibold transition-colors duration-300 border-2 border-brand-500 rounded-full px-4 py-2 hover:bg-brand-500 hover:text-white">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRestaurant;
