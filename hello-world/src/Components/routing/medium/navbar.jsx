import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../basic/pages.css";

export default function Navbar() {
  const navigate = useNavigate();
  function handleAboutClick(event) {
    event.preventDefault();
    navigate("/about", { state: { name: "Saurabh" } });
  }

  function handleDataClick(event) {
    event.preventDefault();
    const obj = {
      name: "Sajjad",
      age: 23,
      married: false,
      salary: 30000,
    };
    navigate(`data/${JSON.stringify(obj)}`);
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
            <NavLink to="*" onClick={handleAboutClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="*" onClick={handleDataClick}>
              Data
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
