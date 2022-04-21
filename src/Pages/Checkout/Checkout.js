
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Checkout.css';

const Checkout = () => {

    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress]= useState('');
    const [phone, setPhone] = useState('');
    const handleName= event =>{
        setName(event.target.value);
    }
    const handleEmail= event => {
        setEmail(event.target.value);
    }
    const handleAddress = event =>{
        setAddress(event.target.value)
    }
    const handlePhone = event =>{
        setPhone(event.target.value)
    }
     
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(name && email && address && phone){
            alert('Thank You for booking');
            setAddress('');
            setName('');
            setEmail('');
            setPhone('');
        }
    }
    return (
        <div className='checkoutStyle'>

           
            <h2 className='checkoutText'>Please Give your Address</h2>
            <Form onSubmit={handleSubmit}>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email"  required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control onBlur={handleAddress} type="text" placeholder="Address" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone No:</Form.Label>
                    <Form.Control onBlur={handlePhone} type="text" placeholder="Your Phone No:" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;