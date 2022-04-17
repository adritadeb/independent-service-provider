import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/');
    }

    return (
        <div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center'>
                <div className='border border-1 w-50'></div>
                <span className='mx-3'>or</span>
                <div className='border border-1 w-50'></div>
            </div>
            <div>
                <button onClick={handleGoogleSignIn} className='w-50 d-block border-0 mx-auto my-3 py-2 text-white rounded-2 d-flex align-items-center justify-content-center submit-btn'>
                    <img src={google} alt="" />
                    <span className='ms-1'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;