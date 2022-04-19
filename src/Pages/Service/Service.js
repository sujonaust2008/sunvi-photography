import React from 'react';
import './Service.css';

const Service = (props) => {
    const {service, price, picture} = props.service;
    return (
        <div className='serviceItem'>
            <div>
                <img src={picture} alt="" />
            </div>
            <h2 className='mt-3'>{service}</h2>
            <h5>Price: {price}</h5>
            <p>lorem ipsum</p>
            <button className='btn btn-primary'>Checkout</button>
        </div>
    );
};

export default Service;