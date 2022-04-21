import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation} from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    if(loading){
        return <Loading></Loading>;
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const from = location.state?.from?.pathname || "/"; 

    if(user){
        navigate(from, {replace: true});
    }
    return (
        <div>
            {errorElement}
            <div className=''>
                <button onClick={()=>signInWithGoogle()} className="btn btn-primary w-50 d-block mx-auto my-2">Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;