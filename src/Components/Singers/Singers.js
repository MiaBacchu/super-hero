import React, { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Singer from './Singer/Singer';
import './Singers.css'

const Singers = () => {
    // handle usestate & useeffect here
    const [singers, setSingers] = useState([])
    const [cart, setCarts] = useState([])
    useEffect(() => {
        fetch('./Singer.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])
    // handle the singers button
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