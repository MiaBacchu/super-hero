import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Singer from './Singer/Singer';
import './Singers.css'

const Singers = () => {
    const [singers, setSingers] = useState([])
    const [cart, setCarts] = useState([])
    useEffect(() => {
        fetch('./Singer.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])
    const handleButton = singer => {
        const newCart = [...cart, singer]
        setCarts(newCart)
    }
    return (
        <div className='singers-cart'>
            <div className='singers'>{singers.map(singer => <Singer
                key={singer.name}
                singer={singer}
                handleButton={handleButton}
            ></Singer>)}</div>
            <div><Cart cart={cart}></Cart></div>
        </div>
    );
};

export default Singers;