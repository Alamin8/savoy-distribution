import React, { useContext, useEffect } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const {getTotalCartAmount, getTotalCartItemQty, token} = useContext(ShopContext);
    const navigate = useNavigate()
    
    const handleCartnavigation=()=>{
        if(!token){
            alert("Need to login first");
        }
        else{
            navigate('/cart');
        }
    }


    return (
        <div className='sidebar'>
            <div className="sortcut-links">
                <Link to='/' className="side-links">
                    <i className="fa-solid fa-house "></i><p>Home</p>
                </Link>
                <Link to='/about' className="side-links">
                <i className="fa-solid fa-shop"></i><p>About</p>
                </Link>
                <Link to='/locations' className="side-links">
                    <i className="fa-solid fa-location-dot"></i><p>Locations</p>
                </Link>
                <Link to='/products' className="side-links">
                <i className="fa-solid fa-cart-shopping"></i><p>Product</p>
                </Link>
                <Link to='/recipes' className="side-links">
                <i className="fa-solid fa-utensils"></i><p>Recipes</p>
                </Link>
                <Link to='/contact' className="side-links">
                <i className="fa-solid fa-envelope"></i><p>Contact</p>
                </Link>
                <Link to='/careers' className="side-links">
                <i className="fa-solid fa-user-tie"></i><p>Careers</p>
                </Link>
            </div>
            <div className="sortcut-links">
                <p onClick={handleCartnavigation} className="side-links cart">
                    <i className="fa-solid fa-basket-shopping"></i><p className='cart-link'>Cart {getTotalCartAmount()===0 ? '': <span className='cart-qty'>{getTotalCartItemQty()}</span>}</p>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;