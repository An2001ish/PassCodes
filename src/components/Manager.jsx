import React from "react";
import logo from "./logo.png";

const Manager = () => {
  return (
    <div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="flex flex-col h-[90vh] justify-center items-center">
        <div className="flex justify-center items-center absolute top-32 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white text-xl font-bold">
          <span className="text-white text-4xl">&#91;</span>
          <img className="w-14" src={logo} alt="" />
          Pass<span className="text-[#cc4b85] mr-2">Codes</span>
          <span className="text-white text-4xl">&#93;</span>

        </div>
        <div className="flex flex-col justify-center items-center h-[60vh] w-[60vw] border-2 mx-auto rounded-lg">
          <input type="text" placeholder="Enter Website URL" />
          <div className="flex gap-10">
            <input type="text" placeholder="Enter Username" />
            <input type="text" placeholder="Enter Password" />
          </div>
          <button className="bg-white">Add</button>
        </div>
      </div>

      {/* <div className="flex flex-col h-[10vh]"></div> */}

      {/* <div className=" mx-auto my-[30vh] max-w-2xl border-2">
        <div className=" max-w-full flex flex-col border-2 border-red-300 gap-2">

          <input
            className="field bg-red-200"
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="flex flex-row w-1/2 justify-between">
            <input
              className="bg-green-200"
              type="text"
              placeholder="Enter Username"
            />
            <input
              className="bg-blue-200"
              type="text"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div className="buttons">
          <button className="bg-white">Add</button>
        </div>
      
      </div> */}
    </div>
  );
};

export default Manager;
