import React from 'react';
import './Singer.css'

const Singer = (props) => {
    // console.log(props.handleButton)
    const { img, name, age, country, gender, rate } = props.singer
    return (
        <div className='singer-container'>
            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <h4>Age : {age}</h4>
            <h4>Country : {country}</h4>
            <h4>Gender : {gender}</h4>
            <h3>Rate : ${rate}</h3>
            <button
                onClick={() => props.handleButton(props.singer)}
                className="button">Add To Cart</button>

        </div>
    );
};

export default Singer;