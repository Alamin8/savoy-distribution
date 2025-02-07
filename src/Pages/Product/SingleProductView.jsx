import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import axios  from 'axios';

const SingleProductView = () => {
    
    const params = useParams()
    const paramsID=(params.id)
    const [product, setProduct]=useState([]);
     const { url, token}=useContext(ShopContext)


     const fetchSingleProduct= async(id)=>{
        const response = await axios.get(url+`/api/products/list/${id}`)
         if(!response){
            console.log("Product not get")
         }
         else{
            setProduct(response.data.data);
         }
     }
    useEffect(()=>{
        if(paramsID){
            fetchSingleProduct(paramsID)
        }
    },[paramsID])



    return (
        <div className='product-view'>
            <div className="product-view-top">
                <div className="product-view-top-left">
                    <h1>{product.name}</h1>
                    <div className="view-important">
                        {
                            token? <h3>${product.price} USD</h3>:''
                        }
                        <h2>Stock Status: {`${product.stock == null|| product.stock<=0 ? "Out of stock": product.stock}`}</h2>
                    </div>
                    <div className="product-view-addtocart">
                        <p>Add to cart</p>
                        <button className='remove'>-</button>
                        <span>{0}</span>
                        <button className='add'>+</button>
                    </div>
                    <div className="product-view-info">
                        <p>UPC:</p>
                        <span>{product.UPC}</span>
                    </div>
                    <div className="product-view-info">
                        <p>Case Size:</p>
                        <span>{product.case_size}</span>
                    </div>
                    <div className="product-view-info">
                        <p>MOC:</p>
                        <span>{product.MOC}</span>
                    </div>
                    <div className="short-disc">
                        <div className="left">
                            <p>Brand</p>
                            <p>Item Weight</p>
                            <p>Package Weight</p>
                            <p>Unit Count</p>
                        </div>
                        <div className="right">
                            <span>{product.brand}</span>
                            <span>{product.item_weight}</span>
                            <span>{product.package_weight}</span>
                            <span>{product.unit_count}</span>
                        </div>
                    </div>
                    
                    <div className="product-discription">
                        <span className="hrspan">Discription:</span>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="product-view-top-right">
                    <img src={url+'/images/'+product.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SingleProductView;