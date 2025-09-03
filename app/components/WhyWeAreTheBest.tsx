import React from "react";
import Image from "next/image";

const WhyWeAreTheBest = () => {
  return (
    <section className="bg-background-500 py-16 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-brand-500 font-semibold text-lg mb-12 text-center">
          Why We are the best
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          <div
            role="button"
            tabIndex={0}
            className="
              group relative flex flex-col items-center justify-center
              w-full aspect-square p-8
              rounded-none ring-0
              bg-background-500 text-Gray-200
              transition-colors duration-300 cursor-pointer select-none
              hover:bg-brand-500 hover:text-white
              focus-visible:bg-brand-500 focus-visible:text-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
              active:translate-y-[1px]
            "
          >
            <div className="relative w-32 h-32 mb-6">
              <Image src="/images/passionate.png" alt="Passionate Chefs" fill className="object-contain" />
              <div
                className="
                  absolute -right-2 top-0 bg-brand-500 text-white rounded-full w-10 h-10
                  flex items-center justify-center text-xl font-bold
                  border-4 border-background-500 transition-colors
                  group-hover:bg-white group-hover:text-brand-500
                  group-focus-visible:bg-white group-focus-visible:text-brand-500
                "
              >
                1
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Passionate Chefs</h3>
            <p className="mb-6">
              Beguiled and demoralized by all get charms pleasure the moments
              ever so blinded by desire.
            </p>
          </div>

          <div
            role="button"
            tabIndex={0}
            className="
              group relative flex flex-col items-center justify-center
              w-full aspect-square p-8
              rounded-none ring-0
              bg-background-500 text-Gray-200
              transition-colors duration-300 cursor-pointer select-none
              hover:bg-brand-500 hover:text-white
              focus-visible:bg-brand-500 focus-visible:text-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
              active:translate-y-[1px]
            "
          >
            <div className="relative w-32 h-32 mb-6">
              <Image src="/images/Foods.png" alt="100% Fresh Foods" fill className="object-contain" />
              <div
                className="
                  absolute -right-2 top-0 bg-brand-500 text-white rounded-full w-10 h-10
                  flex items-center justify-center text-xl font-bold
                  border-4 border-background-500 transition-colors
                  group-hover:bg-white group-hover:text-brand-500
                  group-focus-visible:bg-white group-focus-visible:text-brand-500
                "
              >
                2
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">100% Fresh Foods</h3>
            <p className="mb-6">
              Beguiled and demoralized by all get charms pleasure the moments
              ever so blinded by desire.
            </p>
          </div>

          <div
            role="button"
            tabIndex={0}
            className="
              group relative flex flex-col items-center justify-center
              w-full aspect-square p-8
              rounded-none ring-0
              bg-background-500 text-Gray-200
              transition-colors duration-300 cursor-pointer select-none
              hover:bg-brand-500 hover:text-white
              focus-visible:bg-brand-500 focus-visible:text-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
              active:translate-y-[1px]
            "
          >
            <div className="relative w-32 h-32 mb-6">
              <Image src="/images/Ambience.png" alt="Memorable Ambience" fill className="object-contain" />
              <div
                className="
                  absolute -right-2 top-0 bg-brand-500 text-white rounded-full w-10 h-10
                  flex items-center justify-center text-xl font-bold
                  border-4 border-background-500 transition-colors
                  group-hover:bg-white group-hover:text-brand-500
                  group-focus-visible:bg-white group-focus-visible:text-brand-500
                "
              >
                3
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Memorable Ambience</h3>
            <p className="mb-6">
              Beguiled and demoralized by all get charms pleasure the moments
              ever so blinded by desire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreTheBest;
