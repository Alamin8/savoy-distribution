import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { ShopContext } from '../../context/ShopContext';
import axios from 'axios';


const Register = () => {
    const [data, setData]=useState({
        name:"",
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

    const onRegister = async(event)=>{
        event.preventDefault();
        const response = await axios.post(`${url}/api/user/register`, data);
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            navigate('/');
        }else{
            alert(response.data.message);
        }

    }


    return (
        <div className='register'>
            <form onSubmit={onRegister} className="register-container">
                <h2 className="register-title">Become a Customer</h2>
                <div className="register-input-content">
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" className="username" placeholder='User name' required />
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" className="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" className="password" placeholder='Password' required />
                </div>
                <button type='submit' className='register-btn'>Sign Up</button>
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