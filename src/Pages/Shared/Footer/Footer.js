import React from 'react';
import copyright from '../../../images/copyright.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='d-flex align-items-center justify-content-center mt-5 py-4 bg-dark text-white'>
            <span>copyright</span>
            <img className='mx-1 text-light' src={copyright} alt="" />
            {year}
        </footer>
    );
};

export default Footer;