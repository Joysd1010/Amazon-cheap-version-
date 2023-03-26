import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,price,ratings,quantity}=props.product
        console.log(img)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <h4>Manufacturer: {seller}</h4>
            <h4>Rating: {ratings} Stars</h4>
            <div>
                <button className="addbtn">Add to Cart </button>                
            </div>
        </div>
        
    );
};
import './Product.css'
export default Product;