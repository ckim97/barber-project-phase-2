import { NavLink } from "react-router-dom";
import React from "react";


function ProfileBar() {

  return (
    <nav>
      <NavLink to="/profile" className="nav-link">My Profile</NavLink>
    </nav>
  );
};

export default ProfileBar;