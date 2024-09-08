import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.png";
import { v4 as uuidv4 } from "uuid";


const Manager = () => {
  const ref = useRef();
  const pwdref = useRef();
  const [form, setForm] = useState({ URL: "", name: "", pwd: "" });
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    let mydata = localStorage.getItem("data");
    if (mydata) {
      setDataArray(JSON.parse(mydata));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/hidden.png";
      pwdref.current.type = "password";
    } else {
      ref.current.src = "icons/eye.png";
      pwdref.current.type = "text";
    }
  };

  const onSave = () => {
    const newEntry = { ...form, id: uuidv4() };
    const updatedArray = [...dataArray, newEntry];

    setDataArray(updatedArray);
    localStorage.setItem("data", JSON.stringify(updatedArray));
    setForm({ URL: "", name: "", pwd: "" });
  };

  const deleteData = (id) => {
    let c = confirm("Do you want to delete this data?");
    if (c) {
      setDataArray(dataArray.filter((items) => items.id != id));
      localStorage.setItem(
        "data",
        JSON.stringify(dataArray.filter((items) => items.id != id))
      );
      
    }
  };

  const editData = (id) => {
    setForm(dataArray.filter((i) => i.id === id)[0]);
    setDataArray(dataArray.filter((items) => items.id != id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      

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
                ref={pwdref}
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
              className="bg-[#cc4b85] rounded-lg w-28 flex items-center justify-center relative top-4 font-bold gap-2 hover:bg-[#e45595]"
              onClick={onSave}
            >
              <lord-icon
                src="https://cdn.lordicon.com/hqymfzvj.json"
                trigger="hover"
              ></lord-icon>
              Add
            </button>
          </div>
        </div>

        <div className="passwords w-[70vw]">
          <h1 className="text-white font-bold text-lg my-4">
            Saved Passwords:
          </h1>
          {dataArray.length === 0 && (
            <div className="text-white text-md">No data to show</div>
          )}
          {dataArray.length != 0 && (
            <table className="table-auto text-white w-full rounded-md overflow-hidden">
              <thead className="bg-gray-300 text-black">
                <tr>
                  <th className="py-2 ">Website URL</th>
                  <th className="py-2 ">Username</th>
                  <th className="py-2 ">Username</th>
                  <th className="py-2 ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataArray.map((items, index) => {
                  return (
                    <tr key={index} className="text-black font-medium">
                      <td className="text-center text-sm py-2 bg-[#cc4b85] w-50">
                        <a href={items.URL} target="_blank">
                          {items.URL}
                        </a>
                      </td>
                      <td className=" text-center text-sm py-2 bg-[#cc4b85] w-50">
                        {items.name}
                      </td>
                      <td className="text-center text-sm py-2 bg-[#cc4b85] w-50">
                        {items.pwd}
                      </td>
                      <td className="flex justify-center gap-6 text-center text-sm py-2 bg-[#cc4b85] w-50">
                        <span
                          onClick={() => {
                            editData(items.id);
                          }}
                        >
                          <img
                            className="w-5 cursor-pointer"
                            src="icons/pen.png"
                            alt=""
                          />
                        </span>
                        <span
                          onClick={() => {
                            deleteData(items.id);
                          }}
                        >
                          <img
                            className="w-5 cursor-pointer"
                            src="icons/delete.png"
                            alt=""
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;
