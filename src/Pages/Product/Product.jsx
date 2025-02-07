import React, { useContext, useEffect, useState } from 'react';
import './Product.css'
import { ShopContext } from '../../context/ShopContext';
import FoodItem from '../Home/FoodItem';
import axios from 'axios';

const Product = () => {

    const {url}=useContext(ShopContext)
    const [products, setProducts]= useState([]);
    const [search, setSearch]=useState('');
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)
    const [brand, setBrand]=useState('')
    const [pageItemLimit, setPageItemLimit]=useState(20)

    const handleCategory = (e) =>{
        setCategory(e.target.value)
        setSearch('') 
        setBrand('')
    }
    const handleBrand = (e) =>{
        setBrand(e.target.value)
        setSearch('') 
        setCategory('')
    }



    useEffect(() =>{
        if(search!==''){
            const getProducts = async () => {

                const res = await axios.get(url+`/api/products/search?q=${search}`)
                setProducts(res.data.data)
                setResult(res.data.result)
            }
            getProducts()
        }else{
            const getProducts = async () => {
                const res = await axios.get(url+`/api/products/list?limit=${pageItemLimit}&category=${category}&brand=${brand}`)
                setProducts(res.data.data)
                setResult(res.data.result)
            }
            getProducts()
        }
        
    },[ category, sort, search, page])


    return (
        <div className='products'>
            <div className="products-search">
                <h1 className='product-heading'>Products</h1>
                <form className="search-box">
                    <input type="text" value={search} onChange={e=> setSearch(e.target.value)} placeholder="Search here"/>
                    <select name='category' value={category} onChange={handleCategory}>
                        <option>Category</option>
                        <option value='Food'>Food</option>
                        <option value='Drinks'>Drinks</option>
                    </select>
                    <select name='brand' value={brand} onChange={handleBrand}>
                            <option >Select Brand</option>
                            <option value='Molino_Pasini'>Molino Pasini</option>
                            <option value='Goya_Foods'>Goya Foods</option>
                            <option value='Garofalo'>Garofalo</option>
                            <option value='MUTTI'>MUTTI</option>
                            <option value='Torani'>Torani</option>
                    </select>
                    <div className="sort-div">
                    <p>Search result showing: <span>{result}</span></p>
                    </div>
                </form>
            </div>
            <div className="product-display">
                <div className="product-display-list">
                    {
                      result !=0?  products.map((item, index)=>{
                            return(<>
                                <FoodItem key={index} item={item} />
                            </>)
                        }):<>No Product Found</>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;