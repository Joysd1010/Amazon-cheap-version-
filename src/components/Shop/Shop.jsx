import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
const Shop = () => {
    const[products,setProducts]=useState(
        []);
        useEffect(()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res=>res.json())
            .then (data=> setProducts(data))
        },[])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};
import './Shop.css'
export default Shop;