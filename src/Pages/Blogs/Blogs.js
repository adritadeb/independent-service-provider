import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-info my-5'>QnA Section</h1>
            <div>
                <h3>1. What are the differences between authorization and authentication?</h3>
                <p>-- The differences between authorization and authentication are- authentication is the process of verifying someone's actions, and on the other hand, authorization is the process of affirming specific resources which the user can access. Authentication gives assurance of someone's true identity. The authorization permits the user to access the data that they need. Authorization always occurs after authentication.</p>
            </div>
        </div>
    );
};

export default Blogs;