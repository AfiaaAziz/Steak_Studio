"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import clsx from "clsx";

type Aspect = "square" | "landscape" | "portrait";
type ItemCategory = "Food" | "People" | "Interiors" | "Events";

type GalleryItem = {
  src: string;
  alt: string;
  category: ItemCategory;
  aspect: Aspect;
};

const gallery: GalleryItem[] = [

  // FOOD
  {
    src: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1000&fit=crop",
    alt: "Seared steak plate",
    category: "Food",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200&h=1200&fit=crop",
    alt: "Burger with fries",
    category: "Food",
    aspect: "square",
  },
  {
    src: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200&h=1600&fit=crop",
    alt: "Dessert stack",
    category: "Food",
    aspect: "portrait",
  },

  // PEOPLE
  {
    src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1000&fit=crop",
    alt: "Friends toasting",
    category: "People",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1000&fit=crop",
    alt: "Chef at work",
    category: "People",
    aspect: "square",
  },
  {
    src: "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200&h=1600&fit=crop",
    alt: "Couple dining",
    category: "People",
    aspect: "portrait",
  },

  // INTERIORS
  {
    src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1000&fit=crop",
    alt: "Dining room ambience",
    category: "Interiors",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200&h=1200&fit=crop",
    alt: "Cozy corner",
    category: "Interiors",
    aspect: "square",
  },
  {
    src: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&w=1200&h=1600&fit=crop",
    alt: "Bar details",
    category: "Interiors",
    aspect: "portrait",
  },

  // EVENTS
  {
    src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600&h=1000&fit=crop",
    alt: "Event banquet",
    category: "Events",
    aspect: "landscape",
  },
  {
    src: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200&h=1200&fit=crop",
    alt: "Cake table",
    category: "Events",
    aspect: "square",
  },
  {
    src: "https://images.pexels.com/photos/230743/pexels-photo-230743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200&h=1600&fit=crop",
    alt: "Wedding decor",
    category: "Events",
    aspect: "portrait",
  },
];

const aspectClass: Record<Aspect, string> = {
  square: "aspect-square",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
};

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = gallery;

  const openAt = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };

  const close = useCallback(() => setIsOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next]);

  return (
    <section className="bg-background-500 py-16 sm:py-20 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <p className="tracking-[0.15em] text-xs font-semibold mb-3 text-brand-500">
            GALLERY
          </p>
          <h2 className="font-bold text-3xl mb-6 text-Gray-200">A peek inside</h2>
          <p className="mt-2 text-sm sm:text-base max-w-2xl mx-auto text-Gray-200 leading-relaxed">
            Moments from our kitchen, tables, and events — curated to match the flavor of our space.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it, i) => (
            <button
              key={`${it.src}-${i}`}
              onClick={() => openAt(i)}
              className="group relative w-full overflow-hidden border border-brand-500/40 hover:border-brand-500 transition-colors rounded-none"
              aria-label={`Open ${it.alt}`}
            >
              <div className={clsx("relative w-full", aspectClass[it.aspect])}>
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute left-0 top-0 m-2 text-[10px] px-2 py-0.5 border border-brand-500/70 bg-background-500/80 text-brand-500">
                  {it.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isOpen && items.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-black">
              <Image
                src={items[index].src}
                alt={items[index].alt}
                fill
                className="object-contain"
                sizes="(max-width:1024px) 100vw, 80vw"
                priority
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-Gray-200">
              <div className="text-sm">
                <span className="text-brand-500">{items[index].category}</span>
                <span className="mx-2">•</span>
                {items[index].alt}
              </div>
              <div className="text-xs opacity-80">
                {index + 1} / {items.length}
              </div>
            </div>

            <button
              onClick={close}
              className="absolute -top-10 right-0 sm:-top-12 sm:right-0 p-2 bg-background-500 text-Gray-200 hover:text-white border border-brand-500 rounded-none"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6 p-3 bg-background-500 text-Gray-200 hover:text-white border border-brand-500 rounded-none"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6 p-3 bg-background-500 text-Gray-200 hover:text-white border border-brand-500 rounded-none"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
