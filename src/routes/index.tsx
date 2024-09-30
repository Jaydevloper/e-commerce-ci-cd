/* eslint-disable react-refresh/only-export-components */
import LayoutMenu from "components/layout";
import Loader from "components/loader";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Login = lazy(() => import("pages/login"));
const Home = lazy(() => import("modules/Home/pages"));
const ProductView = lazy(() => import("modules/products/pages/view"));
const About = lazy(() => import("modules/about/pages"));
const Contact = lazy(() => import("modules/contact/pages"));

const router = () => {
  return createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <LayoutMenu />,
      loader: Loader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products/",
          children: [
            {
              index: true,
              element: <></>,
            },
            {
              path: "view/:id",
              element: <ProductView />,
            },
          ],
        },
        {
          path: "about/",
          element: <About />,
        },
        {
          path: "contact/",
          element: <Contact />,
        },
      ],
    },
  ]);
};

export default router;
