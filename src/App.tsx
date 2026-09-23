import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopCategories from "./components/ShopCategories";
import Products from "./Pages/Products";
import CustomerReviews from "./components/CustomerReviews";
import AboutStory from "./components/AboutStory";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

function Home() {
  return (
    <>
      <Hero />
      <ShopCategories />
      <CustomerReviews />
      <AboutStory />
      <ContactBanner />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <CartDrawer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;