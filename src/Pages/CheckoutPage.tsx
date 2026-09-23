import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, ClipboardList, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";

const formatNaira = (amount: number) => `₦${amount.toLocaleString()}`;
const DELIVERY_FEE = 2000;

const BUSINESS_WHATSAPP_NUMBER = "2349029207126";
const BUSINESS_NAME = "ZAINIESKINCARE";

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("delivery");
  const [deliveryTime, setDeliveryTime] = useState<"asap" | "later">("asap");

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const total = subtotal + DELIVERY_FEE;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!form.phone.trim()) newErrors.phone = "Please enter your phone number.";
    if (deliveryType === "delivery" && !form.address.trim()) {
      newErrors.address = "Please enter your delivery address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const itemLines = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} (${formatNaira(item.price)})`
      )
      .join("\n");

    const deliveryTypeLabel =
      deliveryType === "delivery" ? " Doorstep Delivery" : " Store Pickup";

    const deliveryTimeLabel =
      deliveryTime === "asap"
        ? " As Soon As Possible (Same-Day Express Dispatch)"
        : " Scheduled for later";

    const lines = [
      ` *New Order Checkout — ${BUSINESS_NAME}*`,
      "",
      `*Order Type:* ${deliveryTypeLabel}`,
      `*Customer Name:* ${form.fullName}`,
      `*Phone / WhatsApp:* ${form.phone}`,
    ];

    if (deliveryType === "delivery") {
      lines.push(`*Delivery Address:* ${form.address}`);
    }

    lines.push(`*Delivery Time:* ${deliveryTimeLabel}`, "");
    lines.push("*Order Items:*", itemLines, "");
    lines.push(`*Subtotal:* ${formatNaira(subtotal)}`);
    lines.push(`*Delivery Fee:* ${formatNaira(DELIVERY_FEE)}`);
    lines.push(`*Total Amount:* ${formatNaira(total)}`);

    if (form.notes.trim()) {
      lines.push("", `*Additional Notes:* ${form.notes}`);
    }

    lines.push("", "Please confirm preparation availability and payment account details!");

    return lines.join("\n");
  };

  const handleContinue = () => {
    if (!validate()) return;

    const message = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedMessage}`;

  
    window.open(whatsappUrl, "_blank");

    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-yellow-50 px-6 text-center">
        <div>
          <p className="text-gray-500">Your cart is empty.</p>
          <Link to="/products" className="mt-3 inline-block font-semibold text-yellow-600">
            Browse the menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-yellow-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-sm">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <h1 className="font-serif text-xl text-gray-900">Checkout</h1>
          <Link to="/products" className="text-sm font-semibold text-yellow-600">
            + Products
          </Link>
        </div>

        {/* Step indicator */}
        <div className="mb-6 flex items-center justify-center gap-2 text-xs">
          <span className="flex items-center gap-1 font-semibold text-yellow-600">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-600 text-white">1</span>
            Delivery
          </span>
          <span className="h-px w-8 bg-gray-200" />
          <span className="flex items-center gap-1 text-gray-400">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500">2</span>
            Payment
          </span>
          <span className="h-px w-8 bg-gray-200" />
          <span className="flex items-center gap-1 text-gray-400">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-500">3</span>
            Review
          </span>
        </div>

        {/* Delivery Information */}
        <section className="mb-5 rounded-2xl border border-gray-100 p-4">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900">
            <MapPin className="h-4 w-4 text-yellow-600" /> Delivery Information
          </h2>

          <div className="mb-4 flex rounded-full bg-gray-50 p-1">
            <button
              onClick={() => setDeliveryType("delivery")}
              className={`flex-1 rounded-full py-2 text-xs font-semibold transition ${
                deliveryType === "delivery"
                  ? "bg-white text-yellow-600 shadow-sm"
                  : "text-gray-400"
              }`}
            >
               Delivery
            </button>
            <button
              onClick={() => setDeliveryType("pickup")}
              className={`flex-1 rounded-full py-2 text-xs font-semibold transition ${
                deliveryType === "pickup"
                  ? "bg-white text-yellow-600 shadow-sm"
                  : "text-gray-400"
              }`}
            >
               Pickup
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-600">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="e.g. Chioma Adebayo"
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-yellow-500 ${
                  errors.fullName ? "border-red-400" : "border-gray-200"
                }`}
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-600">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 0812 345 6789"
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-yellow-500 ${
                  errors.phone ? "border-red-400" : "border-gray-200"
                }`}
              />
            </div>

            {deliveryType === "delivery" && (
              <div>
                <label className="mb-1 block text-xs font-semibold text-gray-600">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="e.g. 14 Admiralty Way, Lekki Phase 1"
                  className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-yellow-500 ${
                    errors.address ? "border-red-400" : "border-gray-200"
                  }`}
                />
              </div>
            )}

            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-600">
                Notes / Special Instructions (Optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={2}
                placeholder="e.g. Extra syrup, call when at gate..."
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-yellow-500"
              />
            </div>
          </div>
        </section>

        {/* Delivery Time */}
        <section className="mb-5 rounded-2xl border border-gray-100 p-4">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900">
            <Clock className="h-4 w-4 text-yellow-600" /> Delivery Time
          </h2>

          <button
            onClick={() => setDeliveryTime("asap")}
            className={`mb-2 flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
              deliveryTime === "asap"
                ? "border-yellow-500 bg-yellow-50"
                : "border-gray-100"
            }`}
          >
            <span
              className={`h-4 w-4 rounded-full border-2 ${
                deliveryTime === "asap"
                  ? "border-yellow-500 bg-yellow-500"
                  : "border-gray-300"
              }`}
            />
            <span>
              <span className="block text-sm font-semibold text-gray-900">
                As soon as possible
              </span>
              <span className="text-xs text-yellow-500"> Express Dispatch</span>
            </span>
          </button>

          <button
            onClick={() => setDeliveryTime("later")}
            className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
              deliveryTime === "later"
                ? "border-yellow-500 bg-yellow-50"
                : "border-gray-100"
            }`}
          >
            <span
              className={`h-4 w-4 rounded-full border-2 ${
                deliveryTime === "later"
                  ? "border-yellow-500 bg-yellow-500"
                  : "border-gray-300"
              }`}
            />
            <span>
              <span className="block text-sm font-semibold text-gray-900">
                Schedule for later
              </span>
              <span className="text-xs text-gray-400">Pick custom date &amp; time</span>
            </span>
          </button>
        </section>

        {/* Order Summary */}
        <section className="mb-5 rounded-2xl border border-gray-100 p-4">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-900">
            <ClipboardList className="h-4 w-4 text-yellow-600" /> Order Summary
          </h2>

          <div className="space-y-1 text-xs text-gray-500">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>{formatNaira(item.price)}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 space-y-1 border-t border-gray-100 pt-3 text-xs text-gray-500">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>{formatNaira(DELIVERY_FEE)}</span>
            </div>
          </div>

          <div className="mt-3 flex justify-between border-t border-gray-100 pt-3">
            <span className="font-bold text-gray-900">Total</span>
            <span className="font-bold text-yellow-600">{formatNaira(total)}</span>
          </div>
        </section>

        <p className="mb-4 flex items-center gap-1.5 text-xs text-green-600">
          <ShieldCheck className="h-4 w-4" />
          Your information is sent directly &amp; confirmed with {BUSINESS_NAME}
        </p>

        <button
          onClick={handleContinue}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow-600 py-4 text-sm font-semibold text-white transition hover:bg-yellow-700"
        >
          Continue to Payment ({formatNaira(total)}) →
        </button>
      </div>
    </main>
  );
};

export default CheckoutPage;