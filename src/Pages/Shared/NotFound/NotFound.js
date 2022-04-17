import React from 'react';
import notFound from '../../../images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center my-4 not-found'>
            <h4 className='fw-normal fs-3'>Sorry, the page you are looking for is not found</h4>
            <h1 className='fs-1 text-secondary'>404</h1>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;