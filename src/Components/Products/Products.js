import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import './Products.css';
import Shop from './Shop/Shop';

const Products = () => {
    const [products, setProducsts] = useState([])
    const [cart, setCart] = useState([])
    const [searchProduct, setSearchProduct] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducsts(data)
                setSearchProduct(data)
            });
    }, []);
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleSearch = (even) => {
        const searchText = even.target.value;
        const getResult = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(getResult.length);
        setSearchProduct(getResult);
    }

    return (
        <div>
            <div className="search-filed">
                <input className="input-filed" onChange={handleSearch} type="search" placeholder="Search Your Products" />
            </div>
            <div className="product-container">
                <div className="shop-container">
                    {
                        searchProduct.map(product => <Shop product={product} key={product.key} handleAddToCart={handleAddToCart}></Shop>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;