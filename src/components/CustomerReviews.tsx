import React from "react";

import J from "../assets/J.jpeg";
import B from "../assets/B.jpeg";
import F from "../assets/F.jpeg";
import A from "../assets/A.jpeg";
import D from "../assets/D.jpeg";
import O from "../assets/O.jpeg";
import M from "../assets/M.jpeg";
import G from "../assets/G.jpeg";
import E from "../assets/E.jpeg";
import I from "../assets/I.jpeg";
import K from "../assets/K.jpeg";
import S from "../assets/S.jpeg";

interface Review {
  image: string;
  review: string;
}

const reviews: Review[] = [
  {
    image: J,
    review:
      "I've tried different skincare products before, but I decided to stick with these because I actually enjoy using them. My skin feels smoother and more moisturized now.",
  },
  {
    image: B,
    review:
      "What I really like about Zainie Skincare is how the products feel on my skin. They don't feel too heavy, and my skin has been looking healthier since I started using them.",
  },
  {
    image: F,
    review:
      "I absolutely love the results. The products feel great on my skin and I would definitely recommend them.",
  },
  {
    image: A,
    review:
      "I was honestly a little skeptical at first, but after using the products consistently, I started noticing a difference. My skin feels much softer and looks more refreshed.",
  },
  {
    image: D,
    review:
      "I bought the products because my sister recommended them to me. I'm glad I gave them a try. My skin feels really soft after my routine, and I love how simple the products are to use.",
  },
  {
    image: O,
    review:
      "The body wash has become one of my favorites. It leaves my skin feeling clean without that dry feeling I sometimes get from other products.",
  },
  {
    image: M,
    review:
      "The first few days I didn't notice much, but I kept using it consistently. After a few weeks, I could see that my skin looked more even and felt much better.",
  },
  {
    image: G,
    review:
      "I really like the glow my skin has gotten since I started paying more attention to my skincare routine. The products have been a nice addition, and I'll definitely keep using them.",
  },
  {
    image: E,
    review:
      "I love how easy the products are to add to my daily routine. My skin feels moisturized after using them, and I've been really happy with the experience.",
  },
  {
    image: I,
    review:
      "I've been using the products for a while now and I genuinely like how my skin feels. It's softer, smoother and looks more cared for.",
  },
  {
    image: K,
    review:
      "I've been looking for products that I can actually stay consistent with, and these have worked well for me. My skin feels clean, soft and refreshed.",
  },
  {
    image: S,
    review:
      "One thing I really appreciate is that the products fit easily into my routine. I've been consistent with them and I'm happy with how my skin has been looking.",
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <section
    id="CustomerReviews"
     className="relative w-full overflow-hidden bg-[#FFF7F7] px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#EAA900]/8 blur-[130px]" />

      <div className="relative mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#C88A00]">
          Customer Love
        </p>

        <h2 className="text-3xl font-medium tracking-tight text-[#1d1914] sm:text-4xl lg:text-5xl">
          Real People. Real Experiences.
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#625D55] sm:text-base">
          See what our customers are saying about their experience with
          ZAINIESKINCARE and their skincare journey.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((item, index) => (
          <article
            key={index}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#eee1df] bg-[#FFFDFB] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden bg-[#F7F1E5]">
              <img
                src={item.image}
                alt="Customer skincare result"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-4 flex gap-1 text-[#EAA900]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="text-sm leading-7 text-[#625D55] sm:text-[15px]">
                "{item.review}"
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;