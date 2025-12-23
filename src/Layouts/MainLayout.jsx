import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="bg-gray-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        closeOnClick
      />
    </div>
  );
};

export default MainLayout;
