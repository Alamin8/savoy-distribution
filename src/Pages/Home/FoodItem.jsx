import React, { useContext } from 'react';
import './Home.css'
import AddIconWhite from '../../assets/icon/add_icon_white.png'
import RemoveIconRed from '../../assets/icon/remove_icon_red.png'
import AddIconGreen from '../../assets/icon/add_icon_green.png'
import RatingIcon from '../../assets/icon/rating_starts.png'
import { ShopContext } from '../../context/ShopContext';
import {Link} from 'react-router-dom'

const FoodItem = (item) => {
    const {_id, category, description, image, name, price }=item.item;
    const {cartItems, addToCart, removeFromCart, token, url}=useContext(ShopContext)
 
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                 <img src={url+"/images/"+image} alt="" className="food-item-image" />
                 {
                    !cartItems[_id]? <img className='add' onClick={()=>addToCart(_id)} src={AddIconWhite} alt="" /> :
                    <div className='food-item-counter'>
                        <img onClick={()=>removeFromCart(_id)} src={RemoveIconRed} alt="" />
                        <p>{cartItems[_id]}</p>
                        <img onClick={()=>addToCart(_id)} src={AddIconGreen} alt=""  />
                    </div>
                 }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className='food-item-Heading'>{name}</p>
                    {/* <img src={RatingIcon} alt="" /> */}
                </div>
                <p className='food-item-desc'>{description}</p>
                {
                    !token? <></> : <p className='food-item-price'>${price}</p>
                }
                <div className="foodview">
                    <Link to={`/products/${_id}`} className="ViewBTN">View  <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>

        </div>
    );
};

export default FoodItem;



























// <div className="food-item-img-container">
// <img src={image} alt="" className="food-item-image" />
// {
//    !itemCount? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={AddIconWhite} alt="" /> :
//    <div className='food-item-counter'>
//        <img onClick={()=>setItemCount(prev=>prev-1)} src={RemoveIconRed} alt="" />
//        <p>{itemCount}</p>
//        <img onClick={()=>setItemCount(prev=>prev+1)} src={AddIconGreen} alt=""  />
//    </div>
// }
// </div>