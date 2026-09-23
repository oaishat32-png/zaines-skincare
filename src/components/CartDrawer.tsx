import React from "react";
import { Link } from "react-router-dom";
import { X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;

const CartDrawer: React.FC = () => {
  const { items, increaseQty, decreaseQty, removeItem, subtotal, isCartOpen, closeCart } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-end justify-center bg-black/40 sm:items-center">
      <div className="relative flex max-h-[90svh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[85vh] sm:rounded-3xl">

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-6 pt-6 pb-4">
          <div>
            <h2 className="font-serif text-2xl text-gray-900">Your Sweet Bag</h2>
            <p className="mt-1 text-sm text-gray-400">{items.length} treats</p>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-gray-400 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Items — the only scrollable region, so the footer below always stays in view */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-gray-400">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-4">
              {items.map((item: {
                id: string | number;
                name: string;
                image: string;
                price: number;
                quantity: number;
              }) => {
                const itemId = String(item.id);

                return (
                  <div
                    key={itemId}
                    className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3"
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
                      <p className="mt-1 text-sm font-semibold text-yellow-600">
                        {formatNaira(item.price)}
                      </p>
                      <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-1">
                        <button
                          onClick={() => decreaseQty(itemId)}
                          className="text-gray-500 hover:text-gray-900"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(itemId)}
                          className="text-gray-500 hover:text-gray-900"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(itemId)}
                      aria-label={`Remove ${item.name}`}
                      className="self-start text-red-400 hover:text-red-600"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer — always pinned in view, never scrolled off */}
        {items.length > 0 && (
          <div className="shrink-0 border-t border-gray-100 bg-white px-6 py-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">Subtotal</span>
              <span className="text-lg font-bold text-yellow-600">
                {formatNaira(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-xs text-gray-400">
           Every order is packaged with care, ready to nourish your skin.
            </p>

            <Link
              to="/cart"
              onClick={closeCart}
              className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border-2 border-yellow-500 py-3 text-sm font-semibold text-yellow-600 transition hover:bg-yellow-50"
            >
              View Full Cart <ShoppingCart className="h-4 w-4" />
            </Link>

            <Link
              to="/checkout"
              onClick={closeCart}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 py-3 text-sm font-semibold text-white transition hover:bg-yellow-600"
            >
              Proceed to Checkout →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;