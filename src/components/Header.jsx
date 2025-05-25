import React, { useState, useEffect } from "react";
import { navLinks } from "./data";
import { Menu, X, ShoppingCart, Moon, Sun, Loader } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleCreateAccount = () => {
    navigate("/create-account");
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
    <header>
      <div
        className={`w-full py-2 ${darkMode ? "bg-gray-700" : "bg-blue-950"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSignIn}
                className={`${
                  darkMode ? "text-gray-300" : "text-white/75"
                } hover:underline text-sm bg-transparent transition-colors duration-200`}
              >
                Sign in / Guest
              </button>

              <button
                onClick={handleCreateAccount}
                className={`${
                  darkMode ? "text-gray-300" : "text-white/75"
                } hover:underline text-sm bg-transparent transition-colors duration-200`}
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex justify-center items-center space-x-4">
            <button
              onClick={handleSignIn}
              className={`${
                darkMode ? "text-gray-300" : "text-white/75"
              } hover:underline text-sm bg-transparent transition-colors duration-200`}
            >
              Sign in / Guest
            </button>

            <button
              onClick={handleCreateAccount}
              className={`${
                darkMode ? "text-gray-300" : "text-white/75"
              } hover:underline text-sm bg-transparent transition-colors duration-200`}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`${
          darkMode ? "bg-gray-800" : "bg-sky-100"
        } transition-colors duration-200 relative`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span
                  className={`text-2xl font-bold ${
                    darkMode ? "text-pink-500" : "text-blue-800"
                  } hover:scale-105 transition-transform duration-200`}
                >
                  CartCraze
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${
                    location.pathname === link.path
                      ? `${
                          darkMode
                            ? "bg-gray-600 text-white"
                            : "bg-blue-950 text-white"
                        }`
                      : `${
                          darkMode
                            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                            : "text-gray-700 hover:bg-blue-200 hover:text-black"
                        }`
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link
                to="/cart"
                className={`p-2 rounded-full ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ShoppingCart size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link
                to="/cart"
                className={`p-2 rounded-full ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ShoppingCart size={20} />
              </Link>
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute w-64 right-4 top-16 z-50">
              <div
                className={`rounded-lg shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-sky-100"
                } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
              >
                <div className="px-2 py-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        location.pathname === link.path
                          ? `${
                              darkMode
                                ? "bg-gray-600 text-white"
                                : "bg-blue-950 text-white"
                            }`
                          : `${
                              darkMode
                                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                                : "text-gray-700 hover:bg-blue-200 hover:text-black"
                            }`
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
