import React from "react";
import Cart from "./Cart";

export default function Header() {
  return (
    <>
      <div className="bg-orange-800 py-4 px-20 flex justify-between">
        <h1 className="text-white text-3xl font-bold">ReactMeals</h1>
        <Cart />
      </div>
      <img src="/images/headerImage.jpg" alt="Header" className="w-full h-32" />
    </>
  );
}