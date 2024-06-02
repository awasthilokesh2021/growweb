import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full py-4 hover:shadow-lg">
      <div className="w-[92%] mx-auto flex justify-around items-center">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              className="w-[70px]"
              src="https://i.pinimg.com/736x/77/ca/55/77ca550a2332ea82f01dd03bfdf6c62f.jpg"
              alt="grow"
            />
          </NavLink>
          <div>
            <h1 className=" text-xl font-bold">pay</h1>
            <p className=" text-xs text-gray-500">Mutual funds</p>
          </div>
        </div>

        <div className="flex gap-5 list-none">
          <li className=" text-xl cursor-pointer">Features</li>
          <li className=" text-xl cursor-pointer">Product</li>
          <li className=" text-xl cursor-pointer">Learn</li>
        </div>

        <div className="flex gap-4">
          <button className=" border  border-red-800 px-2 py-2  hover:bg-red-600 hover:text-white ">
            To the transation
          </button>
          <NavLink to="/sign">
            <button className=" border  border-red-800 px-2 py-2  hover:bg-red-600 hover:text-white  ">
              Sign up
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
