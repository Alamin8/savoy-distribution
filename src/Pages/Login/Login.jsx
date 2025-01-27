import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <form className="login-container">
                <h2 className="login-title">User Sign In</h2>
                <div className="login-input-content">
                    <input type="email" className="email" placeholder='Your email' required />
                    <input type="password" className="password" placeholder='Password' required />
                </div>
                <button className='login-btn'>Sign In</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use and privacy policy</p>
                </div>
                <p className='convert-login-signin'>Become a customer? <Link to='/register' className='login-register-change'>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;