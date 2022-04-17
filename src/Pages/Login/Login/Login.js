import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/');
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h1 className='text-center form-title'>Login</h1>
            <Form onClick={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='fs-5' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='fs-5' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto text-white border-0 m-3 py-2 submit-btn' type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>
            <p>New to Wedding-Portrait? <Link className='text-decoration-none' to='/registration'>Please Register</Link></p>
        </div >
    );
};

export default Login;