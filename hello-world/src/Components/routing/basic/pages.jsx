import React from "react";
import { Outlet, NavLink } from "react-router-dom";

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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="medium">Medium</NavLink>
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
