import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import axios from 'axios'

const Login = () => {

    const [data, setData]=useState({
        email:"",
        password:""
    })
    const {url, setToken} = useContext(ShopContext)
    const navigate = useNavigate();

    const onChangeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }

    const onLogin = async(event)=>{
        event.preventDefault();
        const response = await axios.post(`${url}/api/user/login`, data);
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token);
            navigate('/');
        }else{
            alert(response.data.message);
        }

    }
    return (
        <div className='login'>
            <form onSubmit={onLogin} className="login-container">
                <h2 className="login-title">User Sign In</h2>
                <div className="login-input-content">
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" className="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" className="password" placeholder='Password' required />
                </div>
                <button type='submit' className='login-btn'>Sign In</button>
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