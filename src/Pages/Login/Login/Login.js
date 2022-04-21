import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const handleEmail= event => {
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value)
    }
    const handleSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    

    if(loading || sending){
        return <Loading></Loading>;
    }

    const from = location.state?.from?.pathname || "/"; 
    if(user){
        navigate(from, {replace: true});
    }
    return (
        <div className='w-50 mx-auto loginStyle'>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur = {handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                
                
                <p className='text-danger fw-bold fs-4'>{error?.message}</p>
                {/* {
                    loading && <p>Loading ....</p>
                } */}
                <Button variant="primary" type="submit" className='w-100 mt-3 py-2 fw-bold'>
                    Submit
                </Button>
                <div className='mt-3 d-flex align-items-center justify-content-start'>
                    <p className='pt-3'>Forget Password?</p>
                    <Button variant="link" 
                    onClick={async () => {
                        if(email){
                            await sendPasswordResetEmail(email);
                        toast('Sent email');
                        }else{
                            toast('Please Enter your Email address !')
                        }
                      }}
                    className='text-decoration-none fw-bold text-warning'>Reset Now.</Button>
                </div>

                <div className='mt-3'>
                    <p>Need to create a account ? <span ><Link to='/register' className='text-decoration-none fw-bold'>Register Now.</Link></span></p>
                </div>
            </Form>
            <div className='d-flex align-items-center'>
                <div className=' w-100 bg-info pt-1'></div>
                <div className='px-2 pt-2'><p>or</p></div>
                <div className=' w-100 bg-info pt-1'></div>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
                
        </div>
    );
};

export default Login;