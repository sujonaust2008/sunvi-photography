import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        
        <div className='blogsSection'>
            <div className='authenticationStyle'>
                <h2 className=' py-2'>1. Difference Between Authentication and Authorization</h2>
            </div>
            
            <div className='differBlog'>
                <div className='border border-1 border-primary rounded p-3'>
                    <p>Authentication verifies who the user is.</p>
                    <p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                    <p>Authentication is the first step of a good identity and access management process.</p>
                    <p>Authentication is visible to and partially changeable by the user.</p>
                </div>
                <div className='border border-1 border-primary rounded p-3'>
                    <p>Authorization determines what resources a user can access.</p>
                    <p>Authorization works through settings that are implemented and maintained by the organization.</p>
                    <p>Authorization always takes place after authentication.</p>
                    <p>Authorization is not visible to or changeable by the user.</p>
                </div>
            </div>
            <div className='authenticationStyle'>
                <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='my-4'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Other option for authentication <span className='fw-bold '>Parse, Back4app, Kinvey, Backendless, Kuzzle etc</span> etc.</p>
                <h2>3. What other services does firebase provide other than authentication</h2>
                <p>Firebase provides lot of services other than authentication such like : <span className='fw-bold'>A/B Testing, Analytics, App Distribution, App Indexing, Authentication (except Phone Auth) Cloud Messaging (FCM), Crashlytics, Dynamic Links, In-App Messaging, Performance Monitoring, Predictions, and Remote Config</span>.</p>
            </div>
        </div>
    );
};

export default Blogs;