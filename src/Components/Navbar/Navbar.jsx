import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
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
                <Link to='/register' className='becomecustomr'>Become A Customer</Link>
                <Link to='/login' className='signbutton'>Sign In</Link>
            </div>
        </nav>
    );
};

export default Navbar;