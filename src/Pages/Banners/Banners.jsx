import React from 'react';
import './Banner.css'
const Banners = () => {
    return (
        <div className='banner-added'>
            <div className='flex justify-center items-center lg:h-[600px] h-[350px]'>
                <h1 className='lg:text-8xl md:text-2xl text-3xl text-center text-white font-semibold'>The Best <span  className='text-orange-500'>Social Events</span> <br/>
                In the world</h1>
            </div>
        </div>
    );
};

export default Banners;