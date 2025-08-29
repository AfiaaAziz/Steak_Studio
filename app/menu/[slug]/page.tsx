import Image from "next/image";
import Vendors from "../../components/Vendors";
import { menuData, bottomMenuItems } from "../../data/menuData";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

type ItemCardProps = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  link?: string;
  slug?: string;
};

function MenuItemCard({ name, description, price, imageUrl, link, slug }: ItemCardProps) {
  const href = link ?? (slug ? `/menu/${slug}` : "#");
  return (
    <Link href={href} className="block">
      <div className="w-full rounded-2xl bg-background-500 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ring-1 ring-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="order-1 sm:order-2 self-center sm:self-auto relative h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] shrink-0 rounded-xl bg-gray-100 p-1">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div className="order-2 sm:order-1 flex-1 min-w-0 text-center sm:text-left">
            <h3 className="truncate text-[16px] sm:text-[18px] font-semibold text-Gray-200">
              {name}
            </h3>
            <p className="mt-2 line-clamp-2 text-[13px] sm:text-[14px] leading-5 text-Gray-200">
              {description}
            </p>
            <p className="mt-3 text-[14px] sm:text-[15px] font-bold text-Gray-200">
              {price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function MenuDetail({ params }: Props) {
  const { slug } = await params; 

  const item = menuData.find((m: any) => m.slug === slug);
  if (!item) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Item not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-background-500">
      <section className="relative w-full h-60 bg-Gray-200 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/menu-banner.png"
          alt="Menu Banner"
          fill
          className="object-cover opacity-50"
          quality={100}
        />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">{item.name}</h1>
        </div>
      </section>

      

<section className="mx-auto max-w-[1240px] px-4 py-10">
  <div className="grid gap-8 md:grid-cols-2 items-start">
    <div className="w-full md:w-[594px] md:h-[542px] mx-auto md:mx-0">
      <div className="relative w-full aspect-[594/542] md:h-full overflow-hidden rounded-lg">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>

    <div className="flex flex-col md:h-[542px]">
      <p className="text-Gray-200 leading-6 text-center md:text-left">
        {item.description}
      </p>

      <button className="mt-12 md:mt-auto w-max rounded-2xl bg-brand-500 px-8 py-4 text-white text-lg font-semibold shadow-md hover:shadow-lg transition mx-auto md:mx-0">
        Order Now
      </button>
    </div>
  </div>
</section>


      <div className="mx-auto max-w-[1240px] px-4 mt-2">
        <h3 className="text-center text-2xl font-bold text-brand-500">
          See more items
        </h3>
      </div>

      <section className="mx-auto max-w-[1240px] px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomMenuItems.map((i, idx) => (
            <MenuItemCard key={`extra-1-${idx}`} {...i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pt-2 pb-8">
        <div className="relative mt-4 mb-10 h-32 sm:h-40 md:h-56 w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/banner1.png"
            alt="Special Delicious Food Menu 20% Discount"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomMenuItems.map((i, idx) => (
            <MenuItemCard key={`extra-2-${idx}`} {...i} />
          ))}
        </div>
      </section>

      <div className="w-full bg-background-500 mt-12">
        <Vendors />
      </div>
    </main>
  );
}
