import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {service, price, picture,description} = props.service;
    return (
        <div className='serviceItem'>
            <div>
                <img src={picture} alt="" />
            </div>
            <h2 className='mt-3'>{service}</h2>
            <h5>Price: {price}</h5>
            <p className='descriptionStyle'>{description}</p>
            <button className='btn btn-primary w-100 fw-bold'><Link to="/checkout" className='text-white text-decoration-none'>Checkout</Link></button>
        </div>
    );
};

export default Service;