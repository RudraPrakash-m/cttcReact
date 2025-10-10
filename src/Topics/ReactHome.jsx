import React from "react";
// import Top from "./Components/Top";
// import LeftSide from "./Components/LeftSide"
// import RightSide from "./Components/RightSide"
// import Footer from "./Components/Footer"
// import Items from "./Props/Items";
// import UseState from "./Hooks/useState/UseState";
// import Iterator from "./Iterators/Iterator";
// import Bio from "./Task/Bio";
import UseEffect from "./Hooks/useEffect/UseEffect";
import Nav from "./Hooks/useEffect/Nav";
import Project1 from "./TaskOnAPIfetch/Project1";
import Layout from "./ReactRouter/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ReactRouter/pages/Home";
import About from "./ReactRouter/pages/About";
import Contact from "./ReactRouter/pages/Contact";
import Services from "./ReactRouter/pages/Services";
import Login from "./ReactRouter/pages/Login";
import Register from "./ReactRouter/pages/Register";
import ErrorPage from "./ReactRouter/pages/ErrorPage";
import WebDev from "./ReactRouter/pages/services/WebDev";
import Cons from "./ReactRouter/pages/services/Cons";
import HomeDelivery from "./ReactRouter/pages/services/HomeDelivery";
import Details from "./ReactRouter/components/Details";

const ReactHome = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
          children: [
            {
              path: "/services",
              element: <WebDev />,
            },
            {
              path: "/services/con",
              element: <Cons />,
            },
            {
              path: "/services/homeD",
              element: <HomeDelivery />,
            },
          ],
        },
        {
          path: "/view_profile/:id",
          element: <Details />,
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    //! components
    // <>
    //   <main>
    //     <Top />
    //     <div className="mainbox">
    //       <LeftSide/>
    //       <RightSide/>
    //     </div>
    //     <Footer/>
    //   </main>
    // </>

    //! props
    // <main>
    //   <Items/>
    // </main>

    //! iterators

    // <main>
    //   <Iterator/>
    // </main>

    //! Task
    // <main>
    //   <Bio/>
    // </main>

    //? HOOKS in react

    //! useState
    // <main>
    //   <UseState/>
    // </main>

    //! useEffect
    // <main>
    //   <Nav/>
    //   <UseEffect />
    // </main>

    //! API Fetch Task

    // <main>
    //   <Project1/>
    // </main>

    //! react rouer

    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default ReactHome;
