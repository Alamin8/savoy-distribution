import React, { useContext } from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import avaterPic from '../../assets/icon/profile_icon.png'


const Navbar = () => {
    const {token, setToken} = useContext(ShopContext);
    const navigate = useNavigate();

    const logout =()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate('/');
    }

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <i className="fa-solid fa-bars-staggered menu-icon"></i>
                <p className='logo' alt="logo">Savoy Distribution</p>
            </div>
            <div className="nav-middle flex-div">

            </div>
            <div className="nav-right flex-div">
                {
                    !token?<>
                        <Link to='/register' className='becomecustomr'>Become A Customer</Link>
                        <Link to='/login' className='signbutton'>Sign In</Link>
                    </> : <div className="navbar-profile">
                        <img src={avaterPic} alt="" />
                        <ul className='nav-profile-dropdown'>
                            <Link to="/myorders"><li><img src={avaterPic} alt="" /><p>Orders</p></li></Link>
                            <hr />
                            <li onClick={logout}><img src={avaterPic} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                }
                
            </div>
        </nav>
    );
};

export default Navbar;