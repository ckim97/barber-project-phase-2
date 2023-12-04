import React from "react";
import App from "./App.jsx";
import Barbershop from "./Barbershop.jsx";
import Profile from "./Profile.jsx";


const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/profile",
      element: <Profile />,
    }
  ]

export default routes;