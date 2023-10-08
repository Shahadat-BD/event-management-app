import React from 'react';
import Banners from '../Banners/Banners';
import Service from '../Service/Service';
import OurTeam from '../OurTeam/OurTeam';
import ChooseUs from '../ChooseUs/ChooseUs';


const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <div className='lg:w-[80%] w-[90%] m-auto'>
            <ChooseUs></ChooseUs>
            <Service></Service>
            <OurTeam></OurTeam>
            </div>
        </div>
    );
};

export default Home;