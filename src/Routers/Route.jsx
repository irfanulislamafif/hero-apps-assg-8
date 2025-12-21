import React from "react";
import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import Apps from "../Components/Apps";
import Installation from "../Components/Installation";
import Error from "../Components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);
