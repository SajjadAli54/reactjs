import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Navbar({ onClick, components }) {
  return (
    <>
      <nav>
        <ul>
          {components.map((component, index) => (
            <li key={index}>
              <NavLink exact to={component.route}>
                {component.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <button onClick={onClick}>Add</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
