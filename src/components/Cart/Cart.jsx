import React from 'react';
import './cart.css'
const Cart = (props) => {
    const {cart}=props;
    let quantity=0;
    let total=0;
    let Shipping=0;
    for(const product of cart){
        if(product.quantity===0)
        {
            product.quantity=1;
        }
        total=product.price*product.quantity+total;
        Shipping=Shipping+product.shipping;
        quantity=quantity+product.quantity;
    
    }   
    console.log(quantity)
     let tax=total*7/100;

    
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
                <p>selected items : {quantity}</p>
                <p>Total Price : ${total}</p>
                <p>Total Shipping : ${Shipping} </p>
                <p>Tax : ${tax}</p>
                <h4>Grand Total: ${(total+tax+Shipping).toFixed(2)}</h4>
        </div>
    );
};

export default Cart;