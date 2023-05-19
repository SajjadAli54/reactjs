import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../basic/pages.css";

export default function Navbar() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/about", { state: { name: "Saurabh" } });
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="*" onClick={handleClick}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
