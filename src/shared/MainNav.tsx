import React from "react";
import TopNav from "./TopNav";
import { MainNavbar } from "./Navbar";
import MidNav from "./MidNav";

const MainNav = () => {
  return (
    <div>
      <TopNav />
      <MidNav />
      <MainNavbar />
    </div>
  );
};

export default MainNav;
