import React from 'react';
import Banner from '../Banner/Banner';
import LaunchingPackage from '../LaunchingPackage/LaunchingPackage';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LaunchingPackage></LaunchingPackage>
        </div>
    );
};

export default Home;