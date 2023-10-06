import React from 'react';
import Banners from '../Banners/Banners';
import Service from '../Service/Service';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Service></Service>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;