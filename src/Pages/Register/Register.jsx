import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register'>
            <form className="register-container">
                <h2 className="register-title">Become a Customer</h2>
                <div className="register-input-content">
                    <input type="text" className="username" placeholder='User name' required />
                    <input type="email" className="email" placeholder='Your email' required />
                    <input type="password" className="password" placeholder='Password' required />
                </div>
                <button className='register-btn'>Sign Up</button>
                <div className="register-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use and privacy policy</p>
                </div>
                <p className='convert-register-signin'>Already have an account? <Link className='login-register-change' to='/login'>Sign In</Link></p>
            </form>
        </div>
    );
};

export default Register;