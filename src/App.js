import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "link")}
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <Link to="about">About</Link>
            </li> */}
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "link")}
                to="micro-react1"
              >
                React_1
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "link")}
                to="micro-react2"
              >
                React_2
              </NavLink>
            </li>
 
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="micro-react1/*" element={<div id="container" />} />
          <Route path="micro-react2/*" element={<div id="container" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default (App);

// export default App;
