import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const location = useLocation();
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

    if(loading){
        return <Loading></Loading>;
    }
    const from = location.state?.from?.pathname || "/"; 

    if(user){
        navigate(from, {replace: true});
    }

    return (
        <div className='w-50 mx-auto loginStyle'>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
                </Form.Group>
                
                
                <p className='text-danger fw-bold'>{error}</p>
                {/* {
                    loading && <p>Loading ....</p>
                } */}

                <Button variant="primary" type="submit" className='w-100 mt-3 py-2 fw-bold'>
                    Submit
                </Button>
                <div className='mt-3'>
                    <p>Already have an account? <span ><Link to='/login' className='text-decoration-none fw-bold'>Login Now.</Link></span></p>
                </div>
            </Form>
            <div className='d-flex align-items-center'>
                <div className=' w-100 bg-info pt-1'></div>
                <div className='px-2 pt-2'><p>or</p></div>
                <div className=' w-100 bg-info pt-1'></div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;