import React, { useState, useEffect } from "react";
import { Users, Star, Award, MessageSquare, Loader } from "lucide-react";
import { stats, values } from "./data";

const iconComponents = {
  Users: <Users size={24} />,
  Star: <Star size={24} />,
  Award: <Award size={24} />,
  MessageSquare: <MessageSquare size={24} />,
};

const About = ({ darkMode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      className={`min-h-screen transition-colors duration-200 mt-6 py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Main Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
            We Love{" "}
          </span>
          <span
            className={`mx-2 px-3 py-1 rounded-lg ${
              darkMode
                ? "bg-pink-500 text-gray-300"
                : "bg-blue-600 text-gray-200"
            }`}
          >
            CartCraze
          </span>
        </h1>

        {/* Main Content */}
        <div
          className={`text-lg md:text-xl leading-relaxed mt-10 mb-12 space-y-6 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-left">
            At CartCraze, we are passionate about revolutionizing your shopping
            experience. Our journey began with a simple vision: to create a
            platform where quality meets convenience. We carefully curate each
            product, ensuring it meets our high standards of excellence. Our
            commitment to customer satisfaction drives everything we do, from
            seamless navigation to exceptional support. We believe in building
            lasting relationships with our customers, making every shopping
            experience memorable and enjoyable.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            <div
              className={`flex justify-center mb-4 ${
                darkMode ? "text-pink-500" : "text-blue-800"
              }`}
            >
              {iconComponents[stat.icon]}
            </div>
            <h3
              className={`text-2xl font-bold text-center mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {stat.value}
            </h3>
            <p
              className={`text-center ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div
        className={`max-w-4xl mx-auto p-8 rounded-xl ${
          darkMode ? "bg-gray-800 text-gray-300" : "bg-sky-100 text-gray-700"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-center">
          To provide an unmatched shopping experience by combining cutting-edge
          technology with exceptional customer service, while maintaining our
          commitment to quality, sustainability, and community engagement.
        </p>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {value.title}
            </h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
