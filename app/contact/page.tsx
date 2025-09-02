"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Vendors from "../components/Vendors";

type Branch = {
  name: string;
  phone: string;
  addressLines: string[];
  lat?: number;
  lng?: number;
};

const branches: Branch[] = [
  {
    name: "BRANCH 01",
    phone: "0300 4554999",
    addressLines: [
      "IQBAL AVENUE PHASE 01; OPPOSITE SHAUKAT KHANAM HOSPITAL,",
      "LAHORE-PAKISTAN",
    ],
  },
  {
    name: "BRANCH 02",
    phone: "0302 4554999",
    addressLines: [
      "IQBAL AVENUE PHASE 03; MAIN CANAL",
      "BANK ROAD, LAHORE-PAKISTAN",
    ],
  },
];

const buildEmbedSrc = (b: Branch) => {
  if (typeof b.lat === "number" && typeof b.lng === "number") {
    return `https://www.google.com/maps?q=${b.lat},${b.lng}&z=16&output=embed`;
  }
  const query = encodeURIComponent(b.addressLines.join(", "));
  return `https://www.google.com/maps?q=${query}&z=16&output=embed`;
};

const ContactUsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useMemo(() => branches[activeIndex], [activeIndex]);

  return (
    <div className="flex flex-col bg-background-500" >

      <section className="relative w-full h-56 sm:h-60 bg-Gray-200 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-banner.png"
            alt="About Us Banner"
            fill
            className="object-cover opacity-50"
            quality={100}
            priority
          />
        </div>
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">CONTACT US</h1>
          <p className="text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-1/2 bg-background-500 p-4 sm:p-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {branches.map((b, i) => (
                <button
                  key={b.name}
                  onClick={() => setActiveIndex(i)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${i === activeIndex
                    ? "bg-brand-500 text-white"
                    : "bg-background-500 text-gray-600 ring-1 ring-gray-300"
                    }`}
                >
                  {b.name}
                </button>
              ))}
            </div>


            <h2 className="text-2xl font-bold text-brand-500 mb-6">ADDRESS</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-brand-500 text-xl mt-1 mr-3"
                />
                <p className="text-gray-600 text-lg break-words">
                  {active.addressLines[0]} <br />
                  {active.addressLines[1]}
                </p>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-brand-500 text-xl mt-1 mr-3"
                />
                <p className="text-gray-600 text-lg">
                  <a
                    href={`tel:${active.phone.replace(/\s+/g, "")}`}
                    className="hover:underline"
                  >
                    {active.phone}
                  </a>
                </p>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-brand-500 text-xl mt-1 mr-3"
                />
                <p className="text-gray-600 text-lg">resturents@gmail.com</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-500 mt-8 mb-4">
              WORKING HOURS
            </h2>
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faClock}
                className="text-brand-500 text-xl mt-1 mr-3"
              />
              <p className="text-brand-500 text-lg">7:30 AM to 9:30 PM</p>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-brand-500 mb-4">
                FOLLOW US
              </h2>
              <div className="flex space-x-4">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-2xl text-brand-500"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl text-brand-500"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl text-brand-500"
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-2xl text-brand-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[557px]">
              <div className="relative w-full" style={{ paddingTop: "70.2%" }}>
                <iframe
                  src={buildEmbedSrc(active)}
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ border: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${active.name} Map`}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Vendors />
    </div>
  );
};

export default ContactUsPage;
