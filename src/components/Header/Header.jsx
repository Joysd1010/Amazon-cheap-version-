import React from 'react';
import './Header.css';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} />
            <div className='link-container'>
            <a href="/shop">Shop </a>
            <a href="/order">Order </a>
            <a href="/cart">Cart</a>
            <a href="/login">login </a>
            </div>
        </div>
    );
};

export default Header;