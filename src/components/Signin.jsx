import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = ({ darkMode }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Here you would typically make an API call to authenticate
    // For demo, we'll simulate a successful login
    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Navigate after successful login
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleGuestLogin = () => {
    toast.info("Continuing as guest...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div
        className={`w-full max-w-md space-y-6 p-6 sm:p-8 rounded-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg mx-4 sm:mx-0`}
      >
        {/* Header */}
        <div className="text-center">
          <h2
            className={`text-2xl sm:text-3xl font-bold ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Login
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-400"
                }`}
              >
                Email
              </label>
              <div className="mt-1 relative">
                <Mail
                  className={`absolute left-3 top-3 h-5 w-5 ${
                    darkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pl-10 w-full rounded-lg py-2 px-4 ${
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
                className={`block text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-400"
                }`}
              >
                Password
              </label>
              <div className="mt-1 relative">
                <Lock
                  className={`absolute left-3 top-3 h-5 w-5 ${
                    darkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`pl-10 w-full rounded-lg py-2 px-4 ${
                    darkMode
                      ? "bg-gray-700 text-gray-300 border-gray-600"
                      : "bg-gray-50 text-gray-900 border-gray-300"
                  } border focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              type="submit"
              className={`w-full rounded-lg py-2.5 sm:py-3 px-4 ${
                darkMode
                  ? "bg-pink-500 text-pink-100 hover:bg-pink-700"
                  : "bg-blue-600 text-blue-100 hover:bg-blue-700"
              } font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={handleGuestLogin}
              className={`w-full rounded-lg py-2.5 sm:py-3 px-4 ${
                darkMode
                  ? "bg-purple-300 text-purple-900 hover:bg-purple-400"
                  : "bg-purple-600 text-purple-100 hover:bg-purple-700"
              } font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors`}
            >
              Continue as Guest
            </button>
          </div>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm sm:text-base">
          <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Not a member yet?{" "}
          </span>
          <Link
            to="/create-account"
            className={`font-medium ${
              darkMode
                ? "text-pink-400 hover:text-pink-300"
                : "text-blue-600 hover:text-blue-500"
            } transition-colors`}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
