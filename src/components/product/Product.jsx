import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { img, name, seller, price, ratings, quantity } = props.product;
  const handleCart = props.handleCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>Price: ${price}</h4>
      <h4>Manufacturer: {seller}</h4>
      <h4>Rating: {ratings} Stars</h4>
      <div>
        <button className="addbtn" onClick={() => handleCart(props.product)}>
          Add to Cart  <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};
import "./Product.css";
export default Product;
