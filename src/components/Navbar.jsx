import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="container flex flex-row justify-between items-center bg-gray-200 absolute mx-auto max-w-full">
      <div className="logo flex flex-row justify-center items-center relative w-1/4">
        <img className="w-14 border-2 border-solid" src={logo} alt="" />
        <span>PassCodes</span>
      </div>
      <ul className="flex flex-row relative w-1/4 justify-evenly">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
