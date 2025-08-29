import Image from "next/image";
import Vendors from "../components/Vendors";
import Link from "next/link";
import {
  mainMenuItems,
  centerColumnItems,
  bottomMenuItems,
} from "../data/menuData";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  link?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  imageUrl,
  link = "/menu",
}) => (
  <Link href={link} className="block">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 rounded-2xl bg-background-500 p-4 sm:px-5 sm:py-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-gray-200 w-full hover:shadow-lg transition lg:h-[170px]">
     
      <div className="flex-1 min-w-0 text-center sm:text-left">
        <h3 className="truncate text-base sm:text-[18px] font-semibold text-Gray-200">
          {name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm sm:text-[14px] leading-5 text-Gray-200">
          {description}
        </p>
        <p className="mt-3 text-sm sm:text-[15px] font-bold text-Gray-200">
          {price}
        </p>
      </div>


      <div className="relative w-full max-w-[150px] aspect-square shrink-0 rounded-xl bg-gray-100 p-1">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  </Link>
);

const MenuPage = () => {
  return (
    <div className="min-h-screen w-full bg-background-500">
      <section className="relative w-full h-60 bg-Gray-200 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/menu-banner.png"
            alt="About Us Banner"
            fill
            className="object-cover opacity-50"
            quality={100}
          />
        </div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">MENU</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-[1240px] px-4 py-8">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-Gray-200 text-center md:text-left">
            It's the food and groceries <br />
            <span className="text-Gray-200">you Love, delivered</span>
          </h2>

          <div className="flex w-full max-w-md items-center gap-2 md:w-auto">
            <input
              type="text"
              placeholder="Search your items"
              className="w-full rounded-lg border-2 border-brand-500 p-3"
            />
            <button className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white transition">
              Go
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col space-y-4">
            {mainMenuItems.map((item, i) => (
              <MenuItem key={`lt-${i}`} {...item} />
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:h-[542px]">
              <Image
                src="/images/MenuLeft1.png"
                alt="Delicious Food Menu 50% Off"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            {centerColumnItems.map((item, i) => (
              <MenuItem key={`cc-${i}`} {...item} />
            ))}
          </div>
        </div>

        <div className="relative my-10 h-32 sm:h-40 md:h-56 w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/banner1.png"
            alt="Special Delicious Food Menu 20% Discount"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomMenuItems.map((item, index) => (
            <MenuItem key={`bottom-1-${index}`} {...item} />
          ))}
        </div>

        <div className="relative my-10 h-32 sm:h-40 md:h-56 w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/banner1.png"
            alt="Special Delicious Food Menu 20% Discount"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomMenuItems.map((item, index) => (
            <MenuItem key={`bottom-2-${index}`} {...item} />
          ))}
        </div>

        {/* ==== WIDE BANNER 3 ==== */}
        <div className="relative my-10 h-32 sm:h-40 md:h-56 w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/banner1.png"
            alt="Special Delicious Food Menu 20% Discount"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomMenuItems.map((item, index) => (
            <MenuItem key={`bottom-3-${index}`} {...item} />
          ))}
        </div>

        {/* ==== WIDE BANNER 4 ==== */}
        <div className="relative my-10 h-32 sm:h-40 md:h-56 w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/banner1.png"
            alt="Special Delicious Food Menu 20% Discount"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomMenuItems.map((item, index) => (
            <MenuItem key={`bottom-4-${index}`} {...item} />
          ))}
        </div>
      </main>

      <Vendors />
    </div>
  );
};

export default MenuPage;
