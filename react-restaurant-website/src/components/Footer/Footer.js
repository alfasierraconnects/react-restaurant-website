import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-16 mt-24">
      <div className="container px-18 p-6 mx-auto flex justify-between">
        <div className="w-3/5 -mx-6 px-6">
          <img className="w-auto h-7" src={assets.logo} alt="Tomato Logo" />
          <p className="max-w-sm my-6 text-gray-500 dark:text-gray-200">
            Nestled in the heart of the city, Tomato has been serving delectable
            dishes and creating memorable dining experiences for food
            enthusiasts since 1968.
          </p>
          <div className="flex gap-2 w-9 cursor-pointer">
            <img
              className="transition hover:scale-105"
              src={assets.facebook_icon}
              alt=""
            />
            <img
              className="transition hover:scale-105"
              src={assets.twitter_icon}
              alt=""
            />
            <img
              className="transition hover:scale-105"
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-white text-lg font-semibold">COMPANY</h3>
            <ul className="mt-4 cursor-pointer">
              <li className="block mt-2 text-sm text-gray-600 dark:text-gray-200 hover:underline">
                Home
              </li>
              <li className="block mt-2 text-sm text-gray-600 dark:text-gray-200 hover:underline">
                About Us
              </li>
              <li className="block mt-2 text-sm text-gray-600 dark:text-gray-200 hover:underline">
                Delivery
              </li>
              <li className="block mt-2 text-sm text-gray-600 dark:text-gray-200 hover:underline">
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold">GET IN TOUCH</h3>
            <p
              className="block mt-4 text-sm text-gray-600 dark:text-gray-200 hover:underline cursor-pointer"
              aria-label="Phone number"
            >
              +91 89895 77733
            </p>
            <p
              className="block mt-2 text-sm text-gray-600 dark:text-gray-200 hover:underline cursor-pointer"
              aria-label="Email address"
            >
              contact@tomato.com
            </p>
          </div>
        </div>
      </div>
      <hr className="h-1 m-4 mt-12 mx-24 bg-gray-200 border-none dark:bg-gray-700" />

      <div>
        <p className="text-center text-gray-500 dark:text-gray-200">
          Copyright 2024 © Tomato.com - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
