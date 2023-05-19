# React Routers

## Basics of React Routing such as routes, links, navlinks, and index

[Docs](https://www.w3schools.com/react/react_router.asp)

```sh
npm i -D react-router-dom
```

```jsx
import "./App.css";
import Main from "./Components/routing/main";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
```

```jsx
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Layouts, Contact, Blogs, NoPage } from "./pages";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

```jsx
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
```

```css
nav {
  display: flex;
  justify-content: justify-content;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 0 1rem;
  height: 5rem;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1;
}

li {
  list-style: none;
  padding: 0 1rem;
  display: inline;
}

ul li a {
  color: #000;
}

ul li a:hover {
  color: #00a8ff;
}

ul li a.active {
  color: #00a8ff;
}
```

## use Navigation

use hook `useNavigator`

```jsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../basic/pages.css";

export default function Navbar() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/about");
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
```

### Passing the data using useVavigators

1. Using state and use location

```jsx
const navigate = useNavigate();
function handleClick(event) {
  event.preventDefault();
  navigate("/about", { state: { name: "Saurabh" } });
}
```

```jsx
// Getting data
import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const name = location.state.name;
  return <h1>About + {`  ${name}`}</h1>;
}
```
