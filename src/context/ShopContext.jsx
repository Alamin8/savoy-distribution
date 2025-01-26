import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../Components/ExploreBrand/DummyData";


export const ShopContext = createContext();


const ShopContextProvider=({children})=>{

  const [cartItems, setCartItems]=useState({});
  const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  return (
    <>
      <ShopContext.Provider value={contextValue}>
        {children}
      </ShopContext.Provider>
    </>
  );
}


export default ShopContextProvider;
