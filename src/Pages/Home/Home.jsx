import React from 'react';
import Banners from '../Banners/Banners';
import Service from '../Service/Service';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <div className='lg:w-[80%] w-[90%] m-auto'>
            <Service></Service>
            <Gallery></Gallery>
            </div>
        </div>
    );
};

export default Home;