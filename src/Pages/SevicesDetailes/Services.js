import React, { useEffect, useState } from 'react';
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
            <div className='servicesStyle mx-auto'>
            {
                services.map(service=><Service service={service} key={service.id}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;