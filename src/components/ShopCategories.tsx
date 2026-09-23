import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import karatgold from "../assets/karatgold.jpeg";
import Bodymilk from "../assets/Bodymilk.jpeg";
import Tumeric from "../assets/Tumeric.jpeg";
import exfoliating from "../assets/exfoliating.jpeg";
import Snowwhiteningsoap from "../assets/Snowwhiteningsoap.jpeg";
import Eventone from "../assets/Eventone.jpeg";

const categories = [
  {
    name: "Karat Gold",
    image: karatgold,
  },
  {
    name: "Body Milk",
    image: Bodymilk,
  },
  {
    name: "Turmeric",
    image: Tumeric,
  },
  {
    name: "Exfoliating",
    image: exfoliating,
  },
  {
    name: "Snow Whitening",
    image: Snowwhiteningsoap,
  },
  {
    name: "Even Tone",
    image: Eventone,
  },
];

const ShopCategories: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#F5C542]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C88A00]">
              Explore Our Collection
            </p>

            <h2 className="text-3xl font-medium tracking-tight text-[#1d1914] sm:text-4xl lg:text-5xl">
              Shop by Categories
            </h2>
          </div>

          <Link
            to="/products"
            className="hidden items-center gap-2 rounded-full border border-[#D8C28A] bg-white px-5 py-3 text-sm font-semibold text-[#1d1914] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EAA900] hover:bg-[#FFF9E8] sm:inline-flex"
          >
            Explore all Products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <Link
              key={item.name}
              to="/products"
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F7F1E5] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Gold glow */}
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#F5C542]/20 blur-[50px] transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="text-lg font-medium text-white sm:text-xl">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                    Explore collection
                  </p>
                </div>

                {/* GET PRICE BUTTON */}
                <span
                  className="flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1d1914] shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#EAA900]"
                >
                  GET PRICE
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#1d1914] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C88A00]"
          >
            Explore all Products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;