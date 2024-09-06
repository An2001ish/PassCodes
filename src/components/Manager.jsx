import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.png";

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ URL: "", name: "", pwd: "" });
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    let mydata = localStorage.getItem("data");
    console.log(JSON.parse(mydata));
    if (mydata) {
      setDataArray(JSON.parse(mydata));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/hidden.png";
    } else {
      ref.current.src = "icons/eye.png";
    }
  };

  const onSave = async () => {
    setDataArray([...dataArray, form]);
    localStorage.setItem("data", JSON.stringify([...dataArray, form]));
    console.log([...dataArray, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center gap-24">
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
            value={form.URL}
            onChange={handleChange}
            name="URL"
          />
          <div className="flex gap-10 w-[90%] relative">
            <input
              className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-0.5"
              type="text"
              placeholder="Enter Username"
              value={form.name}
              onChange={handleChange}
              name="name"
            />
            <input
              className="rounded-full border-2 border-[#cc4b85] relative w-[90%] p-3 py-0.5"
              type="text"
              placeholder="Enter Password"
              value={form.pwd}
              onChange={handleChange}
              name="pwd"
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

          <button
            className="bg-[#cc4b85] rounded-lg w-40 flex items-center justify-center relative top-4 font-bold gap-2 hover:bg-[#e45595]"
            onClick={onSave}
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>

      <div className="passwords w-[70vw]">
      <h1 className="text-white font-bold text-lg">Saved Passwords:</h1>
      {dataArray.length === 0 && <div className="text-white text-md">No data to show</div>}
      {dataArray.length != 0 &&
      <table className="table-auto text-white w-full rounded-md overflow-hidden">
        <thead className="bg-gray-300 text-black">
          <tr>
            <th>Website URL</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
        {dataArray.map((items, index)=>{
          return<tr key={index}>
            <td className="text-center w-32"><a href={items.URL} target="_blank">{items.URL}</a></td>
            <td className="text-center w-32">{items.name}</td>
            <td className="text-center w-32">{items.pwd}</td>
          </tr>
        })}
        </tbody>
      </table>}
      </div>
    </div>
  );
};

export default Manager;
