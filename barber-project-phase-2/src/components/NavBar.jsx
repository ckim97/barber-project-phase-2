import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.css";



/* define the NavBar component */
function NavBar({isSearch, search, setSearch}) {
  return (
    <nav className="navbar">
      <NavLink to="/home" className="nav-link"><img className="nav-image" src="https://media.discordapp.net/attachments/1169014161238401109/1181996408442736842/c16be0df4d505d93821edca14a589842.png?ex=658316f0&is=6570a1f0&hm=66f5a3aa68dc232f7e9c51159aee79623e07a87c27f10430b845b5213328b248&=&format=webp&quality=lossless&width=1782&height=936" alt="Home"/></NavLink>
      {!isSearch ? null :
       <div>
            <form>
                <input type="text" placeholder="search for barbershop" name="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </div>}
      <NavLink to="/profile" className="nav-link"><img className="nav-image" src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" alt="Profile"/></NavLink>

    </nav>
  );
};

export default NavBar;