import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const[products,setProducts]=useState(
        []);
    const [cart,setCart]=useState([]);
        useEffect(()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res=>res.json())
            .then (data=> setProducts(data))
        },[])
        const handleCart = (product) => {
            const { img, name, seller, price, ratings, quantity } = product;
            const newCart=[...cart,product];
            setCart(newCart);
          };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
import './Shop.css'
export default Shop;