import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ShopContext = createContext();


const ShopContextProvider=({children})=>{

  const [cartItems, setCartItems]=useState({});
  const url ="http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList]=useState([])


  const addToCart= async (itemId)=>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    if(token){
      await axios.post(url+"/api/cart/add",{itemId}, {headers:{token}})
    }
  }


  const removeFromCart = async (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId}, {headers:{token}})
    }
  }


  const getTotalCartAmount =()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id ===item);
        totalAmount += itemInfo.price*cartItems[item];
      }

    }
    return totalAmount;
  }

  const getTotalCartItemQty = ()=>{
    let cartitemQty = 0;
    for(const item in cartItems){
      cartitemQty += cartItems[item];

    }
    return cartitemQty;
  }


  const fetchFoodList= async ()=>{
    const response = await axios.get(url+"/api/products/list")
    if(response.data.data){
      setFoodList(response.data.data)
    }else{
      alert("Somtime things occurs on faching food api")
    }
  }

  const loadCartData = async (token)=>{
    const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}})
    setCartItems(response.data.cartData)
  }

  useEffect(()=>{
    async function loadData() {
      await fetchFoodList()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
    
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItemQty,
    url,
    token,
    setToken
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
