import React, { useEffect, useState } from 'react';
import './Home.css';
import wedding1 from '../../Images/wedding-3 (1).jpg';
import wedding2 from '../../Images/angagement.jpg';
import wedding3 from '../../Images/family.jpeg';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='bannerSection'>
                <h1 className='text-white fst-italic textPosition text-center' >Ready to Create some Magic!!</h1>
            </div>
            <h2 className='my-5 text-center'>WEDDING & PORTRAIT PHOTOGRAPHY</h2>
            <div className='servicesStyle mx-auto'>
            {
                services.map(service=>
                <Service service={service}
                key={service.id}
                ></Service>)
            }
            </div>
            
            <div>
                <div>
                    <img src="wedding" alt="" />
                    <h2>{}</h2>
                </div>
            </div>
            <div className='serviceSection'>
                
                <div className='weddingSection my-5'>
                    <div>
                        <img src={wedding1} alt="" />
                    </div>
                    <div className='weddingService text-white p-4  '>
                        <h2>WEDDINGS</h2>
                        <p>
                        INTERESTED IN BOOKING A WEDDING<br></br>
                        SESSION? View what's available here.
                        </p>
                        <p className='text-white fw-bold'>Go To our Services</p>
                    </div>
                </div>

                <div className='weddingReverseSection my-5'>
                    <div className='weddingReversService text-white p-4  '>
                        <h2>ENGAGEMENT</h2>
                        <p>
                        INTERESTED IN BOOKING A WEDDING<br></br>
                        SESSION? View what's available here.
                        </p>
                        <p className='text-white fw-bold'>Go To our Services</p>
                    </div>
                    <div>
                        <img src={wedding2} alt="" />
                    </div>
                    
                </div>
                
                <div className='weddingSection'>
                    <div>
                        <img src={wedding3} alt="" />
                    </div>
                    <div className='weddingService text-white p-4 mt-5 '>
                        <h2>FAMILY & KIDS</h2>
                        <p>
                        INTERESTED IN BOOKING A WEDDING<br></br>
                        SESSION? View what's available here.
                        </p>
                        <p className='text-white fw-bold'>Go To our Services</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
