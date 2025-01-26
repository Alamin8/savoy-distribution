import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';


const Sidebar = () => {
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
                <Link to='/cart' className="side-links cart">
                    <i className="fa-solid fa-basket-shopping"></i><p className='cart-link'>Cart <span className='cart-qty'>1000</span> </p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;