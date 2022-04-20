import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-50 mx-auto loginStyle'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
                <Button variant="primary" type="submit" className='w-100 mt-3 py-3'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;