import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required. Please input your first name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "This field is required. Please input a phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "This field is required. Please input a valid email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please input a valid email.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "This field is required. Please input a message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // TODO: wire this up to your actual email/backend service
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <main className="min-h-screen bg-white pt-[80px]">

      {/* =====================================================
          HEADER SECTION
      ===================================================== */}

      <section
      id="contact"
       className="bg-[#fdeae6] px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left side */}
          <div className="text-center lg:text-left">
            <p className="mx-auto max-w-md text-lg leading-8 text-[#3a0d1f] lg:mx-0">
              Questions? Need help with your order? We're here for you. Drop
              us a message and we'll get back to you soon.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c97a53]">
                  <Mail className="h-5 w-5 text-[#c97a53]" />
                </div>

                <div className="text-left">
                  <p className="text-sm text-[#3a0d1f]/70">Email</p>
                  <p className="font-semibold text-[#3a0d1f]">
                    support@yourbrand.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c97a53]">
                  <Phone className="h-5 w-5 text-[#c97a53]" />
                </div>

                <div className="text-left">
                  <p className="text-sm text-[#3a0d1f]/70">Phone</p>
                  <p className="font-semibold text-[#3a0d1f]">
                    +234 803 567 2651
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="text-center lg:pl-12 lg:text-right">
            <h1 className="text-4xl font-bold leading-[1.15] text-[#3a0d1f] sm:text-5xl lg:text-6xl">
              your skin,
              <br />
              our priority.
            </h1>

            <p className="mt-2 text-4xl font-light text-[#3a0d1f] sm:text-5xl lg:text-6xl">
              let's connect
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section className="px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-5xl">

          {submitted && (
            <div className="mb-8 rounded-lg bg-green-50 px-5 py-4 text-sm font-medium text-green-700">
              Thank you! Your message has been sent — we'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-8 sm:grid-cols-2">

              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  First Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[#EAA900] ${
                    errors.firstName ? "border-red-400" : "border-gray-300"
                  }`}
                />

                {errors.firstName && (
                  <p className="mt-2 rounded-md bg-red-50 px-3 py-2 text-xs text-gray-600">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#EAA900]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Phone <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[#EAA900] ${
                    errors.phone ? "border-red-400" : "border-gray-300"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-2 rounded-md bg-red-50 px-3 py-2 text-xs text-gray-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[#EAA900] ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 rounded-md bg-red-50 px-3 py-2 text-xs text-gray-600">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:border-[#EAA900] ${
                    errors.message ? "border-red-400" : "border-gray-300"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 rounded-md bg-red-50 px-3 py-2 text-xs text-gray-600">
                    {errors.message}
                  </p>
                )}
              </div>

            </div>

            <button
              type="submit"
              className="mt-8 rounded-full bg-gradient-to-r from-[#f5c542] via-[#EAA900] to-[#c88900] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-black shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

    </main>
  );
};

export default Contact;