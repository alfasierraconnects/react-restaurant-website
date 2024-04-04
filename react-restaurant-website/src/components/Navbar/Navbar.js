import React, { useState } from "react";
import { assets } from "../../assets/assets";

function Navbar({ setShowLogin }) {
  const menuActive = "pb-0.5 border-b-2 border-gray-700";
  const [menu, setMenu] = useState("home");

  return (
    <div className="py-5 px-2.5 flex justify-between items-center">
      <img src={assets.logo} alt="" className="w-[150px]" />
      <ul className="navbar-menu flex gap-5 text-gray-700 text-lg  hover:cursor-pointer">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? menuActive : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? menuActive : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile app")}
          className={menu === "mobile app" ? menuActive : ""}
        >
          mobile app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? menuActive : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-w-2 min-h-2 rounded-full top-[-8px] right-[-8px] p-1 bg-red-500"></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-base text-gray-700 border-2 rounded-full border-red-400 py-2 px-7 transition duration-300 hover:bg-red-100"
        >
          sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
