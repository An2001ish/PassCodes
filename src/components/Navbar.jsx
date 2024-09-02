import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="container flex flex-row justify-between items-center bg-gray-200 mx-auto max-w-full">
      <div className="logo flex flex-row justify-center items-center w-1/4 text-lg font-bold ">
        <span className="text-[#010c29] text-3xl">&#91;</span>
        <img className="w-10" src={logo} alt="" />
        Pass<span className="text-[#cc4b85] mr-2 ml-">Codes</span>
        <span className="text-[#010c29] text-3xl">&#93;</span>
      </div>
      <ul className="flex flex-row w-1/4 justify-evenly font-bold">
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
