"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Vendors from "../components/Vendors";
import { menuData, type MenuItem } from "../data/menuData";

const BROWN = "#712518";
const ROW_BORDER = "#a15b4f";

const priceToNumber = (p: string) =>
  Number(String(p).replace(/[^0-9.]/g, "")) || 0;
const money = (n: number) =>
  n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

type Row = {
  slug: string;
  name: string;
  price: string; 
  imageUrl: string;
  qty: number;
};

const makeRow = (m:  MenuItem, qty = 1): Row => ({
  slug: m.slug,
  name: m.name,
  price: m.price,
  imageUrl: m.imageUrl,
  qty,
});

export default function CartPage() {
  const sp = useSearchParams();
  const slugFromQuery = sp.get("slug") ?? undefined;
  const qtyFromQuery = Math.max(1, Number(sp.get("qty") || 1));

  const seeded = useMemo<Row[]>(() => {
    const base = menuData.slice(0, 2).map((m) => makeRow(m));
    if (!slugFromQuery) return base;
    const found = menuData.find((m: any) => m.slug === slugFromQuery);
    if (!found) return base;
    const withClicked = makeRow(found, qtyFromQuery);
    return [withClicked, ...base.filter((r) => r.slug !== withClicked.slug)];
  }, [slugFromQuery, qtyFromQuery]);

  const [rows, setRows] = useState<Row[]>(seeded);
  const [couponCode, setCouponCode] = useState("");
  const [couponValue, setCouponValue] = useState(0); // flat discount

  const inc = (slug: string) =>
    setRows((rs) =>
      rs.map((r) => (r.slug === slug ? { ...r, qty: r.qty + 1 } : r))
    );
  const dec = (slug: string) =>
    setRows((rs) =>
      rs.map((r) =>
        r.slug === slug ? { ...r, qty: Math.max(1, r.qty - 1) } : r
      )
    );
  const remove = (slug: string) =>
    setRows((rs) => rs.filter((r) => r.slug !== slug));

  const orderSubtotal = rows.reduce(
    (sum, r) => sum + priceToNumber(r.price) * r.qty,
    0
  );
  const shipping = 0; // free shipping per your mock
  const total = Math.max(0, orderSubtotal + shipping - couponValue);

  const applyCoupon = () => {
    // demo: any non-empty code applies a fixed $28 discount (like your screenshot)
    setCouponValue(couponCode.trim() ? 28 : 0);
  };

  return (
    <main className="min-h-screen w-full bg-background-500">
      {/* Hero */}
      <section className="relative w-full h-56 bg-Gray-200 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/menu-banner.png"
          alt="My Cart Banner"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">My Cart</h1>
        </div>
      </section>

      {/* CART TABLE */}
      <section className="mx-auto max-w-[1240px] px-4 pt-10">
        {/* desktop table */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead style={{ backgroundColor: BROWN }} className="text-white">
              <tr>
                <th className="text-left py-3 px-5 font-semibold">Product</th>
                <th className="text-left py-3 px-5 font-semibold">
                  Product Name
                </th>
                <th className="text-left py-3 px-5 font-semibold">
                  Unit Price
                </th>
                <th className="text-left py-3 px-5 font-semibold">Quantity</th>
                <th className="text-left py-3 px-5 font-semibold">Total</th>
                <th className="text-left py-3 px-5 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const rowTotal = priceToNumber(r.price) * r.qty;
                return (
                  <tr
                    key={r.slug}
                    className="align-middle"
                    style={{ borderBottom: `2px solid ${ROW_BORDER}` }}
                  >
                    {/* product image */}
                    <td className="py-4 px-5">
                      <div className="relative w-[110px] h-[72px] rounded-md overflow-hidden ring-1 ring-gray-300">
                        <Image
                          src={r.imageUrl}
                          alt={r.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>

                    {/* name */}
                    <td className="py-4 px-5">
                      <p className="font-semibold text-Gray-200">{r.name}</p>
                    </td>

                    {/* unit price */}
                    <td className="py-4 px-5 font-semibold text-Gray-200">
                      {r.price}
                    </td>

                    {/* qty */}
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

                    {/* total */}
                    <td className="py-4 px-5 font-semibold text-Gray-200">
                      {money(rowTotal)}
                    </td>

                    {/* action */}
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
                );
              })}
            </tbody>
          </table>

          {rows.length === 0 && (
            <div className="px-5 py-10 text-center text-Gray-200">
              Your cart is empty.
            </div>
          )}
        </div>

        {/* mobile cards */}
        <div className="md:hidden space-y-5">
          {rows.map((r) => {
            const rowTotal = priceToNumber(r.price) * r.qty;
            return (
              <div
                key={r.slug}
                className="rounded-lg ring-1 ring-gray-200 p-4 bg-background-500"
              >
                <div className="grid grid-cols-[96px,1fr] gap-3 items-start">
                  <div className="relative w-24 h-20 rounded-md overflow-hidden ring-1 ring-gray-300">
                    <Image
                      src={r.imageUrl}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-Gray-200 truncate">
                      {r.name}
                    </p>
                    <p className="text-sm text-Gray-200/80">
                      Unit price: {r.price}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-Gray-200">
                      Total: {money(rowTotal)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => inc(r.slug)}
                    className="w-8 h-8 border border-gray-400 rounded text-Gray-200 leading-none active:scale-95"
                  >
                    +
                  </button>
                  <input
                    readOnly
                    value={r.qty}
                    className="w-12 h-8 text-center border border-gray-400 rounded bg-white text-Gray-200"
                  />
                  <button
                    onClick={() => dec(r.slug)}
                    className="w-8 h-8 border border-gray-400 rounded text-Gray-200 leading-none active:scale-95"
                  >
                    –
                  </button>

                  <button
                    onClick={() => remove(r.slug)}
                    className="ml-auto font-bold px-3 py-2 active:scale-95"
                    style={{ color: BROWN }}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CARDS */}
      <section className="mx-auto max-w-[1240px] px-4 pb-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calculate Shipping / Coupon (left) */}
          <div className="rounded-lg bg-[#f8efe9] ring-1 ring-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: BROWN }}>
              CALCULATE SHIPPING
            </h3>

            <div className="space-y-3">
              <select className="w-full rounded-md border border-gray-300 p-3 text-sm">
                <option>Select Your payment gateway</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Cash on Delivery</option>
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  placeholder="Card number"
                  className="w-full rounded-md border border-gray-300 p-3 text-sm"
                />
                <input
                  placeholder="CVC/Date"
                  className="w-full rounded-md border border-gray-300 p-3 text-sm"
                />
              </div>

              <input
                placeholder="Coupon Code (if you have)"
                className="w-full rounded-md border border-gray-300 p-3 text-sm"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />

              <button
                onClick={applyCoupon}
                className="mt-3 rounded-md px-5 py-3 text-white font-semibold"
                style={{ backgroundColor: BROWN }}
              >
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Cart Subtotal (right) */}
          <div className="rounded-lg bg-[#f8efe9] ring-1 ring-gray-200 p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: BROWN }}>
              CART SUBTOTAL
            </h3>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[1fr,auto] gap-4">
                <span>Order Subtotal</span>
                <span className="font-semibold">{money(orderSubtotal)}</span>
              </div>

              <div className="grid grid-cols-[1fr,auto] gap-4">
                <span>Shipping</span>
                <span className="font-semibold">
                  {shipping === 0 ? "Free Shipping" : money(shipping)}
                </span>
              </div>

              <div className="grid grid-cols-[1fr,auto] gap-4">
                <span>Coupon</span>
                <span className="font-semibold">
                  {couponValue ? money(couponValue) : money(0)}
                </span>
              </div>

              <hr className="my-2 border-gray-300" />

              <div className="grid grid-cols-[1fr,auto] gap-4 text-base">
                <span className="font-semibold">Total</span>
                <span className="font-bold">{money(total)}</span>
              </div>
            </div>

            <button
              className="mt-5 w-full sm:w-auto rounded-md px-6 py-3 text-white font-semibold"
              style={{ backgroundColor: BROWN }}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </section>

      <Vendors />
    </main>
  );
}
