import React, { useEffect, useState } from 'react';
import Checkout from '../Checkout/Checkout';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    return (
        <div>
            <div className='servicesText'>
                <h2>WEDDING & PORTRAIT PHOTOGRAPHER</h2>
            </div>
            <div className='servicesStyle mx-auto mb-5'>
            {
                services.map(service=><Service 
                    serviceData={service} 
                    key={service.id}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;