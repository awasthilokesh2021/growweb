import React, { useContext, useState } from "react";
import { Mycontext } from "../Context/Createcontext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [data, setData] = useState({
    fname: "",
    email: "",
    address: "",
    phoneno: "",
  });

  const navigate = useNavigate();
  const { user, setUser } = useContext(Mycontext);
  console.log(user);

  const setInputData = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log({ ...data, [name]: value });
  };

  const handleBtn = () => {
    setUser(data.fname);
    setData({
      fname: "",
      email: "",
      address: "",
      phoneno: "",
    });
    navigate("/");
    toast.success("User registered successfully!");
  };

  return (
    <div className="w-full bg-slate-100 min-h-[100vh] py-[100px]">
      <div className="w-[60%] mx-auto shadow-2xl px-[150px] py-10 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col w-full gap-1">
            <label>Name</label>
            <input
              type="text"
              placeholder="username"
              className="border py-1 px-2 outline-none"
              name="fname"
              value={data.fname}
              onChange={setInputData}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label>Email</label>
            <input
              type="text"
              placeholder="@mail.com"
              className=" border py-1 px-2 outline-none"
              name="email"
              value={data.email}
              onChange={setInputData}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              className=" border py-1 px-2 outline-none"
              name="address"
              value={data.address}
              onChange={setInputData}
            />
          </div>
          <div className="flex flex-col w-full ">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone No"
              className=" border py-1 px-2 outline-none"
              name="phoneno"
              value={data.phoneno}
              onChange={setInputData}
            />
          </div>
          <div className=" mt-4 bg-red-700 text-white px-6 py-1 rounded-md ">
            <button onClick={handleBtn}>Submit</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
