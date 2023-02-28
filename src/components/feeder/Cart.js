import React from 'react';
import "./cart.css";

function Cart({item, index}) {
    return (
        <div className='cart' key={index}>
            <div className='title'>{item.title}</div>
            <div className='text'>{item.body}</div>
        </div>
    );
}

export default Cart;