"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["Breakfast", "Lunch", "Dinner", "Starters", "Beverages"] as const;
type Category = (typeof categories)[number];

const menu: Record<Category, { name: string; desc: string; price: string }[]> = {
  Breakfast: [
    { name: "Gazpacho Garlic", desc: "Chilled tomato, cucumber, garlic, red pepper soup.", price: "$55" },
    { name: "Pan Con Berenjina Frita", desc: "Marinated seabass with sour sauce, dill & coriander on bread.", price: "$40" },
    { name: "New Lubina Marinada", desc: "Fried aubergine with almond on bread (2 pieces).", price: "$45" },
    { name: "Gazpacho", desc: "Atlantic cod fillet, chips, salad, tartare, lemon.", price: "$35" },
    { name: "Coconut Chia Bowl", desc: "Marinated seabass with sour sauce & coriander on bread.", price: "$95" },
    { name: "Coconut Chia Bowl", desc: "Marinated seabass with sour sauce & coriander on bread.", price: "$95" },
    { name: "Coconut Chia Bowl", desc: "Marinated seabass with sour sauce & coriander on bread.", price: "$95" },
  ],
  Lunch: [
    { name: "Grilled Chicken Salad", desc: "Fresh greens with grilled chicken and vinaigrette.", price: "$12.50" },
    { name: "Vegetable Lasagna", desc: "Layers of pasta, ricotta, and fresh vegetables.", price: "$11.00" },
    { name: "Spicy Beef Tacos", desc: "Two corn tortillas filled with seasoned beef.", price: "$9.75" },
    { name: "Mushroom Risotto", desc: "Creamy Arborio rice with wild mushrooms.", price: "$13.25" },
  ],
  Dinner: [
    { name: "Seafood Paella", desc: "Traditional Spanish rice dish with various seafood.", price: "$22.00" },
    { name: "Roasted Duck", desc: "Half a duck, slow-roasted with orange glaze.", price: "$25.50" },
    { name: "Lamb Chops", desc: "Grilled to perfection, served with mint sauce.", price: "$28.00" },
    { name: "Vegetarian Tagine", desc: "Moroccan stew with chickpeas, vegetables, and spices.", price: "$18.50" },
  ],
  Starters: [
    { name: "Caprese Skewers", desc: "Cherry tomatoes, mozzarella balls, basil with balsamic glaze.", price: "$7.00" },
    { name: "Shrimp Cocktail", desc: "Chilled shrimp with a tangy cocktail sauce.", price: "$9.50" },
    { name: "Bruschetta Platter", desc: "Toasted bread with various toppings like tomato, olive tapenade.", price: "$8.00" },
    { name: "Mini Crab Cakes", desc: "Served with a zesty aioli.", price: "$10.00" },
  ],
  Beverages: [
    { name: "Espresso", desc: "Strong, concentrated coffee.", price: "$3.00" },
    { name: "Fresh Orange Juice", desc: "Freshly squeezed, no added sugar.", price: "$4.50" },
    { name: "Sparkling Water", desc: "Chilled mineral water with bubbles.", price: "$3.50" },
    { name: "Local Craft Beer", desc: "Selection of local microbrews.", price: "$7.00" },
  ],
};

export default function SpecialsSection() {
  const [active, setActive] = useState<Category>("Breakfast");

  const imgByCategory: Record<Category, string> = {
    Breakfast: "/images/breakfast.png",
    Lunch: "/images/lunch.jpg",
    Dinner: "/images/dinner.jpg",
    Starters: "/images/starters.jpg",
    Beverages: "/images/beverages.jpg",
  };

  const prev = () =>
    setActive(categories[(categories.indexOf(active) - 1 + categories.length) % categories.length]);

  const next = () =>
    setActive(categories[(categories.indexOf(active) + 1) % categories.length]);

  return (
    <section id="specials" className="py-16 sm:py-20 bg-background-500 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      
        <div className="text-center mb-12 sm:mb-14">
          <p className="tracking-[0.15em] text-xs font-semibold mb-3 text-brand-500">SPECIALS</p>
          <h2 className="font-bold text-3xl mb-6 text-Gray-200">Check out our menu</h2>
          <p className="mt-2 text-sm sm:text-base max-w-2xl mx-auto text-Gray-200 leading-relaxed">
            Demoralized by the charms of pleasure of the moment so blinded except to some advantage.
          </p>
        </div>

        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-10">
          <div className="flex items-center justify-center overflow-x-auto whitespace-nowrap">
            {categories.map((c, i) => (
              <div key={c} className="flex items-center">
                <button
                  onClick={() => setActive(c)}
                  className={`px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-colors whitespace-nowrap border rounded-md
                    ${active === c ? "bg-brand-500 text-white border-brand-500" : "bg-white text-brand-500 border-gray-300"}
                  `}
                >
                  {c.toUpperCase()}
                </button>
                {i < categories.length - 1 && (
                  <div
                    className="h-6 w-px bg-gray-300 lg:mx-3"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="relative w-full max-w-[489px] mx-auto">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[615px] overflow-hidden">
              <Image
                src={imgByCategory[active]}
                alt={`${active} visual`}
                fill
                className="object-cover"
                priority
              />
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black/50 hover:bg-brand-500 text-white grid place-items-center"
                onClick={prev}
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black/50 hover:bg-brand-500 text-white grid place-items-center"
                onClick={next}
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div className="w-full flex items-center justify-center px-4 py-6 bg-brand-500">
              <Link href="/menu">
                <button className="bg-brand-500 text-white text-sm sm:text-base md:text-lg font-semibold px-6 py-3 rounded-2xl hover:bg-brand-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                  VIEW ALL MENU <span aria-hidden>→</span>
                </button>
              </Link>
            </div>
          </div>

          <div>
            <ul className="space-y-7 sm:space-y-8">
              {menu[active].map((it, idx) => (
                <li key={idx}>
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-lg sm:text-xl font-semibold text-brand-500">{it.name}</h4>
                        <span className="ml-3 font-bold text-base sm:text-lg text-brand-500">{it.price}</span>
                      </div>
                      <p className="text-sm sm:text-base mt-1 text-Gray-200 leading-relaxed">{it.desc}</p>
                      <div className="mt-3 border-b border-dotted border-brand-500" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
