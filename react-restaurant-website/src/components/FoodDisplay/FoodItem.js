import React from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow animate-pulseLoad">
      <img src={image} alt="" />
      <div className="food-item-info p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="font-semibold text-lg">{name}</p>
          <img className="w-1/3" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-sm font-medium text-gray-700">{description}</p>
        <p className="font-medium py-2.5 text-red-500 text-lg">
          &#8377; {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
