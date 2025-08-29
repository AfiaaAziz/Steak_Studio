"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "A very good and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens...",
    author: "Robert M. Dixon",
    imageSrc: "/images/guests_1.png",
    rating: 3,
  },
  {
    id: 2,
    text: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens...",
    author: "Bernadette R. Martin",
    imageSrc: "/images/guests_1.png",
    rating: 4,
  },
  {
    id: 3,
    text: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens...",
    author: "Regina D. Leonard",
    imageSrc: "/images/guests_1.png",
    rating: 5,
  },
    {
    id: 4,
    text: "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens...",
    author: "Walter S. Mclean",
    imageSrc: "/images/guests_1.png",
    rating: 2,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index: number) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "text-brand-500 fill-brand-500"
            : "text-gray-300 fill-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-background-500 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-brand-500 font-semibold text-lg mb-2">
            Testimonial
          </h3>
          <h2 className="text-4xl font-bold text-Gray-200">
            Review form our guests
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isCenter = testimonial.position === 0;
              const isLeft = testimonial.position === -1;
              const isRight = testimonial.position === 1;

              return (
                <div
                  key={`${testimonial.id}-${currentIndex}`}
                  className={`transition-all duration-500 flex flex-col items-center text-center px-4 ${
                    isCenter
                      ? "scale-100 opacity-100 z-10"
                      : "scale-75 opacity-40 z-0"
                  }`}
                  style={{
                    width: isCenter ? "400px" : "320px",
                  }}
                >
                  <div className="relative mb-4">
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.author}
                      className={`rounded-full object-cover transition-all duration-500 ${
                        isCenter ? "w-24 h-24" : "w-16 h-16"
                      }`}
                    />
                  </div>

                  <div className="mb-4">
                    <h3
                      className={`font-bold transition-all duration-500 ${
                        isCenter
                          ? "text-lg text-Gray-200"
                          : "text-md text-gray-400"
                      }`}
                    >
                      {testimonial.author}
                    </h3>
                  </div>

                  <p
                    className={`text-Gray-200 mb-6 leading-relaxed transition-all duration-500 ${
                      isCenter ? "opacity-100" : "opacity-0 h-0"
                    }`}
                  >
                    {testimonial.text}
                  </p>

                  <div
                    className={`flex justify-center space-x-1 ${
                      !isCenter && "hidden"
                    }`}
                  >
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                  index === currentIndex
                    ? "bg-brand-500 border-brand-500 scale-125"
                    : "bg-transparent border-gray-400 hover:border-brand-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default TestimonialSection;
