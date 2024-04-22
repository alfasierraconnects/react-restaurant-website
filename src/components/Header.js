import React from "react";
import headerImage from "../assets/header_img.png";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${headerImage})` }}
      className="h-[34vw] my-8 mx-auto bg-contain relative"
    >
      <div className="absolute flex flex-col gap-[1.5vw] items-start w-1/2 bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="font-medium text-white text-[4.5vw] w-[95%] leading-[5rem]">
          Order your favorite food here
        </h2>
        <p className="text-gray-100 text-[1vw] font-semibold">
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="bg-white text-gray-700 font-medium py-[1vw] px-[2.3vw] rounded-full text-[1vw]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
