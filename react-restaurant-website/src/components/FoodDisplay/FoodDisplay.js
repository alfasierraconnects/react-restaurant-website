import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-2xl">Top dishes near you</h2>
      <div className="grid grid-cols-4 mt-8 gap-6 gap-y-12">
        {food_list.map((item, index) => {
          // {console.log(category, item.category);}
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
