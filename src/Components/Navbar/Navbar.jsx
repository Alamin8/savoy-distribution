import React from 'react';
import './Navbar.css'
// import savoy__logo from '../../assets/Savoy__logo__final.png'


const Navbar = () => {
    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <i className="fa-solid fa-bars-staggered menu-icon"></i>
                <p className='logo' alt="logo">Savoy Distribution</p>
            </div>
            <div className="nav-middle flex-div">

            </div>
            <div className="nav-right flex-div">
                <button className='becomecustomr'>Become A Customer</button>
                <button className='signbutton'>Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;