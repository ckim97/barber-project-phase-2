import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";



/* define the NavBar component */
function NavBar({isSearch, search, setSearch}) {
  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-link">Slice</NavLink>
      {!isSearch ? null :
       <div>
            <form>
                <input type="text" placeholder="search for barbershop" name="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </div>}
      <NavLink to="/profile" className="nav-link">My Profile</NavLink>

    </nav>
  );
};

export default NavBar;