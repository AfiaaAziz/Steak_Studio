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

const Card = ({ item }: { item: (typeof menuItems)[number] }) => (
  <div className="w-[180px] h-[180px] rounded-lg transition duration-300 group hover:bg-brand-500 hover:text-white flex flex-col items-center justify-center">
    <Link href={item.link} className="flex items-center justify-center">
      <div className="relative w-[180.3px] h-[100px] mb-5">
        <Image
          src={item.imageSrc}
          alt={item.name}
          fill
          className="object-contain transition duration-300 group-hover:scale-110 cursor-pointer"
          sizes="180px"
        />
      </div>
    </Link>
    <p className="font-semibold text-Gray-200 text-[16px] sm:text-[17px] leading-tight group-hover:text-white">
      {item.name}
    </p>
  </div>
);

const SpecialMenu = () => {
  const firstSix = menuItems.slice(0, 6);
  const lastFour = menuItems.slice(6);

  return (
    <section className="py-16 sm:py-20 bg-background-500 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-brand-500 font-bold text-3xl mb-12">
          SPECIAL MENU FOR ALL TIME
        </h2>

        <div
          className="
            grid justify-start gap-3
            grid-cols-[repeat(2,180px)]
            sm:grid-cols-[repeat(3,180px)]
            lg:grid-cols-[repeat(6,180px)]
            auto-rows-[180px]
          "
        >
          {firstSix.map((item) => (
            <Card key={item.id} item={item} />
          ))}

          <div className="hidden lg:block w-[180px] h-[180px]" aria-hidden="true" />

          {lastFour.map((item) => (
            <Card key={item.id} item={item} />
          ))}

          <div className="hidden lg:block w-[180px] h-[180px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
