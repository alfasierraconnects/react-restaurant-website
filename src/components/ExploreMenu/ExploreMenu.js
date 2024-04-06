import React from "react";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = ({ category, setCategory }) => {
  const imageStyle =
    "w-[7.5vw] h-auto cursor-pointer rounded-full transition duration-75";
  const active = "border-4 border-red-300 p-0.5";

  return (
    <div id="explore-menu" className="flex flex-col gap-5">
      <h1 className="text-gray-700 font-medium text-2xl">Explore Our Menu</h1>
      <p className="w-3/5 text-gray-700 font-medium">
        choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-8 text-center my-5 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
            >
              <img
                className={`${imageStyle} ${
                  category === item.menu_name ? active : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-2.5 text-gray-700 text-lg cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2.5 bg-gray-300 h-0.5" />
    </div>
  );
};

export default ExploreMenu;
