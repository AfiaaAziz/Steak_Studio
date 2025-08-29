"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

const Vendors = () => {
  return (
    <div className="w-full bg-brand-500 py-8 flex flex-col md:flex-row items-center md:justify-evenly text-white px-4 gap-8">
      <div className="text-center flex-1 mx-4">
        <h3 className="text-xl font-semibold mb-2">Robert Food</h3>
        <p className="text-base mb-1">1986 Hilltop DriveBorger, TX 79007</p>
        <p className="text-base flex items-center justify-center mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-accent-500" />
          <span className="mr-4">7:30 AM - 9:30 PM</span>
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-accent-500" />
          <span>+880 1630-225015</span>
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=1986+Hilltop+Drive,+Borger,+TX+79007"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link-500 text-sm mt-2 inline-block hover:underline"
        >
          Click to View Google Map
        </a>
      </div>
      <div className="text-center flex-1 mx-4">
        <h3 className="text-xl font-semibold mb-2">Mark A. Reed Food</h3>
        <p className="text-base mb-1">4877 Rose Avenue New Orleans, LA 70112</p>
        <p className="text-base flex items-center justify-center mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-accent-500" />
          <span className="mr-4">7:30 AM - 9:30 PM</span>
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-accent-500" />
          <span>+880 1630-225015</span>
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=4877+Rose+Avenue,+New+Orleans,+LA+70112"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-link-500 text-sm mt-2 inline-block hover:underline"
        >
          Click to View Google Map
        </a>
      </div>
      <div className="text-center flex-1 mx-4">
        <h3 className="text-xl font-semibold mb-2">Karie K. Hill Food</h3>
        <p className="text-base mb-1">1509 Peaceful LaneCleveland, OH 44115</p>
        <p className="text-base flex items-center justify-center mb-2">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-accent-500" />
          <span className="mr-4">7:30 AM - 9:30 PM</span>
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-accent-500" />
          <span>+880 1630-225015</span>
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=1509+Peaceful+Lane,+Cleveland,+OH+44115"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link-500 text-sm mt-2 inline-block hover:underline"
        >
          Click to View Google Map
        </a>
      </div>
    </div>
  );
};

export default Vendors;