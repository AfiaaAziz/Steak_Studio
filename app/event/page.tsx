"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Vendors from "../components/Vendors";

type EventLite = {
  slug: string;
  title: string;
  image: string;
  text: string;
  cta?: string;
};

const events: EventLite[] = [
  {
    slug: "birthday-party",
    title: "Birthday Party",
    image:
      "https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    cta: "Get a Quote",
  },
  {
    slug: "wedding-party",
    title: "Wedding Party",
    image:
      "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    cta: "Plan My Event",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    image:
      "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    cta: "Request Proposal",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-background-500 py-16 sm:py-20 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="tracking-[0.15em] text-xs font-semibold mb-3 text-brand-500">
              EVENTS & SERVICES
            </p>
            <h1 className="font-bold text-3xl sm:text-4xl mb-4 text-Gray-200">
              Make your moments unforgettable
            </h1>
            <p className="mt-1 text-sm sm:text-base max-w-2xl mx-auto text-Gray-200 leading-relaxed">
              From intimate birthdays to elegant weddings and polished corporate
              gatherings — we handle the details, you enjoy the day.
            </p>
          </div>

          {/* 3-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {events.map((e) => (
              <article
                key={e.slug}
                className="group border border-brand-500/60 hover:border-brand-500 transition-colors rounded-none bg-background-500 overflow-hidden"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:1024px) 100vw, 33vw"
                    priority={false}
                  />
                  <span className="absolute left-3 top-3 text-[10px] px-2 py-0.5 border border-brand-500 bg-background-500/90 text-brand-500">
                    EVENT
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-Gray-200 group-hover:text-brand-500">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm text-Gray-200/90 leading-relaxed">
                    {e.text}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    {e.cta ? (
                      <Link
                        href="/contact"
                        className="inline-flex items-center border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors px-3 py-1.5 text-sm font-semibold rounded-none"
                      >
                        {e.cta}
                      </Link>
                    ) : (
                      <span />
                    )}

                    <Link
                      href={`/events/${e.slug}`}
                      className="inline-flex items-center gap-2 text-brand-500 font-semibold"
                    >
                      Details <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Optional CTA bar */}
          <div className="mt-12 border border-brand-500 rounded-none px-6 py-6 sm:px-8 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-Gray-200">
              Planning something special?
            </h2>
            <p className="mt-2 text-sm text-Gray-200/90">
              Tell us about your event and we’ll craft a custom proposal.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors rounded-none px-5 py-2 font-semibold"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      <Vendors />
    </>
  );
}
