import React, { useEffect, useState } from "react";
import {
  Mail,
  ArrowUpRight,
  ArrowUp,
  X,
  CheckCheck,
} from "lucide-react";

import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import LOGO from "../assets/LOGO.jpeg";

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const whatsappNumber = "2349029207126";
  const email = "your-email@example.com";

  const currentYear = new Date().getFullYear();

  // Current time
  const chatTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Show back-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Send WhatsApp message
  const handleSend = () => {
    const text =
      message.trim() ||
      "Hello! I would like to inquire about your skincare products.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setMessage("");
  };

  return (
    <>
      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="relative overflow-hidden bg-[#FFF9E8] px-6 pb-6 pt-14 text-[#625D55] md:px-10 lg:px-16 lg:pt-20">

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#EAA900]/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#F5C542]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* =====================================================
              MAIN FOOTER
          ===================================================== */}
          <div className="grid gap-12 border-b border-[#E8D9B8] pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={LOGO}
                  alt="ZAINIESKINCARE Logo"
                  className="h-12 w-12 rounded-xl object-contain"
                />

                <span className="text-xl font-bold uppercase tracking-tight text-[#C88A00]">
                  Zainieskincare
                </span>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-7 text-[#625D55]">
                Thoughtfully selected skincare products designed to make your
                everyday skincare routine simple, enjoyable, and consistent.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/Zainie_skincare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D9B8] bg-white text-[#1D1914] transition-all duration-300 hover:-translate-y-1 hover:border-[#EAA900] hover:bg-[#EAA900]"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D9B8] bg-white text-[#1D1914] transition-all duration-300 hover:-translate-y-1 hover:border-[#EAA900] hover:bg-[#EAA900]"
                >
                  <FaTiktok className="h-5 w-5" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D9B8] bg-white text-[#1D1914] transition-all duration-300 hover:-translate-y-1 hover:border-[#EAA900] hover:bg-[#EAA900]"
                >
                  <Mail className="h-4 w-4" />
                </a>

              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-lg font-semibold text-[#1D1914]">
                Company
              </h3>

              <ul className="mt-5 space-y-3 text-sm">

                <li>
                  <a
                    href="#about"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/services"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="/products"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Products
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Career
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Contact Us
                  </a>
                </li>

              </ul>
            </div>

            {/* POPULAR CATEGORIES */}
            <div>
              <h3 className="text-lg font-semibold text-[#1D1914]">
                Popular Categories
              </h3>

              <ul className="mt-5 space-y-3 text-sm">

                <li>
                  <a
                    href="/products"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Face Creams
                  </a>
                </li>

                <li>
                  <a
                    href="/products"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Body Scrubs
                  </a>
                </li>

                <li>
                  <a
                    href="/products"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Soaps
                  </a>
                </li>

                <li>
                  <a
                    href="/products"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Serums &amp; Oils
                  </a>
                </li>

                <li>
                  <a
                    href="/products"
                    className="transition-colors duration-300 hover:text-[#C88A00]"
                  >
                    Whitening Products
                  </a>
                </li>

              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold text-[#1D1914]">
                Contact Us
              </h3>

              <div className="mt-5 space-y-4 text-sm">

                <p>Lagos, Nigeria</p>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors duration-300 hover:text-[#C88A00]"
                >
                  0902 920 7126
                </a>

                <a
                  href={`mailto:${email}`}
                  className="block break-all transition-colors duration-300 hover:text-[#C88A00]"
                >
                  {email}
                </a>

              </div>
            </div>

          </div>

          {/* =====================================================
              BOTTOM FOOTER
          ===================================================== */}
          <div className="flex flex-col gap-4 pt-6 text-xs text-[#81796D] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} ZAINIESKINCARE. All rights reserved.
            </p>

            <p>Skincare made simple.</p>
          </div>

        </div>
      </footer>

      {/* =====================================================
          WHATSAPP FLOATING WIDGET
      ===================================================== */}
      <div className="fixed bottom-6 right-6 z-[9990]">

        {/* WhatsApp Chat Box */}
        {showChat && (
          <div className="absolute bottom-20 right-0 w-72 overflow-hidden rounded-2xl border border-[#e5ddc8] bg-[#f4f1ea] shadow-2xl animate-[fadeIn_0.2s_ease-out]">

            {/* Header */}
            <div className="flex items-start justify-between gap-3 bg-[#075E54] px-4 py-3">

              <div className="flex items-center gap-3">
                <div className="relative">

                  <img
                    src={LOGO}
                    alt="ZAINIESKINCARE"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
                  />

                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />

                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Zainieskincare
                  </p>

                  <p className="text-xs text-white/70">
                    Typically replies within 10 minutes
                  </p>
                </div>
              </div>

              {/* Close Chat */}
              <button
                type="button"
                onClick={() => setShowChat(false)}
                aria-label="Close chat"
                className="mt-1 text-white/80 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

            </div>

            {/* Chat Body */}
            <div
              className="space-y-3 px-3 py-4"
              style={{
                backgroundColor: "#e9e3d3",
                backgroundImage:
                  "radial-gradient(#d8cfb3 0.6px, transparent 0.6px)",
                backgroundSize: "14px 14px",
              }}
            >

              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">

                <p className="text-xs font-semibold text-[#075E54]">
                  Zainieskincare
                </p>

                <p className="mt-1 text-sm leading-5 text-[#1D1914]">
                  Hi, welcome to Zainieskincare, how can we help you today 🙂
                </p>

                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-gray-400">
                  {chatTime}

                  <CheckCheck className="h-3.5 w-3.5 text-[#53bdeb]" />
                </div>

              </div>

            </div>

            {/* Input Row */}
            <div className="flex items-center gap-2 border-t border-[#e0d8c0] bg-[#f4f1ea] px-3 py-2.5">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Type a message.."
                className="flex-1 rounded-full border border-[#e0d8c0] bg-white px-4 py-2 text-sm text-[#1D1914] outline-none placeholder:text-gray-400 focus:border-[#EAA900]"
              />

              <button
                type="button"
                onClick={handleSend}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAA900] text-[#1D1914] transition-colors hover:bg-[#C88A00] hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>

            </div>

          </div>
        )}

        {/* =====================================================
            FLOATING WHATSAPP BUTTON
        ===================================================== */}
        <div className="relative flex h-14 w-14 items-center justify-center">

          {!showChat && (
            <>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EAA900] opacity-40" />

              <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-[#EAA900]/30" />
            </>
          )}

          <button
            type="button"
            onClick={() => setShowChat((prev) => !prev)}
            aria-label="Open WhatsApp chat"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#EAA900] text-[#1D1914] shadow-lg shadow-[#C88A00]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C88A00] hover:text-white hover:shadow-xl"
          >
            {showChat ? (
              <X className="h-6 w-6" />
            ) : (
              <FaWhatsapp className="h-6 w-6" />
            )}
          </button>

        </div>

      </div>

      {/* =====================================================
          BACK TO TOP BUTTON
      ===================================================== */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-[9990] flex h-14 w-14 items-center justify-center rounded-full bg-[#EAA900] text-[#1D1914] shadow-lg shadow-[#C88A00]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C88A00] hover:text-white hover:shadow-xl"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* =====================================================
          FOOTER ANIMATIONS
      ===================================================== */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;