import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo"><h1>LOGO</h1></div>
      <div className="list">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact</NavLink></li>
          <li><NavLink to='/services' className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>services</NavLink></li>
        </ul>
      </div>
      <div className="btn">
        <NavLink to="/login"><button>Login</button></NavLink>
        <NavLink to="/register"><button>Register</button></NavLink>
      </div>
    </nav>
  );
};

export default Nav;
