import React from "react";
import App from "./app.jsx";
import Barbershop from "./barbershop.jsx";
import Profile from "./profile.jsx";


const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/barbershop",
      element: <Barbershop />,
    },
    {
      path: "/profile",
      element: <Profile />,
    }
  ]

export default routes;