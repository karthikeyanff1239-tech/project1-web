
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

import Register from "./pages/Register";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<ProductList products={products} addToCart={addToCart} />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart}  products={products} removeFromCart={removeFromCart} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

      </Routes>
    </>
  
}

