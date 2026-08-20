import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAccount = ({ darkMode }) => {
  const [formData, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? "dark" : "light",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 3000,
        theme: darkMode ? "dark" : "light",
      });
      return;
    }

    try {
      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? "dark" : "light",
      });

      // Reset form
      setState({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: darkMode ? "dark" : "light",
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-3 sm:p-4">
      <div
        className={`w-full max-w-md space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 rounded-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg mx-2 sm:mx-4 md:mx-0`}
      >
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-bold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Register
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-3 sm:space-y-4">
            {/* Username */}
            <div>
              <label
                className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-400"
                }`}
              >
                Username
              </label>
              <div className="relative">
                <User
                  className={`absolute left-2 sm:left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 ${
                    darkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`pl-8 sm:pl-10 w-full rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 text-sm sm:text-base ${
                    darkMode
                      ? "bg-gray-700 text-gray-300 border-gray-600"
                      : "bg-gray-50 text-gray-900 border-gray-300"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-400"
                }`}
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-2 sm:left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 ${
                    darkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`pl-8 sm:pl-10 w-full rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 text-sm sm:text-base ${
                    darkMode
                      ? "bg-gray-700 text-gray-300 border-gray-600"
                      : "bg-gray-50 text-gray-900 border-gray-300"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-400"
                }`}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-2 sm:left-3 top-2.5 sm:top-3 h-4 w-4 sm:h-5 sm:w-5 ${
                    darkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`pl-8 sm:pl-10 w-full rounded-lg py-2 sm:py-2.5 px-3 sm:px-4 text-sm sm:text-base ${
                    darkMode
                      ? "bg-gray-700 text-gray-300 border-gray-600"
                      : "bg-gray-50 text-gray-900 border-gray-300"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="pt-2 sm:pt-3">
            <button
              type="submit"
              className={`w-full rounded-lg py-2 sm:py-2.5 md:py-3 px-4 text-sm sm:text-base ${
                darkMode
                  ? "bg-pink-600 text-gray-200 hover:bg-pink-700"
                  : "bg-blue-600 text-blue-100 hover:bg-blue-700"
              } font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                darkMode ? "focus:ring-pink-500" : "focus:ring-blue-500"
              } transition-colors`}
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center text-xs sm:text-sm md:text-base pt-2 sm:pt-3">
          <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Already a member?{" "}
          </span>
          <Link
            to="/signin"
            className={`font-medium ${
              darkMode
                ? "text-pink-400 hover:text-pink-300"
                : "text-blue-600 hover:text-blue-500"
            } transition-colors`}
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateAccount;
