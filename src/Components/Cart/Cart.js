import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    let total = 0;
    let newNAME = []
    for (const singer of cart) {
        total = total + singer.rate
        newNAME.push(singer.name)
    }
    return (
        <div>
            <h1>Singers Added : {cart.length}</h1>
            <h2>Total Cost : ${total}</h2>
            <p>{newNAME}</p>
        </div>
    );
};

export default Cart;