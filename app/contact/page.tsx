"use client";
import React from "react";
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


const ContactUsPage = () => {
  return (
    <div className="flex flex-col bg-background-500">
      <section className="relative w-full h-60 bg-Gray-200 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/contact-banner.png"
          alt="Contact Us Banner"
          fill className="object-cover opacity-50"

          quality={100}
        />
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-4xl font-bold mb-2">CONTACT US</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

      </section>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 p-6 ">
            <h2 className="text-2xl font-bold text-brand-500 mb-6">ADDRESS</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-brand-500 text-xl mt-1 mr-3"
                />
                <p className="text-Gray-200 text-lg">
                  28 Seventh Avenue, Neew York, 10014
                </p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-brand-500 text-xl mt-1 mr-3"
                />
                <p className="text-Gray-200 text-lg">+880 1630 225 015</p>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-brand-500 text-xl mt-1 mr-3"
                />
                <p className="text-Gray-200 text-lg">resturents@gmail.com</p>
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
              <p className="text-brand-500 text-lg">
                7:30 AM to 9:30pm on Weekdays
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-500 mt-8 mb-4">
              FOLLOW US
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-500 transition duration-300"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-500 transition duration-300"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-500 transition duration-300"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 h-[400px] lg:h-auto bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4277637622728!2d-74.005972!3d40.741895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25964f40f283d%3A0x6b8015f6067b5744!2s7th%20Ave%2C%20New%20York%2C%20NY%2010014%2C%20USA!5e0!3m2!1sen!2sbd!4v1700685651557!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of New York"
            ></iframe>
          </div>
        </div>
      </main>
      <Vendors />
    </div>
  );
};

export default ContactUsPage;
