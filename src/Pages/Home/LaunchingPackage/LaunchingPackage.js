import React from 'react';

const LaunchingPackage = () => {
    return (
        <div className='my-5 container border border-2 border-secondary p-4 p-md-5 w-75 bg-secondary rounded-3'>
            <h2 className='fw-bolder mb-3 mb-md-5' style={{ color: 'plum' }}>New Package is Launching ...</h2>
            <p className='text-white'>Wedding-Portrait is coming with an exciting package and so many surprises. Booking for the new package will start from the last week of the current month. There will be a special section for covering the bride and groom particularly, with time duration.</p>
            <p className='text-white mt-1'> Keep updated on the upcoming package.</p>
            <div>
                <p className='text-white'>Join with Wedding-Portrait</p>
                <a style={{ color: 'skyblue' }} className='text-decoration-none fs-5' href="/">Facebook</a>
                <a style={{ color: 'skyblue' }} className='text-decoration-none fs-5 d-block' href="/">Instagram</a>
                <a style={{ color: 'skyblue' }} className='text-decoration-none fs-5' href="/">Twitter</a>
            </div>
        </div>
    );
};

export default LaunchingPackage;