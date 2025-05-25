import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "./data";
import {
  LayoutGrid,
  LayoutList,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
  SlidersHorizontal,
  Loader,
} from "lucide-react";

const Products = ({ darkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [sortBy, setSortBy] = useState("price-lowest");
  const [freeShipping, setFreeShipping] = useState(false);
  const [priceRange, setPriceRange] = useState(200);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 9;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const categories = ["all", "lamp", "bed", "table", "chair"];
  const companies = ["all", "artisan", "comfort-zone", "modern-decor"];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleReset = () => {
    setSearchTerm("");
    setCategory("all");
    setCompany("all");
    setSortBy("price-lowest");
    setFreeShipping(false);
    setPriceRange(200);
    setCurrentPage(1);
  };

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

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
      className={`min-h-screen transition-colors duration-200 mt-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {/* Search and Filter Form */}
        <div
          className={`mb-8 px-5 py-10 rounded-lg ${
            darkMode ? "bg-gray-800" : " bg-blue-200 "
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className={`w-full pl-4 pr-10 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 text-gray-300"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <Search
                  className="absolute right-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-pink-500 text-white  hover:bg-pink-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              <SlidersHorizontal size={20} />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filters Section */}
          <div className={`${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Select */}
              <div>
                <label className="block mb-2 font-medium">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`w-full p-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Select */}
              <div>
                <label className="block mb-2 font-medium">Company</label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`w-full p-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {companies.map((comp) => (
                    <option key={comp} value={comp}>
                      {comp
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block mb-2 font-medium">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`w-full p-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <option value="price-lowest">Price (Lowest)</option>
                  <option value="price-highest">Price (Highest)</option>
                  <option value="name-a">Name (A-Z)</option>
                  <option value="name-z">Name (Z-A)</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block mb-2 font-medium">
                  Price Range (${priceRange})
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Additional Options Row */}
            <div className="flex flex-wrap items-center justify-between mt-6">
              {/* Free Shipping Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="freeShipping"
                  checked={freeShipping}
                  onChange={(e) => setFreeShipping(e.target.checked)}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="freeShipping" className="font-medium">
                  Free Shipping
                </label>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                    : "bg-pink-500 hover:bg-pink-700 text-gray-900"
                }`}
              >
                <X size={18} />
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Layout Toggle */}
        <div className="flex justify-end mb-6 gap-4">
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 rounded-lg ${
              isGridView
                ? darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-blue-200 text-gray-800"
                : ""
            }`}
          >
            <LayoutGrid size={24} />
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 rounded-lg ${
              !isGridView
                ? darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-blue-200 text-gray-800"
                : ""
            }`}
          >
            <LayoutList size={24} />
          </button>
        </div>

        <div className="relative">
          <div
            className={`w-full h-px my-6 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          ></div>
        </div>

        <div
          className={`${
            isGridView
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          } mt-8`}
        >
          {currentItems.map(({ id, image, title, price }) => (
            <Link key={id} to={`/product/${id}`}>
              <div
                className={`transition-colors duration-200 shadow-md hover:shadow-xl rounded-lg ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    : "bg-white hover:bg-gray-100 text-gray-800"
                }`}
              >
                <div
                  className={`${
                    isGridView ? "p-6" : "flex flex-row items-center p-4 gap-6"
                  }`}
                >
                  <div
                    className={`rounded-lg overflow-hidden ${
                      isGridView
                        ? "w-full h-56 mb-4"
                        : "w-48 h-32 flex-shrink-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`${isGridView ? "" : "flex-1"}`}>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        isGridView ? "text-center" : ""
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-lg text-gray-500 ${
                        isGridView ? "text-center" : ""
                      }`}
                    >
                      {price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full transition-all transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 rounded-full font-medium transition-all transform hover:scale-110 active:scale-95 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full transition-all transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
