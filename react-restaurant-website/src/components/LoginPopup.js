import React, { useState } from "react";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("signup");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and validation here
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75 backdrop-blur-sm">
      <form
        className="bg-white shadow-lg rounded-md p-6 w-96"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">
            {currState === "signup" ? "Sign Up" : "Login"}
          </h3>
          <button
            onClick={() => setShowLogin(false)}
            aria-label="Close Login Popup"
          >
            <p className="text-3xl hover:text-red-500">
              <ion-icon name="close-outline"></ion-icon>
            </p>
          </button>
        </div>

        <div className="flex flex-col gap-6 mt-6 mx-1">
          {currState === "signup" && (
            <div className="flex items-center">
              <p className="text-2xl text-gray-700 p-1">
                <ion-icon name="person-outline"></ion-icon>
              </p>
              <input
                className="flex-1 p-2 border-2 rounded-md outline-none focus:border-red-400"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
          )}
          <div className="flex items-center">
            <p className="text-2xl text-gray-700 p-1">
              <ion-icon name="mail-outline"></ion-icon>
            </p>
            <input
              className="flex-1 p-2 border-2 rounded-md outline-none focus:border-red-400"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="flex items-center">
            <p className="text-2xl text-gray-700 p-1">
              <ion-icon name="key-outline"></ion-icon>
            </p>
            <input
              className="flex-1 p-2 border-2 rounded-md outline-none focus:border-red-400"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-baseline gap-2">
            <input
              type="checkbox"
              required
              className="h-3 w-3 cursor-pointer"
            />
            <p className="text-gray-700 flex-1">
              By continuing, I agree to the terms of use and privacy policy.
            </p>
          </div>

          <button
            type="submit"
            className=" bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 hover:shadow-sm active:font-semibold"
          >
            {currState === "signup" ? "Create Account" : "Login"}
          </button>
        </div>

        <p
          onClick={() =>
            setCurrState(currState === "signup" ? "login" : "signup")
          }
          className="mt-6 text-center text-gray-600 hover:text-red-500 hover:font-semibold cursor-pointer"
        >
          {currState === "signup"
            ? "Already have an account?"
            : "Create a new account?"}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
