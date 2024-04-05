import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const [displayAmount, setDisplayAmount] = useState([0, 0, 0]);

  useEffect(() => {
    setDisplayAmount(getTotalCartAmount(cartItems));
  }, [cartItems, getTotalCartAmount]);

  return (
    <div className="container mx-auto p-4 my-20">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-11 gap-2 mb-4 font-semibold text-gray-600">
          <p className="col-span-2">Item</p>
          <p className="col-span-2">Title</p>
          <p className="col-span-2">Price</p>
          <p className="col-span-2">Quantity</p>
          <p className="col-span-2">Total</p>
          <p className="col-span-1">Remove</p>
        </div>
        <hr className="border-b-2" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={item._id}
                  className="grid grid-cols-11 gap-2 m-2 items-center font-semibold"
                >
                  <img
                    className="h-10 w-auto col-span-2 object-contain"
                    src={item.image}
                    alt=""
                  />
                  <p className="col-span-2">{item.name}</p>
                  <p className="col-span-2">&#8377; {item.price}</p>
                  <p className="col-span-2">{cartItems[item._id]}</p>
                  <p className="col-span-2">
                    &#8377; {item.price * cartItems[item._id]}
                  </p>
                  <button
                    className="col-span-1 text-start text-xl"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <ion-icon name="close"></ion-icon>
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="my-20 flex justify-between">
          <div className="w-3/5">
            <h3 className="font-semibold text-xl mb-3">Cart Totals</h3>
            <div className="flex justify-between my-1 font-semibold text-gray-600">
              <p>Subtotal</p>
              <p>&#8377; {displayAmount[0]}</p>
            </div>
            <hr />
            <div className="flex justify-between my-1 font-semibold text-gray-600">
              <p>Delivery Fee</p>
              <p>&#8377; {displayAmount[1]}</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold my-1">
              <p>Total</p>
              <p>&#8377; {displayAmount[2]}</p>
            </div>
            <button
              type="submit"
              className=" bg-red-500 text-white mt-4 px-8 py-2 rounded-sm hover:bg-red-600 active:shadow-lg active:bg-red-500 "
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div>
            <p className="font-semibold text-gray-600 mb-4">
              If you have a promo code, Enter it here
            </p>
            <div className="flex">
              <input
                className="bg-gray-200 font-semibold text-gray-600 rounded-l p-2 focus:outline-none"
                type="text"
                placeholder="promo code"
              />
              <button className="bg-black font-semibold text-gray-100 hover:text-white rounded-r py-2 px-8 hover:bg-gray-900 active:bg-black">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
