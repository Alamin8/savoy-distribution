import React, { useContext, useEffect } from 'react';
import "./Orders.css"
import { useNavigate, useSearchParams } from 'react-router-dom';
import {ShopContext} from '../../context/ShopContext'
import axios from 'axios';

const OrderVerify = () => {
    const  {url} = useContext(ShopContext);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const success= searchParams.get("success");
    const orderId= searchParams.get("orderId");

    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verify/",{success, orderId});

        if(response.data.success){
            navigate("/myorders")
        }
        else{
            navigate("/")
        }

    }

    useEffect(()=>{
        verifyPayment()
    },[])

    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    );
};

export default OrderVerify;