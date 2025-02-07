import React, { useContext, useEffect, useState } from 'react';
import './Orders.css'
import {ShopContext} from '../../context/ShopContext'
import axios from 'axios';

const MyOrders = () => {
    const {url, token} = useContext(ShopContext);
    const [data, setData] = useState([]);

    const fetchOrders = async ()=>{
        const response = await axios.post(url+"/api/order/userorders",{}, {headers:{token}});
        setData(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="my-order-container">
                {
                    data.map((order, index)=>{
                        return(<>
                            <div key={index} className="my-orders-order">
                            <i className="fa-solid fa-gift"></i>
                            <p>
                                {
                                    order.items.map((item, index)=>{
                                        if(index ===order.items.length - 1){
                                            return (
                                                <>
                                                 <p>&#x25cf;  {`${item.name}`}<span> X{`${item.quantity}`}</span></p>
                                                </>
                                            )
                                        }else{
                                            return (
                                                <>
                                                 <p>&#x25cf;  {`${item.name}`}<span> X{`${item.quantity}`}</span></p> <hr />
                                                </>
                                            )
                                        }
                                    })
                                }
                            </p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;  </span><b>{order.status}</b></p>
                            <button>Track Order</button>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyOrders;