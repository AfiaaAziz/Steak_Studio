"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ChevronRight } from "lucide-react";
import Vendors from "../components/Vendors";


type Category = "All" | "News" | "Recipes" | "Events" | "Tips";
type Post = {
  slug: string;
  title: string;
  category: Exclude<Category, "All">;
  date: string;
  readingTime: string;
  image: string;
  excerpt: string;
  author: { name: string; avatar: string };
  featured?: boolean;
};

const posts: Post[] = [
  {
    slug: "summer-grill-secrets",
    title: "Summer Grill Secrets: How We Get That Perfect Sear",
    category: "Tips",
    date: "2025-06-14",
    readingTime: "6 min",
    image:
      "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "From resting temps to final basting — our chefs share the small tweaks that make big flavor.",
    author: {
      name: "Alex Morgan",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    featured: true,
  },
  {
    slug: "market-to-table",
    title: "From Market to Table: Curating the Freshest Menu",
    category: "News",
    date: "2025-06-07",
    readingTime: "4 min",
    image:
      "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "A peek at our morning routine: farmers, small batches, and what makes an ingredient standout.",
    author: {
      name: "Sana Tariq",
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "house-sourdough",
    title: "The House Sourdough: 72 Hours of Patience",
    category: "Recipes",
    date: "2025-05-31",
    readingTime: "5 min",
    image:
      "https://images.pexels.com/photos/2092065/pexels-photo-2092065.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "Our starter is older than the restaurant itself. Here’s how we keep it lively and flavorful.",
    author: {
      name: "Maria Lopez",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "chef-table-evening",
    title: "Chef’s Table Evening: Behind the Curtain",
    category: "Events",
    date: "2025-05-24",
    readingTime: "7 min",
    image:
      "https://images.pexels.com/photos/6270/food-salad-restaurant-person.jpg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "Tasting menus, surprise courses, and a dining room that becomes a stage for the team.",
    author: {
      name: "Noah Brooks",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "espresso-ritual",
    title: "The Espresso Ritual: Dialing the Perfect Shot",
    category: "Tips",
    date: "2025-05-17",
    readingTime: "3 min",
    image:
      "https://images.pexels.com/photos/239662/pexels-photo-239662.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "Dose, yield, and timing — the three numbers that keep our bar humming every morning.",
    author: {
      name: "Hina Riaz",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "heritage-spices",
    title: "Heritage Spices: The Heart of Our Kitchen",
    category: "News",
    date: "2025-05-10",
    readingTime: "5 min",
    image:
      "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "We source single-origin spices in micro-lots — here’s why it matters to your plate.",
    author: {
      name: "Omar Farooq",
      avatar:
        "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "family-brunch",
    title: "Family Brunch Returns This Weekend",
    category: "Events",
    date: "2025-04-29",
    readingTime: "2 min",
    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "New pastry lineup, live coffee bar, and a kids’ corner — every Sunday, 10am–2pm.",
    author: {
      name: "Ayesha Khan",
      avatar:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "pan-sauce-mastery",
    title: "Pan Sauce Mastery in 10 Minutes",
    category: "Recipes",
    date: "2025-04-20",
    readingTime: "4 min",
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "Deglaze, reduce, mount — a silky finish that turns any protein into a signature dish.",
    author: {
      name: "Imran Qureshi",
      avatar:
        "https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "zero-waste",
    title: "Zero-Waste Prep: Our Kitchen Playbook",
    category: "Tips",
    date: "2025-04-12",
    readingTime: "5 min",
    image:
      "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "Nose-to-tail, root-to-leaf — how we turn trims into features across the menu.",
    author: {
      name: "Fatima Y.",
      avatar:
        "https://images.pexels.com/photos/3770580/pexels-photo-3770580.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "private-dining",
    title: "Private Dining: New Room, New Menu",
    category: "News",
    date: "2025-04-01",
    readingTime: "3 min",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "We’ve opened an intimate 16-seat room for birthdays, proposals, and everything in between.",
    author: {
      name: "Zain Malik",
      avatar:
        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "smoked-salmon-toast",
    title: "Smoked Salmon Toast (Brunch Favorite)",
    category: "Recipes",
    date: "2025-03-24",
    readingTime: "4 min",
    image:
      "https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "Lemon labneh, herbs, and a slick of olive oil — a bright bite with a buttery crunch.",
    author: {
      name: "Rida Ahmed",
      avatar:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
  {
    slug: "spring-menu-preview",
    title: "Spring Menu Preview Night",
    category: "Events",
    date: "2025-03-15",
    readingTime: "2 min",
    image:
      "https://images.pexels.com/photos/230743/pexels-photo-230743.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop",
    excerpt:
      "Reservations open Friday at noon — limited seats, five tasting courses, wine pairings.",
    author: {
      name: "Team Heritaste",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  },
];

const categories: Category[] = ["All", "News", "Recipes", "Events", "Tips"];

function byNewest(a: Post, b: Post) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

function Card({ post }: { post: Post }) {
  return (
    <article className="group border border-brand-500/50 hover:border-brand-500 transition-colors rounded-none bg-background-500 overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:1024px) 100vw, 33vw"
          />
          <span className="absolute left-3 top-3 text-[10px] px-2 py-0.5 border border-brand-500 bg-background-500/90 text-brand-500">
            {post.category}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-semibold text-Gray-200 group-hover:text-brand-500">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-Gray-200/90 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between text-Gray-200/80 text-xs">
            <div className="flex items-center gap-2">
              <span className="relative w-6 h-6 overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </span>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState<Category>("All");
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(9);

  const sorted = useMemo(() => posts.slice().sort(byNewest), []);
  const featured = useMemo(
    () => sorted.find((p) => p.featured) ?? sorted[0],
    [sorted]
  );

  const filtered = useMemo(() => {
    const base =
      active === "All" ? sorted.filter((p) => p.slug !== featured.slug) : sorted.filter((p) => p.category === active);
    const search = q.trim().toLowerCase();
    if (!search) return base;
    return base.filter(
      (p) =>
        p.title.toLowerCase().includes(search) ||
        p.excerpt.toLowerCase().includes(search) ||
        p.author.name.toLowerCase().includes(search)
    );
  }, [active, q, sorted, featured.slug]);

  const shown = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  return (
     <>
    <section className="bg-background-500 py-16 sm:py-20 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="tracking-[0.15em] text-xs font-semibold mb-3 text-brand-500">
            BLOG
          </p>
          <h1 className="font-bold text-3xl sm:text-4xl mb-4 text-Gray-200">
            Stories from our kitchen
          </h1>
          <p className="mt-1 text-sm sm:text-base max-w-2xl mx-auto text-Gray-200 leading-relaxed">
            Techniques, events, ingredients, and the people behind every plate.
          </p>
        </div>

        <div className="mb-8 flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4">
          <div className="flex-1 grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`rounded-none border px-3 sm:px-4 py-2 text-[11px] sm:text-sm font-medium transition-colors
                  ${
                    active === c
                      ? "bg-brand-500 text-white border-brand-500"
                      : "bg-background-500 text-brand-500 border-brand-500/60 hover:border-brand-500"
                  }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="lg:w-[320px]">
            <label className="relative block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-Gray-200/70">
                <Search className="w-4 h-4" />
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles…"
                className="w-full bg-background-500 text-Gray-200 placeholder:text-Gray-200/60 border border-brand-500/60 focus:border-brand-500 focus:outline-none rounded-none py-2 pl-9 pr-3 text-sm"
              />
            </label>
          </div>
        </div>

        <Link
          href={`/blog/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-8 border border-brand-500 rounded-none overflow-hidden mb-10"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-4 lg:h-[380px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width:1024px) 100vw, 55vw"
            />
            <span className="absolute left-3 top-3 text-[10px] px-2 py-0.5 border border-brand-500 bg-background-500/90 text-brand-500">
              {featured.category}
            </span>
          </div>
          <div className="lg:col-span-3 p-5 sm:p-6 flex flex-col justify-center bg-background-500">
            <h2 className="text-2xl sm:text-3xl font-bold text-Gray-200 group-hover:text-brand-500">
              {featured.title}
            </h2>
            <p className="mt-3 text-Gray-200/90 leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between text-Gray-200/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="relative w-7 h-7 overflow-hidden">
                  <Image
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    fill
                    className="object-cover"
                  />
                </span>
                <span>{featured.author.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>{new Date(featured.date).toLocaleDateString()}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readingTime}
                </span>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 text-brand-500 font-semibold">
              Read article <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {shown.map((p) => (
            <Card key={p.slug} post={p} />
          ))}
        </div>

        {canLoadMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="rounded-none border border-brand-500 px-6 py-3 text-sm font-semibold text-brand-500 hover:bg-brand-500 hover:text-white transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
    <Vendors />
    
    </>
  );
}
