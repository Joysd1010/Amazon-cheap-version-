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
        },[]);
        useEffect(()=>{
            const stroedCart= getShoppingCart()
            const SavedCart=[];
            for(const id in stroedCart){
                let addedProduct=products.find (product=>product.id===id);
                const quantity=stroedCart[id];
                if(addedProduct){
                    const quantity = stroedCart[id];
                    addedProduct.quantity = quantity;
                    SavedCart.push(addedProduct);
                    }

            }
            setCart(SavedCart);
        },[products]);
        const handleCart = (product) => {
            const { img, name, seller, price, ratings, quantity } = product;
            const newCart=[...cart,product];
            
            // const exist=cart.find(pd=>product.id );
            // if (!exist){
            //     product.quantity=1;
            //     newCart=[...cart,product]
            // }
// else{
//     exist.quantity=exist.quantity+1;
// const remaining =cart.filter(pd.id!==product.id)
// newCart=[...remaining, exist]
// }
// 
//             
            setCart(newCart);
            addToDb(product.id);
          };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart  cart={cart}></Cart>
            </div>
        </div>
    );
};
import './Shop.css'
import { addToDb, getShoppingCart } from '../utilities/fakedb';
export default Shop;