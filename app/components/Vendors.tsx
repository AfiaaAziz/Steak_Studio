// app/components/Vendors.tsx
"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

type Branch = {
  name: string;
  phone: string;
  addressLines: string[];
};

const branches: Branch[] = [
  {
    name: "BRANCH 01",
    phone: "0300 4554999",
    addressLines: [
      "IQBAL AVENUE PHASE 01; OPPOSITE SHAUKAT",
      "KHANAM HOSPITAL, LAHORE-PAKISTAN",
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

const buildMapUrl = (lines: string[]) => {
  const query = lines.join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
};

export default function Vendors() {
  return (
    <div className="w-full bg-brand-500 py-8 px-4 text-white">
      {/* Center items in the grid */}
      <div className="max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2 place-items-center">
        {branches.map((b, i) => (
          <div key={i} className="text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{b.name}</h3>

            {/* Address — centered */}
            <p className="text-base mb-2 flex items-start justify-center gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mt-1 text-accent-500"
              />
              <span className="text-white/90">
                {b.addressLines.map((ln, idx) => (
                  <span key={idx} className="block">
                    {ln}
                  </span>
                ))}
              </span>
            </p>

            {/* Hours + Phone — centered */}
            <p className="text-base flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-2">
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="mr-2 text-accent-500"
                />
                7:30 AM - 9:30 PM
              </span>
              <a
                href={`tel:${b.phone.replace(/\s+/g, "")}`}
                className="flex items-center hover:underline"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-accent-500"
                />
                {b.phone}
              </a>
            </p>

            {/* Maps link — centered by parent text-center */}
            <a
              href={buildMapUrl(b.addressLines)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-500 text-sm inline-block hover:underline"
            >
              Click to View Google Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
