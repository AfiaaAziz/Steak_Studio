"use client";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Birthday Party",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    title: "Wedding Party",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    title: "Corporate Events",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const SpecialServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-background-500 py-16 w-full">
      <div className="container mx-auto px-4 text-center">
       
         <div className="text-center mb-12">
          <h3 className="text-brand-500 font-semibold text-lg mb-2">
          SPECIAL SERVICES
          </h3>
          <h2 className="text-4xl font-bold text-Gray-200">
          What Special Services We Are Offering Now
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="w-full flex-shrink-0 px-6 md:px-10"
              >
                <div className="text-center px-4 md:px-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-500 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-Gray-200 leading-relaxed max-w-lg mx-auto">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                index === currentIndex
                  ? "bg-brand-500 border-brand-500"
                  : "bg-transparent border-brand-500 hover:bg-brand-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
