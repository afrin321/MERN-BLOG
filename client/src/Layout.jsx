import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <Header />
      <Outlet></Outlet>
    </main>
  );
}

export default Layout;
