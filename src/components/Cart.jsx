import React, { useState, useEffect } from "react";
import { ShoppingCart, ArrowLeft, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchCartItems } from "./data"; // Importing the data fetch function

const Cart = ({ darkMode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const items = await fetchCartItems();
      setCartItems(items);
      setIsLoading(false); // Set loading to false after data is fetched
    };
    loadData();
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = subtotal * 0.1;
  const discount = 20;
  const total = subtotal + vat - discount;

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
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cart Header */}
        <div className="flex flex-col space-y-4">
          <h1
            className={`text-2xl sm:text-3xl font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Shopping Cart
          </h1>
          <div
            className={`h-px w-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="mt-8 flex flex-col items-center justify-center space-y-6">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <ShoppingCart
                size={40}
                className={darkMode ? "text-gray-500" : "text-gray-400"}
              />
            </div>

            <div className="text-center space-y-4">
              <h2
                className={`text-2xl font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Your cart is empty
              </h2>
              <p className={darkMode ? "text-gray-500" : "text-gray-500"}>
                Looks like you haven't added any items to your cart yet. Browse
                our products and find something you'll love!
              </p>
            </div>

            <Link
              to="/products"
              className={`group flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-blue-800 hover:bg-blue-900 text-white"
              }`}
            >
              <ArrowLeft size={20} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        ) : (
          // Cart Items List
          <div className="mt-8">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />

                  <div>
                    <h3
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </h3>

                    <dl
                      className={`mt-0.5 space-y-px text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <div>
                        <dt className="inline">Size: </dt>
                        <dd className="inline">{item.size}</dd>
                      </div>
                      <div>
                        <dt className="inline">Color: </dt>
                        <dd className="inline">{item.color}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className={`h-8 w-12 rounded p-0 text-center text-xs focus:outline-none ${
                        darkMode
                          ? "bg-gray-700 text-gray-300 border-gray-600"
                          : "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    />

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className={`transition ${
                        darkMode
                          ? "text-gray-400 hover:text-red-400"
                          : "text-gray-600 hover:text-red-600"
                      }`}
                    >
                      <span className="sr-only">Remove item</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Cart Summary */}
            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl
                  className={`space-y-0.5 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£{subtotal}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£{vat}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£{discount}</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£{total}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span
                    className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 ${
                      darkMode
                        ? "bg-pink-900/50 text-pink-400"
                        : "bg-indigo-100 text-indigo-700"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>
                    <p className="whitespace-nowrap text-xs">
                      2 Discounts Applied
                    </p>
                  </span>
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/checkout"
                    className={`block rounded px-5 py-3 text-sm transition ${
                      darkMode
                        ? "bg-pink-500 text-white hover:bg-pink-600"
                        : "bg-blue-600 text-gray-100 hover:bg-blue-800"
                    }`}
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Suggested Products */}
        <div className="mt-16">
          <h3
            className={`text-xl font-medium mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            You might like these
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`group rounded-lg overflow-hidden shadow-md transition-all duration-200 transform hover:scale-105 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src="src/images/pexels-photo-943150.webp"
                    alt="Product placeholder"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-4">
                  <h4
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Sample Product {item}
                  </h4>
                  <p
                    className={`mt-1 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    $99.99
                  </p>
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: item + 100,
                        name: `Sample Product ${item}`,
                        size: "M",
                        color: "Black",
                        price: 99.99,
                        image: "/api/placeholder/400/320",
                      })
                    }
                    className={`mt-3 w-full px-4 py-2 rounded text-sm font-medium transition-colors duration-200 ${
                      darkMode
                        ? "bg-pink-500 hover:bg-pink-600 text-white"
                        : "bg-blue-800 hover:bg-blue-900 text-white"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
