import React from 'react';
import './cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let Shipping=0;
    for(const product of cart){
        total=product.price+total;
        Shipping=Shipping+product.shipping
    
    }   
     let tax=total*7/100;

    console.log(cart)
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
                <p>selected items : {cart.length}</p>
                <p>Total Price : ${total}</p>
                <p>Total Shipping : ${Shipping} </p>
                <p>Tax : ${tax}</p>
                <h4>Grand Total: ${(total+tax+Shipping).toFixed(2)}</h4>
        </div>
    );
};

export default Cart;