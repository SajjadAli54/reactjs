import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Products from "./products";
import Navbar from "./navbar";
import Data from "./data";

export default function main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/data/:data" element={<Data />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
