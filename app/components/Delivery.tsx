import React from "react";
import Image from "next/image";

const DeliverySection = () => {
  return (
    <section className="bg-background-500 py-16 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-sm md:max-w-md relative">
            <Image
              src="/images/delivery-scooter.png"
              alt="Delivery Scooter"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        </div>

        <div className="md:w-1/2">
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
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
