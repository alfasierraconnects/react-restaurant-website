import React from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div>
      <img src={image} alt="" />
      <div className="food-item-info">
        <div>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p>&#8377; {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default FoodItem;
