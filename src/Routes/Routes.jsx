import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Coffes from "../Pages/Coffes";
import Dashboard from "../Pages/Dashboard";
import CofffeeCards from "../Components/CofffeeCards";
import Cards from "../Components/Cards";
import Categories from "../Components/Categories";
import CoffeeDetails from "../Pages/CoffeeDetails";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('../categories.json'),
            children:[
              {
                path: "/category/:category",
                element: <CofffeeCards></CofffeeCards>,
                loader: ()=> fetch('../coffees.json'),
              },
              {
                path: "/",
                element: <CofffeeCards></CofffeeCards>,
                loader: ()=> fetch('../coffees.json'),
              },
            ],
        },
        {
          path: "/coffee/:id",
          element: <CoffeeDetails></CoffeeDetails>,
          loader: ()=> fetch('../coffees.json'),
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
        },
        {
            path: "/coffes",
            element: <Coffes></Coffes>,
            loader: ()=> fetch('../coffees.json'),
        },
      ]
    },
  ])

  export default routes;