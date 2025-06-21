import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";
import Blog from "../../Pages/Blog/Blog";
import Mobile from "../../Pages/Mobile/Mobile";
import { productsAndCartLoader } from "../../Loaders/productsAndCartLoader";
import Orders from "../../Pages/Orders/Orders";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Laptop from "../../Pages/Home/Laptop/Laptop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/mobile",
        element: <Mobile></Mobile>,
      },
      {
        path: "/laptop",
        element: <Laptop></Laptop>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader ,
        element: <Orders> </Orders>,
      },
    ],

    
  },

  {
    path: "*",
    element: <NotFound />,
  },
  
]);
export default router;
