import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    // total & adding singer
    let total = 0;
    let newNAME = []
    for (const singer of cart) {
        total = total + singer.rate
        newNAME.push(singer)
    }
    return (
        <div>
            <h1>Singers Added : {cart.length}</h1>
            <h2>Total Cost : ${total}</h2>
            <div>
                {
                    newNAME.map(singer => <p className='added-singer'> <img src={singer.img} alt="" width="100" height="100"></img><br />
                        {singer.name}
                    </p>)
                }
            </div>
        </div>
    );
};

export default Cart;