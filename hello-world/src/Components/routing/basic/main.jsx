import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Layouts, Contact, Blogs, NoPage } from "./pages";
import Medium from "./medium";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
          <Route path="medium" element={<Medium />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
