"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Vendors from "../components/Vendors";
import Link from "next/link";

const teamMembers = [
  {
    name: "Brain Adams",
    title: "Professional restaurant manager",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
    imageSrc: "/images/team-member1.png",
    socials: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Jhon Khan",
    title: "Professional restaurant manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
    imageSrc: "/images/team-member2.png",
    socials: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Jessica Biel",
    title: "Professional restaurant manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet",
    imageSrc: "/images/team-member3.png",
    socials: { twitter: "#", facebook: "#", instagram: "#", linkedin: "#" },
  },
];

const AboutUsPage = () => {
  return (
    <div className="font-sans min-h-screen">
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">ABOUT US</h1>
          <p className="text-base sm:text-xl">
            Read our Story, How we started and About the Team
          </p>
        </div>
      </section>

      <section className="bg-background-500 py-12 sm:py-20">
        <div className="flex justify-center px-4">
          <div
            className="
              w-full max-w-[1173px]
              bg-background-500 rounded-2xl border-4 border-brand-500
              flex flex-col lg:flex-row items-center lg:items-center
              p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8 lg:gap-12
              lg:h-[383px]
            "
          >
            <div className="w-full lg:w-[511px]">
              <div className="relative w-full aspect-[511/294] lg:h-[294px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/about.png"
                  alt="People dining at restaurant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 511px"
                />
              </div>
            </div>
<div className="flex-1 max-w-2xl mx-auto text-justify">
  <h2 className="text-xl sm:text-2xl font-bold text-Gray-200 mb-4 sm:mb-6 leading-tight">
    Opalaye yellowtail snapper, velvet catfish greyedriver banded
    killifish Old World rivuline catalufa eagle ray Moorish idol.
    Herring smelt barbeled dragonfish, tommy ruff.
  </h2>

  <p className="text-Gray-200 text-sm sm:text-base leading-relaxed">
    Queen danio velvet catfish Sacramento blackfish bullhead shark,
    rock bass bowfin blackfish Black swallower. Australian lungfish
    swamp eel paradise fish. Hake cookie-cutter shark silver carp,
    mudskipper dogfish. Slickhead, moray eel mudminnow. Long-finned
    pilotfish bluegill toadfish orangespine unicorn fish. Manta Ray
    Moorish idol.
  </p>
</div>


          </div>
        </div>
      </section>

      <section id="story" className="bg-background-500 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-500">
              OUR STORY
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12">
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[400px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/ourStory.png"
                  alt="Our Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <p className="text-Gray-200 text-base sm:text-lg leading-relaxed">
                In the heart of Johar Town right across from the bustling
                Shaukat Khanum Hospital Steak Studio was born in 2018. What
                started with a passion for perfecting steak soon turned into the
                most talked-about steak destination in town, celebrated for
                winning the hearts of our customers with every plate served. Our
                patrons often say, &ldquo;Your generosity shows in your
                servings,&rdquo; a compliment that embodies our commitment to
                hearty portions and genuine hospitality. Encouraged by our
                success and the loyalty of our guests we opened our second
                branch on Canal Bank Road. This new location not only continues
                our tradition of excellence in steaks but also embraces the joy
                of celebrations by offering event organization services
                including birthday decor and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-background-500 overflow-visible pt-0 lg:pt-[162px]">
        <div className="relative mx-auto max-w-[1440px] bg-chef-500 overflow-visible px-4 sm:px-6 py-8 sm:py-10 lg:px-0 lg:py-0 lg:h-[300px]">
          <Image
            src="/images/chef.png"
            alt="Our Chef"
            width={511}
            height={462}
            className="hidden lg:block absolute right-0 -top-[162px] bottom-0 z-10 w-[511px] h-[462px] pointer-events-none select-none"
            priority
          />

          <div className="relative z-20 w-full">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:h-[300px] lg:items-center lg:pt-8">
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-brand-500 font-semibold text-base sm:text-lg mb-2">
                  TASTY AND CRUNCHY
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-Gray-200 mb-4">
                  Our Chef
                </h2>
                <p className="text-Gray-200 text-sm sm:text-base mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam.
                </p>

                <Link
                  href="/menu"
                  className="inline-block bg-brand-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-brown-900 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 mx-auto lg:mx-0"
                >
                  VIEW OUR ALL MENU
                </Link>
              </div>

              <div
                className="hidden lg:block lg:w-[511px] shrink-0"
                aria-hidden
              />

              <div className="lg:hidden mt-6 flex justify-center">
                <Image
                  src="/images/chef.png"
                  alt="Our Chef"
                  width={300}
                  height={271}
                  className="w-56 sm:w-64 md:w-72 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="chef" className="bg-background-500 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-Gray-200 mb-2">
              OUR TEAM
            </h2>
            <p className="text-Gray-200 text-base mb-4 sm:mb-6">
              The Hardworking Team behind the restaurant
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-4 sm:p-6"
              >
                <div
                  className="
                  rounded-full border-2 border-brown-700
                  flex flex-col items-center justify-start relative
                  w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72
                "
                >
                  <div
                    className="
                    absolute -top-12 sm:-top-14 md:-top-16
                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                    rounded-full border-4 border-brown-700 overflow-hidden bg-white
                  "
                  >
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="mt-14 sm:mt-20 text-base sm:text-lg font-bold text-Gray-200 px-3">
                    {member.name}
                  </h3>

                  <p className="text-Gray-200 text-sm px-4 mt-2 line-clamp-3 sm:line-clamp-4 md:line-clamp-4">
                    {member.description}
                  </p>

                  <div className="flex justify-center space-x-5 sm:space-x-6 mt-3 sm:mt-4">
                    <a href={member.socials.twitter} className="text-brand-500">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href={member.socials.facebook}
                      className="text-brand-500"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      href={member.socials.instagram}
                      className="text-brand-500"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="text-brand-500"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Vendors />
    </div>
  );
};

export default AboutUsPage;
