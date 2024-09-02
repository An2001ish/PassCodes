import React from "react";
import logo from "./logo.png";

const Manager = () => {
  return (
    <div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="flex flex-col h-[90vh] justify-center items-center">
        <div className="flex justify-center items-center absolute top-[122px] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white text-xl font-bold">
          <span className="text-white text-4xl">&#91;</span>
          <img className="w-14" src={logo} alt="" />
          Pass<span className="text-[#cc4b85] mr-2">Codes</span>
          <span className="text-white text-4xl">&#93;</span>
          <span className="flex absolute text-white font-light w-screen top-16 justify-center text-lg">
            A Safe Place for Your Passwords
          </span>
        </div>

        <div className="flex flex-col justify-center items-center h-[60vh] w-[60vw] border-2 border-[#efefef] mx-auto rounded-lg text-sm gap-4">
          <input className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-1" type="text" placeholder="Enter Website URL" />
          <div className="flex gap-10 w-[90%]">
          <input className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-1" type="text" placeholder="Enter Username" />
          <input className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-1" type="text" placeholder="Enter Password" />
          </div>
          <button className="bg-white">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
