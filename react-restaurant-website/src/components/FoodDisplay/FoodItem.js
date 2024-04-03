import React, { useState } from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="rounded-xl overflow-hidden shadow animate-pulseLoad bg-red-50">
      <div className="relative">
        <img src={image} alt="" />
        <div className="absolute right-2 bottom-2 bg-red-50 rounded-full flex flex-row-reverse p-1 items-center gap-2">
          {itemCount === 0 ? (
            <img
              className="h-8"
              onClick={() => setItemCount(itemCount + 1)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <>
              <img
                className="h-8"
                onClick={() => setItemCount(itemCount + 1)}
                src={assets.add_icon_green}
                alt=""
              />
              <p className="font-semibold">{itemCount}</p>
              <img
                className="h-8"
                onClick={() => setItemCount(itemCount - 1)}
                src={itemCount > 0 ? assets.remove_icon_red : ""}
                alt=""
              />
            </>
          )}
        </div>
      </div>
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
