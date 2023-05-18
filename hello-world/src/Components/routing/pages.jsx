import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./pages.css";

function Home() {
  return <h1>Home</h1>;
}

function Layouts() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function Blogs() {
  return <div>Blog</div>;
}

function About() {
  return <div>About</div>;
}

function Contact() {
  return <div>Contact</div>;
}

function NoPage() {
  return <div>404</div>;
}

export { Home, Layouts, Blogs, About, Contact, NoPage };
