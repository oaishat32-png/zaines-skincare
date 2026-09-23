import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, Home, BookOpen, ShoppingCart, Heart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;
const DELIVERY_FEE = 2000;

const CartPage: React.FC = () => {
  const { items, increaseQty, decreaseQty, removeItem, clearCart, subtotal, totalCount } =
    useCart();
  const navigate = useNavigate();

  const total = subtotal + (items.length > 0 ? DELIVERY_FEE : 0);

  return (
    <main className="min-h-screen bg-pink-50 px-4 pb-28 pt-6 sm:px-6">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-sm">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" /> Clear all
            </button>
          )}
        </div>

        <h1 className="font-serif text-3xl text-gray-900">Your Cart</h1>
        <p className="mt-1 text-sm text-gray-400">Sweet choices, great moments.</p>

        {/* Items */}
        <div className="mt-6 space-y-4">
          {items.length === 0 && (
            <p className="py-12 text-center text-sm text-gray-400">
              Your cart is empty.{" "}
              <Link to="/menu" className="font-semibold text-pink-600">
                Browse the menu
              </Link>
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-bold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-400">Freshly prepared daily</p>
                <p className="mt-1 text-sm font-semibold text-pink-600">
                  {formatNaira(item.price)}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="text-gray-500 hover:text-gray-900"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="text-sm font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="text-gray-500 hover:text-gray-900"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                aria-label={`Remove ${item.name}`}
                className="text-gray-300 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        {items.length > 0 && (
          <>
            <div className="mt-6 space-y-2 rounded-2xl bg-gray-50 p-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>{formatNaira(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery Fee</span>
                <span>{formatNaira(DELIVERY_FEE)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-gray-200 pt-2">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-pink-600">
                  {formatNaira(total)}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-pink-600 py-4 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Proceed to Checkout →
            </Link>
          </>
        )}
      </div>

      {/* Bottom nav (matches your reference image) */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-gray-100 bg-white py-3">
        <Link to="/" className="flex flex-col items-center gap-1 text-gray-400">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/menu" className="flex flex-col items-center gap-1 text-gray-400">
          <BookOpen className="h-5 w-5" />
          <span className="text-xs">Menu</span>
        </Link>
        <Link to="/cart" className="relative flex flex-col items-center gap-1 text-pink-600">
          <ShoppingCart className="h-5 w-5" />
          {totalCount > 0 && (
            <span className="absolute -top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-600 text-[10px] text-white">
              {totalCount}
            </span>
          )}
          <span className="text-xs font-semibold">Cart</span>
        </Link>
        <Link to="/favorites" className="flex flex-col items-center gap-1 text-gray-400">
          <Heart className="h-5 w-5" />
          <span className="text-xs">Favorites</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-400">
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Link>
      </nav>
    </main>
  );
};

export default CartPage;