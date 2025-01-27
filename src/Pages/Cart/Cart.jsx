import React, { useContext } from 'react';
import './Cart.css'
import { ShopContext } from '../../context/ShopContext';

const Cart = () => {
    const {cartItems, food_list, removeFromCart, getTotalCartAmount} =useContext(ShopContext)
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((item, index)=>{
                        if(cartItems[item._id]>0){
                            return(
                                <>
                                    <div className="cart-items-title cart-items-item">
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price*cartItems[item._id]}</p>
                                        <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    })
                }
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="">
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()+2}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div className="">
                        <p>If you have a promo code, Input it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;