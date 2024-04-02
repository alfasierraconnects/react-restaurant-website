import React from "react";

export default function Cart() {
  return (
    <button className="flex gap-2 py-2 px-6 bg-orange-950 rounded-3xl text-white text-lg font-bold hover:bg-gray-900">
      <ion-icon
        name="cart"
        style={{ color: "white", fontSize: "1.5rem" }}
      ></ion-icon>
      <p>Your Cart </p>
      <p className="bg-orange-800 rounded-full px-4">0</p>
    </button>
  );
}
