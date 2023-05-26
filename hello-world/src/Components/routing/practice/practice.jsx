import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import "../basic/pages.css";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="demo/:id" element={<Demo />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;

function Navbar() {
  const navigate = useNavigate();
  const clickDemo = (event) => {
    event.preventDefault();
    const name = "Sajjad Ali";
    navigate(`/demo/${name}`);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/demo" onClick={clickDemo}>
              Demo
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </nav>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page content</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>About page content</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Contact page content</p>
    </div>
  );
}

function Demo() {
  const { id } = useParams();
  return (
    <div>
      <h1>Demo</h1>
      <h2>Param: {id}</h2>
    </div>
  );
}

function Error() {
  return (
    <div>
      <h1>Error</h1>
      <p>Error page content</p>
    </div>
  );
}
