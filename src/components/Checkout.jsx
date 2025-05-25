import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const Checkout = ({ darkMode }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    postal: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } py-8 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${
                      step >= num
                        ? darkMode
                          ? "bg-pink-500"
                          : "bg-blue-600"
                        : darkMode
                        ? "bg-gray-700"
                        : "bg-gray-200"
                    } transition-colors duration-200`}
                >
                  {step > num ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-white">{num}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {num === 1 ? "Details" : num === 2 ? "Shipping" : "Payment"}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <motion.div
              className={`h-full rounded-full ${
                darkMode ? "bg-pink-500" : "bg-blue-600"
              }`}
              initial={{ width: "0%" }}
              animate={{ width: `${(step - 1) * 50}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <motion.div
          key={step}
          custom={step}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <div
            className={`bg-gray-100 rounded-lg shadow-xl p-6 ${
              darkMode ? "bg-gray-800" : ""
            }`}
          >
            {step === 1 && (
              <div className="space-y-4">
                <h2
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-600" : "text-gray-800"
                  }`}
                >
                  Personal Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-gray-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-gray-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-600" : "text-gray-800"
                  }`}
                >
                  Shipping Information
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-gray-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-gray-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    />
                    <input
                      type="text"
                      name="postal"
                      placeholder="Postal Code"
                      value={formData.postal}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-gray-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-600 " : "text-gray-800"
                  }`}
                >
                  Payment Details
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-gray-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-gray-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-gray-200"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className={`px-6 py-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition-colors duration-200`}
                >
                  Back
                </button>
              )}
              <button
                onClick={step === 3 ? () => toast("Order placed!") : nextStep}
                className={`px-6 py-2 rounded-lg ${
                  darkMode
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                } transition-colors duration-200 ml-auto`}
              >
                {step === 3 ? "Place Order" : "Continue"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`mt-8 rounded-lg shadow-xl p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Order Summary
          </h3>
          <div
            className={`space-y-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$299.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$19.99</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$29.90</span>
            </div>
            <div
              className={`pt-2 mt-2 border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } flex justify-between font-semibold`}
            >
              <span>Total</span>
              <span>$348.89</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
