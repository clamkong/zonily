import React from 'react';

const CartItem = ({name, price, author}) => (
    <div className="cart-item">
        <div className="cart-item--image">
            <img src="" alt="playbookImage"/>
        </div>
        <div className="cart-item--info">
            <h4>{name}</h4>
            By John Smith
        </div>
        <div className="cart-item--actions">
            <a href="#">Remove</a>
            <a href="#">Save for Later</a>
            <a href="#">Move to Wishlist</a>
        </div>
        <div className="cart-item--price">
            <h4>$500</h4>
        </div>
    </div>
);

export default CartItem;

