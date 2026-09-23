import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

import Eight from "../assets/Eight.jpeg";
import karatgold from "../assets/karatgold.jpeg";
import Naturalglowsoap from "../assets/Naturalglowsoap.jpeg";
import yellowtone from "../assets/yellowtone.jpeg";
import three from "../assets/three.jpeg";
import Snowwhiteningsoap from "../assets/Snowwhiteningsoap.jpeg";
import Bodymilk from "../assets/Bodymilk.jpeg";
import Eventone from "../assets/Eventone.jpeg";
import Five from "../assets/five.jpeg";
import pinklip from "../assets/pinklip.jpeg";
import Pimpleseradicate from "../assets/Pimpleseradicate.jpeg";
import Four from "../assets/Four.jpeg";
import soap from "../assets/soap.jpeg";
import Glowoil from "../assets/Glowoil.jpeg";
import exfoliating from "../assets/exfoliating.jpeg";
import Tumeric from "../assets/Tumeric.jpeg";
import Pack from "../assets/Pack.jpeg";
import Facial from "../assets/Facial.jpeg";
import Pimples from "../assets/Pimples.jpeg";
import facecream from "../assets/facecream.jpeg";
import Facesoap from "../assets/Facesoap.jpeg";



interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;

const products: Product[] = [
  { id: "Combo", name: "Yellow tone full set", price: 54000, image: Eight },
  {
    id: "karat-gold-face-cream",
    name: "24karat gold face wash",
    price: 6000,
    image: karatgold,
  },
  {
    id: "natural-glow-soap",
    name: "Natural Glow Soap",
    price: 5000,
    image: Naturalglowsoap,
  },
  {
    id: "yellow-tone-face-cream",
    name: "Yellow tone body milk",
    price: 16000,
    image: yellowtone,
  },
  { id: "three combo", name: "No cream needed set", price: 16000, image: three },
  {
    id: "snow-whitening-soap",
    name: "Snow Whitening Soap",
    price: 5000,
    image: Snowwhiteningsoap,
  },
  {
    id: "body-milk-lotion",
    name: "Body Milk Lotion",
    price: 16000,
    image: Bodymilk,
  },
  { id: "even-tone", name: "Even tone whitening cleanser", price: 5000, image: Eventone },
  { id: "five combo", name: "Yellow tone mini kit", price: 28000, image: Five },
  { id: "pink-lips", name: "Pink Lips balm", price: 3000, image: pinklip },
  {
    id: "pimples-eradicate",
    name: "Pimples eradicating set",
    price: 6000,
    image: Pimpleseradicate,
  },
  { id: "four", name: "Face lightly set", price: 25000, image: Four },
  { id: "soap", name: "Face redness mask", price: 3500, image: soap },
  { id: "glow-oil", name: "Yellow tone glow oil", price: 6000, image: Glowoil },
  {
    id: "exfoliating-scrub",
    name: "Exfoliating Scrub",
    price: 5000,
    image: exfoliating,
  },
  {
    id: "turmeric-face-cream",
    name: "Tumeric brightening scrub",
    price: 5000,
    image: Tumeric,
  },
  { id: "pack", name: "Pimples eradicating set", price: 17000, image: Pack },
  {
    id: "facial-scrub",
    name: "Facial Scrub",
    price: 4000,
    image: Facial,
  },
  {
    id: "face-soap",
    name: "Brighting face soap",
    price: 3500,
    image: Facesoap,
  },
  {
    id: "pimples-face-soap",
    name: "Pimples face soap",
    price: 6000,
    image: Pimples,
  },

{
    id: "yellow-tone-face-cream",
    name: "Yellow tone face cream",
    price: 7000,
    image: facecream,
  },
  
];

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const productsSectionId = "products";

  return (
    <main className="min-h-screen bg-[#FFFDF8] pt-[80px]">
      {/* Page header */}
      <section
        id={productsSectionId}
        className="relative overflow-hidden border-b border-[#eadfca] bg-[#FFF7E8] px-6 py-16 text-center md:px-12 lg:px-16 lg:py-20"
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F5C542]/20 blur-[100px]" />

        <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#EAA900]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C88A00]">
            ZAINIESKINCARE
          </p>

          <h1 className="text-4xl font-medium tracking-tight text-[#1d1914] sm:text-5xl lg:text-6xl">
            Our Products
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#625D55] sm:text-base">
            Discover our collection of skincare essentials created to make
            your everyday routine simple, enjoyable, and consistent.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="relative px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#F5C542]/8 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-[#eee5d4] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative flex aspect-[4/4.5] items-center justify-center overflow-hidden bg-[#F9F5EC] p-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />

                {/* Small accent */}
                <div className="pointer-events-none absolute left-4 top-4 h-2 w-2 rounded-full bg-[#EAA900]" />
              </div>

              {/* Product information */}
              <div className="p-5">
                <h2 className="text-base font-medium text-[#1d1914] sm:text-lg">
                  {product.name}
                </h2>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#C88A00]">
                    {formatNaira(product.price)}
                  </p>

                  <span className="text-xs uppercase tracking-[0.15em] text-[#8a847b]">
                    Skincare
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f5c542] via-[#EAA900] to-[#c88900] py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-110"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;