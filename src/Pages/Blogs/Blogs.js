import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-info my-5'>QnA Section</h1>
            <div>
                <h3>1. What are the differences between authorization and authentication?</h3>
                <p>-- The differences between authorization and authentication are- authentication is the process of verifying someone's actions, and on the other hand, authorization is the process of affirming specific resources which the user can access. Authentication gives assurance of someone's true identity. The authorization permits the user to access the data that they need. Authorization always occurs after authentication.</p>
            </div>
            <div>
                <h3>2. Why are you using firebase? What other option do you have to implement authentication?</h3>
                <p>-- The Firebase Realtime Database uses synchronization. In firebase, the connected device receives the update within milliseconds when data changes, and also firebase apps remain responsive offline. The client gets all the changes when the connection restores. It makes file storing easy and is much faster than other databases. That's why I am using firebase.
                    The other options I have to implement authentication are- Back4app, Parse, AWS Amplify, Backendless, Kuzzle, Supabase, Flutter, Hasura, Nhost, RxDB, and so on.</p>
            </div>
        </div>
    );
};

export default Blogs;