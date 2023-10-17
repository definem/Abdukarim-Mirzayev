import React from "react";
import Logo from "../../../public/assets/icons/logo.svg";

const Navbar = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <nav className=" p-5 flex gap-x-8 ">
          <img src={Logo.src} alt="logo" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
