import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Signin from "./components/Signin";
import CreateAccount from "./components/CreateAccount";
import SingleProductDetail from "./components/SingleProduct.Detail";
import Checkout from "./components/Checkout";
import { Route, Routes } from "react-router-dom";
import Order from "./components/Order";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/products" element={<Products darkMode={darkMode} />} />
        <Route path="/cart" element={<Cart darkMode={darkMode} />} />
        <Route path="/signin" element={<Signin darkMode={darkMode} />} />
        <Route path="/order" element={<Order darkMode={darkMode} />} />

        <Route path="/checkout" element={<Checkout darkMode={darkMode} />} />
        <Route
          path="/create-account"
          element={<CreateAccount darkMode={darkMode} />}
        />
        <Route
          path="/product/:id"
          element={<SingleProductDetail darkMode={darkMode} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
