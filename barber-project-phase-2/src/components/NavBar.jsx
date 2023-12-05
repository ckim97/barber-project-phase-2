import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";



/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink to="/home" className="nav-link">Slice</NavLink>
    </nav>
  );
};

export default NavBar;