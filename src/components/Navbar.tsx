import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext";
import New from "../assets/New.jpeg";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/#about" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    setIsMobileMenuOpen(false);

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));

      if (target) {
        const timer = setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 80);

        return () => clearTimeout(timer);
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.hash]);

  const isActive = (path: string) => {
    const [targetPath, targetHash] = path.split("#");

    if (targetHash) {
      return (
        location.pathname === (targetPath || "/") &&
        location.hash === `#${targetHash}`
      );
    }

    return location.pathname === path && !location.hash;
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-[9999] w-full border-b border-[#eee6d8] bg-white shadow-sm">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-2.5 md:px-8 lg:px-12">
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <img
                src={New}
                alt="ZAINIESKINCARE"
                className="h-10 w-auto object-contain"
              />

              <span className="text-sm font-semibold tracking-[0.12em] text-[#C88A00]">
                ZAINIESKINCARE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-[#eee6d8] bg-white px-2 py-1.5 shadow-sm lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-[#FFF9E8] text-[#C88A00]"
                      : "text-[#1d1914] hover:bg-[#FFF9E8] hover:text-[#C88A00]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              to="/products"
              className="ml-2 rounded-full bg-[#EAA900] px-5 py-2 text-sm font-semibold text-[#1d1914] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5C542] hover:shadow-md"
            >
              Shop Now
            </Link>
          </nav>

          {/* Desktop Cart */}
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative ml-3 hidden h-10 w-10 items-center justify-center rounded-full border border-[#eadfca] bg-white text-[#1d1914] shadow-sm transition-all duration-300 hover:border-[#EAA900] hover:bg-[#FFF9E8] lg:flex"
          >
            <ShoppingBag className="h-5 w-5" />

            {totalCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C88A00] text-[10px] font-bold text-white">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Cart */}
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfca] bg-white text-[#1d1914] shadow-sm transition-all duration-300 hover:border-[#EAA900] hover:bg-[#FFF9E8] lg:hidden"
          >
            <ShoppingBag className="h-5 w-5" />

            {totalCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C88A00] text-[10px] font-bold text-white">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="ml-2 flex items-center justify-center rounded-full border border-[#eadfca] bg-white p-2.5 text-[#1d1914] shadow-sm transition-all duration-300 hover:border-[#EAA900] hover:bg-[#FFF9E8] lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6" strokeWidth={1.7} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[10000] bg-white lg:hidden">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between border-b border-[#eadfca] bg-white px-5 py-2.5">
            <Link
              to="/"
              onClick={handleMobileLinkClick}
              className="flex items-center gap-2"
            >
              <img
                src={New}
                alt="ZAINIESKINCARE Logo"
                className="h-10 w-auto object-contain"
              />

              <span className="text-sm font-semibold tracking-[0.1em] text-[#C88A00]">
                ZAINIESKINCARE
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-full border border-[#eadfca] bg-white p-2.5 text-[#1d1914] transition-colors hover:bg-[#FFF9E8]"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.7} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col bg-white px-6 py-6">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMobileLinkClick}
                  className={`border-b border-[#eadfca] py-4 text-base transition-colors duration-200 ${
                    active
                      ? "font-semibold text-[#C88A00]"
                      : "text-[#1d1914] hover:text-[#C88A00]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              to="/products"
              onClick={handleMobileLinkClick}
              className="mt-6 rounded-full bg-[#EAA900] px-5 py-3.5 text-center text-sm font-semibold text-[#1d1914] shadow-sm transition-all duration-300 hover:bg-[#F5C542]"
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;