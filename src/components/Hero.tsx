import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import All from "../assets/All.jpeg";
import oil from "../assets/oil.jpeg";
import image from "../assets/image.png";

interface HeroSlide {
  image: string;
  kicker: string;
  title: React.ReactNode;
  description: string;
  primaryButton: string;
  primaryLink: string;
  secondaryButton: string;
  secondaryLink: string;
}

const slides: HeroSlide[] = [
  {
    image: image,
    kicker: "",
    title: "Thoughtful Care for Beautiful-Looking Skin.",
    description:
      "Welcome to ZAINIESKINCARE, your destination for thoughtfully selected skincare products designed to help you care for, nourish, and maintain beautiful-looking skin.",
    primaryButton: "LEARN MORE",
    primaryLink: "#our-story",
    secondaryButton: "BOOK A CONSULTATION",
    secondaryLink: "/contact",
  },

  {
    image: All,
    kicker: "Nourish • Care • Glow",
    title: (
      <>
        Discover Your
        <br className="hidden sm:block" />
        Everyday Glow.
      </>
    ),
    description:
      "Explore our collection of skincare essentials created to make your everyday skincare routine simple, enjoyable, and consistent.",
    primaryButton: "SHOP PRODUCTS",
    primaryLink: "/products",
    secondaryButton: "CONTACT US",
    secondaryLink: "/contact",
  },

  {
    image: oil,
    kicker: "Your Daily Skincare Ritual",
    title: (
      <>
        Healthy-Looking Skin
        <br className="hidden sm:block" />
        Starts With Consistency.
      </>
    ),
    description:
      "Give your skin the care it deserves. Build a routine that nourishes, hydrates, and helps you maintain healthy-looking skin every day.",
    primaryButton: "SHOP NOW",
    primaryLink: "/products",
    secondaryButton: "DISCOVER MORE",
    secondaryLink: "#CustomerReviews",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrimaryClick = () => {
    const link = slides[currentSlide].primaryLink;

    if (link.startsWith("#")) {
      const target = document.querySelector(link);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(link);
  };

  const handleSecondaryClick = () => {
    const link = slides[currentSlide].secondaryLink;

    if (link.startsWith("#")) {
      const target = document.querySelector(link);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(link);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-[#1d1914] pt-[72px] sm:min-h-[650px] sm:pt-[80px] lg:min-h-[760px]">
      {/* BACKGROUND SLIDES */}

      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
      ))}

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/40" />

      {/* GOLD GLOW */}

      <div className="pointer-events-none absolute -left-24 top-1/4 h-56 w-56 rounded-full bg-[#EAA900]/20 blur-[100px] sm:h-72 sm:w-72" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#F5C542]/15 blur-[100px] sm:h-80 sm:w-80" />

      {/* BOTTOM SHADOW */}

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent sm:h-48" />

      {/* CONTENT */}

      <div className="relative z-10 flex min-h-[548px] w-full items-center px-6 pb-28 pt-16 sm:min-h-[570px] sm:px-10 sm:pb-24 sm:pt-20 md:px-14 lg:min-h-[680px] lg:px-16 lg:pb-20">
        <div
          key={currentSlide}
          className="w-full max-w-3xl animate-[heroFade_0.8s_ease-out]"
        >
          {slide.kicker && (
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F5C542] sm:mb-5 sm:text-xs sm:tracking-[0.3em] md:text-sm">
              {slide.kicker}
            </p>
          )}

          <h1 className="max-w-4xl text-3xl font-medium leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            {slide.description}
          </p>

          {/* BUTTONS */}

          <div className="mt-16 flex flex-col items-start gap-3 sm:mt-20 sm:flex-row sm:items-center sm:gap-4">
  <button
    type="button"
    onClick={handlePrimaryClick}
    className="inline-flex w-auto items-center justify-center rounded-full bg-[#EAA900] px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-[#1d1914] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5C542] hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-[11px]"
  >
    {slide.primaryButton}
  </button>

  <button
    type="button"
    onClick={handleSecondaryClick}
    className="inline-flex w-auto items-center justify-center rounded-full border border-white/60 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#1d1914] sm:px-5 sm:py-2.5 sm:text-[11px]"
  >
    {slide.secondaryButton}
  </button>
</div>
        </div>
      </div>

      {/* PREVIOUS BUTTON */}

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Previous slide"
        className="absolute bottom-[68px] left-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#EAA900] hover:text-black sm:left-6 sm:top-1/2 sm:bottom-auto sm:h-11 sm:w-11 sm:-translate-y-1/2"
      >
        <ChevronLeft
          className="h-4 w-4 sm:h-5 sm:w-5"
          strokeWidth={1.7}
        />
      </button>

      {/* NEXT BUTTON */}

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute bottom-[68px] right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#EAA900] hover:text-black sm:right-6 sm:top-1/2 sm:bottom-auto sm:h-11 sm:w-11 sm:-translate-y-1/2"
      >
        <ChevronRight
          className="h-4 w-4 sm:h-5 sm:w-5"
          strokeWidth={1.7}
        />
      </button>

      {/* SLIDE INDICATORS */}

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#F5C542] sm:w-9"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* SLIDE NUMBER */}

      <div className="absolute bottom-7 right-4 z-20 hidden text-[10px] font-medium tracking-[0.15em] text-white/70 sm:right-7 sm:block sm:text-xs sm:tracking-[0.2em]">
        0{currentSlide + 1} / 0{slides.length}
      </div>

      {/* ANIMATION */}

      <style>
        {`
          @keyframes heroFade {
            from {
              opacity: 0;
              transform: translateY(18px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;