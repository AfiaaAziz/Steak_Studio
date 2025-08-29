
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Vendors from "../components/Vendors";
import { menuData } from "../data/menuData";

const BROWN = "#712518";
const ROW_BORDER = "#a15b4f";

type Row = {
  slug: string;
  name: string;
  price: string;
  imageUrl: string;
  qty: number;
};

const toRow = (m: any, qty = 1): Row => ({
  slug: m.slug,
  name: m.name,
  price: m.price,
  imageUrl: m.imageUrl,
  qty,
});

export default function WishlistPage() {
  const sp = useSearchParams();
  const slugFromQuery = sp.get("slug") ?? undefined;

  const seeded = useMemo(() => {
    const base = menuData.slice(0, 6).map((m: any) => toRow(m));
    if (!slugFromQuery) return base;
    const found = menuData.find((m: any) => m.slug === slugFromQuery);
    if (!found) return base;
    const rest = base.filter((r) => r.slug !== slugFromQuery);
    return [toRow(found), ...rest];
  }, [slugFromQuery]);

  const [rows, setRows] = useState<Row[]>(seeded);

  const inc = (slug: string) =>
    setRows((rs) => rs.map((r) => (r.slug === slug ? { ...r, qty: r.qty + 1 } : r)));
  const dec = (slug: string) =>
    setRows((rs) =>
      rs.map((r) => (r.slug === slug ? { ...r, qty: Math.max(1, r.qty - 1) } : r))
    );
  const remove = (slug: string) => setRows((rs) => rs.filter((r) => r.slug !== slug));

  return (
    <main className="min-h-screen w-full bg-background-500">
      <section className="relative w-full h-56 bg-Gray-200 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/menu-banner.png"
          alt="Wishlist Banner"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Wishlist</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-10">
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead style={{ backgroundColor: BROWN }} className="text-white">
              <tr>
                <th className="text-left py-3 px-5 font-semibold">Product</th>
                <th className="text-left py-3 px-5 font-semibold">Product Name</th>
                <th className="text-left py-3 px-5 font-semibold">Unit Price</th>
                <th className="text-left py-3 px-5 font-semibold">Quantity</th>
                <th className="text-left py-3 px-5 font-semibold">Add to cart</th>
                <th className="text-left py-3 px-5 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.slug}
                  className="align-middle"
                  style={{ borderBottom: `2px solid ${ROW_BORDER}` }}
                >
                  <td className="py-4 px-5">
                    <div className="relative w-[110px] h-[72px] rounded-md overflow-hidden ring-1 ring-gray-300">
                      <Image src={r.imageUrl} alt={r.name} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <p className="font-semibold text-Gray-200 leading-snug">{r.name}</p>
                  </td>
                  <td className="py-4 px-5">
                    <span className="font-semibold text-Gray-200">{r.price}</span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => inc(r.slug)}
                        className="w-7 h-7 border border-gray-400 rounded text-Gray-200 leading-none active:scale-95"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <input
                        readOnly
                        value={r.qty}
                        className="w-10 h-7 text-center border border-gray-400 rounded bg-white text-Gray-200"
                        aria-label="Quantity"
                      />
                      <button
                        onClick={() => dec(r.slug)}
                        className="w-7 h-7 border border-gray-400 rounded text-Gray-200 leading-none active:scale-95"
                        aria-label="Decrease quantity"
                      >
                        –
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <Link
                      href={`/cart?slug=${r.slug}&qty=${r.qty}`}
                      className="inline-block px-5 py-2 text-white text-sm font-semibold rounded-md transition active:scale-95"
                      style={{ backgroundColor: BROWN }}
                    >
                      Add to cart
                    </Link>
                  </td>
                  <td className="py-4 px-5">
                    <button
                      onClick={() => remove(r.slug)}
                      className="font-bold active:scale-95"
                      style={{ color: BROWN }}
                      aria-label="Remove item"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {rows.length === 0 && (
            <div className="px-5 py-10 text-center text-Gray-200">No items found.</div>
          )}
        </div>

        <div className="md:hidden space-y-5">
          {rows.map((r) => (
            <div key={r.slug} className="rounded-lg ring-1 ring-gray-200 p-4 bg-background-500">
              <div className="grid grid-cols-[96px,1fr] gap-3 items-start">
                <div className="relative w-24 h-20 rounded-md overflow-hidden ring-1 ring-gray-300">
                  <Image src={r.imageUrl} alt={r.name} fill className="object-cover" />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-Gray-200 leading-snug truncate">
                    {r.name}
                  </p>
                  <p className="mt-1 text-sm text-Gray-200/80">
                    Unit price: <span className="font-semibold text-Gray-200">{r.price}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => inc(r.slug)}
                    className="w-8 h-8 border border-gray-400 rounded text-Gray-200 leading-none active:scale-95"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <input
                    readOnly
                    value={r.qty}
                    className="w-12 h-8 text-center border border-gray-400 rounded bg-white text-Gray-200"
                    aria-label="Quantity"
                  />
                  <button
                    onClick={() => dec(r.slug)}
                    className="w-8 h-8 border border-gray-400 rounded text-Gray-200 leading-none active:scale-95"
                    aria-label="Decrease quantity"
                  >
                    –
                  </button>
                </div>

                <Link
                  href={`/cart?slug=${r.slug}&qty=${r.qty}`}
                  className="flex-1 sm:flex-none text-center px-4 py-2 text-white text-sm font-semibold rounded-md active:scale-95"
                  style={{ backgroundColor: BROWN, minWidth: 150 }}
                >
                  Add to cart
                </Link>

                <button
                  onClick={() => remove(r.slug)}
                  className="ml-auto font-bold px-3 py-2 active:scale-95"
                  style={{ color: BROWN }}
                  aria-label="Remove item"
                >
                  x
                </button>
              </div>
            </div>
          ))}

          {rows.length === 0 && (
            <div className="px-4 py-10 text-center text-Gray-200">No items found.</div>
          )}
        </div>
      </section>

      <Vendors />
    </main>
  );
}
