"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { id: 1, name: "Burger", imageSrc: "/images/Burger.png", link: "/menu#menu-banner1" },
  { id: 2, name: "Fried Chicken", imageSrc: "/images/FriedChicken.png", link: "/menu#menu-banner2" },
  { id: 3, name: "Grilled Chicken", imageSrc: "/images/GrilledChicken.png", link: "/menu#menu-banner3" },
  { id: 4, name: "Pizza", imageSrc: "/images/Pizza.png", link: "/menu#menu-banner4" },
  { id: 5, name: "Hot Dogs", imageSrc: "/images/HotDogs.png", link: "/menu#menu-banner5" },
  { id: 6, name: "Chicken Skewers", imageSrc: "/images/menu4.png", link: "/menu#menu-banner1" },
  { id: 7, name: "Greek Salad", imageSrc: "/images/Salad.png", link: "/menu#menu-banner2" },
  { id: 8, name: "Dahi Puri", imageSrc: "/images/DahiPuri.png", link: "/menu#menu-banner3" },
  { id: 9, name: "Ice cream", imageSrc: "/images/Icecream.png", link: "/menu#menu-banner4" },
  { id: 10, name: "Cocktail Glasses", imageSrc: "/images/CocktailGlasses.png", link: "/menu#menu-banner5" },
];

const SpecialMenu = () => {
  return (
    <section className="bg-background-500 py-16 w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-brand-500 font-bold text-3xl mb-12">
          SPECIAL MENU FOR ALL TIME
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="w-[180px] h-[180px] flex flex-col items-center justify-center rounded-lg transition duration-300 group hover:bg-brand-500 hover:text-white shadow-md hover:shadow-xl"
            >
              <Link href={item.link} className="mb-3 flex items-center justify-center">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={108}
                  height={86}
                  className="object-contain transition duration-300 group-hover:scale-110 cursor-pointer"
                />
              </Link>
              <p className="font-semibold text-Gray-200 text-sm group-hover:text-white">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
