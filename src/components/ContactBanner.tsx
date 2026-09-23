import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactBanner: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#EAA900] px-6 py-20 md:px-12 lg:px-16 lg:py-24"
    >
      {/* Light cream layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5C542]/80 via-[#EAA900] to-[#C88A00]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-[80px]" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#FFF9E8]/20 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3a2a00]">
          Your Skin Deserves Care
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-[#1d1914] sm:text-5xl lg:text-6xl">
          Let's Make Skincare Part of Your Everyday Routine.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#3f3218] sm:text-lg">
          Have questions about our products or need help choosing what works
          for your routine? We're here to help.
        </p>

        <button
          type="button"
          onClick={handleContactClick}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1d1914] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl"
        >
          Contact Us
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default ContactBanner;