import React from "react";
import Image from "next/image";

const DeliverySection = () => {
  return (
    <section className="bg-background-500 py-16 sm:py-20 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative w-full max-w-[489px] mx-auto">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[615px]">
              <Image
                src="/images/delivery-scooter.png"
                alt="Delivery Scooter"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-brand-500 font-semibold text-lg mb-2">
              Delivery
            </h4>

            <h2 className="text-4xl font-bold leading-tight">
              <span className="text-Gray-200">A Moment Of</span>
              <br />
              <span className="text-brand-500">
                Delivered On Right Time &amp; Place
              </span>
            </h2>

            <p className="text-Gray-200 mt-6 mb-8 max-w-md">
              Food Khan is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon&apos;s Exmouth Market. With glazed
              frontage on two sides of the building, overlooking the market and a
              bustling London inteon.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
              <div className="flex items-center gap-3">
                <div>
                  <span className="text-sm font-semibold text-Gray-200 block">
                    Delivery Order
                  </span>
                  <span className="text-lg font-bold text-Gray-200 block">
                    +880 1630 225 015
                  </span>
                </div>
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/delivery-scooter.png"
                    alt="Phone Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default DeliverySection;
