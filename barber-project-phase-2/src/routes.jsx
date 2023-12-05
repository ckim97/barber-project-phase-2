import React from "react";
import App from "./App.jsx";
import Barbershop from "./Barbershop.jsx";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";


const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Something went wrong!</h1>,
      children : [
        {
            path: "/home",
            element: <Home/>,
            errorElement: <h1>Something went wrong!</h1>
        },
        {
            path: "/barbershop",
            element: <Barbershop/>,
            errorElement: <h1>Something went wrong!</h1>
        },
        {
            path: "/profile",
            element: <Profile />,
            errorElement: <h1>Something went wrong!</h1>
        }
      ]
    }
  ]

export default routes;