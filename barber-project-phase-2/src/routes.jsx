import React from "react";
import App from "./App.jsx";
import Barbershop from "./Barbershop.jsx";
import Profile from "./Profile.jsx";
import Home from "./Home.jsx";
import BarberDetails from './components/BarberDetails';
import Services from "./components/Services.jsx";

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
        },
        {
          path: "/barbershop/:id/barbers",
          element: <BarberDetails />,
          errorElement: <h1>Something went wrong!</h1>
        },
        {
          path: "/barbershop/:id/services",
          element: <Services />,
          errorElement: <h1>Something went wrong!</h1>
        },
      ]
    }
  ]

export default routes;