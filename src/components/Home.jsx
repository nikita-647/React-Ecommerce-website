import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Loader } from "lucide-react";
import {
  images,
  reviews,
  faqs,
  featuredProducts,
  socialLinks,
  services,
  companyLinks,
  footerLinks,
} from "./data";

const Home = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating
            ? "fill-current text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }
      />
    ));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
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
            Loading CartCraze...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-200 mt-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] space-y-8 pt-8">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Welcome to CartCraze
            </h1>

            <p
              className={`text-lg md:text-xl ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Discover amazing products that will transform your shopping
              experience. We provide the best solutions for your needs with
              exceptional service and competitive prices.
            </p>

            <button
              onClick={handleProductsClick}
              className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                darkMode
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-blue-800 hover:bg-blue-950"
              } text-white`}
            >
              Explore Products
            </button>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[40%]">
            <div
              className={`relative overflow-hidden shadow-lg rounded-xl transition-colors duration-200 ${
                darkMode ? "bg-gray-800" : "bg-sky-100"
              }`}
              style={{ height: "500px" }}
            >
              <div
                className="w-full h-full transition-transform duration-500 flex cursor-pointer"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onClick={nextSlide}
              >
                {images.map((src, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {" "}
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index
                        ? darkMode
                          ? "bg-pink-500"
                          : "bg-blue-950"
                        : darkMode
                        ? "bg-gray-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="pt-12">
          <h2
            className={`text-3xl font-semibold mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Feature Products
          </h2>

          {/* Added divider */}
          <div className="relative">
            <div
              className={`w-full h-px my-6 ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {featuredProducts.map(({ id, image, title, price }) => (
              <Link key={id} to={`/product/${id}`}>
                <div
                  className={`p-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-xl ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                      : "bg-white hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className="w-full h-56 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-center text-xl font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-center text-lg text-gray-500">{price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className={`text-3xl font-semibold mb-8 text-center ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`p-6 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:shadow-lg border border-gray-200"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    {review.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p
                className={`mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {review.comment}
              </p>
              <span
                className={`text-sm ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {review.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className={`text-3xl font-semibold mb-8  text-center ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-lg transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:shadow-lg border border-gray-200"
              }`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between"
                onClick={() => toggleFaq(faq.id)}
              >
                <span
                  className={`font-medium text-left ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                {expandedFaq === faq.id ? (
                  <ChevronUp
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                    size={20}
                  />
                ) : (
                  <ChevronDown
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                    size={20}
                  />
                )}
              </button>
              {expandedFaq === faq.id && (
                <div
                  className={`px-6 pb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-8">
            {/* Image Section - Hidden on very small screens */}
            <div className="hidden sm:block relative h-48 lg:col-span-2 lg:h-full mb-8 lg:mb-0">
              <img
                src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt="CartCraze Shopping Experience"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="py-8 lg:py-12 lg:col-span-3">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Contact Us
                    </span>

                    <a
                      href="tel:0123456789"
                      className="mt-2 block text-xl sm:text-2xl font-medium text-gray-900 dark:text-white hover:opacity-75 lg:text-3xl"
                    >
                      0123456789
                    </a>
                  </div>

                  {/* Business Hours */}
                  <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <p>Monday to Friday: 10am - 5pm</p>
                    <p>Weekend: 10am - 3pm</p>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4">
                    <ul className="flex flex-wrap gap-4 sm:gap-6">
                      {socialLinks.map((social) => (
                        <li key={social}>
                          <a
                            href="#"
                            className="text-gray-700 dark:text-gray-300 transition hover:opacity-75"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="sr-only">{social}</span>
                            {social === "Facebook" && (
                              <svg
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                            {social === "Instagram" && (
                              <svg
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                            {social === "Twitter" && (
                              <svg
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            )}
                            {social === "GitHub" && (
                              <svg
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Links Sections */}
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  {/* Services */}
                  <div>
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      Services
                    </p>

                    <ul className="mt-4 space-y-3 text-sm">
                      {services.map((service) => (
                        <li key={service}>
                          <a
                            href="#"
                            className="text-gray-700 dark:text-gray-300 transition hover:opacity-75"
                          >
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Company */}
                  <div>
                    <p className="text-base font-medium text-gray-900 dark:text-white">
                      Company
                    </p>

                    <ul className="mt-4 space-y-3 text-sm">
                      {companyLinks.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-gray-700 dark:text-gray-300 transition hover:opacity-75"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="mt-12 border-t border-gray-100 dark:border-gray-800 pt-8">
                <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <ul className="flex flex-wrap gap-4 text-xs">
                    {footerLinks.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-500 dark:text-gray-400 transition hover:opacity-75"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} CartCraze. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
