import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="w-screen bg-blue-300">
      <div className="flex items-center w-full ">
        <img
          alt="Logo"
          src="/logo192.png"
          className=""
          height={80}
          width={80}
        />
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-4">
            October <span className="font-bold">Eats</span>
          </h1>
          <div className="hidden md:flex rounded-full bg-gray-200 ">
            <p className="bg-black rounded-full p-2 text-white ">Delivery</p>
            <p className="p-2 ">Pickup</p>
          </div>
        </div>
        <ul className="flex space-x-3 items-center w-[30%] ml-auto mr-4">
          <div className=" flex ml-auto w-full rounded-xl bg-gray-200 text-[14px]">
            <FiSearch size={20} className="m-1" />
            <input
              type="search"
              placeholder="  Search Food"
              className="bg-transparent"
            ></input>
          </div>
          <button
            onClick={console.log("Cart clicked")}
            className="rounded-xl bg-black items-center text-white px-4 font-bold flex py-1 space-x-1"
          >
            <span>Cart</span>
            <FiShoppingCart size={20} />
          </button>{" "}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
