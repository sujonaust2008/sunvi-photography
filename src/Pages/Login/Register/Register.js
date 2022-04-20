import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate= useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');

    const handleName= event =>{
        setName(event.target.value);
    }
    const handleEmail= event => {
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    

    const handleCreateUser = event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);

    }
    // if(user){
    //      return navigate('/home');
    // }
    
    return (
        <div className='w-50 mx-auto loginStyle'>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-flex align-items-center'>
                    <div className=' w-100 bg-info pt-1'></div>
                    <div className='px-2 pt-2'><p>or</p></div>
                    <div className=' w-100 bg-info pt-1'></div>
                </div>
                <div className='mx-auto w-50'>
                    <button className='btn btn-info w-100 my-2'>Google </button>
                </div>
                <div className='mt-3'>
                    <p>Already have an account? <span ><Link to='/login' className='text-decoration-none fw-bold'>Login Now.</Link></span></p>
                </div>
                <p className='text-danger fw-bold'>{error}</p>

                <Button variant="primary" type="submit" className='w-100 mt-3 py-3'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;