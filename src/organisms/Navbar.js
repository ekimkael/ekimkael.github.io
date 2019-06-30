import React, { Component } from "react";
import NavLink from "react-router-dom/NavLink";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <button className="btn-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <section className="nav-right">
          <NavLink to="/" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </section>
      </nav>
    );
  }
}

export default Navbar;
