"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-White-200 shadow-md p-4 flex items-center justify-between relative">
      <div className="flex items-center">
        <Image
          src="/images/logo.jpg"
          alt="Steak Studio Logo"
          width={80}
          height={80}
        />
      </div>

      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className="text-Gray-200 hover:text-brand-500 font-semibold"
        >
          HOME
        </Link>
        <Link
          href="/menu"
          className="text-Gray-200 hover:text-brand-500 font-semibold"
        >
          MENU
        </Link>
        <Link
          href="/events"
          className="text-Gray-200 hover:text-brand-500 font-semibold"
        >
          EVENTS
        </Link>
        <Link
          href="/gallery"
          className="text-Gray-200 hover:text-brand-500 font-semibold"
        >
          GALLERY
        </Link>
        <Link
          href="/blog"
          className="text-Gray-200 hover:text-brand-500 font-semibold"
        >
          BLOG
        </Link>
        <Link
          href="/about"
          className="text-Gray-200 hover:text-brand-500 font-semibold"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="text-Gray-200 hover:text-brand-500 font-semibold"
        >
          CONTACT
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <div className="text-right">
          <p className="text-sm font-semibold text-Gray-200">Delivery Order</p>
          <p className="text-sm text-Gray-200">+880 1630 225 015</p>
          <p className="text-xs text-Gray-200">7.30 AM - 9.30 PM</p>
        </div>
        <Image
          src="/images/delivery-icon.png"
          alt="Delivery Icon"
          width={50}
          height={50}
        />
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-Gray-200 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full right-4 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
            <Link
              href="/"
              className="block px-4 py-2 text-brand-500 hover:text-brand-500 font-semibold"
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>
            <Link
              href="/menu"
              className="block px-4 py-2 text-Gray-200 hover:text-brand-500 font-semibold"
              onClick={toggleMobileMenu}
            >
              MENU
            </Link>
            <Link
              href="/events"
              className="block px-4 py-2 text-Gray-200 hover:text-brand-500 font-semibold"
              onClick={toggleMobileMenu}
            >
              EVENTS
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-Gray-200 hover:text-brand-500 font-semibold"
              onClick={toggleMobileMenu}
            >
              GALLERY
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-Gray-200 hover:text-brand-500 font-semibold"
              onClick={toggleMobileMenu}
            >
              BLOG
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-Gray-200 hover:text-brand-500 font-semibold"
              onClick={toggleMobileMenu}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-Gray-200 hover:text-brand-500 font-semibold"
              onClick={toggleMobileMenu}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
