import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";



/* define the NavBar component */
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-link">Slice</NavLink>
      <div>
            <form>
                <input type="text" placeholder="search for barbershop" name="search"></input>
                <button>Submit</button>
            </form>
        </div>
      <NavLink to="/profile" className="nav-link">My Profile</NavLink>

    </nav>
  );
};

export default NavBar;