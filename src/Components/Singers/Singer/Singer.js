import React from 'react';
import './Singer.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';

const Singer = (props) => {
    // font awesome icon here
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // destructuring props
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
                className="button">{element} Add To Cart</button>

            <p className='icon'>
                <span><SocialIcon url="https://facebook.com/in/jaketrent" /></span>
                <span><SocialIcon url="https://linkedin.com/in/jaketrent" /></span>
                <span><SocialIcon url="https://twitter.com/in/jaketrent" /></span>
            </p>

        </div>
    );
};

export default Singer;