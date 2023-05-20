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

[Docs](https://plainenglish.io/blog/how-to-pass-data-between-pages-in-react-router-dom-v6)

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

2. Through URL params

First define the route like this

path/:var_name

```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./data";

export default function main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            // All other same
            <Route path="/data/:data" element={<Data />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
```

Passing data like this one

```jsx
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
```

Getting the data

```jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function Data() {
  const { data } = useParams();
  return <h1>{`Data ${data}`}</h1>;
}
```

# Higher Order Components (HOC)

[Docs](https://www.smashingmagazine.com/2020/06/higher-order-components-react/s)

A JS function that takes a react component and returns updateed react component.
Examples:

Rich = Money(Person)

**Wrapped Component**

The component that is passed as argument

## Basic Auction code example

```jsx
import React from "react";
import { useState } from "react";

function UpdatedComponent(OriginalComponent) {
  const NewComponent = () => {
    const [money, setMoney] = useState(() => 10);

    const increaseMoney = () => {
      setMoney((money) => money + 1);
    };
    return <OriginalComponent increaseMoney={increaseMoney} money={money} />;
  };
  return NewComponent;
}

export default UpdatedComponent;
```

```jsx
import React from "react";
import UpdatedComponent from "./hoc";

function Person1({ money, increaseMoney }) {
  return (
    <>
      <h2> Jimmy is offering ${money}</h2>
      <button onClick={increaseMoney}>Increase money</button>
    </>
  );
}

export default UpdatedComponent(Person1);
```

```jsx
import React from "react";
import UpdatedComponent from "./hoc";

function Person2({ money, increaseMoney }) {
  return (
    <>
      <h2> John is offering ${money}</h2>
      <button onClick={increaseMoney}>Increase money</button>
    </>
  );
}

export default UpdatedComponent(Person2);
```

```jsx
import React from "react";
import Person1 from "./person1";
import Person2 from "./person2";

function Persons() {
  return (
    <div>
      <h1>Auction</h1>
      <Person1 />
      <Person2 />
    </div>
  );
}

export default Persons;
```

## Gray Images

```jsx
import React from "react";

function GrayScale(OriginalImage) {
  return (props) => {
    const style = { ...props.style, filter: "grayscale(100%)" };
    return <OriginalImage {...props} style={style} />;
  };
}

export default GrayScale;
```

```jsx
import React from "react";
import GrayScale from "./hoc";

function Image({ style, url, alt, width, height }) {
  return (
    <img src={url} alt={alt} width={width} height={height} style={style} />
  );
}

export default GrayScale(Image);
```

```jsx
import "./App.css";
import Image from "./Components/higher-order-component/gray/image";

function App() {
  return (
    <div className="App">
      <Image
        url="https://picsum.photos/200/300"
        alt="random image"
        width={300}
        height={300}
        style={{
          border: "1px solid red",
          borderRadius: "50%",
          padding: 5,
          margin: 5,
        }}
      />
    </div>
  );
}

export default App;
```

## Class Based

```jsx
// Higher components using class components

import React, { Component } from "react";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      const style = { ...this.props.style, filter: "grayscale(100%)" };
      return <OriginalComponent {...this.props} style={style} />;
    }
  }
  return NewComponent;
};

function Image({ style, url, alt, width, height }) {
  return (
    <img src={url} alt={alt} width={width} height={height} style={style} />
  );
}

export default updatedComponent(Image);
```
