import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="container flex flex-row">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="home">Home</div>
      <div className="about">About</div>
      <div className="contact">Contact</div>
    </div>
  );
};

export default Navbar;
