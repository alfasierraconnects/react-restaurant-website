import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setShowLogin }) {
  const menuActive = "pb-0.5 border-b-2 border-gray-700";
  const [menu, setMenu] = useState("home");
  const { cartItems, getTotalCartAmount } = useContext(StoreContext);
  const [cartItemsDisplay, setCartItemsDisplay] = useState(0);

  useEffect(() => {
    setCartItemsDisplay(getTotalCartAmount(cartItems)[3]);
  }, [cartItems, getTotalCartAmount]);

  return (
    <div className="py-5 px-2.5 flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-[150px]" />
      </Link>
      <ul className="navbar-menu flex gap-5 text-gray-700 text-lg hover:cursor-pointer">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? menuActive : ""}
          >
            home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? menuActive : ""}
          >
            menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile app")}
            className={menu === "mobile app" ? menuActive : ""}
          >
            mobile app
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("contact us")}
            className={menu === "contact us" ? menuActive : ""}
          >
            contact us
          </a>
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="Search" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {cartItemsDisplay > 0 && (
            <div className="absolute h-5 w-5 text-center rounded-full top-[-8px] right-[-8px] bg-red-500 text-white font-medium text-sm">
              {cartItemsDisplay}
            </div>
          )}
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
