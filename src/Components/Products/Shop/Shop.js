import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faStarOfDavid } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Shop.css'
import Rating from 'react-rating';

const Shop = (props) => {
    // console.log(props.product, props.handleAddToCart);
    const { name, img, price, stock, seller } = props.product;
    const emptyStar = <FontAwesomeIcon icon={faStarOfDavid} />
    const fullStar = <FontAwesomeIcon icon={faStar} />
    return (
        <div className="shop-container">
            <div className="product">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="product-content">
                    <h4>{name}</h4>
                    <p>by: {seller}</p>
                    <p>${price}</p>

                    <Rating className="star-icon"
                        emptySymbol={emptyStar}
                        fullSymbol={fullStar}
                        fractions={2}
                    />
                    <p>only {stock} left in stock - order soon</p>
                    <button className="regular-btn" onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                </div>
            </div>
        </div>
    );
};



export default Shop;