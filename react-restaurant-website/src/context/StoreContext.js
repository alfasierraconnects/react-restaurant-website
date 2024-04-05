import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = (cartItems) => {
    let totalAmount = 0;
    let deliveryfee = 0;
    let subtotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const currItem = food_list.find((food) => food._id === item);
        totalAmount += currItem.price * cartItems[item];
        deliveryfee += 10 * cartItems[item];
      }
    }
    subtotal = totalAmount + deliveryfee;
    return [totalAmount, deliveryfee, subtotal];
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
