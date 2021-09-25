import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="" />
            <div className="menu-container">
                <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/Manage-inventory">Manage Inventory Here</a>
            </div>
        </div>
    );
};

export default Header;