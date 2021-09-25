import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log('cart work', props.cart.length);
    const { cart } = props;
    let item = 0;
    for (const product of cart) {
        item = item + product.price;
    }
    let charge = 30;
    if (!item) {
        charge = 0;
    }
    const total = item + charge;
    const tax = total * 0.10;
    const grandTotal = charge + total + tax;
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Order Summary</h2>
                <p>Item ordered : {props.cart.length}</p>
            </div>
            <div className="cart-body">
                <p>Items: $ {item.toFixed(2)}</p>
                <p>Shipping & Handling:	$ {charge}</p>
                <p>Total before tax: $ {total.toFixed(2)}</p>
                <p>Estimated Tax: $ {tax.toFixed(2)}</p>
                <h3>Order Total: $ {grandTotal.toFixed(2)}</h3>
                <div className="btn-container">
                    <button className="order-btn">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;