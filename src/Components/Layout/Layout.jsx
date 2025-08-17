import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Sidebar from "./../Sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />

      <div className=" sm:ml-56 py-12 ">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
