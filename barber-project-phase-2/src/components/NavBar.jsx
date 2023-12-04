import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";



/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/barbershops" className="nav-link">Barbershops</NavLink>
      <NavLink to="/profile" className="nav-link">My Profile</NavLink>
    </nav>
  );
};

export default NavBar;