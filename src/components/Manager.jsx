import React, { useRef } from "react";
import logo from "./logo.png";

const Manager = () => {
  const ref = useRef()
  const showPassword = () => {
    ref.current.src.includes("icons/eye.png")
      ? (ref.current.src = "icons/hidden.png")
      : (ref.current.src = "icons/eye.png");
  };

  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="flex flex-col relative top-10 items-center">
        <div className="flex justify-center items-center absolute bottom-[158px] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white text-base font-bold">
          <span className="text-white text-2xl">&#91;</span>
          <img className="w-10" src={logo} alt="" />
          Pass<span className="text-[#cc4b85] mr-2">Codes</span>
          <span className="text-white text-2xl">&#93;</span>
          <span className="flex absolute text-white font-light w-screen top-10 justify-center text-sm">
            A Safe Space for Your Passwords
          </span>
        </div>

        <div className="flex flex-col justify-end items-center h-[27vh] w-[70vw] border-2 border-[#efefef] mx-auto rounded-lg text-sm gap-3">
          <input
            className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-0.5"
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="flex gap-10 w-[90%] relative">
            <input
              className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-0.5"
              type="text"
              placeholder="Enter Username"
            />
            <input
              className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-0.5"
              type="text"
              placeholder="Enter Password"
            />
            <span
              className="absolute top-0 right-2 cursor-pointer"
              onClick={showPassword}
            >
              <img
                className="p-1"
                width={28}
                src="icons/eye.png"
                ref={ref}
                alt=""
              />
            </span>
          </div>

          <button className="bg-[#cc4b85] rounded-lg w-40 flex items-center justify-center relative top-4 font-bold gap-2 hover:bg-[#e45595]">
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
