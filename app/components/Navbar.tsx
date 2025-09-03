"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-White-200 border-b border-gray-200">
      <nav className="mx-auto max-w-[1240px] px-4 h-20 sm:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Go to home">
          <Image
            src="/images/logo.jpg"
            alt="Steak Studio Logo"
            width={84}
            height={84}
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-[84px] md:w-[83.15px] object-contain"
          />

        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li>
            <Link
              className="text-Gray-200 hover:text-brand-500 font-semibold"
              href="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="text-Gray-200 hover:text-brand-500 font-semibold"
              href="/menu"
            >
              MENU
            </Link>
          </li>
          <li>
            <Link
              className="text-Gray-200 hover:text-brand-500 font-semibold"
              href="/events"
            >
              EVENTS
            </Link>
          </li>
          <li>
            <Link
              className="text-Gray-200 hover:text-brand-500 font-semibold"
              href="/gallery"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              className="text-Gray-200 hover:text-brand-500 font-semibold"
              href="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              className="text-Gray-200 hover:text-brand-500 font-semibold"
              href="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="text-Gray-200 hover:text-brand-500 font-semibold"
              href="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="hidden sm:flex items-center gap-2">
          <div className="text-right leading-4">
            <p className="text-[12px] font-semibold text-Gray-200">
              Delivery Order
            </p>
            <a
              href="tel:+8801630225015"
              className="text-[12px] text-Gray-200 block"
            >
              +880 1630 225 015
            </a>
            <p className="text-[11px] text-Gray-200">7.30 AM - 9.30 PM</p>
          </div>
          <Image
            src="/images/delivery-icon.png"
            alt="Delivery Icon"
            width={36}
            height={36}
            className="h-9 w-9"
          />
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-Gray-200"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 ${open ? "pointer-events-auto" : "pointer-events-none"
          } z-50`}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"
            }`}
          onClick={close}
        />
        <div
          ref={panelRef}
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300
                      ${open ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 h-16 border-b">
            <Image
              src="/images/logo.jpg"
              alt="Steak Studio Logo"
              width={60}
              height={60}
              className="w-[60px] h-[60px] sm:w-[83.15px] sm:h-[84px] object-contain"
            />

            <button
              onClick={close}
              className="p-2 text-Gray-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={close}
                  className="block px-2 py-3 text-Gray-200 font-semibold hover:text-brand-500"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  onClick={close}
                  className="block px-2 py-3 text-Gray-200 font-semibold hover:text-brand-500"
                >
                  MENU
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  onClick={close}
                  className="block px-2 py-3 text-Gray-200 font-semibold hover:text-brand-500"
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  onClick={close}
                  className="block px-2 py-3 text-Gray-200 font-semibold hover:text-brand-500"
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={close}
                  className="block px-2 py-3 text-Gray-200 font-semibold hover:text-brand-500"
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={close}
                  className="block px-2 py-3 text-Gray-200 font-semibold hover:text-brand-500"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={close}
                  className="block px-2 py-3 text-Gray-200 font-semibold hover:text-brand-500"
                >
                  CONTACT
                </Link>
              </li>
            </ul>

            <div className="mt-6 border-t pt-4 flex items-center gap-3">
              <Image
                src="/images/delivery-icon.png"
                alt="Delivery Icon"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <div className="leading-5">
                <p className="text-sm font-semibold text-Gray-200">
                  Delivery Order
                </p>
                <a
                  href="tel:+8801630225015"
                  className="text-sm text-Gray-200 block"
                >
                  +880 1630 225 015
                </a>
                <p className="text-xs text-Gray-200">7.30 AM - 9.30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
