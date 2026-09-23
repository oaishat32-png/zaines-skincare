import React from "react";

import CEO from "../assets/CEO.jpeg";

const AboutStory: React.FC = () => {
  return (
    <section
    id="our-story"
     className="relative w-full overflow-hidden border-t border-[#eee5d4] bg-[#FFF9EE] px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#EAA900]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[#F5C542]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Heading */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#C88A00]">
          Our Story
        </p>

        <h2 className="text-3xl font-medium tracking-tight text-[#1d1914] sm:text-4xl lg:text-5xl">
          An Incredible Journey About Us
        </h2>

        

        {/* Introduction */}
        <p className="mx-auto mt-10 max-w-4xl text-base leading-8 text-[#625D55] sm:text-lg">
          ZAINIESKINCARE is a proudly Nigerian skincare brand created in JAN
          2021 from a simple desire to help people feel confident and
          comfortable in their own skin.
        </p>

        <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[#625D55] sm:text-lg">
          What started as a passion for natural skincare gradually grew into a
          brand dedicated to providing carefully selected skincare products
          for everyday routines. We believe healthy-looking skin doesn't
          happen overnight; it comes from understanding your skin, choosing
          the right products and, most importantly, being consistent.
        </p>

        {/* Founder */}
        <div className="mx-auto mt-14 flex max-w-lg flex-col items-center gap-5 rounded-3xl border border-[#eadfca] bg-white/80 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:text-left">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-full bg-[#EAA900]/20 blur-sm" />

            <img
              src={CEO}
              alt="Zainab Eniola, CEO of ZAINIESKINCARE"
              className="relative h-24 w-24 rounded-full object-cover ring-4 ring-[#FFF7E8]"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C88A00]">
              Founder
            </p>

            <h3 className="mt-1 text-xl font-medium italic text-[#1d1914]">
              Zainab Eniola
            </h3>

            <p className="mt-1 text-sm text-[#625D55]">
              CEO, ZAINESORGANIC SKINCARE
            </p>
          </div>
        </div>

        {/* Closing Story */}
        <p className="mx-auto mt-10 max-w-3xl text-base leading-8 text-[#625D55] sm:text-lg">
          Today, ZAINIESKINCARE continues to grow with the same passion that
          started it all. Our goal is to make skincare simple, accessible and
          enjoyable while helping our customers build routines that work for
          them.
        </p>

        {/* Founder Quote */}
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[#eadfca] bg-white/70 px-8 py-8 shadow-sm backdrop-blur-sm">
          <span className="absolute left-5 top-1 text-6xl font-serif text-[#EAA900]/20">
            “
          </span>

          <p className="relative text-lg italic leading-8 text-[#4e4942] sm:text-xl">
            "I believe skincare should not feel complicated. My goal is to
            provide products that make people feel good about taking care of
            themselves, one routine at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;