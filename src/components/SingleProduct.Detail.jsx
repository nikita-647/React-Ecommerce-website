import React, { useState, useEffect } from "react";
import { product } from "./data";
import {
  Home,
  Heart,
  Plus,
  Minus,
  ChevronLeft,
  ShoppingCart,
  Loader,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProductDetail = ({ darkMode }) => {
  const [amount, setAmount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [isWishlist, setIsWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const increaseAmount = () => {
    setAmount((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decreaseAmount = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const handleAddToCart = () => {
    // Add your cart logic here
    const cartItem = {
      ...product,
      quantity: amount,
      selectedColor: selectedColor || product.colors[0].name,
    };

    // Show success toast
    toast.success(
      `Added ${amount} ${product.name}${
        selectedColor ? ` in ${selectedColor}` : ""
      } to cart!`,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkMode ? "dark" : "light",
      }
    );
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex flex-col items-center">
          <Loader
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } animate-spin`}
            size={40}
          />
          <p
            className={`mt-4 text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm">
          <Link
            to="/"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronLeft className="w-4 h-4" />
          <Link
            to="/products"
            className="hover:text-blue-500 transition-colors"
          >
            Products
          </Link>
          <ChevronLeft className="w-4 h-4" />
          <span className="text-blue-500">avant-garde lamp</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8 lg:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold capitalize">{product.name}</h1>
              <h2 className="text-xl text-blue-500 font-medium">
                {product.brand}
              </h2>
              <p className="text-3xl font-bold text-blue-600">
                ${product.price}
              </p>
            </div>

            <p
              className={`leading-relaxed text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Colors</h3>
              <div className="flex flex-wrap gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all transform hover:scale-110
                    ${
                      selectedColor === color.name
                        ? "ring-4 ring-blue-500 ring-offset-4"
                        : ""
                    }
                    ${darkMode ? "ring-offset-gray-900" : "ring-offset-white"}
                  `}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Amount</h3>
              <div className="flex items-center space-x-6">
                <button
                  onClick={decreaseAmount}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                  ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                  transform hover:scale-110 active:scale-95`}
                >
                  <Minus className="w-6 h-6" />
                </button>
                <span className="text-2xl font-bold w-12 text-center">
                  {amount}
                </span>
                <button
                  onClick={increaseAmount}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                  ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                  transform hover:scale-110 active:scale-95`}
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-full
                ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                }
                text-white font-semibold transition-all transform hover:scale-105 active:scale-95`}
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
              <button
                onClick={toggleWishlist}
                className={`w-16 h-16 flex items-center justify-center rounded-full transition-all
                ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }
                transform hover:scale-110 active:scale-95
                ${isWishlist ? "text-red-500" : ""}`}
              >
                <Heart
                  className="w-6 h-6"
                  fill={isWishlist ? "currentColor" : "none"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
